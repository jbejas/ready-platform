import { getConnectionsV2 } from "./../graphql/queries";
// Amplify
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "@graphql/mutations";
import {
  GetConnectionsV2QueryVariables,
  GetConnectionsV2Query,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateLikeMutation,
  UpdateLikeInput,
} from "@api/index";

import { SearchLikesQuery } from "@gcq/index";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isToday from "dayjs/plugin/isToday";

// Redux Store
import { setUser } from "@store/auth/authSlice";

// Utils
import { getGeneralAppConfig } from "@utils/config";

// Utils
import { updateUser } from "@utils/amplifyUtils";

// Dayjs extension libraries
dayjs.extend(utc);
dayjs.extend(isToday);

// API
const API = generateClient();

export const ackUnmatch = async (likeId: string) => {
  console.log("ackUnmatch likeId", likeId);

  const likeDetails: UpdateLikeInput = {
    id: likeId,
    isUnmatchAcked: true,
  };

  const updatedLike = await API.graphql<GraphQLQuery<UpdateLikeMutation>>({
    query: mutations.updateLike,
    variables: { input: likeDetails },
  });
};

export const getUnmatchesById = async (userId: string) => {
  console.log("getUnmatchesById User ID", userId);
  // Search unmatched entries
  const {
    data: {
      searchLikes: { items },
    },
  } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
    query: customQueries.searchLikes,
    variables: {
      limit: 50,
      filter: {
        unmatchedUserId: {
          eq: userId,
        },
        isUnmatchAcked: { eq: false },
      },
    },
  });
  console.log("getUnmatchesById Unmatches", items);
  return items;
};

export const getUserById = async (userId: string) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<GetUserQuery>>({
      query: customQueries.getUser,
      variables: {
        id: userId,
      },
    });
    return JSON.stringify(data.getUser);
  } catch (error) {
    console.error("Error getUserById:", error);
  }
};

export const getUserLikes = async (userId) => {
  // Search Likes to generate channels
  const {
    data: {
      searchLikes: { items: existingLikes },
    },
  } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
    query: customQueries.searchLikes,
    variables: {
      limit: 1000,
      filter: {
        or: [{ likerId: { eq: userId } }, { likedId: { eq: userId } }],
        active: { eq: true },
        isUnmatched: { eq: false },
        isReported: { eq: false },
        amILikedBack: { eq: true },
      },
    },
  });
  return existingLikes;
};

export const getExistingLiked = async (userId) => {
  // Search Likes to generate channels
  const {
    data: {
      searchLikes: { items: existingLiked },
    },
  } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
    query: customQueries.searchLikes,
    variables: {
      limit: 10000,
      filter: {
        likedId: {
          eq: userId,
        },
      },
    },
  });
  return existingLiked;
};

export const getExistingLikes = async (userId) => {
  // Search Likes to generate channels
  const {
    data: {
      searchLikes: { items: existingLiked },
    },
  } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
    query: customQueries.searchLikes,
    variables: {
      limit: 10000,
      filter: {
        likerId: {
          eq: userId,
        },
      },
    },
  });
  return existingLiked;
};

export const getConnections = async (userId, dispatch) => {
  try {
    const appConfig = await getGeneralAppConfig();
    const distanceFF = Number(
      appConfig.find((config) => config.contentType === "distance-ff").value,
    );

    const userData: GetUserQueryVariables = {
      id: userId,
    };
    const {
      data: { getUser },
    } = await API.graphql<GraphQLQuery<GetUserQuery>>({
      query: customQueries.getUser,
      variables: userData,
    });
    console.log("Get user", getUser);

    const userExistingConnections = JSON.parse(getUser.userDailyConnections);

    const wereConnectionsUpdatedToday = dayjs(
      getUser.connectionsUpdatedOn,
    ).isToday();

    let connectionsData;
    let parsedConnectionsData;

    if (wereConnectionsUpdatedToday && userExistingConnections.length > 0) {
      // If connections were updated today. Pulling connections from stored data.
      const parsedConnections = [];
      await Promise.all(
        userExistingConnections.map(async (connection) => {
          const connectionData = await getUserById(connection);
          const parseConnectionData = JSON.parse(connectionData);
          parsedConnections.push(parseConnectionData);
        }),
      );
      console.log("loadedConnections", parsedConnections);
      connectionsData = parsedConnections.sort((a, b) =>
        a.firstName.localeCompare(b.firstName),
      );
    } else {
      // If connections were NOT updated today pull a new set from cloud.
      // Fetch all connections
      const connectionsDetails: GetConnectionsV2QueryVariables = {
        myId: userId,
        latitude: getUser.locationLatLong.latitude,
        longitude: getUser.locationLatLong.longitude,
        range: distanceFF === 1 ? getUser.distancePreference : 10000000, // Set this value based on Distance FF.
        agePreferenceFrom: getUser.agePreferenceFrom,
        agePreferenceTo: getUser.agePreferenceTo,
        genderPreferences: getUser.genderPreferences,
        gender: getUser.gender,
      };

      console.log("connectionsDetails", connectionsDetails);

      const {
        data: { getConnectionsV2: connections },
      } = await API.graphql<GraphQLQuery<GetConnectionsV2Query>>({
        query: customQueries.getConnectionsV2,
        variables: connectionsDetails,
      });

      const connectionsArray = [];

      console.log("Connections", connections);

      connections.map((connection) => {
        connectionsArray.push(connection.id);
      });

      const updatedUser = await updateUser(userId, {
        userDailyConnections: JSON.stringify(connectionsArray),
        connectionsUpdatedOn: dayjs(),
      });

      await dispatch(setUser(updatedUser));

      connectionsData = connections;
    }

    // Pull all the likes that the user sent
    const existingLikes = await getExistingLikes(userId);
    const existingLikedIds = [];

    // Extract the likes IDs
    existingLikes.map((existingLike) => {
      console.log("existingLike.likedId", existingLike.likedId);
      existingLikedIds.push(existingLike.likedId);
    });

    console.log("existingLikedIds", existingLikedIds);

    parsedConnectionsData = [];

    // Map the existing connections and compare if any of the IDs is in the pool of liked users.
    // If so, flag it as already liked.
    await Promise.all(
      connectionsData.map(async (connection) => {
        connection.isLiked = existingLikedIds.includes(connection.id)
          ? true
          : false;
        parsedConnectionsData.push(connection);
      }),
    );
    parsedConnectionsData.sort((a, b) => a.id.localeCompare(b.id));

    console.log("Set user connections", parsedConnectionsData);
    return parsedConnectionsData;
  } catch (error) {
    console.log("utils - getConnections Error: ", error);
  }
};
