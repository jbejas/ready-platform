/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/index";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByActiveConnections = /* GraphQL */ `query UsersByActiveConnections(
  $activeConnections: Int!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByActiveConnections(
    activeConnections: $activeConnections
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByActiveConnectionsQueryVariables,
  APITypes.UsersByActiveConnectionsQuery
>;
export const searchUsers = /* GraphQL */ `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: [SearchableUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUserAggregationInput]
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUsersQueryVariables,
  APITypes.SearchUsersQuery
>;
export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
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
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      likerId
      likedId
      amILikedBack
      active
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const likesByLikerId = /* GraphQL */ `query LikesByLikerId(
  $likerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByLikerId(
    likerId: $likerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      likerId
      likedId
      amILikedBack
      active
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByLikerIdQueryVariables,
  APITypes.LikesByLikerIdQuery
>;
export const likesByLikedId = /* GraphQL */ `query LikesByLikedId(
  $likedId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByLikedId(
    likedId: $likedId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      likerId
      likedId
      amILikedBack
      active
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByLikedIdQueryVariables,
  APITypes.LikesByLikedIdQuery
>;
export const searchLikes = /* GraphQL */ `query SearchLikes(
  $filter: SearchableLikeFilterInput
  $sort: [SearchableLikeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableLikeAggregationInput]
) {
  searchLikes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      likerId
      likedId
      amILikedBack
      active
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchLikesQueryVariables,
  APITypes.SearchLikesQuery
>;
export const getViewedConnection = /* GraphQL */ `query GetViewedConnection($id: ID!) {
  getViewedConnection(id: $id) {
    id
    userId
    connectionId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViewedConnectionQueryVariables,
  APITypes.GetViewedConnectionQuery
>;
export const listViewedConnections = /* GraphQL */ `query ListViewedConnections(
  $filter: ModelViewedConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listViewedConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      connectionId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViewedConnectionsQueryVariables,
  APITypes.ListViewedConnectionsQuery
>;
export const searchViewedConnections = /* GraphQL */ `query SearchViewedConnections(
  $filter: SearchableViewedConnectionFilterInput
  $sort: [SearchableViewedConnectionSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableViewedConnectionAggregationInput]
) {
  searchViewedConnections(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      userId
      connectionId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchViewedConnectionsQueryVariables,
  APITypes.SearchViewedConnectionsQuery
>;
export const getSleepingHabit = /* GraphQL */ `query GetSleepingHabit($id: ID!) {
  getSleepingHabit(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSleepingHabitQueryVariables,
  APITypes.GetSleepingHabitQuery
>;
export const listSleepingHabits = /* GraphQL */ `query ListSleepingHabits(
  $filter: ModelSleepingHabitFilterInput
  $limit: Int
  $nextToken: String
) {
  listSleepingHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSleepingHabitsQueryVariables,
  APITypes.ListSleepingHabitsQuery
>;
export const getExercisePreference = /* GraphQL */ `query GetExercisePreference($id: ID!) {
  getExercisePreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExercisePreferenceQueryVariables,
  APITypes.GetExercisePreferenceQuery
>;
export const listExercisePreferences = /* GraphQL */ `query ListExercisePreferences(
  $filter: ModelExercisePreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercisePreferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisePreferencesQueryVariables,
  APITypes.ListExercisePreferencesQuery
>;
export const getDrugPreference = /* GraphQL */ `query GetDrugPreference($id: ID!) {
  getDrugPreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDrugPreferenceQueryVariables,
  APITypes.GetDrugPreferenceQuery
>;
export const listDrugPreferences = /* GraphQL */ `query ListDrugPreferences(
  $filter: ModelDrugPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrugPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDrugPreferencesQueryVariables,
  APITypes.ListDrugPreferencesQuery
>;
export const getTobaccoPreference = /* GraphQL */ `query GetTobaccoPreference($id: ID!) {
  getTobaccoPreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTobaccoPreferenceQueryVariables,
  APITypes.GetTobaccoPreferenceQuery
>;
export const listTobaccoPreferences = /* GraphQL */ `query ListTobaccoPreferences(
  $filter: ModelTobaccoPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listTobaccoPreferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTobaccoPreferencesQueryVariables,
  APITypes.ListTobaccoPreferencesQuery
>;
export const getTherapyPreference = /* GraphQL */ `query GetTherapyPreference($id: ID!) {
  getTherapyPreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTherapyPreferenceQueryVariables,
  APITypes.GetTherapyPreferenceQuery
>;
export const listTherapyPreferences = /* GraphQL */ `query ListTherapyPreferences(
  $filter: ModelTherapyPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listTherapyPreferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTherapyPreferencesQueryVariables,
  APITypes.ListTherapyPreferencesQuery
>;
export const getDrinkPreference = /* GraphQL */ `query GetDrinkPreference($id: ID!) {
  getDrinkPreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDrinkPreferenceQueryVariables,
  APITypes.GetDrinkPreferenceQuery
>;
export const listDrinkPreferences = /* GraphQL */ `query ListDrinkPreferences(
  $filter: ModelDrinkPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrinkPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDrinkPreferencesQueryVariables,
  APITypes.ListDrinkPreferencesQuery
>;
export const searchDrinkPreferences = /* GraphQL */ `query SearchDrinkPreferences(
  $filter: SearchableDrinkPreferenceFilterInput
  $sort: [SearchableDrinkPreferenceSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableDrinkPreferenceAggregationInput]
) {
  searchDrinkPreferences(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchDrinkPreferencesQueryVariables,
  APITypes.SearchDrinkPreferencesQuery
>;
export const getChildrenStatus = /* GraphQL */ `query GetChildrenStatus($id: ID!) {
  getChildrenStatus(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChildrenStatusQueryVariables,
  APITypes.GetChildrenStatusQuery
>;
export const listChildrenStatuses = /* GraphQL */ `query ListChildrenStatuses(
  $filter: ModelChildrenStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listChildrenStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChildrenStatusesQueryVariables,
  APITypes.ListChildrenStatusesQuery
>;
export const searchChildrenStatuses = /* GraphQL */ `query SearchChildrenStatuses(
  $filter: SearchableChildrenStatusFilterInput
  $sort: [SearchableChildrenStatusSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableChildrenStatusAggregationInput]
) {
  searchChildrenStatuses(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchChildrenStatusesQueryVariables,
  APITypes.SearchChildrenStatusesQuery
>;
export const getWantChildrenStatus = /* GraphQL */ `query GetWantChildrenStatus($id: ID!) {
  getWantChildrenStatus(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWantChildrenStatusQueryVariables,
  APITypes.GetWantChildrenStatusQuery
>;
export const listWantChildrenStatuses = /* GraphQL */ `query ListWantChildrenStatuses(
  $filter: ModelWantChildrenStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listWantChildrenStatuses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWantChildrenStatusesQueryVariables,
  APITypes.ListWantChildrenStatusesQuery
>;
export const getEducationLevel = /* GraphQL */ `query GetEducationLevel($id: ID!) {
  getEducationLevel(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationLevelQueryVariables,
  APITypes.GetEducationLevelQuery
>;
export const listEducationLevels = /* GraphQL */ `query ListEducationLevels(
  $filter: ModelEducationLevelFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationLevelsQueryVariables,
  APITypes.ListEducationLevelsQuery
>;
export const getGender = /* GraphQL */ `query GetGender($id: ID!) {
  getGender(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGenderQueryVariables, APITypes.GetGenderQuery>;
export const listGenders = /* GraphQL */ `query ListGenders(
  $filter: ModelGenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listGenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGendersQueryVariables,
  APITypes.ListGendersQuery
>;
export const searchGenders = /* GraphQL */ `query SearchGenders(
  $filter: SearchableGenderFilterInput
  $sort: [SearchableGenderSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableGenderAggregationInput]
) {
  searchGenders(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchGendersQueryVariables,
  APITypes.SearchGendersQuery
>;
export const getEthnicity = /* GraphQL */ `query GetEthnicity($id: ID!) {
  getEthnicity(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEthnicityQueryVariables,
  APITypes.GetEthnicityQuery
>;
export const listEthnicities = /* GraphQL */ `query ListEthnicities(
  $filter: ModelEthnicityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEthnicities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEthnicitiesQueryVariables,
  APITypes.ListEthnicitiesQuery
>;
export const searchEthnicities = /* GraphQL */ `query SearchEthnicities(
  $filter: SearchableEthnicityFilterInput
  $sort: [SearchableEthnicitySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableEthnicityAggregationInput]
) {
  searchEthnicities(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchEthnicitiesQueryVariables,
  APITypes.SearchEthnicitiesQuery
>;
export const ethnicityUsersByUserID = /* GraphQL */ `query EthnicityUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEthnicityUserFilterInput
  $limit: Int
  $nextToken: String
) {
  ethnicityUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      ethnicityID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EthnicityUsersByUserIDQueryVariables,
  APITypes.EthnicityUsersByUserIDQuery
>;
export const ethnicityUsersByEthnicityID = /* GraphQL */ `query EthnicityUsersByEthnicityID(
  $ethnicityID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEthnicityUserFilterInput
  $limit: Int
  $nextToken: String
) {
  ethnicityUsersByEthnicityID(
    ethnicityID: $ethnicityID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      ethnicityID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EthnicityUsersByEthnicityIDQueryVariables,
  APITypes.EthnicityUsersByEthnicityIDQuery
>;
export const getReligion = /* GraphQL */ `query GetReligion($id: ID!) {
  getReligion(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReligionQueryVariables,
  APITypes.GetReligionQuery
>;
export const listReligions = /* GraphQL */ `query ListReligions(
  $filter: ModelReligionFilterInput
  $limit: Int
  $nextToken: String
) {
  listReligions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReligionsQueryVariables,
  APITypes.ListReligionsQuery
>;
export const searchReligions = /* GraphQL */ `query SearchReligions(
  $filter: SearchableReligionFilterInput
  $sort: [SearchableReligionSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableReligionAggregationInput]
) {
  searchReligions(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchReligionsQueryVariables,
  APITypes.SearchReligionsQuery
>;
export const getPronoun = /* GraphQL */ `query GetPronoun($id: ID!) {
  getPronoun(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPronounQueryVariables,
  APITypes.GetPronounQuery
>;
export const listPronouns = /* GraphQL */ `query ListPronouns(
  $filter: ModelPronounFilterInput
  $limit: Int
  $nextToken: String
) {
  listPronouns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPronounsQueryVariables,
  APITypes.ListPronounsQuery
>;
export const searchPronouns = /* GraphQL */ `query SearchPronouns(
  $filter: SearchablePronounFilterInput
  $sort: [SearchablePronounSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePronounAggregationInput]
) {
  searchPronouns(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPronounsQueryVariables,
  APITypes.SearchPronounsQuery
>;
export const getSexualOrientation = /* GraphQL */ `query GetSexualOrientation($id: ID!) {
  getSexualOrientation(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSexualOrientationQueryVariables,
  APITypes.GetSexualOrientationQuery
>;
export const listSexualOrientations = /* GraphQL */ `query ListSexualOrientations(
  $filter: ModelSexualOrientationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSexualOrientations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSexualOrientationsQueryVariables,
  APITypes.ListSexualOrientationsQuery
>;
export const getLanguage = /* GraphQL */ `query GetLanguage($id: ID!) {
  getLanguage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLanguageQueryVariables,
  APITypes.GetLanguageQuery
>;
export const listLanguages = /* GraphQL */ `query ListLanguages(
  $filter: ModelLanguageFilterInput
  $limit: Int
  $nextToken: String
) {
  listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLanguagesQueryVariables,
  APITypes.ListLanguagesQuery
>;
export const searchLanguages = /* GraphQL */ `query SearchLanguages(
  $filter: SearchableLanguageFilterInput
  $sort: [SearchableLanguageSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableLanguageAggregationInput]
) {
  searchLanguages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchLanguagesQueryVariables,
  APITypes.SearchLanguagesQuery
>;
export const languageUsersByUserID = /* GraphQL */ `query LanguageUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLanguageUserFilterInput
  $limit: Int
  $nextToken: String
) {
  languageUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      languageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LanguageUsersByUserIDQueryVariables,
  APITypes.LanguageUsersByUserIDQuery
>;
export const languageUsersByLanguageID = /* GraphQL */ `query LanguageUsersByLanguageID(
  $languageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLanguageUserFilterInput
  $limit: Int
  $nextToken: String
) {
  languageUsersByLanguageID(
    languageID: $languageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      languageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LanguageUsersByLanguageIDQueryVariables,
  APITypes.LanguageUsersByLanguageIDQuery
>;
export const getMatch = /* GraphQL */ `query GetMatch($id: ID!) {
  getMatch(id: $id) {
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
` as GeneratedQuery<APITypes.GetMatchQueryVariables, APITypes.GetMatchQuery>;
export const listMatches = /* GraphQL */ `query ListMatches(
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isReported
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMatchesQueryVariables,
  APITypes.ListMatchesQuery
>;
export const matchesByUserID = /* GraphQL */ `query MatchesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  matchesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      isReported
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MatchesByUserIDQueryVariables,
  APITypes.MatchesByUserIDQuery
>;
export const searchMatches = /* GraphQL */ `query SearchMatches(
  $filter: SearchableMatchFilterInput
  $sort: [SearchableMatchSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMatchAggregationInput]
) {
  searchMatches(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      isReported
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMatchesQueryVariables,
  APITypes.SearchMatchesQuery
>;
export const getPhoto = /* GraphQL */ `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
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
` as GeneratedQuery<APITypes.GetPhotoQueryVariables, APITypes.GetPhotoQuery>;
export const listPhotos = /* GraphQL */ `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPhotosQueryVariables,
  APITypes.ListPhotosQuery
>;
export const photoUsersByUserID = /* GraphQL */ `query PhotoUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPhotoUserFilterInput
  $limit: Int
  $nextToken: String
) {
  photoUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      photoID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PhotoUsersByUserIDQueryVariables,
  APITypes.PhotoUsersByUserIDQuery
>;
export const photoUsersByPhotoID = /* GraphQL */ `query PhotoUsersByPhotoID(
  $photoID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPhotoUserFilterInput
  $limit: Int
  $nextToken: String
) {
  photoUsersByPhotoID(
    photoID: $photoID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      photoID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PhotoUsersByPhotoIDQueryVariables,
  APITypes.PhotoUsersByPhotoIDQuery
>;
export const getStory = /* GraphQL */ `query GetStory($id: ID!) {
  getStory(id: $id) {
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
` as GeneratedQuery<APITypes.GetStoryQueryVariables, APITypes.GetStoryQuery>;
export const listStories = /* GraphQL */ `query ListStories(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoriesQueryVariables,
  APITypes.ListStoriesQuery
>;
export const storiesByCreatedAt = /* GraphQL */ `query StoriesByCreatedAt(
  $createdAt: AWSDateTime!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  storiesByCreatedAt(
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoriesByCreatedAtQueryVariables,
  APITypes.StoriesByCreatedAtQuery
>;
export const searchStories = /* GraphQL */ `query SearchStories(
  $filter: SearchableStoryFilterInput
  $sort: [SearchableStorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableStoryAggregationInput]
) {
  searchStories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchStoriesQueryVariables,
  APITypes.SearchStoriesQuery
>;
export const storyUsersByUserID = /* GraphQL */ `query StoryUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryUserFilterInput
  $limit: Int
  $nextToken: String
) {
  storyUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      storyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoryUsersByUserIDQueryVariables,
  APITypes.StoryUsersByUserIDQuery
>;
export const storyUsersByStoryID = /* GraphQL */ `query StoryUsersByStoryID(
  $storyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoryUserFilterInput
  $limit: Int
  $nextToken: String
) {
  storyUsersByStoryID(
    storyID: $storyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      storyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoryUsersByStoryIDQueryVariables,
  APITypes.StoryUsersByStoryIDQuery
>;
export const getDay = /* GraphQL */ `query GetDay($id: ID!) {
  getDay(id: $id) {
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
` as GeneratedQuery<APITypes.GetDayQueryVariables, APITypes.GetDayQuery>;
export const listDays = /* GraphQL */ `query ListDays($filter: ModelDayFilterInput, $limit: Int, $nextToken: String) {
  listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDaysQueryVariables, APITypes.ListDaysQuery>;
export const daysByUserID = /* GraphQL */ `query DaysByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDayFilterInput
  $limit: Int
  $nextToken: String
) {
  daysByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DaysByUserIDQueryVariables,
  APITypes.DaysByUserIDQuery
>;
export const searchDays = /* GraphQL */ `query SearchDays(
  $filter: SearchableDayFilterInput
  $sort: [SearchableDaySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableDayAggregationInput]
) {
  searchDays(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchDaysQueryVariables,
  APITypes.SearchDaysQuery
>;
export const getMentalHealthUser = /* GraphQL */ `query GetMentalHealthUser($id: ID!) {
  getMentalHealthUser(id: $id) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMentalHealthUserQueryVariables,
  APITypes.GetMentalHealthUserQuery
>;
export const listMentalHealthUsers = /* GraphQL */ `query ListMentalHealthUsers(
  $filter: ModelMentalHealthUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listMentalHealthUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMentalHealthUsersQueryVariables,
  APITypes.ListMentalHealthUsersQuery
>;
export const mentalHealthUsersByUserID = /* GraphQL */ `query MentalHealthUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMentalHealthUserFilterInput
  $limit: Int
  $nextToken: String
) {
  mentalHealthUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MentalHealthUsersByUserIDQueryVariables,
  APITypes.MentalHealthUsersByUserIDQuery
>;
export const getEnergyUser = /* GraphQL */ `query GetEnergyUser($id: ID!) {
  getEnergyUser(id: $id) {
    id
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEnergyUserQueryVariables,
  APITypes.GetEnergyUserQuery
>;
export const listEnergyUsers = /* GraphQL */ `query ListEnergyUsers(
  $filter: ModelEnergyUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEnergyUsersQueryVariables,
  APITypes.ListEnergyUsersQuery
>;
export const energyUsersByUserID = /* GraphQL */ `query EnergyUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEnergyUserFilterInput
  $limit: Int
  $nextToken: String
) {
  energyUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EnergyUsersByUserIDQueryVariables,
  APITypes.EnergyUsersByUserIDQuery
>;
export const getCheckInQuestion = /* GraphQL */ `query GetCheckInQuestion($id: ID!) {
  getCheckInQuestion(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCheckInQuestionQueryVariables,
  APITypes.GetCheckInQuestionQuery
>;
export const listCheckInQuestions = /* GraphQL */ `query ListCheckInQuestions(
  $filter: ModelCheckInQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckInQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckInQuestionsQueryVariables,
  APITypes.ListCheckInQuestionsQuery
>;
export const searchCheckInQuestions = /* GraphQL */ `query SearchCheckInQuestions(
  $filter: SearchableCheckInQuestionFilterInput
  $sort: [SearchableCheckInQuestionSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCheckInQuestionAggregationInput]
) {
  searchCheckInQuestions(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCheckInQuestionsQueryVariables,
  APITypes.SearchCheckInQuestionsQuery
>;
export const getCheckInQuestionCategory = /* GraphQL */ `query GetCheckInQuestionCategory($id: ID!) {
  getCheckInQuestionCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCheckInQuestionCategoryQueryVariables,
  APITypes.GetCheckInQuestionCategoryQuery
>;
export const listCheckInQuestionCategories = /* GraphQL */ `query ListCheckInQuestionCategories(
  $filter: ModelCheckInQuestionCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckInQuestionCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckInQuestionCategoriesQueryVariables,
  APITypes.ListCheckInQuestionCategoriesQuery
>;
export const searchCheckInQuestionCategories = /* GraphQL */ `query SearchCheckInQuestionCategories(
  $filter: SearchableCheckInQuestionCategoryFilterInput
  $sort: [SearchableCheckInQuestionCategorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCheckInQuestionCategoryAggregationInput]
) {
  searchCheckInQuestionCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCheckInQuestionCategoriesQueryVariables,
  APITypes.SearchCheckInQuestionCategoriesQuery
>;
export const getCheckInQuestionTheme = /* GraphQL */ `query GetCheckInQuestionTheme($id: ID!) {
  getCheckInQuestionTheme(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCheckInQuestionThemeQueryVariables,
  APITypes.GetCheckInQuestionThemeQuery
>;
export const listCheckInQuestionThemes = /* GraphQL */ `query ListCheckInQuestionThemes(
  $filter: ModelCheckInQuestionThemeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckInQuestionThemes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckInQuestionThemesQueryVariables,
  APITypes.ListCheckInQuestionThemesQuery
>;
export const searchCheckInQuestionThemes = /* GraphQL */ `query SearchCheckInQuestionThemes(
  $filter: SearchableCheckInQuestionThemeFilterInput
  $sort: [SearchableCheckInQuestionThemeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCheckInQuestionThemeAggregationInput]
) {
  searchCheckInQuestionThemes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCheckInQuestionThemesQueryVariables,
  APITypes.SearchCheckInQuestionThemesQuery
>;
export const getCheckInQuestionType = /* GraphQL */ `query GetCheckInQuestionType($id: ID!) {
  getCheckInQuestionType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCheckInQuestionTypeQueryVariables,
  APITypes.GetCheckInQuestionTypeQuery
>;
export const listCheckInQuestionTypes = /* GraphQL */ `query ListCheckInQuestionTypes(
  $filter: ModelCheckInQuestionTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckInQuestionTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckInQuestionTypesQueryVariables,
  APITypes.ListCheckInQuestionTypesQuery
>;
export const searchCheckInQuestionTypes = /* GraphQL */ `query SearchCheckInQuestionTypes(
  $filter: SearchableCheckInQuestionTypeFilterInput
  $sort: [SearchableCheckInQuestionTypeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCheckInQuestionTypeAggregationInput]
) {
  searchCheckInQuestionTypes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCheckInQuestionTypesQueryVariables,
  APITypes.SearchCheckInQuestionTypesQuery
>;
export const checkInQuestionUsersByUserID = /* GraphQL */ `query CheckInQuestionUsersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCheckInQuestionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  checkInQuestionUsersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      checkInQuestionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CheckInQuestionUsersByUserIDQueryVariables,
  APITypes.CheckInQuestionUsersByUserIDQuery
>;
export const checkInQuestionUsersByCheckInQuestionID = /* GraphQL */ `query CheckInQuestionUsersByCheckInQuestionID(
  $checkInQuestionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCheckInQuestionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  checkInQuestionUsersByCheckInQuestionID(
    checkInQuestionID: $checkInQuestionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      checkInQuestionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CheckInQuestionUsersByCheckInQuestionIDQueryVariables,
  APITypes.CheckInQuestionUsersByCheckInQuestionIDQuery
>;
export const searchCheckInQuestionUsers = /* GraphQL */ `query SearchCheckInQuestionUsers(
  $filter: SearchableCheckInQuestionUserFilterInput
  $sort: [SearchableCheckInQuestionUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCheckInQuestionUserAggregationInput]
) {
  searchCheckInQuestionUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      userID
      checkInQuestionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCheckInQuestionUsersQueryVariables,
  APITypes.SearchCheckInQuestionUsersQuery
>;
export const getIceBreakerQuestion = /* GraphQL */ `query GetIceBreakerQuestion($id: ID!) {
  getIceBreakerQuestion(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIceBreakerQuestionQueryVariables,
  APITypes.GetIceBreakerQuestionQuery
>;
export const listIceBreakerQuestions = /* GraphQL */ `query ListIceBreakerQuestions(
  $filter: ModelIceBreakerQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listIceBreakerQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      question
      iceBreakerQuestionCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIceBreakerQuestionsQueryVariables,
  APITypes.ListIceBreakerQuestionsQuery
>;
export const searchIceBreakerQuestions = /* GraphQL */ `query SearchIceBreakerQuestions(
  $filter: SearchableIceBreakerQuestionFilterInput
  $sort: [SearchableIceBreakerQuestionSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableIceBreakerQuestionAggregationInput]
) {
  searchIceBreakerQuestions(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      question
      iceBreakerQuestionCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchIceBreakerQuestionsQueryVariables,
  APITypes.SearchIceBreakerQuestionsQuery
>;
export const getIceBreakerQuestionCategory = /* GraphQL */ `query GetIceBreakerQuestionCategory($id: ID!) {
  getIceBreakerQuestionCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetIceBreakerQuestionCategoryQueryVariables,
  APITypes.GetIceBreakerQuestionCategoryQuery
>;
export const listIceBreakerQuestionCategories = /* GraphQL */ `query ListIceBreakerQuestionCategories(
  $filter: ModelIceBreakerQuestionCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listIceBreakerQuestionCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIceBreakerQuestionCategoriesQueryVariables,
  APITypes.ListIceBreakerQuestionCategoriesQuery
>;
export const getEatingPreference = /* GraphQL */ `query GetEatingPreference($id: ID!) {
  getEatingPreference(id: $id) {
    id
    name
    sortOrder
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEatingPreferenceQueryVariables,
  APITypes.GetEatingPreferenceQuery
>;
export const listEatingPreferences = /* GraphQL */ `query ListEatingPreferences(
  $filter: ModelEatingPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listEatingPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sortOrder
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEatingPreferencesQueryVariables,
  APITypes.ListEatingPreferencesQuery
>;
export const getQuote = /* GraphQL */ `query GetQuote($id: ID!) {
  getQuote(id: $id) {
    id
    text
    author
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQuoteQueryVariables, APITypes.GetQuoteQuery>;
export const listQuotes = /* GraphQL */ `query ListQuotes(
  $filter: ModelQuoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      author
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuotesQueryVariables,
  APITypes.ListQuotesQuery
>;
export const searchQuotes = /* GraphQL */ `query SearchQuotes(
  $filter: SearchableQuoteFilterInput
  $sort: [SearchableQuoteSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableQuoteAggregationInput]
) {
  searchQuotes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      text
      author
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchQuotesQueryVariables,
  APITypes.SearchQuotesQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
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
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const searchAuthors = /* GraphQL */ `query SearchAuthors(
  $filter: SearchableAuthorFilterInput
  $sort: [SearchableAuthorSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableAuthorAggregationInput]
) {
  searchAuthors(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAuthorsQueryVariables,
  APITypes.SearchAuthorsQuery
>;
export const getContent = /* GraphQL */ `query GetContent($id: ID!) {
  getContent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentQueryVariables,
  APITypes.GetContentQuery
>;
export const listContents = /* GraphQL */ `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      contentCategoryId
      contentTypeId
      authorId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentsQueryVariables,
  APITypes.ListContentsQuery
>;
export const searchContents = /* GraphQL */ `query SearchContents(
  $filter: SearchableContentFilterInput
  $sort: [SearchableContentSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableContentAggregationInput]
) {
  searchContents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      contentCategoryId
      contentTypeId
      authorId
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContentsQueryVariables,
  APITypes.SearchContentsQuery
>;
export const getContentCategoryDayImage = /* GraphQL */ `query GetContentCategoryDayImage($id: ID!) {
  getContentCategoryDayImage(id: $id) {
    id
    contentCategoryId
    url
    day
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContentCategoryDayImageQueryVariables,
  APITypes.GetContentCategoryDayImageQuery
>;
export const listContentCategoryDayImages = /* GraphQL */ `query ListContentCategoryDayImages(
  $filter: ModelContentCategoryDayImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentCategoryDayImages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contentCategoryId
      url
      day
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentCategoryDayImagesQueryVariables,
  APITypes.ListContentCategoryDayImagesQuery
>;
export const contentCategoryDayImagesByContentCategoryIdAndDay = /* GraphQL */ `query ContentCategoryDayImagesByContentCategoryIdAndDay(
  $contentCategoryId: ID!
  $day: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelContentCategoryDayImageFilterInput
  $limit: Int
  $nextToken: String
) {
  contentCategoryDayImagesByContentCategoryIdAndDay(
    contentCategoryId: $contentCategoryId
    day: $day
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contentCategoryId
      url
      day
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ContentCategoryDayImagesByContentCategoryIdAndDayQueryVariables,
  APITypes.ContentCategoryDayImagesByContentCategoryIdAndDayQuery
>;
export const getContentCategory = /* GraphQL */ `query GetContentCategory($id: ID!) {
  getContentCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentCategoryQueryVariables,
  APITypes.GetContentCategoryQuery
>;
export const listContentCategories = /* GraphQL */ `query ListContentCategories(
  $filter: ModelContentCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentCategoriesQueryVariables,
  APITypes.ListContentCategoriesQuery
>;
export const searchContentCategories = /* GraphQL */ `query SearchContentCategories(
  $filter: SearchableContentCategoryFilterInput
  $sort: [SearchableContentCategorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableContentCategoryAggregationInput]
) {
  searchContentCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContentCategoriesQueryVariables,
  APITypes.SearchContentCategoriesQuery
>;
export const getContentType = /* GraphQL */ `query GetContentType($id: ID!) {
  getContentType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentTypeQueryVariables,
  APITypes.GetContentTypeQuery
>;
export const listContentTypes = /* GraphQL */ `query ListContentTypes(
  $filter: ModelContentTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentTypesQueryVariables,
  APITypes.ListContentTypesQuery
>;
export const searchContentTypes = /* GraphQL */ `query SearchContentTypes(
  $filter: SearchableContentTypeFilterInput
  $sort: [SearchableContentTypeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableContentTypeAggregationInput]
) {
  searchContentTypes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContentTypesQueryVariables,
  APITypes.SearchContentTypesQuery
>;
export const getPrompt = /* GraphQL */ `query GetPrompt($id: ID!) {
  getPrompt(id: $id) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPromptQueryVariables, APITypes.GetPromptQuery>;
export const listPrompts = /* GraphQL */ `query ListPrompts(
  $filter: ModelPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPromptsQueryVariables,
  APITypes.ListPromptsQuery
>;
export const promptsByPromptCategoryIDAndPrompt = /* GraphQL */ `query PromptsByPromptCategoryIDAndPrompt(
  $promptCategoryID: ID!
  $prompt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  promptsByPromptCategoryIDAndPrompt(
    promptCategoryID: $promptCategoryID
    prompt: $prompt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PromptsByPromptCategoryIDAndPromptQueryVariables,
  APITypes.PromptsByPromptCategoryIDAndPromptQuery
>;
export const searchPrompts = /* GraphQL */ `query SearchPrompts(
  $filter: SearchablePromptFilterInput
  $sort: [SearchablePromptSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePromptAggregationInput]
) {
  searchPrompts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPromptsQueryVariables,
  APITypes.SearchPromptsQuery
>;
export const getPromptCategory = /* GraphQL */ `query GetPromptCategory($id: ID!) {
  getPromptCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPromptCategoryQueryVariables,
  APITypes.GetPromptCategoryQuery
>;
export const listPromptCategories = /* GraphQL */ `query ListPromptCategories(
  $filter: ModelPromptCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listPromptCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      promptCategoryId
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPromptCategoriesQueryVariables,
  APITypes.ListPromptCategoriesQuery
>;
export const searchPromptCategories = /* GraphQL */ `query SearchPromptCategories(
  $filter: SearchablePromptCategoryFilterInput
  $sort: [SearchablePromptCategorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePromptCategoryAggregationInput]
) {
  searchPromptCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      promptCategoryId
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPromptCategoriesQueryVariables,
  APITypes.SearchPromptCategoriesQuery
>;
export const getChatPrompt = /* GraphQL */ `query GetChatPrompt($id: ID!) {
  getChatPrompt(id: $id) {
    id
    prompt
    promptCategoryID
    isActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatPromptQueryVariables,
  APITypes.GetChatPromptQuery
>;
export const listChatPrompts = /* GraphQL */ `query ListChatPrompts(
  $filter: ModelChatPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatPromptsQueryVariables,
  APITypes.ListChatPromptsQuery
>;
export const chatPromptsByPromptCategoryIDAndPrompt = /* GraphQL */ `query ChatPromptsByPromptCategoryIDAndPrompt(
  $promptCategoryID: ID!
  $prompt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChatPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  chatPromptsByPromptCategoryIDAndPrompt(
    promptCategoryID: $promptCategoryID
    prompt: $prompt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatPromptsByPromptCategoryIDAndPromptQueryVariables,
  APITypes.ChatPromptsByPromptCategoryIDAndPromptQuery
>;
export const searchChatPrompts = /* GraphQL */ `query SearchChatPrompts(
  $filter: SearchableChatPromptFilterInput
  $sort: [SearchableChatPromptSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableChatPromptAggregationInput]
) {
  searchChatPrompts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      prompt
      promptCategoryID
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchChatPromptsQueryVariables,
  APITypes.SearchChatPromptsQuery
>;
export const getChatPromptCategory = /* GraphQL */ `query GetChatPromptCategory($id: ID!) {
  getChatPromptCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChatPromptCategoryQueryVariables,
  APITypes.GetChatPromptCategoryQuery
>;
export const listChatPromptCategories = /* GraphQL */ `query ListChatPromptCategories(
  $filter: ModelChatPromptCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatPromptCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      chatPromptCategoryId
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatPromptCategoriesQueryVariables,
  APITypes.ListChatPromptCategoriesQuery
>;
export const searchChatPromptCategories = /* GraphQL */ `query SearchChatPromptCategories(
  $filter: SearchableChatPromptCategoryFilterInput
  $sort: [SearchableChatPromptCategorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableChatPromptCategoryAggregationInput]
) {
  searchChatPromptCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      chatPromptCategoryId
      name
      isActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchChatPromptCategoriesQueryVariables,
  APITypes.SearchChatPromptCategoriesQuery
>;
export const getFeedbackUser = /* GraphQL */ `query GetFeedbackUser($id: ID!) {
  getFeedbackUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeedbackUserQueryVariables,
  APITypes.GetFeedbackUserQuery
>;
export const listFeedbackUsers = /* GraphQL */ `query ListFeedbackUsers(
  $filter: ModelFeedbackUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbackUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbackUsersQueryVariables,
  APITypes.ListFeedbackUsersQuery
>;
export const searchFeedbackUsers = /* GraphQL */ `query SearchFeedbackUsers(
  $filter: SearchableFeedbackUserFilterInput
  $sort: [SearchableFeedbackUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableFeedbackUserAggregationInput]
) {
  searchFeedbackUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchFeedbackUsersQueryVariables,
  APITypes.SearchFeedbackUsersQuery
>;
export const getFeedbackTester = /* GraphQL */ `query GetFeedbackTester($id: ID!) {
  getFeedbackTester(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeedbackTesterQueryVariables,
  APITypes.GetFeedbackTesterQuery
>;
export const listFeedbackTesters = /* GraphQL */ `query ListFeedbackTesters(
  $filter: ModelFeedbackTesterFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbackTesters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbackTestersQueryVariables,
  APITypes.ListFeedbackTestersQuery
>;
export const searchFeedbackTesters = /* GraphQL */ `query SearchFeedbackTesters(
  $filter: SearchableFeedbackTesterFilterInput
  $sort: [SearchableFeedbackTesterSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableFeedbackTesterAggregationInput]
) {
  searchFeedbackTesters(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchFeedbackTestersQueryVariables,
  APITypes.SearchFeedbackTestersQuery
>;
export const getGeneralAppContent = /* GraphQL */ `query GetGeneralAppContent($id: ID!) {
  getGeneralAppContent(id: $id) {
    id
    contentType
    title
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGeneralAppContentQueryVariables,
  APITypes.GetGeneralAppContentQuery
>;
export const listGeneralAppContents = /* GraphQL */ `query ListGeneralAppContents(
  $filter: ModelGeneralAppContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listGeneralAppContents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contentType
      title
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGeneralAppContentsQueryVariables,
  APITypes.ListGeneralAppContentsQuery
>;
export const generalAppContentsByContentType = /* GraphQL */ `query GeneralAppContentsByContentType(
  $contentType: String!
  $sortDirection: ModelSortDirection
  $filter: ModelGeneralAppContentFilterInput
  $limit: Int
  $nextToken: String
) {
  generalAppContentsByContentType(
    contentType: $contentType
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contentType
      title
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GeneralAppContentsByContentTypeQueryVariables,
  APITypes.GeneralAppContentsByContentTypeQuery
>;
export const searchGeneralAppContents = /* GraphQL */ `query SearchGeneralAppContents(
  $filter: SearchableGeneralAppContentFilterInput
  $sort: [SearchableGeneralAppContentSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableGeneralAppContentAggregationInput]
) {
  searchGeneralAppContents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      contentType
      title
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchGeneralAppContentsQueryVariables,
  APITypes.SearchGeneralAppContentsQuery
>;
export const getWaitlistUser = /* GraphQL */ `query GetWaitlistUser($id: ID!) {
  getWaitlistUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWaitlistUserQueryVariables,
  APITypes.GetWaitlistUserQuery
>;
export const listWaitlistUsers = /* GraphQL */ `query ListWaitlistUsers(
  $filter: ModelWaitlistUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listWaitlistUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWaitlistUsersQueryVariables,
  APITypes.ListWaitlistUsersQuery
>;
export const waitlistUsersByEmail = /* GraphQL */ `query WaitlistUsersByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelWaitlistUserFilterInput
  $limit: Int
  $nextToken: String
) {
  waitlistUsersByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WaitlistUsersByEmailQueryVariables,
  APITypes.WaitlistUsersByEmailQuery
>;
export const waitlistUsersByCreatedAt = /* GraphQL */ `query WaitlistUsersByCreatedAt(
  $createdAt: AWSDateTime!
  $sortDirection: ModelSortDirection
  $filter: ModelWaitlistUserFilterInput
  $limit: Int
  $nextToken: String
) {
  waitlistUsersByCreatedAt(
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WaitlistUsersByCreatedAtQueryVariables,
  APITypes.WaitlistUsersByCreatedAtQuery
>;
export const searchWaitlistUsers = /* GraphQL */ `query SearchWaitlistUsers(
  $filter: SearchableWaitlistUserFilterInput
  $sort: [SearchableWaitlistUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableWaitlistUserAggregationInput]
) {
  searchWaitlistUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchWaitlistUsersQueryVariables,
  APITypes.SearchWaitlistUsersQuery
>;
export const getConnections = /* GraphQL */ `query GetConnections(
  $myId: ID!
  $latitude: Float!
  $longitude: Float!
  $range: Int!
  $agePreferenceFrom: Int!
  $agePreferenceTo: Int!
  $genderPreferences: String!
  $gender: String
  $extraData: String
) {
  getConnections(
    myId: $myId
    latitude: $latitude
    longitude: $longitude
    range: $range
    agePreferenceFrom: $agePreferenceFrom
    agePreferenceTo: $agePreferenceTo
    genderPreferences: $genderPreferences
    gender: $gender
    extraData: $extraData
  ) {
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
` as GeneratedQuery<
  APITypes.GetConnectionsQueryVariables,
  APITypes.GetConnectionsQuery
>;
export const getConnectionsV2 = /* GraphQL */ `query GetConnectionsV2(
  $myId: ID!
  $latitude: Float!
  $longitude: Float!
  $range: Int!
  $agePreferenceFrom: Int!
  $agePreferenceTo: Int!
  $genderPreferences: String!
  $gender: String
  $extraData: String
) {
  getConnectionsV2(
    myId: $myId
    latitude: $latitude
    longitude: $longitude
    range: $range
    agePreferenceFrom: $agePreferenceFrom
    agePreferenceTo: $agePreferenceTo
    genderPreferences: $genderPreferences
    gender: $gender
    extraData: $extraData
  ) {
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
` as GeneratedQuery<
  APITypes.GetConnectionsV2QueryVariables,
  APITypes.GetConnectionsV2Query
>;
export const streamToken = /* GraphQL */ `query StreamToken($userId: String!) {
  streamToken(userId: $userId)
}
` as GeneratedQuery<
  APITypes.StreamTokenQueryVariables,
  APITypes.StreamTokenQuery
>;
export const sendPushNotification = /* GraphQL */ `query SendPushNotification(
  $title: String!
  $subtitle: String
  $content: String!
  $OneSignalUserId: String!
) {
  sendPushNotification(
    title: $title
    subtitle: $subtitle
    content: $content
    OneSignalUserId: $OneSignalUserId
  )
}
` as GeneratedQuery<
  APITypes.SendPushNotificationQueryVariables,
  APITypes.SendPushNotificationQuery
>;
export const addContactToList = /* GraphQL */ `query AddContactToList($email: String!) {
  addContactToList(email: $email)
}
` as GeneratedQuery<
  APITypes.AddContactToListQueryVariables,
  APITypes.AddContactToListQuery
>;
export const moderateImage = /* GraphQL */ `query ModerateImage($imagePath: String!) {
  moderateImage(imagePath: $imagePath)
}
` as GeneratedQuery<
  APITypes.ModerateImageQueryVariables,
  APITypes.ModerateImageQuery
>;
export const sendConnectionEmail = /* GraphQL */ `query SendConnectionEmail($toEmail: String!, $connectionName: String!) {
  sendConnectionEmail(toEmail: $toEmail, connectionName: $connectionName)
}
` as GeneratedQuery<
  APITypes.SendConnectionEmailQueryVariables,
  APITypes.SendConnectionEmailQuery
>;
export const fetchWaitlistUsers = /* GraphQL */ `query FetchWaitlistUsers {
  fetchWaitlistUsers
}
` as GeneratedQuery<
  APITypes.FetchWaitlistUsersQueryVariables,
  APITypes.FetchWaitlistUsersQuery
>;
export const deleteStreamChannel = /* GraphQL */ `query DeleteStreamChannel($channelCid: String!) {
  deleteStreamChannel(channelCid: $channelCid)
}
` as GeneratedQuery<
  APITypes.DeleteStreamChannelQueryVariables,
  APITypes.DeleteStreamChannelQuery
>;
