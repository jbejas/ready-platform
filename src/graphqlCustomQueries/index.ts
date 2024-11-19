/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api/index";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export type SearchCheckInQuestionsQuery = {
  searchCheckInQuestions?: {
    __typename: "SearchableCheckInQuestionConnection";
    items: Array<{
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title: string;
      question: string;
      checkInQuestionCategory: {
        name: string;
      };
      checkInQuestionTheme: {
        name: string;
      };
      checkInQuestionContentCategoryName: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID: string;
      checkInQuestionTypeID: string;
      checkInQuestionContentCategoryId?: string;
      responses?: Array<string | null> | null;
      quote?: string;
      author?: string;
      dayImage?: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
  } | null;
};

export type SearchLikesQuery = {
  searchLikes?: {
    __typename: "SearchableLikeConnection";
    items: Array<{
      __typename: "Like";
      id: string;
      likerId: string;
      liker: {
        firstName: string;
      };
      likedId: string;
      liked: {
        firstName: string;
      };
      amILikedBack?: boolean | null;
      active?: boolean | null;
      channelId?: string | null;
      isUnmatched?: boolean | null;
      isReported?: boolean | null;
      reporterType?: string | null;
      unmatchReason?: string | null;
      reportReason?: string | null;
      details?: string | null;
      unmatchedUserId?: string | null;
      isUnmatchAcked?: boolean | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
    distancePreference
    childrenStatusID
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
    isWantChildrenStatusVisible
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
          id
          name
          sortOrder
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
    createdAt
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
      isGenderVisible
      ethnicityID
      isEthnicityVisible
      religionID
      isReligionVisible
      height
      isHeightVisible
      pronounID
      isPronounVisible
      sexualOrientation
      isSexualOrientationVisible
      areGenderPreferencesVisible
      agePreferenceFrom
      agePreferenceTo
      distancePreference
      childrenStatusID
      isChildrenStatusVisible
      isWantChildrenStatusVisible
      educationLevelID
      isEducationLevelVisible
      school
      isSchoolVisbile
      areLanguagesVisible
      jobTitle
      isJobTitleVisible
      work
      isWorkVisible
      drinkPreferenceID
      isDrinkPreferenceVisible
      tobaccoPreferenceID
      isTobaccoPreferenceVisible
      drugPreferenceID
      isDrugPreferenceVisible
      areEatingPreferencesVisible
      exercisePreferenceID
      isExercisePreferenceVisible
      sleepingHabitID
      isSleepingHabitVisible
      hometown
      isHometownVisible
      isUserActive
      isUserPaused
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSleepingHabit =
  /* GraphQL */ `query GetSleepingHabit($id: ID!) {
  getSleepingHabit(id: $id) {
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
    APITypes.GetSleepingHabitQueryVariables,
    APITypes.GetSleepingHabitQuery
  >;

export const searchCheckInQuestions =
  /* GraphQL */ `query SearchCheckInQuestions(
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
        checkInQuestionCategoryID
        checkInQuestionCategory {
          name
        }
        checkInQuestionTheme {
          name
        }
        checkInQuestionType {
          name
        }
        checkInQuestionThemeID
        checkInQuestionTypeID
        checkInQuestionContentCategoryId
        checkInQuestionContentCategoryName
        responses
        quote
        author
        isActive
        createdAt
        updatedAt
      }
    }
  }
  ` as GeneratedQuery<
    APITypes.SearchCheckInQuestionsQueryVariables,
    SearchCheckInQuestionsQuery
  >;

export const searchMatchUsers = /* GraphQL */ `query SearchUsers(
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
        distancePreference
        drinkPreference
        drugPreference
        eatingPreferences
        educationLevel
        email
        emailCommunication
        ethnicity {
          items {
            ethnicity {
              name
            }
          }
        }
        exercisePreference
        genderPreferences
        height
        hometown
        id
        isChildrenStatusVisible
        isWantChildrenStatusVisible
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
            language {
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
              sortOrder
            }
          }
        }
        prompts
        pronoun {
          name
        }
        religion {
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
        streamToken
        oneSignalUserId
        userDailyConnections
        connectionsUpdatedOn
        reflectionCompletedOn
        activeConnections
        signUpStep
        isSignUpComplete
        wantChildrenStatus
        isChildrenStatusVisible
        createdAt
      }
    }
  }
  ` as GeneratedQuery<
  APITypes.SearchUsersQueryVariables,
  APITypes.SearchUsersQuery
>;

export const getConnections = /* GraphQL */ `query GetConnections(
  $myId: ID!
  $latitude: Float!
  $longitude: Float!
  $range: Int!
  $agePreferenceFrom: Int!
  $agePreferenceTo: Int!
  $genderPreferences: String!
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
    extraData: $extraData
  ) {
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
    distancePreference
    drinkPreference
    drugPreference
    eatingPreferences
    educationLevel
    email
    emailCommunication
    ethnicity {
      items {
        ethnicity {
          name
        }
      }
    }
    exercisePreference
    genderPreferences
    height
    hometown
    id
    isChildrenStatusVisible
    isWantChildrenStatusVisible
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
        language {
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
          sortOrder
        }
      }
    }
    prompts
    pronoun {
      name
    }
    religion {
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
    streamToken
    oneSignalUserId
    userDailyConnections
    connectionsUpdatedOn
    reflectionCompletedOn
    activeConnections
    signUpStep
    isSignUpComplete
    wantChildrenStatus
    isChildrenStatusVisible
    createdAt
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
    distancePreference
    drinkPreference
    drugPreference
    eatingPreferences
    educationLevel
    email
    emailCommunication
    ethnicity {
      items {
        ethnicity {
          name
        }
      }
    }
    exercisePreference
    genderPreferences
    height
    hometown
    id
    isChildrenStatusVisible
    isWantChildrenStatusVisible
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
        language {
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
          sortOrder
        }
      }
    }
    prompts
    pronoun {
      name
    }
    religion {
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
    streamToken
    oneSignalUserId
    userDailyConnections
    connectionsUpdatedOn
    reflectionCompletedOn
    activeConnections
    signUpStep
    isSignUpComplete
    wantChildrenStatus
    isChildrenStatusVisible
    createdAt
  }
}
` as GeneratedQuery<
  APITypes.GetConnectionsV2QueryVariables,
  APITypes.GetConnectionsV2Query
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
      liker {
        firstName
      }
      likedId
      liked {
        firstName
      }
      amILikedBack
      active
      channelId
      createdAt
      updatedAt
      isUnmatchAcked
    }
  }
}
` as GeneratedQuery<
  APITypes.SearchLikesQueryVariables,
  APITypes.SearchLikesQuery
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
      author {
        firstName
        lastName
      }
      contentCategory {
        name
      }
      contentType {
        name
      }
      media
      mediaDuration
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
    total
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContentsQueryVariables,
  APITypes.SearchContentsQuery
>;

export const searchContentsTotal = /* GraphQL */ `query SearchContents(
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
    total
  }
}
` as GeneratedQuery<
  APITypes.SearchContentsQueryVariables,
  APITypes.SearchContentsQuery
>;

export const searchContentCategories =
  /* GraphQL */ `query SearchContentCategories(
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
      dayImages {
        items {
          day
          url
        }
      }
    }
  }
}
` as GeneratedQuery<
    APITypes.SearchContentCategoriesQueryVariables,
    APITypes.SearchContentCategoriesQuery
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
        dayImages {
          items {
            id
            day
            url
          }
        }
        reflectionQuestionsGradientValues
        contentPageGradientValues
        isActive
        sortOrder
      }
      nextToken
      __typename
    }
  }
  ` as GeneratedQuery<
  APITypes.ListContentCategoriesQueryVariables,
  APITypes.ListContentCategoriesQuery
>;
