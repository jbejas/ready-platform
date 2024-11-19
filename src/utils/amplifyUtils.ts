import { updateUserAttribute } from "aws-amplify/auth";
import * as mutations from "@graphql/mutations";
import * as customMutations from "@gcq/mutations";
import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  CreateUserInput,
  CreateUserMutation,
  CreateLanguageUserInput,
  CreateLanguageUserMutation,
  // CreateEatingPreferenceUserInput,
  // CreateEatingPreferenceUserMutation,
  CreatePhotoInput,
  CreateDayMutation,
  CreatePhotoMutation,
  CreatePhotoUserInput,
  CreatePhotoUserMutation,
  CreateDayInput,
  CreateEthnicityUserInput,
  UpdateUserInput,
  UpdateUserMutation,
  CreateEnergyUserInput,
  CreateEnergyUserMutation,
  SearchGeneralAppContentsQuery,
  UpdatePhotoInput,
  UpdatePhotoMutation,
  DeleteEthnicityUserMutation,
  DeleteLanguageUserMutation,
} from "@src/api/index";
import dayjs from "dayjs";

const API = generateClient();

export const getDailyConnections = async () => {
  const dailyConnectionsQuery = await API.graphql<
    GraphQLQuery<SearchGeneralAppContentsQuery>
  >({
    query: queries.searchGeneralAppContents,
    variables: {
      limit: 1,
      filter: {
        contentType: {
          eq: "daily-connections",
        },
      },
    },
  });
  return dailyConnectionsQuery.data.searchGeneralAppContents.items[0].value;
};

export const getDailySparks = async () => {
  const dailySparksQuery = await API.graphql<
    GraphQLQuery<SearchGeneralAppContentsQuery>
  >({
    query: queries.searchGeneralAppContents,
    variables: {
      limit: 1,
      filter: {
        contentType: {
          eq: "daily-sparks",
        },
      },
    },
  });
  return dailySparksQuery.data.searchGeneralAppContents.items[0].value;
};

export const updateCognitoUser = async (name: string) => {
  try {
    const userUpdateOutput = await updateUserAttribute({
      userAttribute: {
        attributeKey: "name",
        value: name,
      },
    });
    handleUpdateUserAttributeNextSteps(userUpdateOutput);
  } catch (error) {
    console.error("Error saving user name:", error);
  }
};

export const handleUpdateUserAttributeNextSteps = (output) => {
  const { nextStep } = output;

  switch (nextStep.updateAttributeStep) {
    case "CONFIRM_ATTRIBUTE_WITH_CODE":
      const codeDeliveryDetails = nextStep.codeDeliveryDetails;
      break;
    case "DONE":
      console.log(`attribute was successfully updated.`);
      break;
  }
};

export const createUser = async (userValues: object) => {
  try {
    const userDetails: CreateUserInput = {
      ...userValues,
      isUserActive: true,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    };

    console.log("userDetails", userDetails);

    const createNewUser = await API.graphql<GraphQLQuery<CreateUserMutation>>({
      query: mutations.createUser,
      variables: { input: userDetails },
    });
    return createNewUser.data.createUser.id;
  } catch (error) {
    console.error("Error creating user:", error);
    console.error("Error creating user:", JSON.stringify(error));
    throw new Error(`User creation failed ${JSON.stringify(error)}`);
  }
};

export const updateUser = async (userId: string, userValues: object) => {
  try {
    const userDetails: UpdateUserInput = {
      id: userId,
      ...userValues,
      updatedAt: dayjs().toISOString(),
    };
    const updatedUser = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
      query: customMutations.updateUser,
      variables: { input: userDetails },
    });
    console.log("Updated User", updatedUser.data.updateUser);
    return updatedUser.data.updateUser;
  } catch (error) {
    console.error("Update user util - Error updating user:", error);
  }
};

export const createLanguageUser = async (
  userId: string,
  languageIDs: { id?: string; name: string; isActive?: boolean }[]
) => {
  try {
    const getLanguagesIds = languageIDs.map((item) => item.id);
    getLanguagesIds.map(async (languageID) => {
      const userLanguageDetails: CreateLanguageUserInput = {
        userID: userId,
        languageID,
      };
      const createLanguageUser = await API.graphql<
        GraphQLQuery<CreateLanguageUserMutation>
      >({
        query: mutations.createLanguageUser,
        variables: { input: userLanguageDetails },
      });
    });
  } catch (error) {
    console.error("Error createLanguageUser:", error);
  }
};

export const deleteLanguageUser = async (id: string) => {
  try {
    await API.graphql<GraphQLQuery<DeleteLanguageUserMutation>>({
      query: mutations.deleteLanguageUser,
      variables: {
        input: {
          id,
        },
      },
    });
  } catch (error) {
    console.error("Error deleteLanguageUser:", error);
  }
};

export const createEthnicityUser = async (
  userId: string,
  ethnicityIDs: { id?: string; name: string; isActive?: boolean }[]
) => {
  try {
    const getEthnicityIds = ethnicityIDs.map((item) => item.id);
    getEthnicityIds.map(async (ethnicityID) => {
      const userEthnicityDetails: CreateEthnicityUserInput = {
        userID: userId,
        ethnicityID,
      };
      const createEthnicityUser = await API.graphql<
        GraphQLQuery<CreateLanguageUserMutation>
      >({
        query: mutations.createEthnicityUser,
        variables: { input: userEthnicityDetails },
      });
    });
  } catch (error) {
    console.error("Error createEthnicityUser:", error);
  }
};
export const deleteEthnicityUser = async (id: string) => {
  try {
    await API.graphql<GraphQLQuery<DeleteEthnicityUserMutation>>({
      query: mutations.deleteEthnicityUser,
      variables: {
        input: {
          id,
        },
      },
    });
  } catch (error) {
    console.error("Error deleteEthnicityUser:", error);
  }
};

// export const createEatingPreferenceUser = async (
//   userId: string,
//   eatingPreferencesIDs: { id: string; name: string; isActive?: boolean }[]
// ) => {
//   try {
//     const getEatingPreferencesIds = eatingPreferencesIDs.map((item) => item.id);
//     getEatingPreferencesIds.map(async (eatingPreferenceID) => {
//       const userEatingPreferenceDetails: CreateEatingPreferenceUserInput = {
//         userID: userId,
//         eatingPreferenceID,
//       };
//       const createEatingPreferenceUserDetails = await API.graphql<
//         GraphQLQuery<CreateEatingPreferenceUserMutation>
//       >({
//         query: mutations.createEatingPreferenceUser,
//         variables: { input: userEatingPreferenceDetails },
//       });
//     });
//   } catch (error) {
//     console.error("Error createEatingPreferenceUserDetails:", error);
//   }
// };

export const createPhotoUser = async (
  userId: string,
  photosFileNames: {
    sortOrder: number;
    imageFileName: string;
    imageUri: string;
  }[]
) => {
  try {
    // Create Photo First
    const photoDetails: CreatePhotoInput = {
      name: photosFileNames[0].imageFileName,
      sortOrder: photosFileNames[0].sortOrder,
      isActive: true,
    };
    const createPhoto = await API.graphql<GraphQLQuery<CreatePhotoMutation>>({
      query: mutations.createPhoto,
      variables: { input: photoDetails },
    });

    const { id: photoID } = createPhoto.data.createPhoto;
    // Create Photo User after
    const userPhotoDetails: CreatePhotoUserInput = {
      userID: userId,
      photoID,
    };
    const createPhotoUser = await API.graphql<
      GraphQLQuery<CreatePhotoUserMutation>
    >({
      query: mutations.createPhotoUser,
      variables: { input: userPhotoDetails },
    });
    console.log("createPhotoUser", createPhotoUser);
    return createPhotoUser.data.createPhotoUser.id;
  } catch (error) {
    console.error("Error createPhotoUser:", error);
  }
};

export const updatePhoto = async (
  photoId: string,
  photoValues: Partial<UpdatePhotoInput>
) => {
  try {
    const photoDetails: UpdatePhotoInput = {
      id: photoId,
      ...photoValues,
      updatedAt: dayjs().toISOString(),
    };

    const updatedUser = await API.graphql<GraphQLQuery<UpdatePhotoMutation>>({
      query: mutations.updatePhoto,
      variables: { input: photoDetails },
    });
    return updatedUser.data.updatePhoto;
  } catch (error) {
    console.error("Update photo util - Error updating photo:", error);
  }
};

export const createDayUser = async (
  userId: string,
  day: number,
  position: number,
  question: string,
  response: string,
  questionCategory: string
) => {
  try {
    // Create user day
    const dayDetails: CreateDayInput = {
      userID: userId,
      day,
      position,
      question,
      response,
      questionCategory,
    };
    const createDay = await API.graphql<GraphQLQuery<CreateDayMutation>>({
      query: mutations.createDay,
      variables: { input: dayDetails },
    });
  } catch (error) {
    console.error("Error createDayUser:", error);
  }
};

export const createEnergyUser = async (
  userId: string,
  energyItems: { id?: string; name: string; isActive?: boolean }[]
) => {
  try {
    energyItems.map(async (item) => {
      const itemDetails: CreateEnergyUserInput = {
        userID: userId,
        value: item.name,
      };
      const createEnergyUser = await API.graphql<
        GraphQLQuery<CreateEnergyUserMutation>
      >({
        query: mutations.createEnergyUser,
        variables: { input: itemDetails },
      });
    });
  } catch (error) {
    console.error("Error createDayUser:", error);
  }
};
