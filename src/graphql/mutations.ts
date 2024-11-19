/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/index";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    phone
    email
    emailCommunication
    birthdate
    gender
    isGenderVisible
    sexualOrientation
    isSexualOrientationVisible
    value
    location
    locationLatLong {
      latitude
      longitude
      __typename
    }
    isLocationVisible
    mentalHealth
    quality
    energy
    starSign
    isStarSignVisible
    ethnicityID
    ethnicity {
      nextToken
      __typename
    }
    isEthnicityVisible
    religionID
    religion {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isReligionVisible
    height
    isHeightVisible
    pronounID
    pronoun {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isPronounVisible
    genderPreferences
    areGenderPreferencesVisible
    agePreferenceFrom
    agePreferenceTo
    distancePreference
    childrenStatusID
    childrenStatus {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    wantChildrenStatus
    isChildrenStatusVisible
    isWantChildrenStatusVisible
    educationLevel
    isEducationLevelVisible
    school
    isSchoolVisbile
    languages {
      nextToken
      __typename
    }
    areLanguagesVisible
    jobTitle
    isJobTitleVisible
    work
    isWorkVisible
    drinkPreference
    isDrinkPreferenceVisible
    tobaccoPreference
    isTobaccoPreferenceVisible
    drugPreference
    isDrugPreferenceVisible
    therapyPreference
    isTherapyPreferenceVisible
    eatingPreferences
    areEatingPreferencesVisible
    exercisePreferenceID
    exercisePreference
    isExercisePreferenceVisible
    sleepingHabit
    isSleepingHabitVisible
    hometown
    isHometownVisible
    prompts
    photos {
      nextToken
      __typename
    }
    userMainPhoto
    defaultUserPhoto
    stories {
      nextToken
      __typename
    }
    checkInQuestions {
      nextToken
      __typename
    }
    bio
    discoveringYou
    isUserActive
    isUserVerified
    isUserOnboarded
    isUserPaused
    isProfileComplete
    isHabitsComplete
    isOnboardingStarted
    onboardingStep
    signUpStep
    isSignUpComplete
    days {
      nextToken
      __typename
    }
    matches {
      nextToken
      __typename
    }
    dailyReflectionReminderType
    dailyReflectionReminderFrequency
    dailyReflectionNotificationTime
    isDailyReflectionNotificationEnabled
    timeOffset
    isNewConnectionsNotificationPushActive
    isNewConnectionsNotificationEmailActive
    newMessagesNotificationType
    isNewMessagesNotificationEnabled
    likesGiven {
      nextToken
      __typename
    }
    likesReceived {
      nextToken
      __typename
    }
    streamToken
    oneSignalUserId
    activeConnections
    userDailyConnections
    connectionsUpdatedOn
    reflectionCompletedOn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    phone
    email
    emailCommunication
    birthdate
    gender
    isGenderVisible
    sexualOrientation
    isSexualOrientationVisible
    value
    location
    locationLatLong {
      latitude
      longitude
      __typename
    }
    isLocationVisible
    mentalHealth
    quality
    energy
    starSign
    isStarSignVisible
    ethnicityID
    ethnicity {
      nextToken
      __typename
    }
    isEthnicityVisible
    religionID
    religion {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isReligionVisible
    height
    isHeightVisible
    pronounID
    pronoun {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isPronounVisible
    genderPreferences
    areGenderPreferencesVisible
    agePreferenceFrom
    agePreferenceTo
    distancePreference
    childrenStatusID
    childrenStatus {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    wantChildrenStatus
    isChildrenStatusVisible
    isWantChildrenStatusVisible
    educationLevel
    isEducationLevelVisible
    school
    isSchoolVisbile
    languages {
      nextToken
      __typename
    }
    areLanguagesVisible
    jobTitle
    isJobTitleVisible
    work
    isWorkVisible
    drinkPreference
    isDrinkPreferenceVisible
    tobaccoPreference
    isTobaccoPreferenceVisible
    drugPreference
    isDrugPreferenceVisible
    therapyPreference
    isTherapyPreferenceVisible
    eatingPreferences
    areEatingPreferencesVisible
    exercisePreferenceID
    exercisePreference
    isExercisePreferenceVisible
    sleepingHabit
    isSleepingHabitVisible
    hometown
    isHometownVisible
    prompts
    photos {
      nextToken
      __typename
    }
    userMainPhoto
    defaultUserPhoto
    stories {
      nextToken
      __typename
    }
    checkInQuestions {
      nextToken
      __typename
    }
    bio
    discoveringYou
    isUserActive
    isUserVerified
    isUserOnboarded
    isUserPaused
    isProfileComplete
    isHabitsComplete
    isOnboardingStarted
    onboardingStep
    signUpStep
    isSignUpComplete
    days {
      nextToken
      __typename
    }
    matches {
      nextToken
      __typename
    }
    dailyReflectionReminderType
    dailyReflectionReminderFrequency
    dailyReflectionNotificationTime
    isDailyReflectionNotificationEnabled
    timeOffset
    isNewConnectionsNotificationPushActive
    isNewConnectionsNotificationEmailActive
    newMessagesNotificationType
    isNewMessagesNotificationEnabled
    likesGiven {
      nextToken
      __typename
    }
    likesReceived {
      nextToken
      __typename
    }
    streamToken
    oneSignalUserId
    activeConnections
    userDailyConnections
    connectionsUpdatedOn
    reflectionCompletedOn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    phone
    email
    emailCommunication
    birthdate
    gender
    isGenderVisible
    sexualOrientation
    isSexualOrientationVisible
    value
    location
    locationLatLong {
      latitude
      longitude
      __typename
    }
    isLocationVisible
    mentalHealth
    quality
    energy
    starSign
    isStarSignVisible
    ethnicityID
    ethnicity {
      nextToken
      __typename
    }
    isEthnicityVisible
    religionID
    religion {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isReligionVisible
    height
    isHeightVisible
    pronounID
    pronoun {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    isPronounVisible
    genderPreferences
    areGenderPreferencesVisible
    agePreferenceFrom
    agePreferenceTo
    distancePreference
    childrenStatusID
    childrenStatus {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    wantChildrenStatus
    isChildrenStatusVisible
    isWantChildrenStatusVisible
    educationLevel
    isEducationLevelVisible
    school
    isSchoolVisbile
    languages {
      nextToken
      __typename
    }
    areLanguagesVisible
    jobTitle
    isJobTitleVisible
    work
    isWorkVisible
    drinkPreference
    isDrinkPreferenceVisible
    tobaccoPreference
    isTobaccoPreferenceVisible
    drugPreference
    isDrugPreferenceVisible
    therapyPreference
    isTherapyPreferenceVisible
    eatingPreferences
    areEatingPreferencesVisible
    exercisePreferenceID
    exercisePreference
    isExercisePreferenceVisible
    sleepingHabit
    isSleepingHabitVisible
    hometown
    isHometownVisible
    prompts
    photos {
      nextToken
      __typename
    }
    userMainPhoto
    defaultUserPhoto
    stories {
      nextToken
      __typename
    }
    checkInQuestions {
      nextToken
      __typename
    }
    bio
    discoveringYou
    isUserActive
    isUserVerified
    isUserOnboarded
    isUserPaused
    isProfileComplete
    isHabitsComplete
    isOnboardingStarted
    onboardingStep
    signUpStep
    isSignUpComplete
    days {
      nextToken
      __typename
    }
    matches {
      nextToken
      __typename
    }
    dailyReflectionReminderType
    dailyReflectionReminderFrequency
    dailyReflectionNotificationTime
    isDailyReflectionNotificationEnabled
    timeOffset
    isNewConnectionsNotificationPushActive
    isNewConnectionsNotificationEmailActive
    newMessagesNotificationType
    isNewMessagesNotificationEnabled
    likesGiven {
      nextToken
      __typename
    }
    likesReceived {
      nextToken
      __typename
    }
    streamToken
    oneSignalUserId
    activeConnections
    userDailyConnections
    connectionsUpdatedOn
    reflectionCompletedOn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
    id
    likerId
    likedId
    amILikedBack
    active
    liker {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    liked {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    channelId
    isUnmatched
    isReported
    reporterType
    unmatchReason
    reportReason
    details
    unmatchedUserId
    isUnmatchAcked
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
    id
    likerId
    likedId
    amILikedBack
    active
    liker {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    liked {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    channelId
    isUnmatched
    isReported
    reporterType
    unmatchReason
    reportReason
    details
    unmatchedUserId
    isUnmatchAcked
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLikeMutationVariables,
  APITypes.UpdateLikeMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
    id
    likerId
    likedId
    amILikedBack
    active
    liker {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    liked {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    channelId
    isUnmatched
    isReported
    reporterType
    unmatchReason
    reportReason
    details
    unmatchedUserId
    isUnmatchAcked
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const createViewedConnection = /* GraphQL */ `mutation CreateViewedConnection(
  $input: CreateViewedConnectionInput!
  $condition: ModelViewedConnectionConditionInput
) {
  createViewedConnection(input: $input, condition: $condition) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateViewedConnectionMutationVariables,
  APITypes.CreateViewedConnectionMutation
>;
export const updateViewedConnection = /* GraphQL */ `mutation UpdateViewedConnection(
  $input: UpdateViewedConnectionInput!
  $condition: ModelViewedConnectionConditionInput
) {
  updateViewedConnection(input: $input, condition: $condition) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateViewedConnectionMutationVariables,
  APITypes.UpdateViewedConnectionMutation
>;
export const deleteViewedConnection = /* GraphQL */ `mutation DeleteViewedConnection(
  $input: DeleteViewedConnectionInput!
  $condition: ModelViewedConnectionConditionInput
) {
  deleteViewedConnection(input: $input, condition: $condition) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteViewedConnectionMutationVariables,
  APITypes.DeleteViewedConnectionMutation
>;
export const createSleepingHabit = /* GraphQL */ `mutation CreateSleepingHabit(
  $input: CreateSleepingHabitInput!
  $condition: ModelSleepingHabitConditionInput
) {
  createSleepingHabit(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSleepingHabitMutationVariables,
  APITypes.CreateSleepingHabitMutation
>;
export const updateSleepingHabit = /* GraphQL */ `mutation UpdateSleepingHabit(
  $input: UpdateSleepingHabitInput!
  $condition: ModelSleepingHabitConditionInput
) {
  updateSleepingHabit(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSleepingHabitMutationVariables,
  APITypes.UpdateSleepingHabitMutation
>;
export const deleteSleepingHabit = /* GraphQL */ `mutation DeleteSleepingHabit(
  $input: DeleteSleepingHabitInput!
  $condition: ModelSleepingHabitConditionInput
) {
  deleteSleepingHabit(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSleepingHabitMutationVariables,
  APITypes.DeleteSleepingHabitMutation
>;
export const createExercisePreference = /* GraphQL */ `mutation CreateExercisePreference(
  $input: CreateExercisePreferenceInput!
  $condition: ModelExercisePreferenceConditionInput
) {
  createExercisePreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExercisePreferenceMutationVariables,
  APITypes.CreateExercisePreferenceMutation
>;
export const updateExercisePreference = /* GraphQL */ `mutation UpdateExercisePreference(
  $input: UpdateExercisePreferenceInput!
  $condition: ModelExercisePreferenceConditionInput
) {
  updateExercisePreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExercisePreferenceMutationVariables,
  APITypes.UpdateExercisePreferenceMutation
>;
export const deleteExercisePreference = /* GraphQL */ `mutation DeleteExercisePreference(
  $input: DeleteExercisePreferenceInput!
  $condition: ModelExercisePreferenceConditionInput
) {
  deleteExercisePreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExercisePreferenceMutationVariables,
  APITypes.DeleteExercisePreferenceMutation
>;
export const createDrugPreference = /* GraphQL */ `mutation CreateDrugPreference(
  $input: CreateDrugPreferenceInput!
  $condition: ModelDrugPreferenceConditionInput
) {
  createDrugPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDrugPreferenceMutationVariables,
  APITypes.CreateDrugPreferenceMutation
>;
export const updateDrugPreference = /* GraphQL */ `mutation UpdateDrugPreference(
  $input: UpdateDrugPreferenceInput!
  $condition: ModelDrugPreferenceConditionInput
) {
  updateDrugPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDrugPreferenceMutationVariables,
  APITypes.UpdateDrugPreferenceMutation
>;
export const deleteDrugPreference = /* GraphQL */ `mutation DeleteDrugPreference(
  $input: DeleteDrugPreferenceInput!
  $condition: ModelDrugPreferenceConditionInput
) {
  deleteDrugPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDrugPreferenceMutationVariables,
  APITypes.DeleteDrugPreferenceMutation
>;
export const createTobaccoPreference = /* GraphQL */ `mutation CreateTobaccoPreference(
  $input: CreateTobaccoPreferenceInput!
  $condition: ModelTobaccoPreferenceConditionInput
) {
  createTobaccoPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTobaccoPreferenceMutationVariables,
  APITypes.CreateTobaccoPreferenceMutation
>;
export const updateTobaccoPreference = /* GraphQL */ `mutation UpdateTobaccoPreference(
  $input: UpdateTobaccoPreferenceInput!
  $condition: ModelTobaccoPreferenceConditionInput
) {
  updateTobaccoPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTobaccoPreferenceMutationVariables,
  APITypes.UpdateTobaccoPreferenceMutation
>;
export const deleteTobaccoPreference = /* GraphQL */ `mutation DeleteTobaccoPreference(
  $input: DeleteTobaccoPreferenceInput!
  $condition: ModelTobaccoPreferenceConditionInput
) {
  deleteTobaccoPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTobaccoPreferenceMutationVariables,
  APITypes.DeleteTobaccoPreferenceMutation
>;
export const createTherapyPreference = /* GraphQL */ `mutation CreateTherapyPreference(
  $input: CreateTherapyPreferenceInput!
  $condition: ModelTherapyPreferenceConditionInput
) {
  createTherapyPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTherapyPreferenceMutationVariables,
  APITypes.CreateTherapyPreferenceMutation
>;
export const updateTherapyPreference = /* GraphQL */ `mutation UpdateTherapyPreference(
  $input: UpdateTherapyPreferenceInput!
  $condition: ModelTherapyPreferenceConditionInput
) {
  updateTherapyPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTherapyPreferenceMutationVariables,
  APITypes.UpdateTherapyPreferenceMutation
>;
export const deleteTherapyPreference = /* GraphQL */ `mutation DeleteTherapyPreference(
  $input: DeleteTherapyPreferenceInput!
  $condition: ModelTherapyPreferenceConditionInput
) {
  deleteTherapyPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTherapyPreferenceMutationVariables,
  APITypes.DeleteTherapyPreferenceMutation
>;
export const createDrinkPreference = /* GraphQL */ `mutation CreateDrinkPreference(
  $input: CreateDrinkPreferenceInput!
  $condition: ModelDrinkPreferenceConditionInput
) {
  createDrinkPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDrinkPreferenceMutationVariables,
  APITypes.CreateDrinkPreferenceMutation
>;
export const updateDrinkPreference = /* GraphQL */ `mutation UpdateDrinkPreference(
  $input: UpdateDrinkPreferenceInput!
  $condition: ModelDrinkPreferenceConditionInput
) {
  updateDrinkPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDrinkPreferenceMutationVariables,
  APITypes.UpdateDrinkPreferenceMutation
>;
export const deleteDrinkPreference = /* GraphQL */ `mutation DeleteDrinkPreference(
  $input: DeleteDrinkPreferenceInput!
  $condition: ModelDrinkPreferenceConditionInput
) {
  deleteDrinkPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDrinkPreferenceMutationVariables,
  APITypes.DeleteDrinkPreferenceMutation
>;
export const createChildrenStatus = /* GraphQL */ `mutation CreateChildrenStatus(
  $input: CreateChildrenStatusInput!
  $condition: ModelChildrenStatusConditionInput
) {
  createChildrenStatus(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChildrenStatusMutationVariables,
  APITypes.CreateChildrenStatusMutation
>;
export const updateChildrenStatus = /* GraphQL */ `mutation UpdateChildrenStatus(
  $input: UpdateChildrenStatusInput!
  $condition: ModelChildrenStatusConditionInput
) {
  updateChildrenStatus(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChildrenStatusMutationVariables,
  APITypes.UpdateChildrenStatusMutation
>;
export const deleteChildrenStatus = /* GraphQL */ `mutation DeleteChildrenStatus(
  $input: DeleteChildrenStatusInput!
  $condition: ModelChildrenStatusConditionInput
) {
  deleteChildrenStatus(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChildrenStatusMutationVariables,
  APITypes.DeleteChildrenStatusMutation
>;
export const createWantChildrenStatus = /* GraphQL */ `mutation CreateWantChildrenStatus(
  $input: CreateWantChildrenStatusInput!
  $condition: ModelWantChildrenStatusConditionInput
) {
  createWantChildrenStatus(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWantChildrenStatusMutationVariables,
  APITypes.CreateWantChildrenStatusMutation
>;
export const updateWantChildrenStatus = /* GraphQL */ `mutation UpdateWantChildrenStatus(
  $input: UpdateWantChildrenStatusInput!
  $condition: ModelWantChildrenStatusConditionInput
) {
  updateWantChildrenStatus(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWantChildrenStatusMutationVariables,
  APITypes.UpdateWantChildrenStatusMutation
>;
export const deleteWantChildrenStatus = /* GraphQL */ `mutation DeleteWantChildrenStatus(
  $input: DeleteWantChildrenStatusInput!
  $condition: ModelWantChildrenStatusConditionInput
) {
  deleteWantChildrenStatus(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWantChildrenStatusMutationVariables,
  APITypes.DeleteWantChildrenStatusMutation
>;
export const createEducationLevel = /* GraphQL */ `mutation CreateEducationLevel(
  $input: CreateEducationLevelInput!
  $condition: ModelEducationLevelConditionInput
) {
  createEducationLevel(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationLevelMutationVariables,
  APITypes.CreateEducationLevelMutation
>;
export const updateEducationLevel = /* GraphQL */ `mutation UpdateEducationLevel(
  $input: UpdateEducationLevelInput!
  $condition: ModelEducationLevelConditionInput
) {
  updateEducationLevel(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationLevelMutationVariables,
  APITypes.UpdateEducationLevelMutation
>;
export const deleteEducationLevel = /* GraphQL */ `mutation DeleteEducationLevel(
  $input: DeleteEducationLevelInput!
  $condition: ModelEducationLevelConditionInput
) {
  deleteEducationLevel(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationLevelMutationVariables,
  APITypes.DeleteEducationLevelMutation
>;
export const createGender = /* GraphQL */ `mutation CreateGender(
  $input: CreateGenderInput!
  $condition: ModelGenderConditionInput
) {
  createGender(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGenderMutationVariables,
  APITypes.CreateGenderMutation
>;
export const updateGender = /* GraphQL */ `mutation UpdateGender(
  $input: UpdateGenderInput!
  $condition: ModelGenderConditionInput
) {
  updateGender(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGenderMutationVariables,
  APITypes.UpdateGenderMutation
>;
export const deleteGender = /* GraphQL */ `mutation DeleteGender(
  $input: DeleteGenderInput!
  $condition: ModelGenderConditionInput
) {
  deleteGender(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGenderMutationVariables,
  APITypes.DeleteGenderMutation
>;
export const createEthnicity = /* GraphQL */ `mutation CreateEthnicity(
  $input: CreateEthnicityInput!
  $condition: ModelEthnicityConditionInput
) {
  createEthnicity(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEthnicityMutationVariables,
  APITypes.CreateEthnicityMutation
>;
export const updateEthnicity = /* GraphQL */ `mutation UpdateEthnicity(
  $input: UpdateEthnicityInput!
  $condition: ModelEthnicityConditionInput
) {
  updateEthnicity(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEthnicityMutationVariables,
  APITypes.UpdateEthnicityMutation
>;
export const deleteEthnicity = /* GraphQL */ `mutation DeleteEthnicity(
  $input: DeleteEthnicityInput!
  $condition: ModelEthnicityConditionInput
) {
  deleteEthnicity(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEthnicityMutationVariables,
  APITypes.DeleteEthnicityMutation
>;
export const createEthnicityUser = /* GraphQL */ `mutation CreateEthnicityUser(
  $input: CreateEthnicityUserInput!
  $condition: ModelEthnicityUserConditionInput
) {
  createEthnicityUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    ethnicity {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    ethnicityID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEthnicityUserMutationVariables,
  APITypes.CreateEthnicityUserMutation
>;
export const updateEthnicityUser = /* GraphQL */ `mutation UpdateEthnicityUser(
  $input: UpdateEthnicityUserInput!
  $condition: ModelEthnicityUserConditionInput
) {
  updateEthnicityUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    ethnicity {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    ethnicityID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEthnicityUserMutationVariables,
  APITypes.UpdateEthnicityUserMutation
>;
export const deleteEthnicityUser = /* GraphQL */ `mutation DeleteEthnicityUser(
  $input: DeleteEthnicityUserInput!
  $condition: ModelEthnicityUserConditionInput
) {
  deleteEthnicityUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    ethnicity {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    ethnicityID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEthnicityUserMutationVariables,
  APITypes.DeleteEthnicityUserMutation
>;
export const createReligion = /* GraphQL */ `mutation CreateReligion(
  $input: CreateReligionInput!
  $condition: ModelReligionConditionInput
) {
  createReligion(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReligionMutationVariables,
  APITypes.CreateReligionMutation
>;
export const updateReligion = /* GraphQL */ `mutation UpdateReligion(
  $input: UpdateReligionInput!
  $condition: ModelReligionConditionInput
) {
  updateReligion(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReligionMutationVariables,
  APITypes.UpdateReligionMutation
>;
export const deleteReligion = /* GraphQL */ `mutation DeleteReligion(
  $input: DeleteReligionInput!
  $condition: ModelReligionConditionInput
) {
  deleteReligion(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReligionMutationVariables,
  APITypes.DeleteReligionMutation
>;
export const createPronoun = /* GraphQL */ `mutation CreatePronoun(
  $input: CreatePronounInput!
  $condition: ModelPronounConditionInput
) {
  createPronoun(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePronounMutationVariables,
  APITypes.CreatePronounMutation
>;
export const updatePronoun = /* GraphQL */ `mutation UpdatePronoun(
  $input: UpdatePronounInput!
  $condition: ModelPronounConditionInput
) {
  updatePronoun(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePronounMutationVariables,
  APITypes.UpdatePronounMutation
>;
export const deletePronoun = /* GraphQL */ `mutation DeletePronoun(
  $input: DeletePronounInput!
  $condition: ModelPronounConditionInput
) {
  deletePronoun(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePronounMutationVariables,
  APITypes.DeletePronounMutation
>;
export const createSexualOrientation = /* GraphQL */ `mutation CreateSexualOrientation(
  $input: CreateSexualOrientationInput!
  $condition: ModelSexualOrientationConditionInput
) {
  createSexualOrientation(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSexualOrientationMutationVariables,
  APITypes.CreateSexualOrientationMutation
>;
export const updateSexualOrientation = /* GraphQL */ `mutation UpdateSexualOrientation(
  $input: UpdateSexualOrientationInput!
  $condition: ModelSexualOrientationConditionInput
) {
  updateSexualOrientation(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSexualOrientationMutationVariables,
  APITypes.UpdateSexualOrientationMutation
>;
export const deleteSexualOrientation = /* GraphQL */ `mutation DeleteSexualOrientation(
  $input: DeleteSexualOrientationInput!
  $condition: ModelSexualOrientationConditionInput
) {
  deleteSexualOrientation(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSexualOrientationMutationVariables,
  APITypes.DeleteSexualOrientationMutation
>;
export const createLanguage = /* GraphQL */ `mutation CreateLanguage(
  $input: CreateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  createLanguage(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLanguageMutationVariables,
  APITypes.CreateLanguageMutation
>;
export const updateLanguage = /* GraphQL */ `mutation UpdateLanguage(
  $input: UpdateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  updateLanguage(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLanguageMutationVariables,
  APITypes.UpdateLanguageMutation
>;
export const deleteLanguage = /* GraphQL */ `mutation DeleteLanguage(
  $input: DeleteLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  deleteLanguage(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLanguageMutationVariables,
  APITypes.DeleteLanguageMutation
>;
export const createLanguageUser = /* GraphQL */ `mutation CreateLanguageUser(
  $input: CreateLanguageUserInput!
  $condition: ModelLanguageUserConditionInput
) {
  createLanguageUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    languageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLanguageUserMutationVariables,
  APITypes.CreateLanguageUserMutation
>;
export const updateLanguageUser = /* GraphQL */ `mutation UpdateLanguageUser(
  $input: UpdateLanguageUserInput!
  $condition: ModelLanguageUserConditionInput
) {
  updateLanguageUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    languageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLanguageUserMutationVariables,
  APITypes.UpdateLanguageUserMutation
>;
export const deleteLanguageUser = /* GraphQL */ `mutation DeleteLanguageUser(
  $input: DeleteLanguageUserInput!
  $condition: ModelLanguageUserConditionInput
) {
  deleteLanguageUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    languageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLanguageUserMutationVariables,
  APITypes.DeleteLanguageUserMutation
>;
export const createMatch = /* GraphQL */ `mutation CreateMatch(
  $input: CreateMatchInput!
  $condition: ModelMatchConditionInput
) {
  createMatch(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    isReported
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMatchMutationVariables,
  APITypes.CreateMatchMutation
>;
export const updateMatch = /* GraphQL */ `mutation UpdateMatch(
  $input: UpdateMatchInput!
  $condition: ModelMatchConditionInput
) {
  updateMatch(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    isReported
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMatchMutationVariables,
  APITypes.UpdateMatchMutation
>;
export const deleteMatch = /* GraphQL */ `mutation DeleteMatch(
  $input: DeleteMatchInput!
  $condition: ModelMatchConditionInput
) {
  deleteMatch(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    isReported
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMatchMutationVariables,
  APITypes.DeleteMatchMutation
>;
export const createPhoto = /* GraphQL */ `mutation CreatePhoto(
  $input: CreatePhotoInput!
  $condition: ModelPhotoConditionInput
) {
  createPhoto(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePhotoMutationVariables,
  APITypes.CreatePhotoMutation
>;
export const updatePhoto = /* GraphQL */ `mutation UpdatePhoto(
  $input: UpdatePhotoInput!
  $condition: ModelPhotoConditionInput
) {
  updatePhoto(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePhotoMutationVariables,
  APITypes.UpdatePhotoMutation
>;
export const deletePhoto = /* GraphQL */ `mutation DeletePhoto(
  $input: DeletePhotoInput!
  $condition: ModelPhotoConditionInput
) {
  deletePhoto(input: $input, condition: $condition) {
    id
    name
    sortOrder
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePhotoMutationVariables,
  APITypes.DeletePhotoMutation
>;
export const createPhotoUser = /* GraphQL */ `mutation CreatePhotoUser(
  $input: CreatePhotoUserInput!
  $condition: ModelPhotoUserConditionInput
) {
  createPhotoUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    photo {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    photoID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePhotoUserMutationVariables,
  APITypes.CreatePhotoUserMutation
>;
export const updatePhotoUser = /* GraphQL */ `mutation UpdatePhotoUser(
  $input: UpdatePhotoUserInput!
  $condition: ModelPhotoUserConditionInput
) {
  updatePhotoUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    photo {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    photoID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePhotoUserMutationVariables,
  APITypes.UpdatePhotoUserMutation
>;
export const deletePhotoUser = /* GraphQL */ `mutation DeletePhotoUser(
  $input: DeletePhotoUserInput!
  $condition: ModelPhotoUserConditionInput
) {
  deletePhotoUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    photo {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    photoID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePhotoUserMutationVariables,
  APITypes.DeletePhotoUserMutation
>;
export const createStory = /* GraphQL */ `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStoryMutationVariables,
  APITypes.CreateStoryMutation
>;
export const updateStory = /* GraphQL */ `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStoryMutationVariables,
  APITypes.UpdateStoryMutation
>;
export const deleteStory = /* GraphQL */ `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStoryMutationVariables,
  APITypes.DeleteStoryMutation
>;
export const createStoryUser = /* GraphQL */ `mutation CreateStoryUser(
  $input: CreateStoryUserInput!
  $condition: ModelStoryUserConditionInput
) {
  createStoryUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    story {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    storyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStoryUserMutationVariables,
  APITypes.CreateStoryUserMutation
>;
export const updateStoryUser = /* GraphQL */ `mutation UpdateStoryUser(
  $input: UpdateStoryUserInput!
  $condition: ModelStoryUserConditionInput
) {
  updateStoryUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    story {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    storyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStoryUserMutationVariables,
  APITypes.UpdateStoryUserMutation
>;
export const deleteStoryUser = /* GraphQL */ `mutation DeleteStoryUser(
  $input: DeleteStoryUserInput!
  $condition: ModelStoryUserConditionInput
) {
  deleteStoryUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    story {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    storyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStoryUserMutationVariables,
  APITypes.DeleteStoryUserMutation
>;
export const createDay = /* GraphQL */ `mutation CreateDay(
  $input: CreateDayInput!
  $condition: ModelDayConditionInput
) {
  createDay(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    day
    position
    question
    response
    questionCategory
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDayMutationVariables,
  APITypes.CreateDayMutation
>;
export const updateDay = /* GraphQL */ `mutation UpdateDay(
  $input: UpdateDayInput!
  $condition: ModelDayConditionInput
) {
  updateDay(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    day
    position
    question
    response
    questionCategory
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDayMutationVariables,
  APITypes.UpdateDayMutation
>;
export const deleteDay = /* GraphQL */ `mutation DeleteDay(
  $input: DeleteDayInput!
  $condition: ModelDayConditionInput
) {
  deleteDay(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    day
    position
    question
    response
    questionCategory
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDayMutationVariables,
  APITypes.DeleteDayMutation
>;
export const createMentalHealthUser = /* GraphQL */ `mutation CreateMentalHealthUser(
  $input: CreateMentalHealthUserInput!
  $condition: ModelMentalHealthUserConditionInput
) {
  createMentalHealthUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMentalHealthUserMutationVariables,
  APITypes.CreateMentalHealthUserMutation
>;
export const updateMentalHealthUser = /* GraphQL */ `mutation UpdateMentalHealthUser(
  $input: UpdateMentalHealthUserInput!
  $condition: ModelMentalHealthUserConditionInput
) {
  updateMentalHealthUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMentalHealthUserMutationVariables,
  APITypes.UpdateMentalHealthUserMutation
>;
export const deleteMentalHealthUser = /* GraphQL */ `mutation DeleteMentalHealthUser(
  $input: DeleteMentalHealthUserInput!
  $condition: ModelMentalHealthUserConditionInput
) {
  deleteMentalHealthUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMentalHealthUserMutationVariables,
  APITypes.DeleteMentalHealthUserMutation
>;
export const createEnergyUser = /* GraphQL */ `mutation CreateEnergyUser(
  $input: CreateEnergyUserInput!
  $condition: ModelEnergyUserConditionInput
) {
  createEnergyUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEnergyUserMutationVariables,
  APITypes.CreateEnergyUserMutation
>;
export const updateEnergyUser = /* GraphQL */ `mutation UpdateEnergyUser(
  $input: UpdateEnergyUserInput!
  $condition: ModelEnergyUserConditionInput
) {
  updateEnergyUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEnergyUserMutationVariables,
  APITypes.UpdateEnergyUserMutation
>;
export const deleteEnergyUser = /* GraphQL */ `mutation DeleteEnergyUser(
  $input: DeleteEnergyUserInput!
  $condition: ModelEnergyUserConditionInput
) {
  deleteEnergyUser(input: $input, condition: $condition) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEnergyUserMutationVariables,
  APITypes.DeleteEnergyUserMutation
>;
export const createCheckInQuestion = /* GraphQL */ `mutation CreateCheckInQuestion(
  $input: CreateCheckInQuestionInput!
  $condition: ModelCheckInQuestionConditionInput
) {
  createCheckInQuestion(input: $input, condition: $condition) {
    id
    day
    sortOrder
    title
    question
    quote
    checkInQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionThemeID
    checkInQuestionTheme {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionContentCategoryId
    checkInQuestionContentCategoryName
    checkInQuestionTypeID
    checkInQuestionType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    responses
    author
    dayImage
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInQuestionMutationVariables,
  APITypes.CreateCheckInQuestionMutation
>;
export const updateCheckInQuestion = /* GraphQL */ `mutation UpdateCheckInQuestion(
  $input: UpdateCheckInQuestionInput!
  $condition: ModelCheckInQuestionConditionInput
) {
  updateCheckInQuestion(input: $input, condition: $condition) {
    id
    day
    sortOrder
    title
    question
    quote
    checkInQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionThemeID
    checkInQuestionTheme {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionContentCategoryId
    checkInQuestionContentCategoryName
    checkInQuestionTypeID
    checkInQuestionType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    responses
    author
    dayImage
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInQuestionMutationVariables,
  APITypes.UpdateCheckInQuestionMutation
>;
export const deleteCheckInQuestion = /* GraphQL */ `mutation DeleteCheckInQuestion(
  $input: DeleteCheckInQuestionInput!
  $condition: ModelCheckInQuestionConditionInput
) {
  deleteCheckInQuestion(input: $input, condition: $condition) {
    id
    day
    sortOrder
    title
    question
    quote
    checkInQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionThemeID
    checkInQuestionTheme {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    checkInQuestionContentCategoryId
    checkInQuestionContentCategoryName
    checkInQuestionTypeID
    checkInQuestionType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    responses
    author
    dayImage
    users {
      nextToken
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInQuestionMutationVariables,
  APITypes.DeleteCheckInQuestionMutation
>;
export const createCheckInQuestionCategory = /* GraphQL */ `mutation CreateCheckInQuestionCategory(
  $input: CreateCheckInQuestionCategoryInput!
  $condition: ModelCheckInQuestionCategoryConditionInput
) {
  createCheckInQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInQuestionCategoryMutationVariables,
  APITypes.CreateCheckInQuestionCategoryMutation
>;
export const updateCheckInQuestionCategory = /* GraphQL */ `mutation UpdateCheckInQuestionCategory(
  $input: UpdateCheckInQuestionCategoryInput!
  $condition: ModelCheckInQuestionCategoryConditionInput
) {
  updateCheckInQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInQuestionCategoryMutationVariables,
  APITypes.UpdateCheckInQuestionCategoryMutation
>;
export const deleteCheckInQuestionCategory = /* GraphQL */ `mutation DeleteCheckInQuestionCategory(
  $input: DeleteCheckInQuestionCategoryInput!
  $condition: ModelCheckInQuestionCategoryConditionInput
) {
  deleteCheckInQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInQuestionCategoryMutationVariables,
  APITypes.DeleteCheckInQuestionCategoryMutation
>;
export const createCheckInQuestionTheme = /* GraphQL */ `mutation CreateCheckInQuestionTheme(
  $input: CreateCheckInQuestionThemeInput!
  $condition: ModelCheckInQuestionThemeConditionInput
) {
  createCheckInQuestionTheme(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInQuestionThemeMutationVariables,
  APITypes.CreateCheckInQuestionThemeMutation
>;
export const updateCheckInQuestionTheme = /* GraphQL */ `mutation UpdateCheckInQuestionTheme(
  $input: UpdateCheckInQuestionThemeInput!
  $condition: ModelCheckInQuestionThemeConditionInput
) {
  updateCheckInQuestionTheme(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInQuestionThemeMutationVariables,
  APITypes.UpdateCheckInQuestionThemeMutation
>;
export const deleteCheckInQuestionTheme = /* GraphQL */ `mutation DeleteCheckInQuestionTheme(
  $input: DeleteCheckInQuestionThemeInput!
  $condition: ModelCheckInQuestionThemeConditionInput
) {
  deleteCheckInQuestionTheme(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInQuestionThemeMutationVariables,
  APITypes.DeleteCheckInQuestionThemeMutation
>;
export const createCheckInQuestionType = /* GraphQL */ `mutation CreateCheckInQuestionType(
  $input: CreateCheckInQuestionTypeInput!
  $condition: ModelCheckInQuestionTypeConditionInput
) {
  createCheckInQuestionType(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInQuestionTypeMutationVariables,
  APITypes.CreateCheckInQuestionTypeMutation
>;
export const updateCheckInQuestionType = /* GraphQL */ `mutation UpdateCheckInQuestionType(
  $input: UpdateCheckInQuestionTypeInput!
  $condition: ModelCheckInQuestionTypeConditionInput
) {
  updateCheckInQuestionType(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInQuestionTypeMutationVariables,
  APITypes.UpdateCheckInQuestionTypeMutation
>;
export const deleteCheckInQuestionType = /* GraphQL */ `mutation DeleteCheckInQuestionType(
  $input: DeleteCheckInQuestionTypeInput!
  $condition: ModelCheckInQuestionTypeConditionInput
) {
  deleteCheckInQuestionType(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInQuestionTypeMutationVariables,
  APITypes.DeleteCheckInQuestionTypeMutation
>;
export const createCheckInQuestionUser = /* GraphQL */ `mutation CreateCheckInQuestionUser(
  $input: CreateCheckInQuestionUserInput!
  $condition: ModelCheckInQuestionUserConditionInput
) {
  createCheckInQuestionUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      day
      sortOrder
      title
      question
      quote
      checkInQuestionCategoryID
      checkInQuestionThemeID
      checkInQuestionContentCategoryId
      checkInQuestionContentCategoryName
      checkInQuestionTypeID
      responses
      author
      dayImage
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    checkInQuestionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInQuestionUserMutationVariables,
  APITypes.CreateCheckInQuestionUserMutation
>;
export const updateCheckInQuestionUser = /* GraphQL */ `mutation UpdateCheckInQuestionUser(
  $input: UpdateCheckInQuestionUserInput!
  $condition: ModelCheckInQuestionUserConditionInput
) {
  updateCheckInQuestionUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      day
      sortOrder
      title
      question
      quote
      checkInQuestionCategoryID
      checkInQuestionThemeID
      checkInQuestionContentCategoryId
      checkInQuestionContentCategoryName
      checkInQuestionTypeID
      responses
      author
      dayImage
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    checkInQuestionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInQuestionUserMutationVariables,
  APITypes.UpdateCheckInQuestionUserMutation
>;
export const deleteCheckInQuestionUser = /* GraphQL */ `mutation DeleteCheckInQuestionUser(
  $input: DeleteCheckInQuestionUserInput!
  $condition: ModelCheckInQuestionUserConditionInput
) {
  deleteCheckInQuestionUser(input: $input, condition: $condition) {
    id
    user {
      id
      firstName
      lastName
      phone
      email
      emailCommunication
      birthdate
      gender
      isGenderVisible
      sexualOrientation
      isSexualOrientationVisible
      value
      location
      isLocationVisible
      mentalHealth
      quality
      energy
      starSign
      isStarSignVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      genderPreferences
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      wantChildrenStatus
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevel
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreference
      isDrinkPreferenceVisible
      tobaccoPreference
      isTobaccoPreferenceVisible
      drugPreference
      isDrugPreferenceVisible
      therapyPreference
      isTherapyPreferenceVisible
      eatingPreferences
      areEatingPreferencesVisible
      exercisePreferenceID
      exercisePreference
      isExercisePreferenceVisible
      sleepingHabit
      isSleepingHabitVisible
      hometown
      isHometownVisible
      prompts
      userMainPhoto
      defaultUserPhoto
      bio
      discoveringYou
      isUserActive
      isUserVerified
      isUserOnboarded
      isUserPaused
      isProfileComplete
      isHabitsComplete
      isOnboardingStarted
      onboardingStep
      signUpStep
      isSignUpComplete
      dailyReflectionReminderType
      dailyReflectionReminderFrequency
      dailyReflectionNotificationTime
      isDailyReflectionNotificationEnabled
      timeOffset
      isNewConnectionsNotificationPushActive
      isNewConnectionsNotificationEmailActive
      newMessagesNotificationType
      isNewMessagesNotificationEnabled
      streamToken
      oneSignalUserId
      activeConnections
      userDailyConnections
      connectionsUpdatedOn
      reflectionCompletedOn
      createdAt
      updatedAt
      __typename
    }
    language {
      id
      day
      sortOrder
      title
      question
      quote
      checkInQuestionCategoryID
      checkInQuestionThemeID
      checkInQuestionContentCategoryId
      checkInQuestionContentCategoryName
      checkInQuestionTypeID
      responses
      author
      dayImage
      isActive
      createdAt
      updatedAt
      __typename
    }
    userID
    checkInQuestionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInQuestionUserMutationVariables,
  APITypes.DeleteCheckInQuestionUserMutation
>;
export const createIceBreakerQuestion = /* GraphQL */ `mutation CreateIceBreakerQuestion(
  $input: CreateIceBreakerQuestionInput!
  $condition: ModelIceBreakerQuestionConditionInput
) {
  createIceBreakerQuestion(input: $input, condition: $condition) {
    id
    question
    iceBreakerQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIceBreakerQuestionMutationVariables,
  APITypes.CreateIceBreakerQuestionMutation
>;
export const updateIceBreakerQuestion = /* GraphQL */ `mutation UpdateIceBreakerQuestion(
  $input: UpdateIceBreakerQuestionInput!
  $condition: ModelIceBreakerQuestionConditionInput
) {
  updateIceBreakerQuestion(input: $input, condition: $condition) {
    id
    question
    iceBreakerQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIceBreakerQuestionMutationVariables,
  APITypes.UpdateIceBreakerQuestionMutation
>;
export const deleteIceBreakerQuestion = /* GraphQL */ `mutation DeleteIceBreakerQuestion(
  $input: DeleteIceBreakerQuestionInput!
  $condition: ModelIceBreakerQuestionConditionInput
) {
  deleteIceBreakerQuestion(input: $input, condition: $condition) {
    id
    question
    iceBreakerQuestionCategoryID
    checkInQuestionCategory {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIceBreakerQuestionMutationVariables,
  APITypes.DeleteIceBreakerQuestionMutation
>;
export const createIceBreakerQuestionCategory = /* GraphQL */ `mutation CreateIceBreakerQuestionCategory(
  $input: CreateIceBreakerQuestionCategoryInput!
  $condition: ModelIceBreakerQuestionCategoryConditionInput
) {
  createIceBreakerQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIceBreakerQuestionCategoryMutationVariables,
  APITypes.CreateIceBreakerQuestionCategoryMutation
>;
export const updateIceBreakerQuestionCategory = /* GraphQL */ `mutation UpdateIceBreakerQuestionCategory(
  $input: UpdateIceBreakerQuestionCategoryInput!
  $condition: ModelIceBreakerQuestionCategoryConditionInput
) {
  updateIceBreakerQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIceBreakerQuestionCategoryMutationVariables,
  APITypes.UpdateIceBreakerQuestionCategoryMutation
>;
export const deleteIceBreakerQuestionCategory = /* GraphQL */ `mutation DeleteIceBreakerQuestionCategory(
  $input: DeleteIceBreakerQuestionCategoryInput!
  $condition: ModelIceBreakerQuestionCategoryConditionInput
) {
  deleteIceBreakerQuestionCategory(input: $input, condition: $condition) {
    id
    name
    isActive
    question {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIceBreakerQuestionCategoryMutationVariables,
  APITypes.DeleteIceBreakerQuestionCategoryMutation
>;
export const createEatingPreference = /* GraphQL */ `mutation CreateEatingPreference(
  $input: CreateEatingPreferenceInput!
  $condition: ModelEatingPreferenceConditionInput
) {
  createEatingPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEatingPreferenceMutationVariables,
  APITypes.CreateEatingPreferenceMutation
>;
export const updateEatingPreference = /* GraphQL */ `mutation UpdateEatingPreference(
  $input: UpdateEatingPreferenceInput!
  $condition: ModelEatingPreferenceConditionInput
) {
  updateEatingPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEatingPreferenceMutationVariables,
  APITypes.UpdateEatingPreferenceMutation
>;
export const deleteEatingPreference = /* GraphQL */ `mutation DeleteEatingPreference(
  $input: DeleteEatingPreferenceInput!
  $condition: ModelEatingPreferenceConditionInput
) {
  deleteEatingPreference(input: $input, condition: $condition) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEatingPreferenceMutationVariables,
  APITypes.DeleteEatingPreferenceMutation
>;
export const createQuote = /* GraphQL */ `mutation CreateQuote(
  $input: CreateQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  createQuote(input: $input, condition: $condition) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuoteMutationVariables,
  APITypes.CreateQuoteMutation
>;
export const updateQuote = /* GraphQL */ `mutation UpdateQuote(
  $input: UpdateQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  updateQuote(input: $input, condition: $condition) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuoteMutationVariables,
  APITypes.UpdateQuoteMutation
>;
export const deleteQuote = /* GraphQL */ `mutation DeleteQuote(
  $input: DeleteQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  deleteQuote(input: $input, condition: $condition) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuoteMutationVariables,
  APITypes.DeleteQuoteMutation
>;
export const createAuthor = /* GraphQL */ `mutation CreateAuthor(
  $input: CreateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  createAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    image
    isActive
    contents {
      nextToken
      __typename
    }
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorMutationVariables,
  APITypes.CreateAuthorMutation
>;
export const updateAuthor = /* GraphQL */ `mutation UpdateAuthor(
  $input: UpdateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  updateAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    image
    isActive
    contents {
      nextToken
      __typename
    }
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorMutationVariables,
  APITypes.UpdateAuthorMutation
>;
export const deleteAuthor = /* GraphQL */ `mutation DeleteAuthor(
  $input: DeleteAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  deleteAuthor(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    image
    isActive
    contents {
      nextToken
      __typename
    }
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorMutationVariables,
  APITypes.DeleteAuthorMutation
>;
export const createContent = /* GraphQL */ `mutation CreateContent(
  $input: CreateContentInput!
  $condition: ModelContentConditionInput
) {
  createContent(input: $input, condition: $condition) {
    id
    name
    contentCategoryId
    contentCategory {
      id
      name
      description
      dashboardImage
      internalPageHeaderImage
      progressionCardDotImage
      reflectionQuestionBackgroundImage
      inDashboard
      reflectionQuestionsGradientValues
      contentPageGradientValues
      isActive
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    contentTypeId
    contentType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    authorId
    author {
      id
      firstName
      lastName
      description
      image
      isActive
      createdAt
      updatedAt
      __typename
    }
    media
    mediaDuration
    animatedGif
    image
    title
    subTitle
    text
    day
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentMutationVariables,
  APITypes.CreateContentMutation
>;
export const updateContent = /* GraphQL */ `mutation UpdateContent(
  $input: UpdateContentInput!
  $condition: ModelContentConditionInput
) {
  updateContent(input: $input, condition: $condition) {
    id
    name
    contentCategoryId
    contentCategory {
      id
      name
      description
      dashboardImage
      internalPageHeaderImage
      progressionCardDotImage
      reflectionQuestionBackgroundImage
      inDashboard
      reflectionQuestionsGradientValues
      contentPageGradientValues
      isActive
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    contentTypeId
    contentType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    authorId
    author {
      id
      firstName
      lastName
      description
      image
      isActive
      createdAt
      updatedAt
      __typename
    }
    media
    mediaDuration
    animatedGif
    image
    title
    subTitle
    text
    day
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentMutationVariables,
  APITypes.UpdateContentMutation
>;
export const deleteContent = /* GraphQL */ `mutation DeleteContent(
  $input: DeleteContentInput!
  $condition: ModelContentConditionInput
) {
  deleteContent(input: $input, condition: $condition) {
    id
    name
    contentCategoryId
    contentCategory {
      id
      name
      description
      dashboardImage
      internalPageHeaderImage
      progressionCardDotImage
      reflectionQuestionBackgroundImage
      inDashboard
      reflectionQuestionsGradientValues
      contentPageGradientValues
      isActive
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    contentTypeId
    contentType {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    authorId
    author {
      id
      firstName
      lastName
      description
      image
      isActive
      createdAt
      updatedAt
      __typename
    }
    media
    mediaDuration
    animatedGif
    image
    title
    subTitle
    text
    day
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentMutationVariables,
  APITypes.DeleteContentMutation
>;
export const createContentCategoryDayImage = /* GraphQL */ `mutation CreateContentCategoryDayImage(
  $input: CreateContentCategoryDayImageInput!
  $condition: ModelContentCategoryDayImageConditionInput
) {
  createContentCategoryDayImage(input: $input, condition: $condition) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentCategoryDayImageMutationVariables,
  APITypes.CreateContentCategoryDayImageMutation
>;
export const updateContentCategoryDayImage = /* GraphQL */ `mutation UpdateContentCategoryDayImage(
  $input: UpdateContentCategoryDayImageInput!
  $condition: ModelContentCategoryDayImageConditionInput
) {
  updateContentCategoryDayImage(input: $input, condition: $condition) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentCategoryDayImageMutationVariables,
  APITypes.UpdateContentCategoryDayImageMutation
>;
export const deleteContentCategoryDayImage = /* GraphQL */ `mutation DeleteContentCategoryDayImage(
  $input: DeleteContentCategoryDayImageInput!
  $condition: ModelContentCategoryDayImageConditionInput
) {
  deleteContentCategoryDayImage(input: $input, condition: $condition) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentCategoryDayImageMutationVariables,
  APITypes.DeleteContentCategoryDayImageMutation
>;
export const createContentCategory = /* GraphQL */ `mutation CreateContentCategory(
  $input: CreateContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  createContentCategory(input: $input, condition: $condition) {
    id
    name
    description
    dashboardImage
    internalPageHeaderImage
    progressionCardDotImage
    reflectionQuestionBackgroundImage
    inDashboard
    reflectionQuestionsGradientValues
    contentPageGradientValues
    isActive
    contents {
      nextToken
      __typename
    }
    dayImages {
      nextToken
      __typename
    }
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentCategoryMutationVariables,
  APITypes.CreateContentCategoryMutation
>;
export const updateContentCategory = /* GraphQL */ `mutation UpdateContentCategory(
  $input: UpdateContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  updateContentCategory(input: $input, condition: $condition) {
    id
    name
    description
    dashboardImage
    internalPageHeaderImage
    progressionCardDotImage
    reflectionQuestionBackgroundImage
    inDashboard
    reflectionQuestionsGradientValues
    contentPageGradientValues
    isActive
    contents {
      nextToken
      __typename
    }
    dayImages {
      nextToken
      __typename
    }
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentCategoryMutationVariables,
  APITypes.UpdateContentCategoryMutation
>;
export const deleteContentCategory = /* GraphQL */ `mutation DeleteContentCategory(
  $input: DeleteContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  deleteContentCategory(input: $input, condition: $condition) {
    id
    name
    description
    dashboardImage
    internalPageHeaderImage
    progressionCardDotImage
    reflectionQuestionBackgroundImage
    inDashboard
    reflectionQuestionsGradientValues
    contentPageGradientValues
    isActive
    contents {
      nextToken
      __typename
    }
    dayImages {
      nextToken
      __typename
    }
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentCategoryMutationVariables,
  APITypes.DeleteContentCategoryMutation
>;
export const createContentType = /* GraphQL */ `mutation CreateContentType(
  $input: CreateContentTypeInput!
  $condition: ModelContentTypeConditionInput
) {
  createContentType(input: $input, condition: $condition) {
    id
    name
    isActive
    contents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentTypeMutationVariables,
  APITypes.CreateContentTypeMutation
>;
export const updateContentType = /* GraphQL */ `mutation UpdateContentType(
  $input: UpdateContentTypeInput!
  $condition: ModelContentTypeConditionInput
) {
  updateContentType(input: $input, condition: $condition) {
    id
    name
    isActive
    contents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentTypeMutationVariables,
  APITypes.UpdateContentTypeMutation
>;
export const deleteContentType = /* GraphQL */ `mutation DeleteContentType(
  $input: DeleteContentTypeInput!
  $condition: ModelContentTypeConditionInput
) {
  deleteContentType(input: $input, condition: $condition) {
    id
    name
    isActive
    contents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentTypeMutationVariables,
  APITypes.DeleteContentTypeMutation
>;
export const createPrompt = /* GraphQL */ `mutation CreatePrompt(
  $input: CreatePromptInput!
  $condition: ModelPromptConditionInput
) {
  createPrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePromptMutationVariables,
  APITypes.CreatePromptMutation
>;
export const updatePrompt = /* GraphQL */ `mutation UpdatePrompt(
  $input: UpdatePromptInput!
  $condition: ModelPromptConditionInput
) {
  updatePrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePromptMutationVariables,
  APITypes.UpdatePromptMutation
>;
export const deletePrompt = /* GraphQL */ `mutation DeletePrompt(
  $input: DeletePromptInput!
  $condition: ModelPromptConditionInput
) {
  deletePrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePromptMutationVariables,
  APITypes.DeletePromptMutation
>;
export const createPromptCategory = /* GraphQL */ `mutation CreatePromptCategory(
  $input: CreatePromptCategoryInput!
  $condition: ModelPromptCategoryConditionInput
) {
  createPromptCategory(input: $input, condition: $condition) {
    id
    promptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePromptCategoryMutationVariables,
  APITypes.CreatePromptCategoryMutation
>;
export const updatePromptCategory = /* GraphQL */ `mutation UpdatePromptCategory(
  $input: UpdatePromptCategoryInput!
  $condition: ModelPromptCategoryConditionInput
) {
  updatePromptCategory(input: $input, condition: $condition) {
    id
    promptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePromptCategoryMutationVariables,
  APITypes.UpdatePromptCategoryMutation
>;
export const deletePromptCategory = /* GraphQL */ `mutation DeletePromptCategory(
  $input: DeletePromptCategoryInput!
  $condition: ModelPromptCategoryConditionInput
) {
  deletePromptCategory(input: $input, condition: $condition) {
    id
    promptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePromptCategoryMutationVariables,
  APITypes.DeletePromptCategoryMutation
>;
export const createChatPrompt = /* GraphQL */ `mutation CreateChatPrompt(
  $input: CreateChatPromptInput!
  $condition: ModelChatPromptConditionInput
) {
  createChatPrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatPromptMutationVariables,
  APITypes.CreateChatPromptMutation
>;
export const updateChatPrompt = /* GraphQL */ `mutation UpdateChatPrompt(
  $input: UpdateChatPromptInput!
  $condition: ModelChatPromptConditionInput
) {
  updateChatPrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatPromptMutationVariables,
  APITypes.UpdateChatPromptMutation
>;
export const deleteChatPrompt = /* GraphQL */ `mutation DeleteChatPrompt(
  $input: DeleteChatPromptInput!
  $condition: ModelChatPromptConditionInput
) {
  deleteChatPrompt(input: $input, condition: $condition) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatPromptMutationVariables,
  APITypes.DeleteChatPromptMutation
>;
export const createChatPromptCategory = /* GraphQL */ `mutation CreateChatPromptCategory(
  $input: CreateChatPromptCategoryInput!
  $condition: ModelChatPromptCategoryConditionInput
) {
  createChatPromptCategory(input: $input, condition: $condition) {
    id
    chatPromptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatPromptCategoryMutationVariables,
  APITypes.CreateChatPromptCategoryMutation
>;
export const updateChatPromptCategory = /* GraphQL */ `mutation UpdateChatPromptCategory(
  $input: UpdateChatPromptCategoryInput!
  $condition: ModelChatPromptCategoryConditionInput
) {
  updateChatPromptCategory(input: $input, condition: $condition) {
    id
    chatPromptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatPromptCategoryMutationVariables,
  APITypes.UpdateChatPromptCategoryMutation
>;
export const deleteChatPromptCategory = /* GraphQL */ `mutation DeleteChatPromptCategory(
  $input: DeleteChatPromptCategoryInput!
  $condition: ModelChatPromptCategoryConditionInput
) {
  deleteChatPromptCategory(input: $input, condition: $condition) {
    id
    chatPromptCategoryId
    name
    isActive
    prompts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatPromptCategoryMutationVariables,
  APITypes.DeleteChatPromptCategoryMutation
>;
export const createFeedbackUser = /* GraphQL */ `mutation CreateFeedbackUser(
  $input: CreateFeedbackUserInput!
  $condition: ModelFeedbackUserConditionInput
) {
  createFeedbackUser(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackUserMutationVariables,
  APITypes.CreateFeedbackUserMutation
>;
export const updateFeedbackUser = /* GraphQL */ `mutation UpdateFeedbackUser(
  $input: UpdateFeedbackUserInput!
  $condition: ModelFeedbackUserConditionInput
) {
  updateFeedbackUser(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackUserMutationVariables,
  APITypes.UpdateFeedbackUserMutation
>;
export const deleteFeedbackUser = /* GraphQL */ `mutation DeleteFeedbackUser(
  $input: DeleteFeedbackUserInput!
  $condition: ModelFeedbackUserConditionInput
) {
  deleteFeedbackUser(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackUserMutationVariables,
  APITypes.DeleteFeedbackUserMutation
>;
export const createFeedbackTester = /* GraphQL */ `mutation CreateFeedbackTester(
  $input: CreateFeedbackTesterInput!
  $condition: ModelFeedbackTesterConditionInput
) {
  createFeedbackTester(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackTesterMutationVariables,
  APITypes.CreateFeedbackTesterMutation
>;
export const updateFeedbackTester = /* GraphQL */ `mutation UpdateFeedbackTester(
  $input: UpdateFeedbackTesterInput!
  $condition: ModelFeedbackTesterConditionInput
) {
  updateFeedbackTester(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackTesterMutationVariables,
  APITypes.UpdateFeedbackTesterMutation
>;
export const deleteFeedbackTester = /* GraphQL */ `mutation DeleteFeedbackTester(
  $input: DeleteFeedbackTesterInput!
  $condition: ModelFeedbackTesterConditionInput
) {
  deleteFeedbackTester(input: $input, condition: $condition) {
    id
    feedback
    screen
    imageName
    deviceInfo
    userName
    userEmail
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackTesterMutationVariables,
  APITypes.DeleteFeedbackTesterMutation
>;
export const createGeneralAppContent = /* GraphQL */ `mutation CreateGeneralAppContent(
  $input: CreateGeneralAppContentInput!
  $condition: ModelGeneralAppContentConditionInput
) {
  createGeneralAppContent(input: $input, condition: $condition) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGeneralAppContentMutationVariables,
  APITypes.CreateGeneralAppContentMutation
>;
export const updateGeneralAppContent = /* GraphQL */ `mutation UpdateGeneralAppContent(
  $input: UpdateGeneralAppContentInput!
  $condition: ModelGeneralAppContentConditionInput
) {
  updateGeneralAppContent(input: $input, condition: $condition) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGeneralAppContentMutationVariables,
  APITypes.UpdateGeneralAppContentMutation
>;
export const deleteGeneralAppContent = /* GraphQL */ `mutation DeleteGeneralAppContent(
  $input: DeleteGeneralAppContentInput!
  $condition: ModelGeneralAppContentConditionInput
) {
  deleteGeneralAppContent(input: $input, condition: $condition) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGeneralAppContentMutationVariables,
  APITypes.DeleteGeneralAppContentMutation
>;
export const createWaitlistUser = /* GraphQL */ `mutation CreateWaitlistUser(
  $input: CreateWaitlistUserInput!
  $condition: ModelWaitlistUserConditionInput
) {
  createWaitlistUser(input: $input, condition: $condition) {
    id
    email
    userCity
    userIP
    userCoordinates
    userInternetProvider
    userZipCode
    userState
    userTimeZone
    relationshipStatus
    isDistanceImportant
    deviceType
    additionalInfo
    cityState
    referralCode
    verificationLinkToken
    position
    ageRange
    gender
    genderPreference
    readyInterests
    howDidYouHearAboutUs
    helpReady
    features
    comments
    userDevice
    userPlatform
    userAppName
    userAppVersion
    userScreenSize
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWaitlistUserMutationVariables,
  APITypes.CreateWaitlistUserMutation
>;
export const updateWaitlistUser = /* GraphQL */ `mutation UpdateWaitlistUser(
  $input: UpdateWaitlistUserInput!
  $condition: ModelWaitlistUserConditionInput
) {
  updateWaitlistUser(input: $input, condition: $condition) {
    id
    email
    userCity
    userIP
    userCoordinates
    userInternetProvider
    userZipCode
    userState
    userTimeZone
    relationshipStatus
    isDistanceImportant
    deviceType
    additionalInfo
    cityState
    referralCode
    verificationLinkToken
    position
    ageRange
    gender
    genderPreference
    readyInterests
    howDidYouHearAboutUs
    helpReady
    features
    comments
    userDevice
    userPlatform
    userAppName
    userAppVersion
    userScreenSize
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWaitlistUserMutationVariables,
  APITypes.UpdateWaitlistUserMutation
>;
export const deleteWaitlistUser = /* GraphQL */ `mutation DeleteWaitlistUser(
  $input: DeleteWaitlistUserInput!
  $condition: ModelWaitlistUserConditionInput
) {
  deleteWaitlistUser(input: $input, condition: $condition) {
    id
    email
    userCity
    userIP
    userCoordinates
    userInternetProvider
    userZipCode
    userState
    userTimeZone
    relationshipStatus
    isDistanceImportant
    deviceType
    additionalInfo
    cityState
    referralCode
    verificationLinkToken
    position
    ageRange
    gender
    genderPreference
    readyInterests
    howDidYouHearAboutUs
    helpReady
    features
    comments
    userDevice
    userPlatform
    userAppName
    userAppVersion
    userScreenSize
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWaitlistUserMutationVariables,
  APITypes.DeleteWaitlistUserMutation
>;
