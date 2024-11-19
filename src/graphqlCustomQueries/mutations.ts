/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/index";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const updateUser = /* GraphQL */ `mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      firstName
      lastName
      bio
      quality
      starSign
      isStarSignVisible
      mentalHealth
      value
      gender
      agePreferenceFrom
      agePreferenceTo
      location
      locationLatLong {
        latitude
        longitude
      }
      isLocationVisible
      areEatingPreferencesVisible
      areGenderPreferencesVisible
      areLanguagesVisible
      birthdate
      childrenStatus {
        name
      }
      distancePreference
      drinkPreference
      drugPreference
      eatingPreferences
      educationLevel
      email
      emailCommunication
      ethnicity {
        items {
          id
          ethnicity {
            name,
            id
          }
        }
      }
      exercisePreference
      genderPreferences
      height
      hometown
      id
      isChildrenStatusVisible
      isDrinkPreferenceVisible
      isDrugPreferenceVisible
      isEducationLevelVisible
      isEthnicityVisible
      isExercisePreferenceVisible
      isGenderVisible
      isHeightVisible
      isHometownVisible
      isJobTitleVisible
      isPronounVisible
      isReligionVisible
      isSexualOrientationVisible
      isSchoolVisbile
      isSleepingHabitVisible
      isTobaccoPreferenceVisible
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      onboardingStep
      isWorkVisible
      jobTitle
      languages {
        items {
          id
          language {
            id
            name
          }
        }
      }
      phone
      photos {
        items {
          id
          photo {
            name
          }
        }
      }
      prompts
      pronoun {
        name
      }
      religion {
        id
        name
      }
      school
      sexualOrientation
      sleepingHabit
      tobaccoPreference
      work
      days {
        items {
          id
          day
          position
          createdAt
        }
      }
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      isNewMessagesNotificationEnabled
      oneSignalUserId
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      activeConnections
      streamToken
      signUpStep
      isSignUpComplete
      wantChildrenStatus
      isWantChildrenStatusVisible
      createdAt
    }
  }
  ` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
