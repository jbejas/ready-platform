/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/index";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateLike = /* GraphQL */ `subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
  onCreateLike(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikeSubscriptionVariables,
  APITypes.OnCreateLikeSubscription
>;
export const onUpdateLike = /* GraphQL */ `subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
  onUpdateLike(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLikeSubscriptionVariables,
  APITypes.OnUpdateLikeSubscription
>;
export const onDeleteLike = /* GraphQL */ `subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
  onDeleteLike(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikeSubscriptionVariables,
  APITypes.OnDeleteLikeSubscription
>;
export const onCreateViewedConnection = /* GraphQL */ `subscription OnCreateViewedConnection(
  $filter: ModelSubscriptionViewedConnectionFilterInput
) {
  onCreateViewedConnection(filter: $filter) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateViewedConnectionSubscriptionVariables,
  APITypes.OnCreateViewedConnectionSubscription
>;
export const onUpdateViewedConnection = /* GraphQL */ `subscription OnUpdateViewedConnection(
  $filter: ModelSubscriptionViewedConnectionFilterInput
) {
  onUpdateViewedConnection(filter: $filter) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateViewedConnectionSubscriptionVariables,
  APITypes.OnUpdateViewedConnectionSubscription
>;
export const onDeleteViewedConnection = /* GraphQL */ `subscription OnDeleteViewedConnection(
  $filter: ModelSubscriptionViewedConnectionFilterInput
) {
  onDeleteViewedConnection(filter: $filter) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteViewedConnectionSubscriptionVariables,
  APITypes.OnDeleteViewedConnectionSubscription
>;
export const onCreateSleepingHabit = /* GraphQL */ `subscription OnCreateSleepingHabit(
  $filter: ModelSubscriptionSleepingHabitFilterInput
) {
  onCreateSleepingHabit(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSleepingHabitSubscriptionVariables,
  APITypes.OnCreateSleepingHabitSubscription
>;
export const onUpdateSleepingHabit = /* GraphQL */ `subscription OnUpdateSleepingHabit(
  $filter: ModelSubscriptionSleepingHabitFilterInput
) {
  onUpdateSleepingHabit(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSleepingHabitSubscriptionVariables,
  APITypes.OnUpdateSleepingHabitSubscription
>;
export const onDeleteSleepingHabit = /* GraphQL */ `subscription OnDeleteSleepingHabit(
  $filter: ModelSubscriptionSleepingHabitFilterInput
) {
  onDeleteSleepingHabit(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSleepingHabitSubscriptionVariables,
  APITypes.OnDeleteSleepingHabitSubscription
>;
export const onCreateExercisePreference = /* GraphQL */ `subscription OnCreateExercisePreference(
  $filter: ModelSubscriptionExercisePreferenceFilterInput
) {
  onCreateExercisePreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExercisePreferenceSubscriptionVariables,
  APITypes.OnCreateExercisePreferenceSubscription
>;
export const onUpdateExercisePreference = /* GraphQL */ `subscription OnUpdateExercisePreference(
  $filter: ModelSubscriptionExercisePreferenceFilterInput
) {
  onUpdateExercisePreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExercisePreferenceSubscriptionVariables,
  APITypes.OnUpdateExercisePreferenceSubscription
>;
export const onDeleteExercisePreference = /* GraphQL */ `subscription OnDeleteExercisePreference(
  $filter: ModelSubscriptionExercisePreferenceFilterInput
) {
  onDeleteExercisePreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExercisePreferenceSubscriptionVariables,
  APITypes.OnDeleteExercisePreferenceSubscription
>;
export const onCreateDrugPreference = /* GraphQL */ `subscription OnCreateDrugPreference(
  $filter: ModelSubscriptionDrugPreferenceFilterInput
) {
  onCreateDrugPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDrugPreferenceSubscriptionVariables,
  APITypes.OnCreateDrugPreferenceSubscription
>;
export const onUpdateDrugPreference = /* GraphQL */ `subscription OnUpdateDrugPreference(
  $filter: ModelSubscriptionDrugPreferenceFilterInput
) {
  onUpdateDrugPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDrugPreferenceSubscriptionVariables,
  APITypes.OnUpdateDrugPreferenceSubscription
>;
export const onDeleteDrugPreference = /* GraphQL */ `subscription OnDeleteDrugPreference(
  $filter: ModelSubscriptionDrugPreferenceFilterInput
) {
  onDeleteDrugPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDrugPreferenceSubscriptionVariables,
  APITypes.OnDeleteDrugPreferenceSubscription
>;
export const onCreateTobaccoPreference = /* GraphQL */ `subscription OnCreateTobaccoPreference(
  $filter: ModelSubscriptionTobaccoPreferenceFilterInput
) {
  onCreateTobaccoPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTobaccoPreferenceSubscriptionVariables,
  APITypes.OnCreateTobaccoPreferenceSubscription
>;
export const onUpdateTobaccoPreference = /* GraphQL */ `subscription OnUpdateTobaccoPreference(
  $filter: ModelSubscriptionTobaccoPreferenceFilterInput
) {
  onUpdateTobaccoPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTobaccoPreferenceSubscriptionVariables,
  APITypes.OnUpdateTobaccoPreferenceSubscription
>;
export const onDeleteTobaccoPreference = /* GraphQL */ `subscription OnDeleteTobaccoPreference(
  $filter: ModelSubscriptionTobaccoPreferenceFilterInput
) {
  onDeleteTobaccoPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTobaccoPreferenceSubscriptionVariables,
  APITypes.OnDeleteTobaccoPreferenceSubscription
>;
export const onCreateTherapyPreference = /* GraphQL */ `subscription OnCreateTherapyPreference(
  $filter: ModelSubscriptionTherapyPreferenceFilterInput
) {
  onCreateTherapyPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTherapyPreferenceSubscriptionVariables,
  APITypes.OnCreateTherapyPreferenceSubscription
>;
export const onUpdateTherapyPreference = /* GraphQL */ `subscription OnUpdateTherapyPreference(
  $filter: ModelSubscriptionTherapyPreferenceFilterInput
) {
  onUpdateTherapyPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTherapyPreferenceSubscriptionVariables,
  APITypes.OnUpdateTherapyPreferenceSubscription
>;
export const onDeleteTherapyPreference = /* GraphQL */ `subscription OnDeleteTherapyPreference(
  $filter: ModelSubscriptionTherapyPreferenceFilterInput
) {
  onDeleteTherapyPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTherapyPreferenceSubscriptionVariables,
  APITypes.OnDeleteTherapyPreferenceSubscription
>;
export const onCreateDrinkPreference = /* GraphQL */ `subscription OnCreateDrinkPreference(
  $filter: ModelSubscriptionDrinkPreferenceFilterInput
) {
  onCreateDrinkPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDrinkPreferenceSubscriptionVariables,
  APITypes.OnCreateDrinkPreferenceSubscription
>;
export const onUpdateDrinkPreference = /* GraphQL */ `subscription OnUpdateDrinkPreference(
  $filter: ModelSubscriptionDrinkPreferenceFilterInput
) {
  onUpdateDrinkPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDrinkPreferenceSubscriptionVariables,
  APITypes.OnUpdateDrinkPreferenceSubscription
>;
export const onDeleteDrinkPreference = /* GraphQL */ `subscription OnDeleteDrinkPreference(
  $filter: ModelSubscriptionDrinkPreferenceFilterInput
) {
  onDeleteDrinkPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDrinkPreferenceSubscriptionVariables,
  APITypes.OnDeleteDrinkPreferenceSubscription
>;
export const onCreateChildrenStatus = /* GraphQL */ `subscription OnCreateChildrenStatus(
  $filter: ModelSubscriptionChildrenStatusFilterInput
) {
  onCreateChildrenStatus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChildrenStatusSubscriptionVariables,
  APITypes.OnCreateChildrenStatusSubscription
>;
export const onUpdateChildrenStatus = /* GraphQL */ `subscription OnUpdateChildrenStatus(
  $filter: ModelSubscriptionChildrenStatusFilterInput
) {
  onUpdateChildrenStatus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChildrenStatusSubscriptionVariables,
  APITypes.OnUpdateChildrenStatusSubscription
>;
export const onDeleteChildrenStatus = /* GraphQL */ `subscription OnDeleteChildrenStatus(
  $filter: ModelSubscriptionChildrenStatusFilterInput
) {
  onDeleteChildrenStatus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChildrenStatusSubscriptionVariables,
  APITypes.OnDeleteChildrenStatusSubscription
>;
export const onCreateWantChildrenStatus = /* GraphQL */ `subscription OnCreateWantChildrenStatus(
  $filter: ModelSubscriptionWantChildrenStatusFilterInput
) {
  onCreateWantChildrenStatus(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWantChildrenStatusSubscriptionVariables,
  APITypes.OnCreateWantChildrenStatusSubscription
>;
export const onUpdateWantChildrenStatus = /* GraphQL */ `subscription OnUpdateWantChildrenStatus(
  $filter: ModelSubscriptionWantChildrenStatusFilterInput
) {
  onUpdateWantChildrenStatus(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWantChildrenStatusSubscriptionVariables,
  APITypes.OnUpdateWantChildrenStatusSubscription
>;
export const onDeleteWantChildrenStatus = /* GraphQL */ `subscription OnDeleteWantChildrenStatus(
  $filter: ModelSubscriptionWantChildrenStatusFilterInput
) {
  onDeleteWantChildrenStatus(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWantChildrenStatusSubscriptionVariables,
  APITypes.OnDeleteWantChildrenStatusSubscription
>;
export const onCreateEducationLevel = /* GraphQL */ `subscription OnCreateEducationLevel(
  $filter: ModelSubscriptionEducationLevelFilterInput
) {
  onCreateEducationLevel(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationLevelSubscriptionVariables,
  APITypes.OnCreateEducationLevelSubscription
>;
export const onUpdateEducationLevel = /* GraphQL */ `subscription OnUpdateEducationLevel(
  $filter: ModelSubscriptionEducationLevelFilterInput
) {
  onUpdateEducationLevel(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationLevelSubscriptionVariables,
  APITypes.OnUpdateEducationLevelSubscription
>;
export const onDeleteEducationLevel = /* GraphQL */ `subscription OnDeleteEducationLevel(
  $filter: ModelSubscriptionEducationLevelFilterInput
) {
  onDeleteEducationLevel(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationLevelSubscriptionVariables,
  APITypes.OnDeleteEducationLevelSubscription
>;
export const onCreateGender = /* GraphQL */ `subscription OnCreateGender($filter: ModelSubscriptionGenderFilterInput) {
  onCreateGender(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGenderSubscriptionVariables,
  APITypes.OnCreateGenderSubscription
>;
export const onUpdateGender = /* GraphQL */ `subscription OnUpdateGender($filter: ModelSubscriptionGenderFilterInput) {
  onUpdateGender(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGenderSubscriptionVariables,
  APITypes.OnUpdateGenderSubscription
>;
export const onDeleteGender = /* GraphQL */ `subscription OnDeleteGender($filter: ModelSubscriptionGenderFilterInput) {
  onDeleteGender(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGenderSubscriptionVariables,
  APITypes.OnDeleteGenderSubscription
>;
export const onCreateEthnicity = /* GraphQL */ `subscription OnCreateEthnicity($filter: ModelSubscriptionEthnicityFilterInput) {
  onCreateEthnicity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEthnicitySubscriptionVariables,
  APITypes.OnCreateEthnicitySubscription
>;
export const onUpdateEthnicity = /* GraphQL */ `subscription OnUpdateEthnicity($filter: ModelSubscriptionEthnicityFilterInput) {
  onUpdateEthnicity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEthnicitySubscriptionVariables,
  APITypes.OnUpdateEthnicitySubscription
>;
export const onDeleteEthnicity = /* GraphQL */ `subscription OnDeleteEthnicity($filter: ModelSubscriptionEthnicityFilterInput) {
  onDeleteEthnicity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEthnicitySubscriptionVariables,
  APITypes.OnDeleteEthnicitySubscription
>;
export const onCreateEthnicityUser = /* GraphQL */ `subscription OnCreateEthnicityUser(
  $filter: ModelSubscriptionEthnicityUserFilterInput
) {
  onCreateEthnicityUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEthnicityUserSubscriptionVariables,
  APITypes.OnCreateEthnicityUserSubscription
>;
export const onUpdateEthnicityUser = /* GraphQL */ `subscription OnUpdateEthnicityUser(
  $filter: ModelSubscriptionEthnicityUserFilterInput
) {
  onUpdateEthnicityUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEthnicityUserSubscriptionVariables,
  APITypes.OnUpdateEthnicityUserSubscription
>;
export const onDeleteEthnicityUser = /* GraphQL */ `subscription OnDeleteEthnicityUser(
  $filter: ModelSubscriptionEthnicityUserFilterInput
) {
  onDeleteEthnicityUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEthnicityUserSubscriptionVariables,
  APITypes.OnDeleteEthnicityUserSubscription
>;
export const onCreateReligion = /* GraphQL */ `subscription OnCreateReligion($filter: ModelSubscriptionReligionFilterInput) {
  onCreateReligion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReligionSubscriptionVariables,
  APITypes.OnCreateReligionSubscription
>;
export const onUpdateReligion = /* GraphQL */ `subscription OnUpdateReligion($filter: ModelSubscriptionReligionFilterInput) {
  onUpdateReligion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReligionSubscriptionVariables,
  APITypes.OnUpdateReligionSubscription
>;
export const onDeleteReligion = /* GraphQL */ `subscription OnDeleteReligion($filter: ModelSubscriptionReligionFilterInput) {
  onDeleteReligion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReligionSubscriptionVariables,
  APITypes.OnDeleteReligionSubscription
>;
export const onCreatePronoun = /* GraphQL */ `subscription OnCreatePronoun($filter: ModelSubscriptionPronounFilterInput) {
  onCreatePronoun(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePronounSubscriptionVariables,
  APITypes.OnCreatePronounSubscription
>;
export const onUpdatePronoun = /* GraphQL */ `subscription OnUpdatePronoun($filter: ModelSubscriptionPronounFilterInput) {
  onUpdatePronoun(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePronounSubscriptionVariables,
  APITypes.OnUpdatePronounSubscription
>;
export const onDeletePronoun = /* GraphQL */ `subscription OnDeletePronoun($filter: ModelSubscriptionPronounFilterInput) {
  onDeletePronoun(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePronounSubscriptionVariables,
  APITypes.OnDeletePronounSubscription
>;
export const onCreateSexualOrientation = /* GraphQL */ `subscription OnCreateSexualOrientation(
  $filter: ModelSubscriptionSexualOrientationFilterInput
) {
  onCreateSexualOrientation(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSexualOrientationSubscriptionVariables,
  APITypes.OnCreateSexualOrientationSubscription
>;
export const onUpdateSexualOrientation = /* GraphQL */ `subscription OnUpdateSexualOrientation(
  $filter: ModelSubscriptionSexualOrientationFilterInput
) {
  onUpdateSexualOrientation(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSexualOrientationSubscriptionVariables,
  APITypes.OnUpdateSexualOrientationSubscription
>;
export const onDeleteSexualOrientation = /* GraphQL */ `subscription OnDeleteSexualOrientation(
  $filter: ModelSubscriptionSexualOrientationFilterInput
) {
  onDeleteSexualOrientation(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSexualOrientationSubscriptionVariables,
  APITypes.OnDeleteSexualOrientationSubscription
>;
export const onCreateLanguage = /* GraphQL */ `subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onCreateLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLanguageSubscriptionVariables,
  APITypes.OnCreateLanguageSubscription
>;
export const onUpdateLanguage = /* GraphQL */ `subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onUpdateLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLanguageSubscriptionVariables,
  APITypes.OnUpdateLanguageSubscription
>;
export const onDeleteLanguage = /* GraphQL */ `subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onDeleteLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLanguageSubscriptionVariables,
  APITypes.OnDeleteLanguageSubscription
>;
export const onCreateLanguageUser = /* GraphQL */ `subscription OnCreateLanguageUser(
  $filter: ModelSubscriptionLanguageUserFilterInput
) {
  onCreateLanguageUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLanguageUserSubscriptionVariables,
  APITypes.OnCreateLanguageUserSubscription
>;
export const onUpdateLanguageUser = /* GraphQL */ `subscription OnUpdateLanguageUser(
  $filter: ModelSubscriptionLanguageUserFilterInput
) {
  onUpdateLanguageUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLanguageUserSubscriptionVariables,
  APITypes.OnUpdateLanguageUserSubscription
>;
export const onDeleteLanguageUser = /* GraphQL */ `subscription OnDeleteLanguageUser(
  $filter: ModelSubscriptionLanguageUserFilterInput
) {
  onDeleteLanguageUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLanguageUserSubscriptionVariables,
  APITypes.OnDeleteLanguageUserSubscription
>;
export const onCreateMatch = /* GraphQL */ `subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onCreateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMatchSubscriptionVariables,
  APITypes.OnCreateMatchSubscription
>;
export const onUpdateMatch = /* GraphQL */ `subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onUpdateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMatchSubscriptionVariables,
  APITypes.OnUpdateMatchSubscription
>;
export const onDeleteMatch = /* GraphQL */ `subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
  onDeleteMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMatchSubscriptionVariables,
  APITypes.OnDeleteMatchSubscription
>;
export const onCreatePhoto = /* GraphQL */ `subscription OnCreatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
  onCreatePhoto(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePhotoSubscriptionVariables,
  APITypes.OnCreatePhotoSubscription
>;
export const onUpdatePhoto = /* GraphQL */ `subscription OnUpdatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
  onUpdatePhoto(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePhotoSubscriptionVariables,
  APITypes.OnUpdatePhotoSubscription
>;
export const onDeletePhoto = /* GraphQL */ `subscription OnDeletePhoto($filter: ModelSubscriptionPhotoFilterInput) {
  onDeletePhoto(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePhotoSubscriptionVariables,
  APITypes.OnDeletePhotoSubscription
>;
export const onCreatePhotoUser = /* GraphQL */ `subscription OnCreatePhotoUser($filter: ModelSubscriptionPhotoUserFilterInput) {
  onCreatePhotoUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePhotoUserSubscriptionVariables,
  APITypes.OnCreatePhotoUserSubscription
>;
export const onUpdatePhotoUser = /* GraphQL */ `subscription OnUpdatePhotoUser($filter: ModelSubscriptionPhotoUserFilterInput) {
  onUpdatePhotoUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePhotoUserSubscriptionVariables,
  APITypes.OnUpdatePhotoUserSubscription
>;
export const onDeletePhotoUser = /* GraphQL */ `subscription OnDeletePhotoUser($filter: ModelSubscriptionPhotoUserFilterInput) {
  onDeletePhotoUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePhotoUserSubscriptionVariables,
  APITypes.OnDeletePhotoUserSubscription
>;
export const onCreateStory = /* GraphQL */ `subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
  onCreateStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStorySubscriptionVariables,
  APITypes.OnCreateStorySubscription
>;
export const onUpdateStory = /* GraphQL */ `subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
  onUpdateStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStorySubscriptionVariables,
  APITypes.OnUpdateStorySubscription
>;
export const onDeleteStory = /* GraphQL */ `subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
  onDeleteStory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStorySubscriptionVariables,
  APITypes.OnDeleteStorySubscription
>;
export const onCreateStoryUser = /* GraphQL */ `subscription OnCreateStoryUser($filter: ModelSubscriptionStoryUserFilterInput) {
  onCreateStoryUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStoryUserSubscriptionVariables,
  APITypes.OnCreateStoryUserSubscription
>;
export const onUpdateStoryUser = /* GraphQL */ `subscription OnUpdateStoryUser($filter: ModelSubscriptionStoryUserFilterInput) {
  onUpdateStoryUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStoryUserSubscriptionVariables,
  APITypes.OnUpdateStoryUserSubscription
>;
export const onDeleteStoryUser = /* GraphQL */ `subscription OnDeleteStoryUser($filter: ModelSubscriptionStoryUserFilterInput) {
  onDeleteStoryUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStoryUserSubscriptionVariables,
  APITypes.OnDeleteStoryUserSubscription
>;
export const onCreateDay = /* GraphQL */ `subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
  onCreateDay(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDaySubscriptionVariables,
  APITypes.OnCreateDaySubscription
>;
export const onUpdateDay = /* GraphQL */ `subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
  onUpdateDay(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDaySubscriptionVariables,
  APITypes.OnUpdateDaySubscription
>;
export const onDeleteDay = /* GraphQL */ `subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
  onDeleteDay(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDaySubscriptionVariables,
  APITypes.OnDeleteDaySubscription
>;
export const onCreateMentalHealthUser = /* GraphQL */ `subscription OnCreateMentalHealthUser(
  $filter: ModelSubscriptionMentalHealthUserFilterInput
) {
  onCreateMentalHealthUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMentalHealthUserSubscriptionVariables,
  APITypes.OnCreateMentalHealthUserSubscription
>;
export const onUpdateMentalHealthUser = /* GraphQL */ `subscription OnUpdateMentalHealthUser(
  $filter: ModelSubscriptionMentalHealthUserFilterInput
) {
  onUpdateMentalHealthUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMentalHealthUserSubscriptionVariables,
  APITypes.OnUpdateMentalHealthUserSubscription
>;
export const onDeleteMentalHealthUser = /* GraphQL */ `subscription OnDeleteMentalHealthUser(
  $filter: ModelSubscriptionMentalHealthUserFilterInput
) {
  onDeleteMentalHealthUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMentalHealthUserSubscriptionVariables,
  APITypes.OnDeleteMentalHealthUserSubscription
>;
export const onCreateEnergyUser = /* GraphQL */ `subscription OnCreateEnergyUser(
  $filter: ModelSubscriptionEnergyUserFilterInput
) {
  onCreateEnergyUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEnergyUserSubscriptionVariables,
  APITypes.OnCreateEnergyUserSubscription
>;
export const onUpdateEnergyUser = /* GraphQL */ `subscription OnUpdateEnergyUser(
  $filter: ModelSubscriptionEnergyUserFilterInput
) {
  onUpdateEnergyUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEnergyUserSubscriptionVariables,
  APITypes.OnUpdateEnergyUserSubscription
>;
export const onDeleteEnergyUser = /* GraphQL */ `subscription OnDeleteEnergyUser(
  $filter: ModelSubscriptionEnergyUserFilterInput
) {
  onDeleteEnergyUser(filter: $filter) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEnergyUserSubscriptionVariables,
  APITypes.OnDeleteEnergyUserSubscription
>;
export const onCreateCheckInQuestion = /* GraphQL */ `subscription OnCreateCheckInQuestion(
  $filter: ModelSubscriptionCheckInQuestionFilterInput
) {
  onCreateCheckInQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInQuestionSubscriptionVariables,
  APITypes.OnCreateCheckInQuestionSubscription
>;
export const onUpdateCheckInQuestion = /* GraphQL */ `subscription OnUpdateCheckInQuestion(
  $filter: ModelSubscriptionCheckInQuestionFilterInput
) {
  onUpdateCheckInQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInQuestionSubscriptionVariables,
  APITypes.OnUpdateCheckInQuestionSubscription
>;
export const onDeleteCheckInQuestion = /* GraphQL */ `subscription OnDeleteCheckInQuestion(
  $filter: ModelSubscriptionCheckInQuestionFilterInput
) {
  onDeleteCheckInQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInQuestionSubscriptionVariables,
  APITypes.OnDeleteCheckInQuestionSubscription
>;
export const onCreateCheckInQuestionCategory = /* GraphQL */ `subscription OnCreateCheckInQuestionCategory(
  $filter: ModelSubscriptionCheckInQuestionCategoryFilterInput
) {
  onCreateCheckInQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInQuestionCategorySubscriptionVariables,
  APITypes.OnCreateCheckInQuestionCategorySubscription
>;
export const onUpdateCheckInQuestionCategory = /* GraphQL */ `subscription OnUpdateCheckInQuestionCategory(
  $filter: ModelSubscriptionCheckInQuestionCategoryFilterInput
) {
  onUpdateCheckInQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInQuestionCategorySubscriptionVariables,
  APITypes.OnUpdateCheckInQuestionCategorySubscription
>;
export const onDeleteCheckInQuestionCategory = /* GraphQL */ `subscription OnDeleteCheckInQuestionCategory(
  $filter: ModelSubscriptionCheckInQuestionCategoryFilterInput
) {
  onDeleteCheckInQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInQuestionCategorySubscriptionVariables,
  APITypes.OnDeleteCheckInQuestionCategorySubscription
>;
export const onCreateCheckInQuestionTheme = /* GraphQL */ `subscription OnCreateCheckInQuestionTheme(
  $filter: ModelSubscriptionCheckInQuestionThemeFilterInput
) {
  onCreateCheckInQuestionTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInQuestionThemeSubscriptionVariables,
  APITypes.OnCreateCheckInQuestionThemeSubscription
>;
export const onUpdateCheckInQuestionTheme = /* GraphQL */ `subscription OnUpdateCheckInQuestionTheme(
  $filter: ModelSubscriptionCheckInQuestionThemeFilterInput
) {
  onUpdateCheckInQuestionTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInQuestionThemeSubscriptionVariables,
  APITypes.OnUpdateCheckInQuestionThemeSubscription
>;
export const onDeleteCheckInQuestionTheme = /* GraphQL */ `subscription OnDeleteCheckInQuestionTheme(
  $filter: ModelSubscriptionCheckInQuestionThemeFilterInput
) {
  onDeleteCheckInQuestionTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInQuestionThemeSubscriptionVariables,
  APITypes.OnDeleteCheckInQuestionThemeSubscription
>;
export const onCreateCheckInQuestionType = /* GraphQL */ `subscription OnCreateCheckInQuestionType(
  $filter: ModelSubscriptionCheckInQuestionTypeFilterInput
) {
  onCreateCheckInQuestionType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInQuestionTypeSubscriptionVariables,
  APITypes.OnCreateCheckInQuestionTypeSubscription
>;
export const onUpdateCheckInQuestionType = /* GraphQL */ `subscription OnUpdateCheckInQuestionType(
  $filter: ModelSubscriptionCheckInQuestionTypeFilterInput
) {
  onUpdateCheckInQuestionType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInQuestionTypeSubscriptionVariables,
  APITypes.OnUpdateCheckInQuestionTypeSubscription
>;
export const onDeleteCheckInQuestionType = /* GraphQL */ `subscription OnDeleteCheckInQuestionType(
  $filter: ModelSubscriptionCheckInQuestionTypeFilterInput
) {
  onDeleteCheckInQuestionType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInQuestionTypeSubscriptionVariables,
  APITypes.OnDeleteCheckInQuestionTypeSubscription
>;
export const onCreateCheckInQuestionUser = /* GraphQL */ `subscription OnCreateCheckInQuestionUser(
  $filter: ModelSubscriptionCheckInQuestionUserFilterInput
) {
  onCreateCheckInQuestionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInQuestionUserSubscriptionVariables,
  APITypes.OnCreateCheckInQuestionUserSubscription
>;
export const onUpdateCheckInQuestionUser = /* GraphQL */ `subscription OnUpdateCheckInQuestionUser(
  $filter: ModelSubscriptionCheckInQuestionUserFilterInput
) {
  onUpdateCheckInQuestionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInQuestionUserSubscriptionVariables,
  APITypes.OnUpdateCheckInQuestionUserSubscription
>;
export const onDeleteCheckInQuestionUser = /* GraphQL */ `subscription OnDeleteCheckInQuestionUser(
  $filter: ModelSubscriptionCheckInQuestionUserFilterInput
) {
  onDeleteCheckInQuestionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInQuestionUserSubscriptionVariables,
  APITypes.OnDeleteCheckInQuestionUserSubscription
>;
export const onCreateIceBreakerQuestion = /* GraphQL */ `subscription OnCreateIceBreakerQuestion(
  $filter: ModelSubscriptionIceBreakerQuestionFilterInput
) {
  onCreateIceBreakerQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIceBreakerQuestionSubscriptionVariables,
  APITypes.OnCreateIceBreakerQuestionSubscription
>;
export const onUpdateIceBreakerQuestion = /* GraphQL */ `subscription OnUpdateIceBreakerQuestion(
  $filter: ModelSubscriptionIceBreakerQuestionFilterInput
) {
  onUpdateIceBreakerQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIceBreakerQuestionSubscriptionVariables,
  APITypes.OnUpdateIceBreakerQuestionSubscription
>;
export const onDeleteIceBreakerQuestion = /* GraphQL */ `subscription OnDeleteIceBreakerQuestion(
  $filter: ModelSubscriptionIceBreakerQuestionFilterInput
) {
  onDeleteIceBreakerQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIceBreakerQuestionSubscriptionVariables,
  APITypes.OnDeleteIceBreakerQuestionSubscription
>;
export const onCreateIceBreakerQuestionCategory = /* GraphQL */ `subscription OnCreateIceBreakerQuestionCategory(
  $filter: ModelSubscriptionIceBreakerQuestionCategoryFilterInput
) {
  onCreateIceBreakerQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIceBreakerQuestionCategorySubscriptionVariables,
  APITypes.OnCreateIceBreakerQuestionCategorySubscription
>;
export const onUpdateIceBreakerQuestionCategory = /* GraphQL */ `subscription OnUpdateIceBreakerQuestionCategory(
  $filter: ModelSubscriptionIceBreakerQuestionCategoryFilterInput
) {
  onUpdateIceBreakerQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIceBreakerQuestionCategorySubscriptionVariables,
  APITypes.OnUpdateIceBreakerQuestionCategorySubscription
>;
export const onDeleteIceBreakerQuestionCategory = /* GraphQL */ `subscription OnDeleteIceBreakerQuestionCategory(
  $filter: ModelSubscriptionIceBreakerQuestionCategoryFilterInput
) {
  onDeleteIceBreakerQuestionCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIceBreakerQuestionCategorySubscriptionVariables,
  APITypes.OnDeleteIceBreakerQuestionCategorySubscription
>;
export const onCreateEatingPreference = /* GraphQL */ `subscription OnCreateEatingPreference(
  $filter: ModelSubscriptionEatingPreferenceFilterInput
) {
  onCreateEatingPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEatingPreferenceSubscriptionVariables,
  APITypes.OnCreateEatingPreferenceSubscription
>;
export const onUpdateEatingPreference = /* GraphQL */ `subscription OnUpdateEatingPreference(
  $filter: ModelSubscriptionEatingPreferenceFilterInput
) {
  onUpdateEatingPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEatingPreferenceSubscriptionVariables,
  APITypes.OnUpdateEatingPreferenceSubscription
>;
export const onDeleteEatingPreference = /* GraphQL */ `subscription OnDeleteEatingPreference(
  $filter: ModelSubscriptionEatingPreferenceFilterInput
) {
  onDeleteEatingPreference(filter: $filter) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEatingPreferenceSubscriptionVariables,
  APITypes.OnDeleteEatingPreferenceSubscription
>;
export const onCreateQuote = /* GraphQL */ `subscription OnCreateQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onCreateQuote(filter: $filter) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuoteSubscriptionVariables,
  APITypes.OnCreateQuoteSubscription
>;
export const onUpdateQuote = /* GraphQL */ `subscription OnUpdateQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onUpdateQuote(filter: $filter) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuoteSubscriptionVariables,
  APITypes.OnUpdateQuoteSubscription
>;
export const onDeleteQuote = /* GraphQL */ `subscription OnDeleteQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onDeleteQuote(filter: $filter) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuoteSubscriptionVariables,
  APITypes.OnDeleteQuoteSubscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onCreateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onUpdateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onDeleteAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreateContent = /* GraphQL */ `subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
  onCreateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentSubscriptionVariables,
  APITypes.OnCreateContentSubscription
>;
export const onUpdateContent = /* GraphQL */ `subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
  onUpdateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentSubscriptionVariables,
  APITypes.OnUpdateContentSubscription
>;
export const onDeleteContent = /* GraphQL */ `subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
  onDeleteContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentSubscriptionVariables,
  APITypes.OnDeleteContentSubscription
>;
export const onCreateContentCategoryDayImage = /* GraphQL */ `subscription OnCreateContentCategoryDayImage(
  $filter: ModelSubscriptionContentCategoryDayImageFilterInput
) {
  onCreateContentCategoryDayImage(filter: $filter) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContentCategoryDayImageSubscriptionVariables,
  APITypes.OnCreateContentCategoryDayImageSubscription
>;
export const onUpdateContentCategoryDayImage = /* GraphQL */ `subscription OnUpdateContentCategoryDayImage(
  $filter: ModelSubscriptionContentCategoryDayImageFilterInput
) {
  onUpdateContentCategoryDayImage(filter: $filter) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContentCategoryDayImageSubscriptionVariables,
  APITypes.OnUpdateContentCategoryDayImageSubscription
>;
export const onDeleteContentCategoryDayImage = /* GraphQL */ `subscription OnDeleteContentCategoryDayImage(
  $filter: ModelSubscriptionContentCategoryDayImageFilterInput
) {
  onDeleteContentCategoryDayImage(filter: $filter) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContentCategoryDayImageSubscriptionVariables,
  APITypes.OnDeleteContentCategoryDayImageSubscription
>;
export const onCreateContentCategory = /* GraphQL */ `subscription OnCreateContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onCreateContentCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentCategorySubscriptionVariables,
  APITypes.OnCreateContentCategorySubscription
>;
export const onUpdateContentCategory = /* GraphQL */ `subscription OnUpdateContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onUpdateContentCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentCategorySubscriptionVariables,
  APITypes.OnUpdateContentCategorySubscription
>;
export const onDeleteContentCategory = /* GraphQL */ `subscription OnDeleteContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onDeleteContentCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentCategorySubscriptionVariables,
  APITypes.OnDeleteContentCategorySubscription
>;
export const onCreateContentType = /* GraphQL */ `subscription OnCreateContentType(
  $filter: ModelSubscriptionContentTypeFilterInput
) {
  onCreateContentType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentTypeSubscriptionVariables,
  APITypes.OnCreateContentTypeSubscription
>;
export const onUpdateContentType = /* GraphQL */ `subscription OnUpdateContentType(
  $filter: ModelSubscriptionContentTypeFilterInput
) {
  onUpdateContentType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentTypeSubscriptionVariables,
  APITypes.OnUpdateContentTypeSubscription
>;
export const onDeleteContentType = /* GraphQL */ `subscription OnDeleteContentType(
  $filter: ModelSubscriptionContentTypeFilterInput
) {
  onDeleteContentType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentTypeSubscriptionVariables,
  APITypes.OnDeleteContentTypeSubscription
>;
export const onCreatePrompt = /* GraphQL */ `subscription OnCreatePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onCreatePrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePromptSubscriptionVariables,
  APITypes.OnCreatePromptSubscription
>;
export const onUpdatePrompt = /* GraphQL */ `subscription OnUpdatePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onUpdatePrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePromptSubscriptionVariables,
  APITypes.OnUpdatePromptSubscription
>;
export const onDeletePrompt = /* GraphQL */ `subscription OnDeletePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onDeletePrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePromptSubscriptionVariables,
  APITypes.OnDeletePromptSubscription
>;
export const onCreatePromptCategory = /* GraphQL */ `subscription OnCreatePromptCategory(
  $filter: ModelSubscriptionPromptCategoryFilterInput
) {
  onCreatePromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePromptCategorySubscriptionVariables,
  APITypes.OnCreatePromptCategorySubscription
>;
export const onUpdatePromptCategory = /* GraphQL */ `subscription OnUpdatePromptCategory(
  $filter: ModelSubscriptionPromptCategoryFilterInput
) {
  onUpdatePromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePromptCategorySubscriptionVariables,
  APITypes.OnUpdatePromptCategorySubscription
>;
export const onDeletePromptCategory = /* GraphQL */ `subscription OnDeletePromptCategory(
  $filter: ModelSubscriptionPromptCategoryFilterInput
) {
  onDeletePromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePromptCategorySubscriptionVariables,
  APITypes.OnDeletePromptCategorySubscription
>;
export const onCreateChatPrompt = /* GraphQL */ `subscription OnCreateChatPrompt(
  $filter: ModelSubscriptionChatPromptFilterInput
) {
  onCreateChatPrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatPromptSubscriptionVariables,
  APITypes.OnCreateChatPromptSubscription
>;
export const onUpdateChatPrompt = /* GraphQL */ `subscription OnUpdateChatPrompt(
  $filter: ModelSubscriptionChatPromptFilterInput
) {
  onUpdateChatPrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatPromptSubscriptionVariables,
  APITypes.OnUpdateChatPromptSubscription
>;
export const onDeleteChatPrompt = /* GraphQL */ `subscription OnDeleteChatPrompt(
  $filter: ModelSubscriptionChatPromptFilterInput
) {
  onDeleteChatPrompt(filter: $filter) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatPromptSubscriptionVariables,
  APITypes.OnDeleteChatPromptSubscription
>;
export const onCreateChatPromptCategory = /* GraphQL */ `subscription OnCreateChatPromptCategory(
  $filter: ModelSubscriptionChatPromptCategoryFilterInput
) {
  onCreateChatPromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatPromptCategorySubscriptionVariables,
  APITypes.OnCreateChatPromptCategorySubscription
>;
export const onUpdateChatPromptCategory = /* GraphQL */ `subscription OnUpdateChatPromptCategory(
  $filter: ModelSubscriptionChatPromptCategoryFilterInput
) {
  onUpdateChatPromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatPromptCategorySubscriptionVariables,
  APITypes.OnUpdateChatPromptCategorySubscription
>;
export const onDeleteChatPromptCategory = /* GraphQL */ `subscription OnDeleteChatPromptCategory(
  $filter: ModelSubscriptionChatPromptCategoryFilterInput
) {
  onDeleteChatPromptCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatPromptCategorySubscriptionVariables,
  APITypes.OnDeleteChatPromptCategorySubscription
>;
export const onCreateFeedbackUser = /* GraphQL */ `subscription OnCreateFeedbackUser(
  $filter: ModelSubscriptionFeedbackUserFilterInput
) {
  onCreateFeedbackUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackUserSubscriptionVariables,
  APITypes.OnCreateFeedbackUserSubscription
>;
export const onUpdateFeedbackUser = /* GraphQL */ `subscription OnUpdateFeedbackUser(
  $filter: ModelSubscriptionFeedbackUserFilterInput
) {
  onUpdateFeedbackUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackUserSubscriptionVariables,
  APITypes.OnUpdateFeedbackUserSubscription
>;
export const onDeleteFeedbackUser = /* GraphQL */ `subscription OnDeleteFeedbackUser(
  $filter: ModelSubscriptionFeedbackUserFilterInput
) {
  onDeleteFeedbackUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackUserSubscriptionVariables,
  APITypes.OnDeleteFeedbackUserSubscription
>;
export const onCreateFeedbackTester = /* GraphQL */ `subscription OnCreateFeedbackTester(
  $filter: ModelSubscriptionFeedbackTesterFilterInput
) {
  onCreateFeedbackTester(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackTesterSubscriptionVariables,
  APITypes.OnCreateFeedbackTesterSubscription
>;
export const onUpdateFeedbackTester = /* GraphQL */ `subscription OnUpdateFeedbackTester(
  $filter: ModelSubscriptionFeedbackTesterFilterInput
) {
  onUpdateFeedbackTester(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackTesterSubscriptionVariables,
  APITypes.OnUpdateFeedbackTesterSubscription
>;
export const onDeleteFeedbackTester = /* GraphQL */ `subscription OnDeleteFeedbackTester(
  $filter: ModelSubscriptionFeedbackTesterFilterInput
) {
  onDeleteFeedbackTester(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackTesterSubscriptionVariables,
  APITypes.OnDeleteFeedbackTesterSubscription
>;
export const onCreateGeneralAppContent = /* GraphQL */ `subscription OnCreateGeneralAppContent(
  $filter: ModelSubscriptionGeneralAppContentFilterInput
) {
  onCreateGeneralAppContent(filter: $filter) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGeneralAppContentSubscriptionVariables,
  APITypes.OnCreateGeneralAppContentSubscription
>;
export const onUpdateGeneralAppContent = /* GraphQL */ `subscription OnUpdateGeneralAppContent(
  $filter: ModelSubscriptionGeneralAppContentFilterInput
) {
  onUpdateGeneralAppContent(filter: $filter) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGeneralAppContentSubscriptionVariables,
  APITypes.OnUpdateGeneralAppContentSubscription
>;
export const onDeleteGeneralAppContent = /* GraphQL */ `subscription OnDeleteGeneralAppContent(
  $filter: ModelSubscriptionGeneralAppContentFilterInput
) {
  onDeleteGeneralAppContent(filter: $filter) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGeneralAppContentSubscriptionVariables,
  APITypes.OnDeleteGeneralAppContentSubscription
>;
export const onCreateWaitlistUser = /* GraphQL */ `subscription OnCreateWaitlistUser(
  $filter: ModelSubscriptionWaitlistUserFilterInput
) {
  onCreateWaitlistUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWaitlistUserSubscriptionVariables,
  APITypes.OnCreateWaitlistUserSubscription
>;
export const onUpdateWaitlistUser = /* GraphQL */ `subscription OnUpdateWaitlistUser(
  $filter: ModelSubscriptionWaitlistUserFilterInput
) {
  onUpdateWaitlistUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWaitlistUserSubscriptionVariables,
  APITypes.OnUpdateWaitlistUserSubscription
>;
export const onDeleteWaitlistUser = /* GraphQL */ `subscription OnDeleteWaitlistUser(
  $filter: ModelSubscriptionWaitlistUserFilterInput
) {
  onDeleteWaitlistUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWaitlistUserSubscriptionVariables,
  APITypes.OnDeleteWaitlistUserSubscription
>;
