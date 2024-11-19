import { signIn } from "aws-amplify/auth";
import * as customQueries from "@gcq/index";
import * as queries from "@graphql/queries";
import * as mutations from "@graphql/mutations";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  GetUserQuery,
  SearchUsersQuery,
  CreateLikeMutation,
  CreateLikeInput,
  SearchLikesQuery,
  UpdateLikeInput,
  UpdateLikeMutation,
} from "@src/api/index";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

import { updateUser } from "@utils/amplifyUtils";
import {
  sendNewMessagePushNotificationToUser,
  userHasOneSignalId,
} from "@src/utils/onesignal";

const API = generateClient();

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

export const getUserOneSignalIdById = async (userId: string) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<GetUserQuery>>({
      query: customQueries.getUser,
      variables: {
        id: userId,
      },
    });
    return data.getUser.oneSignalUserId;
  } catch (error) {
    console.error("Error getUserById:", error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
      query: queries.searchUsers,
      variables: {
        limit: 25,
        filter: {
          email: {
            eq: email,
          },
        },
      },
    });
    return JSON.stringify(data.searchUsers.items);
  } catch (error) {
    console.error("getUserByEmail:", error);
  }
};

export const getAllUsers = async () => {
  try {
    // Fetch all users
    const { data } = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
      query: customQueries.searchMatchUsers,
      variables: {
        limit: 25,
      },
    });

    return JSON.stringify(data.searchUsers.items);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getAllMatches = async (userId: string) => {
  try {
    // Fetch all users
    const { data } = await API.graphql<GraphQLQuery<SearchUsersQuery>>({
      query: customQueries.searchMatchUsers,
      variables: {
        limit: 25,
        filter: {
          id: {
            ne: userId,
          },
        },
      },
    });

    return data.searchUsers.items;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const sendSpark = async (currentUser: string, selectedUser: string) => {
  try {
    const currentUserData = JSON.parse(currentUser);
    const selectedUserData = JSON.parse(selectedUser);

    // Search spark to check if some user already liked me.
    const {
      data: {
        searchLikes: { items: existingLikes },
      },
    } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
      query: queries.searchLikes,
      variables: {
        limit: 1,
        filter: {
          and: [
            { likedId: { eq: currentUserData.id } },
            { likerId: { eq: selectedUserData.id } },
          ],
          active: { eq: true },
          isUnmatched: { eq: false },
          isReported: { eq: false },
          amILikedBack: { eq: false },
        },
      },
    });

    // If there is an existing like, update the state of "amILikedBack" to true only if this value is false
    // Create channel on both users. Send push and email notifications.
    if (existingLikes.length > 0) {
      const { id } = existingLikes[0];
      // Generate a UUID for the chat channel only if the current ID is "0".
      const channelId = uuid();
      const likeDetails: UpdateLikeInput = {
        id: id,
        amILikedBack: true,
        channelId,
        updatedAt: dayjs().toISOString(),
      };
      await API.graphql<GraphQLQuery<UpdateLikeMutation>>({
        query: mutations.updateLike,
        variables: { input: likeDetails },
      });

      if (
        userHasOneSignalId(selectedUserData) &&
        selectedUserData.isNewConnectionsNotificationPushActive
      ) {
        await sendNewMessagePushNotificationToUser(
          currentUserData.firstName,
          ``,
          selectedUserData.oneSignalUserId,
          "spark"
        );
      }
    } else {
      // If there are no likes for both users, create a like
      const likeDetails: CreateLikeInput = {
        likerId: currentUserData.id,
        likedId: selectedUserData.id,
      };
      const createLike = await API.graphql<GraphQLQuery<CreateLikeMutation>>({
        query: mutations.createLike,
        variables: { input: likeDetails },
      });
      console.log("createLike", createLike);
      return { result: false };
    }
    return { result: true };
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const formatPhoneNumberE164 = (phoneNumber, countryCode) => {
  // Remove any non-digit characters from the phone number and country code
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  const cleanCountryCode = countryCode.replace(/\D/g, "");

  // Combine country code and phone number in E.164 format
  return `+${cleanCountryCode}${cleanPhoneNumber}`;
};

export const userSignIn = async (phoneNumber, countryCode) => {
  try {
    const formattedPhoneNumber = formatPhoneNumberE164(
      phoneNumber,
      countryCode
    );
    const user = await signIn({
      username: formattedPhoneNumber,
      options: {
        authFlowType: "CUSTOM_WITHOUT_SRP",
      },
    });
    return user;
  } catch (error) {
    console.log("Error validatePhoneNumber", error);
    throw new Error(`${error.message}`);
  }
};

export const updateUserTimeZone = async (user) => {
  // Update user UTC Time for reflections if needed.
  const userUTCZone = dayjs(user.dailyReflectionNotificationTime).format("Z");
  const currentUTCZone = dayjs().format("Z");
  if (userUTCZone !== currentUTCZone) {
    const updatedUTC = dayjs(user.dailyReflectionNotificationTime)
      .utc()
      .add(1, "millisecond");
    await updateUser(user?.id, {
      dailyReflectionNotificationTime: updatedUTC,
    });
  }
};

/**
 * Converts height from centimeters to international format (feet/inches + cm)
 * @param heightInCm - Height in centimeters
 * @returns formatted string or empty string if height is 0
 */
export function convertHeightToInternationalFormat(heightInCm: number): string {
  if (!heightInCm) return "";

  const feet = Math.floor(heightInCm / 30.48);
  const inches = Math.round((heightInCm / 2.54) % 12);

  return `${feet}'${inches}" (${heightInCm}cm)`;
}
