/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  emailCommunication?: boolean | null;
  birthdate?: string | null;
  gender?: string | null;
  isGenderVisible?: boolean | null;
  sexualOrientation?: string | null;
  isSexualOrientationVisible?: boolean | null;
  value?: string | null;
  location?: string | null;
  locationLatLong?: LatLongInput | null;
  isLocationVisible?: boolean | null;
  mentalHealth?: string | null;
  quality?: string | null;
  energy?: string | null;
  starSign?: string | null;
  isStarSignVisible?: boolean | null;
  ethnicityID?: string | null;
  isEthnicityVisible?: boolean | null;
  religionID?: string | null;
  isReligionVisible?: boolean | null;
  height?: number | null;
  isHeightVisible?: boolean | null;
  pronounID?: string | null;
  isPronounVisible?: boolean | null;
  genderPreferences?: string | null;
  areGenderPreferencesVisible?: boolean | null;
  agePreferenceFrom?: number | null;
  agePreferenceTo?: number | null;
  distancePreference?: number | null;
  childrenStatusID?: string | null;
  wantChildrenStatus?: string | null;
  isChildrenStatusVisible?: boolean | null;
  isWantChildrenStatusVisible?: boolean | null;
  educationLevel?: string | null;
  isEducationLevelVisible?: boolean | null;
  school?: string | null;
  isSchoolVisbile?: boolean | null;
  areLanguagesVisible?: boolean | null;
  jobTitle?: string | null;
  isJobTitleVisible?: boolean | null;
  work?: string | null;
  isWorkVisible?: boolean | null;
  drinkPreference?: string | null;
  isDrinkPreferenceVisible?: boolean | null;
  tobaccoPreference?: string | null;
  isTobaccoPreferenceVisible?: boolean | null;
  drugPreference?: string | null;
  isDrugPreferenceVisible?: boolean | null;
  therapyPreference?: string | null;
  isTherapyPreferenceVisible?: boolean | null;
  eatingPreferences?: string | null;
  areEatingPreferencesVisible?: boolean | null;
  exercisePreferenceID?: string | null;
  exercisePreference?: string | null;
  isExercisePreferenceVisible?: boolean | null;
  sleepingHabit?: string | null;
  isSleepingHabitVisible?: boolean | null;
  hometown?: string | null;
  isHometownVisible?: boolean | null;
  prompts?: string | null;
  userMainPhoto?: string | null;
  defaultUserPhoto?: number | null;
  bio?: string | null;
  discoveringYou?: string | null;
  isUserActive: boolean;
  isUserVerified?: boolean | null;
  isUserOnboarded?: boolean | null;
  isUserPaused?: boolean | null;
  isProfileComplete?: boolean | null;
  isHabitsComplete?: boolean | null;
  isOnboardingStarted?: boolean | null;
  onboardingStep?: number | null;
  signUpStep?: number | null;
  isSignUpComplete?: boolean | null;
  dailyReflectionReminderType?: string | null;
  dailyReflectionReminderFrequency?: string | null;
  dailyReflectionNotificationTime?: string | null;
  isDailyReflectionNotificationEnabled?: boolean | null;
  timeOffset?: string | null;
  isNewConnectionsNotificationPushActive?: boolean | null;
  isNewConnectionsNotificationEmailActive?: boolean | null;
  newMessagesNotificationType?: string | null;
  isNewMessagesNotificationEnabled?: boolean | null;
  streamToken?: string | null;
  oneSignalUserId?: string | null;
  activeConnections?: number | null;
  userDailyConnections?: string | null;
  connectionsUpdatedOn?: string | null;
  reflectionCompletedOn?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LatLongInput = {
  latitude: number;
  longitude: number;
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  emailCommunication?: ModelBooleanInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  isGenderVisible?: ModelBooleanInput | null;
  sexualOrientation?: ModelStringInput | null;
  isSexualOrientationVisible?: ModelBooleanInput | null;
  value?: ModelStringInput | null;
  location?: ModelStringInput | null;
  isLocationVisible?: ModelBooleanInput | null;
  mentalHealth?: ModelStringInput | null;
  quality?: ModelStringInput | null;
  energy?: ModelStringInput | null;
  starSign?: ModelStringInput | null;
  isStarSignVisible?: ModelBooleanInput | null;
  ethnicityID?: ModelIDInput | null;
  isEthnicityVisible?: ModelBooleanInput | null;
  religionID?: ModelIDInput | null;
  isReligionVisible?: ModelBooleanInput | null;
  height?: ModelIntInput | null;
  isHeightVisible?: ModelBooleanInput | null;
  pronounID?: ModelIDInput | null;
  isPronounVisible?: ModelBooleanInput | null;
  genderPreferences?: ModelStringInput | null;
  areGenderPreferencesVisible?: ModelBooleanInput | null;
  agePreferenceFrom?: ModelIntInput | null;
  agePreferenceTo?: ModelIntInput | null;
  distancePreference?: ModelIntInput | null;
  childrenStatusID?: ModelIDInput | null;
  wantChildrenStatus?: ModelStringInput | null;
  isChildrenStatusVisible?: ModelBooleanInput | null;
  isWantChildrenStatusVisible?: ModelBooleanInput | null;
  educationLevel?: ModelStringInput | null;
  isEducationLevelVisible?: ModelBooleanInput | null;
  school?: ModelStringInput | null;
  isSchoolVisbile?: ModelBooleanInput | null;
  areLanguagesVisible?: ModelBooleanInput | null;
  jobTitle?: ModelStringInput | null;
  isJobTitleVisible?: ModelBooleanInput | null;
  work?: ModelStringInput | null;
  isWorkVisible?: ModelBooleanInput | null;
  drinkPreference?: ModelStringInput | null;
  isDrinkPreferenceVisible?: ModelBooleanInput | null;
  tobaccoPreference?: ModelStringInput | null;
  isTobaccoPreferenceVisible?: ModelBooleanInput | null;
  drugPreference?: ModelStringInput | null;
  isDrugPreferenceVisible?: ModelBooleanInput | null;
  therapyPreference?: ModelStringInput | null;
  isTherapyPreferenceVisible?: ModelBooleanInput | null;
  eatingPreferences?: ModelStringInput | null;
  areEatingPreferencesVisible?: ModelBooleanInput | null;
  exercisePreferenceID?: ModelIDInput | null;
  exercisePreference?: ModelStringInput | null;
  isExercisePreferenceVisible?: ModelBooleanInput | null;
  sleepingHabit?: ModelStringInput | null;
  isSleepingHabitVisible?: ModelBooleanInput | null;
  hometown?: ModelStringInput | null;
  isHometownVisible?: ModelBooleanInput | null;
  prompts?: ModelStringInput | null;
  userMainPhoto?: ModelStringInput | null;
  defaultUserPhoto?: ModelIntInput | null;
  bio?: ModelStringInput | null;
  discoveringYou?: ModelStringInput | null;
  isUserActive?: ModelBooleanInput | null;
  isUserVerified?: ModelBooleanInput | null;
  isUserOnboarded?: ModelBooleanInput | null;
  isUserPaused?: ModelBooleanInput | null;
  isProfileComplete?: ModelBooleanInput | null;
  isHabitsComplete?: ModelBooleanInput | null;
  isOnboardingStarted?: ModelBooleanInput | null;
  onboardingStep?: ModelIntInput | null;
  signUpStep?: ModelIntInput | null;
  isSignUpComplete?: ModelBooleanInput | null;
  dailyReflectionReminderType?: ModelStringInput | null;
  dailyReflectionReminderFrequency?: ModelStringInput | null;
  dailyReflectionNotificationTime?: ModelStringInput | null;
  isDailyReflectionNotificationEnabled?: ModelBooleanInput | null;
  timeOffset?: ModelStringInput | null;
  isNewConnectionsNotificationPushActive?: ModelBooleanInput | null;
  isNewConnectionsNotificationEmailActive?: ModelBooleanInput | null;
  newMessagesNotificationType?: ModelStringInput | null;
  isNewMessagesNotificationEnabled?: ModelBooleanInput | null;
  streamToken?: ModelStringInput | null;
  oneSignalUserId?: ModelStringInput | null;
  activeConnections?: ModelIntInput | null;
  userDailyConnections?: ModelStringInput | null;
  connectionsUpdatedOn?: ModelStringInput | null;
  reflectionCompletedOn?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type User = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  emailCommunication?: boolean | null;
  birthdate?: string | null;
  gender?: string | null;
  isGenderVisible?: boolean | null;
  sexualOrientation?: string | null;
  isSexualOrientationVisible?: boolean | null;
  value?: string | null;
  location?: string | null;
  locationLatLong?: LatLong | null;
  isLocationVisible?: boolean | null;
  mentalHealth?: string | null;
  quality?: string | null;
  energy?: string | null;
  starSign?: string | null;
  isStarSignVisible?: boolean | null;
  ethnicityID?: string | null;
  ethnicity?: ModelEthnicityUserConnection | null;
  isEthnicityVisible?: boolean | null;
  religionID?: string | null;
  religion?: Religion | null;
  isReligionVisible?: boolean | null;
  height?: number | null;
  isHeightVisible?: boolean | null;
  pronounID?: string | null;
  pronoun?: Pronoun | null;
  isPronounVisible?: boolean | null;
  genderPreferences?: string | null;
  areGenderPreferencesVisible?: boolean | null;
  agePreferenceFrom?: number | null;
  agePreferenceTo?: number | null;
  distancePreference?: number | null;
  childrenStatusID?: string | null;
  childrenStatus?: ChildrenStatus | null;
  wantChildrenStatus?: string | null;
  isChildrenStatusVisible?: boolean | null;
  isWantChildrenStatusVisible?: boolean | null;
  educationLevel?: string | null;
  isEducationLevelVisible?: boolean | null;
  school?: string | null;
  isSchoolVisbile?: boolean | null;
  languages?: ModelLanguageUserConnection | null;
  areLanguagesVisible?: boolean | null;
  jobTitle?: string | null;
  isJobTitleVisible?: boolean | null;
  work?: string | null;
  isWorkVisible?: boolean | null;
  drinkPreference?: string | null;
  isDrinkPreferenceVisible?: boolean | null;
  tobaccoPreference?: string | null;
  isTobaccoPreferenceVisible?: boolean | null;
  drugPreference?: string | null;
  isDrugPreferenceVisible?: boolean | null;
  therapyPreference?: string | null;
  isTherapyPreferenceVisible?: boolean | null;
  eatingPreferences?: string | null;
  areEatingPreferencesVisible?: boolean | null;
  exercisePreferenceID?: string | null;
  exercisePreference?: string | null;
  isExercisePreferenceVisible?: boolean | null;
  sleepingHabit?: string | null;
  isSleepingHabitVisible?: boolean | null;
  hometown?: string | null;
  isHometownVisible?: boolean | null;
  prompts?: string | null;
  photos?: ModelPhotoUserConnection | null;
  userMainPhoto?: string | null;
  defaultUserPhoto?: number | null;
  stories?: ModelStoryUserConnection | null;
  checkInQuestions?: ModelCheckInQuestionUserConnection | null;
  bio?: string | null;
  discoveringYou?: string | null;
  isUserActive: boolean;
  isUserVerified?: boolean | null;
  isUserOnboarded?: boolean | null;
  isUserPaused?: boolean | null;
  isProfileComplete?: boolean | null;
  isHabitsComplete?: boolean | null;
  isOnboardingStarted?: boolean | null;
  onboardingStep?: number | null;
  signUpStep?: number | null;
  isSignUpComplete?: boolean | null;
  days?: ModelDayConnection | null;
  matches?: ModelMatchConnection | null;
  dailyReflectionReminderType?: string | null;
  dailyReflectionReminderFrequency?: string | null;
  dailyReflectionNotificationTime?: string | null;
  isDailyReflectionNotificationEnabled?: boolean | null;
  timeOffset?: string | null;
  isNewConnectionsNotificationPushActive?: boolean | null;
  isNewConnectionsNotificationEmailActive?: boolean | null;
  newMessagesNotificationType?: string | null;
  isNewMessagesNotificationEnabled?: boolean | null;
  likesGiven?: ModelLikeConnection | null;
  likesReceived?: ModelLikeConnection | null;
  streamToken?: string | null;
  oneSignalUserId?: string | null;
  activeConnections?: number | null;
  userDailyConnections?: string | null;
  connectionsUpdatedOn?: string | null;
  reflectionCompletedOn?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LatLong = {
  __typename: "LatLong";
  latitude: number;
  longitude: number;
};

export type ModelEthnicityUserConnection = {
  __typename: "ModelEthnicityUserConnection";
  items: Array<EthnicityUser | null>;
  nextToken?: string | null;
};

export type EthnicityUser = {
  __typename: "EthnicityUser";
  id: string;
  user: User;
  ethnicity: Ethnicity;
  userID: string;
  ethnicityID: string;
  createdAt: string;
  updatedAt: string;
};

export type Ethnicity = {
  __typename: "Ethnicity";
  id: string;
  name: string;
  sortOrder?: number | null;
  users?: ModelEthnicityUserConnection | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Religion = {
  __typename: "Religion";
  id: string;
  name: string;
  users?: ModelUserConnection | null;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type Pronoun = {
  __typename: "Pronoun";
  id: string;
  name: string;
  users?: ModelUserConnection | null;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ChildrenStatus = {
  __typename: "ChildrenStatus";
  id: string;
  name: string;
  users?: ModelUserConnection | null;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ModelLanguageUserConnection = {
  __typename: "ModelLanguageUserConnection";
  items: Array<LanguageUser | null>;
  nextToken?: string | null;
};

export type LanguageUser = {
  __typename: "LanguageUser";
  id: string;
  user: User;
  language: Language;
  userID: string;
  languageID: string;
  createdAt: string;
  updatedAt: string;
};

export type Language = {
  __typename: "Language";
  id: string;
  name: string;
  sortOrder?: number | null;
  users?: ModelLanguageUserConnection | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ModelPhotoUserConnection = {
  __typename: "ModelPhotoUserConnection";
  items: Array<PhotoUser | null>;
  nextToken?: string | null;
};

export type PhotoUser = {
  __typename: "PhotoUser";
  id: string;
  user: User;
  photo: Photo;
  userID: string;
  photoID: string;
  createdAt: string;
  updatedAt: string;
};

export type Photo = {
  __typename: "Photo";
  id: string;
  name: string;
  sortOrder: number;
  users?: ModelPhotoUserConnection | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ModelStoryUserConnection = {
  __typename: "ModelStoryUserConnection";
  items: Array<StoryUser | null>;
  nextToken?: string | null;
};

export type StoryUser = {
  __typename: "StoryUser";
  id: string;
  user: User;
  story: Story;
  userID: string;
  storyID: string;
  createdAt: string;
  updatedAt: string;
};

export type Story = {
  __typename: "Story";
  id: string;
  name: string;
  users?: ModelStoryUserConnection | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ModelCheckInQuestionUserConnection = {
  __typename: "ModelCheckInQuestionUserConnection";
  items: Array<CheckInQuestionUser | null>;
  nextToken?: string | null;
};

export type CheckInQuestionUser = {
  __typename: "CheckInQuestionUser";
  id: string;
  user: User;
  language: CheckInQuestion;
  userID: string;
  checkInQuestionID: string;
  createdAt: string;
  updatedAt: string;
};

export type CheckInQuestion = {
  __typename: "CheckInQuestion";
  id: string;
  day?: number | null;
  sortOrder?: number | null;
  title?: string | null;
  question: string;
  quote: string;
  checkInQuestionCategoryID: string;
  checkInQuestionCategory?: CheckInQuestionCategory | null;
  checkInQuestionThemeID?: string | null;
  checkInQuestionTheme?: CheckInQuestionTheme | null;
  checkInQuestionContentCategoryId?: string | null;
  checkInQuestionContentCategoryName?: string | null;
  checkInQuestionTypeID: string;
  checkInQuestionType?: CheckInQuestionType | null;
  responses?: Array<string | null> | null;
  author?: string | null;
  dayImage?: string | null;
  users?: ModelCheckInQuestionUserConnection | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CheckInQuestionCategory = {
  __typename: "CheckInQuestionCategory";
  id: string;
  name: string;
  isActive: boolean;
  question?: ModelCheckInQuestionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCheckInQuestionConnection = {
  __typename: "ModelCheckInQuestionConnection";
  items: Array<CheckInQuestion | null>;
  nextToken?: string | null;
};

export type CheckInQuestionTheme = {
  __typename: "CheckInQuestionTheme";
  id: string;
  name: string;
  isActive: boolean;
  question?: ModelCheckInQuestionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type CheckInQuestionType = {
  __typename: "CheckInQuestionType";
  id: string;
  name: string;
  isActive: boolean;
  question?: ModelCheckInQuestionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelDayConnection = {
  __typename: "ModelDayConnection";
  items: Array<Day | null>;
  nextToken?: string | null;
};

export type Day = {
  __typename: "Day";
  id: string;
  user: User;
  day: number;
  position: number;
  question: string;
  response: string;
  questionCategory: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection";
  items: Array<Match | null>;
  nextToken?: string | null;
};

export type Match = {
  __typename: "Match";
  id: string;
  user: User;
  isReported?: boolean | null;
  userID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection";
  items: Array<Like | null>;
  nextToken?: string | null;
};

export type Like = {
  __typename: "Like";
  id: string;
  likerId: string;
  likedId: string;
  amILikedBack?: boolean | null;
  active?: boolean | null;
  liker?: User | null;
  liked?: User | null;
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
};

export type UpdateUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  emailCommunication?: boolean | null;
  birthdate?: string | null;
  gender?: string | null;
  isGenderVisible?: boolean | null;
  sexualOrientation?: string | null;
  isSexualOrientationVisible?: boolean | null;
  value?: string | null;
  location?: string | null;
  locationLatLong?: LatLongInput | null;
  isLocationVisible?: boolean | null;
  mentalHealth?: string | null;
  quality?: string | null;
  energy?: string | null;
  starSign?: string | null;
  isStarSignVisible?: boolean | null;
  ethnicityID?: string | null;
  isEthnicityVisible?: boolean | null;
  religionID?: string | null;
  isReligionVisible?: boolean | null;
  height?: number | null;
  isHeightVisible?: boolean | null;
  pronounID?: string | null;
  isPronounVisible?: boolean | null;
  genderPreferences?: string | null;
  areGenderPreferencesVisible?: boolean | null;
  agePreferenceFrom?: number | null;
  agePreferenceTo?: number | null;
  distancePreference?: number | null;
  childrenStatusID?: string | null;
  wantChildrenStatus?: string | null;
  isChildrenStatusVisible?: boolean | null;
  isWantChildrenStatusVisible?: boolean | null;
  educationLevel?: string | null;
  isEducationLevelVisible?: boolean | null;
  school?: string | null;
  isSchoolVisbile?: boolean | null;
  areLanguagesVisible?: boolean | null;
  jobTitle?: string | null;
  isJobTitleVisible?: boolean | null;
  work?: string | null;
  isWorkVisible?: boolean | null;
  drinkPreference?: string | null;
  isDrinkPreferenceVisible?: boolean | null;
  tobaccoPreference?: string | null;
  isTobaccoPreferenceVisible?: boolean | null;
  drugPreference?: string | null;
  isDrugPreferenceVisible?: boolean | null;
  therapyPreference?: string | null;
  isTherapyPreferenceVisible?: boolean | null;
  eatingPreferences?: string | null;
  areEatingPreferencesVisible?: boolean | null;
  exercisePreferenceID?: string | null;
  exercisePreference?: string | null;
  isExercisePreferenceVisible?: boolean | null;
  sleepingHabit?: string | null;
  isSleepingHabitVisible?: boolean | null;
  hometown?: string | null;
  isHometownVisible?: boolean | null;
  prompts?: string | null;
  userMainPhoto?: string | null;
  defaultUserPhoto?: number | null;
  bio?: string | null;
  discoveringYou?: string | null;
  isUserActive?: boolean | null;
  isUserVerified?: boolean | null;
  isUserOnboarded?: boolean | null;
  isUserPaused?: boolean | null;
  isProfileComplete?: boolean | null;
  isHabitsComplete?: boolean | null;
  isOnboardingStarted?: boolean | null;
  onboardingStep?: number | null;
  signUpStep?: number | null;
  isSignUpComplete?: boolean | null;
  dailyReflectionReminderType?: string | null;
  dailyReflectionReminderFrequency?: string | null;
  dailyReflectionNotificationTime?: string | null;
  isDailyReflectionNotificationEnabled?: boolean | null;
  timeOffset?: string | null;
  isNewConnectionsNotificationPushActive?: boolean | null;
  isNewConnectionsNotificationEmailActive?: boolean | null;
  newMessagesNotificationType?: string | null;
  isNewMessagesNotificationEnabled?: boolean | null;
  streamToken?: string | null;
  oneSignalUserId?: string | null;
  activeConnections?: number | null;
  userDailyConnections?: string | null;
  connectionsUpdatedOn?: string | null;
  reflectionCompletedOn?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateLikeInput = {
  id?: string | null;
  likerId: string;
  likedId: string;
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
};

export type ModelLikeConditionInput = {
  likerId?: ModelIDInput | null;
  likedId?: ModelIDInput | null;
  amILikedBack?: ModelBooleanInput | null;
  active?: ModelBooleanInput | null;
  channelId?: ModelStringInput | null;
  isUnmatched?: ModelBooleanInput | null;
  isReported?: ModelBooleanInput | null;
  reporterType?: ModelStringInput | null;
  unmatchReason?: ModelStringInput | null;
  reportReason?: ModelStringInput | null;
  details?: ModelStringInput | null;
  unmatchedUserId?: ModelStringInput | null;
  isUnmatchAcked?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLikeConditionInput | null> | null;
  or?: Array<ModelLikeConditionInput | null> | null;
  not?: ModelLikeConditionInput | null;
};

export type UpdateLikeInput = {
  id: string;
  likerId?: string | null;
  likedId?: string | null;
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
};

export type DeleteLikeInput = {
  id: string;
};

export type CreateViewedConnectionInput = {
  id?: string | null;
  userId: string;
  connectionId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelViewedConnectionConditionInput = {
  userId?: ModelIDInput | null;
  connectionId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelViewedConnectionConditionInput | null> | null;
  or?: Array<ModelViewedConnectionConditionInput | null> | null;
  not?: ModelViewedConnectionConditionInput | null;
};

export type ViewedConnection = {
  __typename: "ViewedConnection";
  id: string;
  userId: string;
  connectionId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateViewedConnectionInput = {
  id: string;
  userId?: string | null;
  connectionId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteViewedConnectionInput = {
  id: string;
};

export type CreateSleepingHabitInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelSleepingHabitConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSleepingHabitConditionInput | null> | null;
  or?: Array<ModelSleepingHabitConditionInput | null> | null;
  not?: ModelSleepingHabitConditionInput | null;
};

export type SleepingHabit = {
  __typename: "SleepingHabit";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSleepingHabitInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteSleepingHabitInput = {
  id: string;
};

export type CreateExercisePreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelExercisePreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelExercisePreferenceConditionInput | null> | null;
  or?: Array<ModelExercisePreferenceConditionInput | null> | null;
  not?: ModelExercisePreferenceConditionInput | null;
};

export type ExercisePreference = {
  __typename: "ExercisePreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateExercisePreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteExercisePreferenceInput = {
  id: string;
};

export type CreateDrugPreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelDrugPreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDrugPreferenceConditionInput | null> | null;
  or?: Array<ModelDrugPreferenceConditionInput | null> | null;
  not?: ModelDrugPreferenceConditionInput | null;
};

export type DrugPreference = {
  __typename: "DrugPreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDrugPreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteDrugPreferenceInput = {
  id: string;
};

export type CreateTobaccoPreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelTobaccoPreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTobaccoPreferenceConditionInput | null> | null;
  or?: Array<ModelTobaccoPreferenceConditionInput | null> | null;
  not?: ModelTobaccoPreferenceConditionInput | null;
};

export type TobaccoPreference = {
  __typename: "TobaccoPreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTobaccoPreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTobaccoPreferenceInput = {
  id: string;
};

export type CreateTherapyPreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelTherapyPreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTherapyPreferenceConditionInput | null> | null;
  or?: Array<ModelTherapyPreferenceConditionInput | null> | null;
  not?: ModelTherapyPreferenceConditionInput | null;
};

export type TherapyPreference = {
  __typename: "TherapyPreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTherapyPreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTherapyPreferenceInput = {
  id: string;
};

export type CreateDrinkPreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelDrinkPreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDrinkPreferenceConditionInput | null> | null;
  or?: Array<ModelDrinkPreferenceConditionInput | null> | null;
  not?: ModelDrinkPreferenceConditionInput | null;
};

export type DrinkPreference = {
  __typename: "DrinkPreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDrinkPreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteDrinkPreferenceInput = {
  id: string;
};

export type CreateChildrenStatusInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelChildrenStatusConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChildrenStatusConditionInput | null> | null;
  or?: Array<ModelChildrenStatusConditionInput | null> | null;
  not?: ModelChildrenStatusConditionInput | null;
};

export type UpdateChildrenStatusInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteChildrenStatusInput = {
  id: string;
};

export type CreateWantChildrenStatusInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelWantChildrenStatusConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWantChildrenStatusConditionInput | null> | null;
  or?: Array<ModelWantChildrenStatusConditionInput | null> | null;
  not?: ModelWantChildrenStatusConditionInput | null;
};

export type WantChildrenStatus = {
  __typename: "WantChildrenStatus";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWantChildrenStatusInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteWantChildrenStatusInput = {
  id: string;
};

export type CreateEducationLevelInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelEducationLevelConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEducationLevelConditionInput | null> | null;
  or?: Array<ModelEducationLevelConditionInput | null> | null;
  not?: ModelEducationLevelConditionInput | null;
};

export type EducationLevel = {
  __typename: "EducationLevel";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEducationLevelInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteEducationLevelInput = {
  id: string;
};

export type CreateGenderInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGenderConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGenderConditionInput | null> | null;
  or?: Array<ModelGenderConditionInput | null> | null;
  not?: ModelGenderConditionInput | null;
};

export type Gender = {
  __typename: "Gender";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGenderInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGenderInput = {
  id: string;
};

export type CreateEthnicityInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelEthnicityConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEthnicityConditionInput | null> | null;
  or?: Array<ModelEthnicityConditionInput | null> | null;
  not?: ModelEthnicityConditionInput | null;
};

export type UpdateEthnicityInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteEthnicityInput = {
  id: string;
};

export type CreateEthnicityUserInput = {
  id?: string | null;
  userID: string;
  ethnicityID: string;
};

export type ModelEthnicityUserConditionInput = {
  userID?: ModelIDInput | null;
  ethnicityID?: ModelIDInput | null;
  and?: Array<ModelEthnicityUserConditionInput | null> | null;
  or?: Array<ModelEthnicityUserConditionInput | null> | null;
  not?: ModelEthnicityUserConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateEthnicityUserInput = {
  id: string;
  userID?: string | null;
  ethnicityID?: string | null;
};

export type DeleteEthnicityUserInput = {
  id: string;
};

export type CreateReligionInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelReligionConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelReligionConditionInput | null> | null;
  or?: Array<ModelReligionConditionInput | null> | null;
  not?: ModelReligionConditionInput | null;
};

export type UpdateReligionInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteReligionInput = {
  id: string;
};

export type CreatePronounInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPronounConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPronounConditionInput | null> | null;
  or?: Array<ModelPronounConditionInput | null> | null;
  not?: ModelPronounConditionInput | null;
};

export type UpdatePronounInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePronounInput = {
  id: string;
};

export type CreateSexualOrientationInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelSexualOrientationConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSexualOrientationConditionInput | null> | null;
  or?: Array<ModelSexualOrientationConditionInput | null> | null;
  not?: ModelSexualOrientationConditionInput | null;
};

export type SexualOrientation = {
  __typename: "SexualOrientation";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSexualOrientationInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteSexualOrientationInput = {
  id: string;
};

export type CreateLanguageInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelLanguageConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLanguageConditionInput | null> | null;
  or?: Array<ModelLanguageConditionInput | null> | null;
  not?: ModelLanguageConditionInput | null;
};

export type UpdateLanguageInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteLanguageInput = {
  id: string;
};

export type CreateLanguageUserInput = {
  id?: string | null;
  userID: string;
  languageID: string;
};

export type ModelLanguageUserConditionInput = {
  userID?: ModelIDInput | null;
  languageID?: ModelIDInput | null;
  and?: Array<ModelLanguageUserConditionInput | null> | null;
  or?: Array<ModelLanguageUserConditionInput | null> | null;
  not?: ModelLanguageUserConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateLanguageUserInput = {
  id: string;
  userID?: string | null;
  languageID?: string | null;
};

export type DeleteLanguageUserInput = {
  id: string;
};

export type CreateMatchInput = {
  id?: string | null;
  isReported?: boolean | null;
  userID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelMatchConditionInput = {
  isReported?: ModelBooleanInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMatchConditionInput | null> | null;
  or?: Array<ModelMatchConditionInput | null> | null;
  not?: ModelMatchConditionInput | null;
};

export type UpdateMatchInput = {
  id: string;
  isReported?: boolean | null;
  userID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteMatchInput = {
  id: string;
};

export type CreatePhotoInput = {
  id?: string | null;
  name: string;
  sortOrder: number;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPhotoConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPhotoConditionInput | null> | null;
  or?: Array<ModelPhotoConditionInput | null> | null;
  not?: ModelPhotoConditionInput | null;
};

export type UpdatePhotoInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePhotoInput = {
  id: string;
};

export type CreatePhotoUserInput = {
  id?: string | null;
  userID: string;
  photoID: string;
};

export type ModelPhotoUserConditionInput = {
  userID?: ModelIDInput | null;
  photoID?: ModelIDInput | null;
  and?: Array<ModelPhotoUserConditionInput | null> | null;
  or?: Array<ModelPhotoUserConditionInput | null> | null;
  not?: ModelPhotoUserConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdatePhotoUserInput = {
  id: string;
  userID?: string | null;
  photoID?: string | null;
};

export type DeletePhotoUserInput = {
  id: string;
};

export type CreateStoryInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelStoryConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStoryConditionInput | null> | null;
  or?: Array<ModelStoryConditionInput | null> | null;
  not?: ModelStoryConditionInput | null;
};

export type UpdateStoryInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteStoryInput = {
  id: string;
};

export type CreateStoryUserInput = {
  id?: string | null;
  userID: string;
  storyID: string;
};

export type ModelStoryUserConditionInput = {
  userID?: ModelIDInput | null;
  storyID?: ModelIDInput | null;
  and?: Array<ModelStoryUserConditionInput | null> | null;
  or?: Array<ModelStoryUserConditionInput | null> | null;
  not?: ModelStoryUserConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateStoryUserInput = {
  id: string;
  userID?: string | null;
  storyID?: string | null;
};

export type DeleteStoryUserInput = {
  id: string;
};

export type CreateDayInput = {
  id?: string | null;
  day: number;
  position: number;
  question: string;
  response: string;
  questionCategory: string;
  userID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelDayConditionInput = {
  day?: ModelIntInput | null;
  position?: ModelIntInput | null;
  question?: ModelStringInput | null;
  response?: ModelStringInput | null;
  questionCategory?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDayConditionInput | null> | null;
  or?: Array<ModelDayConditionInput | null> | null;
  not?: ModelDayConditionInput | null;
};

export type UpdateDayInput = {
  id: string;
  day?: number | null;
  position?: number | null;
  question?: string | null;
  response?: string | null;
  questionCategory?: string | null;
  userID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteDayInput = {
  id: string;
};

export type CreateMentalHealthUserInput = {
  id?: string | null;
  value: string;
  userID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelMentalHealthUserConditionInput = {
  value?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMentalHealthUserConditionInput | null> | null;
  or?: Array<ModelMentalHealthUserConditionInput | null> | null;
  not?: ModelMentalHealthUserConditionInput | null;
};

export type MentalHealthUser = {
  __typename: "MentalHealthUser";
  id: string;
  value: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMentalHealthUserInput = {
  id: string;
  value?: string | null;
  userID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteMentalHealthUserInput = {
  id: string;
};

export type CreateEnergyUserInput = {
  id?: string | null;
  value: string;
  userID: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelEnergyUserConditionInput = {
  value?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEnergyUserConditionInput | null> | null;
  or?: Array<ModelEnergyUserConditionInput | null> | null;
  not?: ModelEnergyUserConditionInput | null;
};

export type EnergyUser = {
  __typename: "EnergyUser";
  id: string;
  value: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEnergyUserInput = {
  id: string;
  value?: string | null;
  userID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteEnergyUserInput = {
  id: string;
};

export type CreateCheckInQuestionInput = {
  id?: string | null;
  day?: number | null;
  sortOrder?: number | null;
  title?: string | null;
  question: string;
  quote: string;
  checkInQuestionCategoryID: string;
  checkInQuestionThemeID?: string | null;
  checkInQuestionContentCategoryId?: string | null;
  checkInQuestionContentCategoryName?: string | null;
  checkInQuestionTypeID: string;
  responses?: Array<string | null> | null;
  author?: string | null;
  dayImage?: string | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCheckInQuestionConditionInput = {
  day?: ModelIntInput | null;
  sortOrder?: ModelIntInput | null;
  title?: ModelStringInput | null;
  question?: ModelStringInput | null;
  quote?: ModelStringInput | null;
  checkInQuestionCategoryID?: ModelIDInput | null;
  checkInQuestionThemeID?: ModelIDInput | null;
  checkInQuestionContentCategoryId?: ModelStringInput | null;
  checkInQuestionContentCategoryName?: ModelStringInput | null;
  checkInQuestionTypeID?: ModelIDInput | null;
  responses?: ModelStringInput | null;
  author?: ModelStringInput | null;
  dayImage?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionConditionInput | null> | null;
  or?: Array<ModelCheckInQuestionConditionInput | null> | null;
  not?: ModelCheckInQuestionConditionInput | null;
};

export type UpdateCheckInQuestionInput = {
  id: string;
  day?: number | null;
  sortOrder?: number | null;
  title?: string | null;
  question?: string | null;
  quote?: string | null;
  checkInQuestionCategoryID?: string | null;
  checkInQuestionThemeID?: string | null;
  checkInQuestionContentCategoryId?: string | null;
  checkInQuestionContentCategoryName?: string | null;
  checkInQuestionTypeID?: string | null;
  responses?: Array<string | null> | null;
  author?: string | null;
  dayImage?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCheckInQuestionInput = {
  id: string;
};

export type CreateCheckInQuestionCategoryInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCheckInQuestionCategoryConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionCategoryConditionInput | null> | null;
  or?: Array<ModelCheckInQuestionCategoryConditionInput | null> | null;
  not?: ModelCheckInQuestionCategoryConditionInput | null;
};

export type UpdateCheckInQuestionCategoryInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCheckInQuestionCategoryInput = {
  id: string;
};

export type CreateCheckInQuestionThemeInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCheckInQuestionThemeConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionThemeConditionInput | null> | null;
  or?: Array<ModelCheckInQuestionThemeConditionInput | null> | null;
  not?: ModelCheckInQuestionThemeConditionInput | null;
};

export type UpdateCheckInQuestionThemeInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCheckInQuestionThemeInput = {
  id: string;
};

export type CreateCheckInQuestionTypeInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCheckInQuestionTypeConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionTypeConditionInput | null> | null;
  or?: Array<ModelCheckInQuestionTypeConditionInput | null> | null;
  not?: ModelCheckInQuestionTypeConditionInput | null;
};

export type UpdateCheckInQuestionTypeInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCheckInQuestionTypeInput = {
  id: string;
};

export type CreateCheckInQuestionUserInput = {
  id?: string | null;
  userID: string;
  checkInQuestionID: string;
};

export type ModelCheckInQuestionUserConditionInput = {
  userID?: ModelIDInput | null;
  checkInQuestionID?: ModelIDInput | null;
  and?: Array<ModelCheckInQuestionUserConditionInput | null> | null;
  or?: Array<ModelCheckInQuestionUserConditionInput | null> | null;
  not?: ModelCheckInQuestionUserConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateCheckInQuestionUserInput = {
  id: string;
  userID?: string | null;
  checkInQuestionID?: string | null;
};

export type DeleteCheckInQuestionUserInput = {
  id: string;
};

export type CreateIceBreakerQuestionInput = {
  id?: string | null;
  question: string;
  iceBreakerQuestionCategoryID: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelIceBreakerQuestionConditionInput = {
  question?: ModelStringInput | null;
  iceBreakerQuestionCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIceBreakerQuestionConditionInput | null> | null;
  or?: Array<ModelIceBreakerQuestionConditionInput | null> | null;
  not?: ModelIceBreakerQuestionConditionInput | null;
};

export type IceBreakerQuestion = {
  __typename: "IceBreakerQuestion";
  id: string;
  question: string;
  iceBreakerQuestionCategoryID: string;
  checkInQuestionCategory?: IceBreakerQuestionCategory | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IceBreakerQuestionCategory = {
  __typename: "IceBreakerQuestionCategory";
  id: string;
  name: string;
  isActive: boolean;
  question?: ModelIceBreakerQuestionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelIceBreakerQuestionConnection = {
  __typename: "ModelIceBreakerQuestionConnection";
  items: Array<IceBreakerQuestion | null>;
  nextToken?: string | null;
};

export type UpdateIceBreakerQuestionInput = {
  id: string;
  question?: string | null;
  iceBreakerQuestionCategoryID?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteIceBreakerQuestionInput = {
  id: string;
};

export type CreateIceBreakerQuestionCategoryInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelIceBreakerQuestionCategoryConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIceBreakerQuestionCategoryConditionInput | null> | null;
  or?: Array<ModelIceBreakerQuestionCategoryConditionInput | null> | null;
  not?: ModelIceBreakerQuestionCategoryConditionInput | null;
};

export type UpdateIceBreakerQuestionCategoryInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteIceBreakerQuestionCategoryInput = {
  id: string;
};

export type CreateEatingPreferenceInput = {
  id?: string | null;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelEatingPreferenceConditionInput = {
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEatingPreferenceConditionInput | null> | null;
  or?: Array<ModelEatingPreferenceConditionInput | null> | null;
  not?: ModelEatingPreferenceConditionInput | null;
};

export type EatingPreference = {
  __typename: "EatingPreference";
  id: string;
  name: string;
  sortOrder?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEatingPreferenceInput = {
  id: string;
  name?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteEatingPreferenceInput = {
  id: string;
};

export type CreateQuoteInput = {
  id?: string | null;
  text: string;
  author: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelQuoteConditionInput = {
  text?: ModelStringInput | null;
  author?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelQuoteConditionInput | null> | null;
  or?: Array<ModelQuoteConditionInput | null> | null;
  not?: ModelQuoteConditionInput | null;
};

export type Quote = {
  __typename: "Quote";
  id: string;
  text: string;
  author: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuoteInput = {
  id: string;
  text?: string | null;
  author?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteQuoteInput = {
  id: string;
};

export type CreateAuthorInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  description: string;
  image: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelAuthorConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelAuthorConditionInput | null> | null;
  or?: Array<ModelAuthorConditionInput | null> | null;
  not?: ModelAuthorConditionInput | null;
};

export type Author = {
  __typename: "Author";
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  image: string;
  isActive: boolean;
  contents?: ModelContentConnection | null;
  quotes?: ModelQuoteConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection";
  items: Array<Content | null>;
  nextToken?: string | null;
};

export type Content = {
  __typename: "Content";
  id: string;
  name: string;
  contentCategoryId: string;
  contentCategory?: ContentCategory | null;
  contentTypeId: string;
  contentType?: ContentType | null;
  authorId: string;
  author?: Author | null;
  media?: string | null;
  mediaDuration?: number | null;
  animatedGif?: string | null;
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
  text?: string | null;
  day?: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ContentCategory = {
  __typename: "ContentCategory";
  id: string;
  name: string;
  description?: string | null;
  dashboardImage?: string | null;
  internalPageHeaderImage?: string | null;
  progressionCardDotImage?: string | null;
  reflectionQuestionBackgroundImage?: string | null;
  inDashboard?: boolean | null;
  reflectionQuestionsGradientValues?: string | null;
  contentPageGradientValues?: string | null;
  isActive: boolean;
  contents?: ModelContentConnection | null;
  dayImages?: ModelContentCategoryDayImageConnection | null;
  sortOrder?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelContentCategoryDayImageConnection = {
  __typename: "ModelContentCategoryDayImageConnection";
  items: Array<ContentCategoryDayImage | null>;
  nextToken?: string | null;
};

export type ContentCategoryDayImage = {
  __typename: "ContentCategoryDayImage";
  id: string;
  contentCategoryId: string;
  url: string;
  day: number;
  createdAt: string;
  updatedAt: string;
};

export type ContentType = {
  __typename: "ContentType";
  id: string;
  name: string;
  isActive: boolean;
  contents?: ModelContentConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection";
  items: Array<Quote | null>;
  nextToken?: string | null;
};

export type UpdateAuthorInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  description?: string | null;
  image?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteAuthorInput = {
  id: string;
};

export type CreateContentInput = {
  id?: string | null;
  name: string;
  contentCategoryId: string;
  contentTypeId: string;
  authorId: string;
  media?: string | null;
  mediaDuration?: number | null;
  animatedGif?: string | null;
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
  text?: string | null;
  day?: number | null;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelContentConditionInput = {
  name?: ModelStringInput | null;
  contentCategoryId?: ModelIDInput | null;
  contentTypeId?: ModelIDInput | null;
  authorId?: ModelIDInput | null;
  media?: ModelStringInput | null;
  mediaDuration?: ModelIntInput | null;
  animatedGif?: ModelStringInput | null;
  image?: ModelStringInput | null;
  title?: ModelStringInput | null;
  subTitle?: ModelStringInput | null;
  text?: ModelStringInput | null;
  day?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentConditionInput | null> | null;
  or?: Array<ModelContentConditionInput | null> | null;
  not?: ModelContentConditionInput | null;
};

export type UpdateContentInput = {
  id: string;
  name?: string | null;
  contentCategoryId?: string | null;
  contentTypeId?: string | null;
  authorId?: string | null;
  media?: string | null;
  mediaDuration?: number | null;
  animatedGif?: string | null;
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
  text?: string | null;
  day?: number | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteContentInput = {
  id: string;
};

export type CreateContentCategoryDayImageInput = {
  id?: string | null;
  contentCategoryId: string;
  url: string;
  day: number;
};

export type ModelContentCategoryDayImageConditionInput = {
  contentCategoryId?: ModelIDInput | null;
  url?: ModelStringInput | null;
  day?: ModelIntInput | null;
  and?: Array<ModelContentCategoryDayImageConditionInput | null> | null;
  or?: Array<ModelContentCategoryDayImageConditionInput | null> | null;
  not?: ModelContentCategoryDayImageConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateContentCategoryDayImageInput = {
  id: string;
  contentCategoryId?: string | null;
  url?: string | null;
  day?: number | null;
};

export type DeleteContentCategoryDayImageInput = {
  id: string;
};

export type CreateContentCategoryInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  dashboardImage?: string | null;
  internalPageHeaderImage?: string | null;
  progressionCardDotImage?: string | null;
  reflectionQuestionBackgroundImage?: string | null;
  inDashboard?: boolean | null;
  reflectionQuestionsGradientValues?: string | null;
  contentPageGradientValues?: string | null;
  isActive: boolean;
  sortOrder?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelContentCategoryConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  dashboardImage?: ModelStringInput | null;
  internalPageHeaderImage?: ModelStringInput | null;
  progressionCardDotImage?: ModelStringInput | null;
  reflectionQuestionBackgroundImage?: ModelStringInput | null;
  inDashboard?: ModelBooleanInput | null;
  reflectionQuestionsGradientValues?: ModelStringInput | null;
  contentPageGradientValues?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  sortOrder?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentCategoryConditionInput | null> | null;
  or?: Array<ModelContentCategoryConditionInput | null> | null;
  not?: ModelContentCategoryConditionInput | null;
};

export type UpdateContentCategoryInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  dashboardImage?: string | null;
  internalPageHeaderImage?: string | null;
  progressionCardDotImage?: string | null;
  reflectionQuestionBackgroundImage?: string | null;
  inDashboard?: boolean | null;
  reflectionQuestionsGradientValues?: string | null;
  contentPageGradientValues?: string | null;
  isActive?: boolean | null;
  sortOrder?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteContentCategoryInput = {
  id: string;
};

export type CreateContentTypeInput = {
  id?: string | null;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelContentTypeConditionInput = {
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentTypeConditionInput | null> | null;
  or?: Array<ModelContentTypeConditionInput | null> | null;
  not?: ModelContentTypeConditionInput | null;
};

export type UpdateContentTypeInput = {
  id: string;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteContentTypeInput = {
  id: string;
};

export type CreatePromptInput = {
  id?: string | null;
  prompt: string;
  promptCategoryID: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPromptConditionInput = {
  prompt?: ModelStringInput | null;
  promptCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPromptConditionInput | null> | null;
  or?: Array<ModelPromptConditionInput | null> | null;
  not?: ModelPromptConditionInput | null;
};

export type Prompt = {
  __typename: "Prompt";
  id: string;
  prompt: string;
  promptCategoryID: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePromptInput = {
  id: string;
  prompt?: string | null;
  promptCategoryID?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePromptInput = {
  id: string;
};

export type CreatePromptCategoryInput = {
  id?: string | null;
  promptCategoryId: string;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPromptCategoryConditionInput = {
  promptCategoryId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPromptCategoryConditionInput | null> | null;
  or?: Array<ModelPromptCategoryConditionInput | null> | null;
  not?: ModelPromptCategoryConditionInput | null;
};

export type PromptCategory = {
  __typename: "PromptCategory";
  id: string;
  promptCategoryId: string;
  name: string;
  isActive: boolean;
  prompts?: ModelPromptConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelPromptConnection = {
  __typename: "ModelPromptConnection";
  items: Array<Prompt | null>;
  nextToken?: string | null;
};

export type UpdatePromptCategoryInput = {
  id: string;
  promptCategoryId?: string | null;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePromptCategoryInput = {
  id: string;
};

export type CreateChatPromptInput = {
  id?: string | null;
  prompt: string;
  promptCategoryID: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelChatPromptConditionInput = {
  prompt?: ModelStringInput | null;
  promptCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChatPromptConditionInput | null> | null;
  or?: Array<ModelChatPromptConditionInput | null> | null;
  not?: ModelChatPromptConditionInput | null;
};

export type ChatPrompt = {
  __typename: "ChatPrompt";
  id: string;
  prompt: string;
  promptCategoryID: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChatPromptInput = {
  id: string;
  prompt?: string | null;
  promptCategoryID?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteChatPromptInput = {
  id: string;
};

export type CreateChatPromptCategoryInput = {
  id?: string | null;
  chatPromptCategoryId: string;
  name: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelChatPromptCategoryConditionInput = {
  chatPromptCategoryId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChatPromptCategoryConditionInput | null> | null;
  or?: Array<ModelChatPromptCategoryConditionInput | null> | null;
  not?: ModelChatPromptCategoryConditionInput | null;
};

export type ChatPromptCategory = {
  __typename: "ChatPromptCategory";
  id: string;
  chatPromptCategoryId: string;
  name: string;
  isActive: boolean;
  prompts?: ModelChatPromptConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelChatPromptConnection = {
  __typename: "ModelChatPromptConnection";
  items: Array<ChatPrompt | null>;
  nextToken?: string | null;
};

export type UpdateChatPromptCategoryInput = {
  id: string;
  chatPromptCategoryId?: string | null;
  name?: string | null;
  isActive?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteChatPromptCategoryInput = {
  id: string;
};

export type CreateFeedbackUserInput = {
  id?: string | null;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt?: string | null;
};

export type ModelFeedbackUserConditionInput = {
  feedback?: ModelStringInput | null;
  screen?: ModelStringInput | null;
  imageName?: ModelStringInput | null;
  deviceInfo?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelFeedbackUserConditionInput | null> | null;
  or?: Array<ModelFeedbackUserConditionInput | null> | null;
  not?: ModelFeedbackUserConditionInput | null;
  updatedAt?: ModelStringInput | null;
};

export type FeedbackUser = {
  __typename: "FeedbackUser";
  id: string;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeedbackUserInput = {
  id: string;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt?: string | null;
};

export type DeleteFeedbackUserInput = {
  id: string;
};

export type CreateFeedbackTesterInput = {
  id?: string | null;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt?: string | null;
};

export type ModelFeedbackTesterConditionInput = {
  feedback?: ModelStringInput | null;
  screen?: ModelStringInput | null;
  imageName?: ModelStringInput | null;
  deviceInfo?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelFeedbackTesterConditionInput | null> | null;
  or?: Array<ModelFeedbackTesterConditionInput | null> | null;
  not?: ModelFeedbackTesterConditionInput | null;
  updatedAt?: ModelStringInput | null;
};

export type FeedbackTester = {
  __typename: "FeedbackTester";
  id: string;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeedbackTesterInput = {
  id: string;
  feedback?: string | null;
  screen?: string | null;
  imageName?: string | null;
  deviceInfo?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  createdAt?: string | null;
};

export type DeleteFeedbackTesterInput = {
  id: string;
};

export type CreateGeneralAppContentInput = {
  id?: string | null;
  contentType?: string | null;
  title?: string | null;
  value?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGeneralAppContentConditionInput = {
  contentType?: ModelStringInput | null;
  title?: ModelStringInput | null;
  value?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGeneralAppContentConditionInput | null> | null;
  or?: Array<ModelGeneralAppContentConditionInput | null> | null;
  not?: ModelGeneralAppContentConditionInput | null;
};

export type GeneralAppContent = {
  __typename: "GeneralAppContent";
  id: string;
  contentType?: string | null;
  title?: string | null;
  value?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGeneralAppContentInput = {
  id: string;
  contentType?: string | null;
  title?: string | null;
  value?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGeneralAppContentInput = {
  id: string;
};

export type CreateWaitlistUserInput = {
  id?: string | null;
  email?: string | null;
  userCity?: string | null;
  userIP?: string | null;
  userCoordinates?: string | null;
  userInternetProvider?: string | null;
  userZipCode?: string | null;
  userState?: string | null;
  userTimeZone?: string | null;
  relationshipStatus?: string | null;
  isDistanceImportant?: string | null;
  deviceType?: string | null;
  additionalInfo?: string | null;
  cityState?: string | null;
  referralCode?: string | null;
  verificationLinkToken?: string | null;
  position?: string | null;
  ageRange?: string | null;
  gender?: string | null;
  genderPreference?: string | null;
  readyInterests?: string | null;
  howDidYouHearAboutUs?: string | null;
  helpReady?: string | null;
  features?: string | null;
  comments?: string | null;
  userDevice?: string | null;
  userPlatform?: string | null;
  userAppName?: string | null;
  userAppVersion?: string | null;
  userScreenSize?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelWaitlistUserConditionInput = {
  email?: ModelStringInput | null;
  userCity?: ModelStringInput | null;
  userIP?: ModelStringInput | null;
  userCoordinates?: ModelStringInput | null;
  userInternetProvider?: ModelStringInput | null;
  userZipCode?: ModelStringInput | null;
  userState?: ModelStringInput | null;
  userTimeZone?: ModelStringInput | null;
  relationshipStatus?: ModelStringInput | null;
  isDistanceImportant?: ModelStringInput | null;
  deviceType?: ModelStringInput | null;
  additionalInfo?: ModelStringInput | null;
  cityState?: ModelStringInput | null;
  referralCode?: ModelStringInput | null;
  verificationLinkToken?: ModelStringInput | null;
  position?: ModelStringInput | null;
  ageRange?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  genderPreference?: ModelStringInput | null;
  readyInterests?: ModelStringInput | null;
  howDidYouHearAboutUs?: ModelStringInput | null;
  helpReady?: ModelStringInput | null;
  features?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  userDevice?: ModelStringInput | null;
  userPlatform?: ModelStringInput | null;
  userAppName?: ModelStringInput | null;
  userAppVersion?: ModelStringInput | null;
  userScreenSize?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWaitlistUserConditionInput | null> | null;
  or?: Array<ModelWaitlistUserConditionInput | null> | null;
  not?: ModelWaitlistUserConditionInput | null;
};

export type WaitlistUser = {
  __typename: "WaitlistUser";
  id: string;
  email?: string | null;
  userCity?: string | null;
  userIP?: string | null;
  userCoordinates?: string | null;
  userInternetProvider?: string | null;
  userZipCode?: string | null;
  userState?: string | null;
  userTimeZone?: string | null;
  relationshipStatus?: string | null;
  isDistanceImportant?: string | null;
  deviceType?: string | null;
  additionalInfo?: string | null;
  cityState?: string | null;
  referralCode?: string | null;
  verificationLinkToken?: string | null;
  position?: string | null;
  ageRange?: string | null;
  gender?: string | null;
  genderPreference?: string | null;
  readyInterests?: string | null;
  howDidYouHearAboutUs?: string | null;
  helpReady?: string | null;
  features?: string | null;
  comments?: string | null;
  userDevice?: string | null;
  userPlatform?: string | null;
  userAppName?: string | null;
  userAppVersion?: string | null;
  userScreenSize?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWaitlistUserInput = {
  id: string;
  email?: string | null;
  userCity?: string | null;
  userIP?: string | null;
  userCoordinates?: string | null;
  userInternetProvider?: string | null;
  userZipCode?: string | null;
  userState?: string | null;
  userTimeZone?: string | null;
  relationshipStatus?: string | null;
  isDistanceImportant?: string | null;
  deviceType?: string | null;
  additionalInfo?: string | null;
  cityState?: string | null;
  referralCode?: string | null;
  verificationLinkToken?: string | null;
  position?: string | null;
  ageRange?: string | null;
  gender?: string | null;
  genderPreference?: string | null;
  readyInterests?: string | null;
  howDidYouHearAboutUs?: string | null;
  helpReady?: string | null;
  features?: string | null;
  comments?: string | null;
  userDevice?: string | null;
  userPlatform?: string | null;
  userAppName?: string | null;
  userAppVersion?: string | null;
  userScreenSize?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteWaitlistUserInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  emailCommunication?: ModelBooleanInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  isGenderVisible?: ModelBooleanInput | null;
  sexualOrientation?: ModelStringInput | null;
  isSexualOrientationVisible?: ModelBooleanInput | null;
  value?: ModelStringInput | null;
  location?: ModelStringInput | null;
  isLocationVisible?: ModelBooleanInput | null;
  mentalHealth?: ModelStringInput | null;
  quality?: ModelStringInput | null;
  energy?: ModelStringInput | null;
  starSign?: ModelStringInput | null;
  isStarSignVisible?: ModelBooleanInput | null;
  ethnicityID?: ModelIDInput | null;
  isEthnicityVisible?: ModelBooleanInput | null;
  religionID?: ModelIDInput | null;
  isReligionVisible?: ModelBooleanInput | null;
  height?: ModelIntInput | null;
  isHeightVisible?: ModelBooleanInput | null;
  pronounID?: ModelIDInput | null;
  isPronounVisible?: ModelBooleanInput | null;
  genderPreferences?: ModelStringInput | null;
  areGenderPreferencesVisible?: ModelBooleanInput | null;
  agePreferenceFrom?: ModelIntInput | null;
  agePreferenceTo?: ModelIntInput | null;
  distancePreference?: ModelIntInput | null;
  childrenStatusID?: ModelIDInput | null;
  wantChildrenStatus?: ModelStringInput | null;
  isChildrenStatusVisible?: ModelBooleanInput | null;
  isWantChildrenStatusVisible?: ModelBooleanInput | null;
  educationLevel?: ModelStringInput | null;
  isEducationLevelVisible?: ModelBooleanInput | null;
  school?: ModelStringInput | null;
  isSchoolVisbile?: ModelBooleanInput | null;
  areLanguagesVisible?: ModelBooleanInput | null;
  jobTitle?: ModelStringInput | null;
  isJobTitleVisible?: ModelBooleanInput | null;
  work?: ModelStringInput | null;
  isWorkVisible?: ModelBooleanInput | null;
  drinkPreference?: ModelStringInput | null;
  isDrinkPreferenceVisible?: ModelBooleanInput | null;
  tobaccoPreference?: ModelStringInput | null;
  isTobaccoPreferenceVisible?: ModelBooleanInput | null;
  drugPreference?: ModelStringInput | null;
  isDrugPreferenceVisible?: ModelBooleanInput | null;
  therapyPreference?: ModelStringInput | null;
  isTherapyPreferenceVisible?: ModelBooleanInput | null;
  eatingPreferences?: ModelStringInput | null;
  areEatingPreferencesVisible?: ModelBooleanInput | null;
  exercisePreferenceID?: ModelIDInput | null;
  exercisePreference?: ModelStringInput | null;
  isExercisePreferenceVisible?: ModelBooleanInput | null;
  sleepingHabit?: ModelStringInput | null;
  isSleepingHabitVisible?: ModelBooleanInput | null;
  hometown?: ModelStringInput | null;
  isHometownVisible?: ModelBooleanInput | null;
  prompts?: ModelStringInput | null;
  userMainPhoto?: ModelStringInput | null;
  defaultUserPhoto?: ModelIntInput | null;
  bio?: ModelStringInput | null;
  discoveringYou?: ModelStringInput | null;
  isUserActive?: ModelBooleanInput | null;
  isUserVerified?: ModelBooleanInput | null;
  isUserOnboarded?: ModelBooleanInput | null;
  isUserPaused?: ModelBooleanInput | null;
  isProfileComplete?: ModelBooleanInput | null;
  isHabitsComplete?: ModelBooleanInput | null;
  isOnboardingStarted?: ModelBooleanInput | null;
  onboardingStep?: ModelIntInput | null;
  signUpStep?: ModelIntInput | null;
  isSignUpComplete?: ModelBooleanInput | null;
  dailyReflectionReminderType?: ModelStringInput | null;
  dailyReflectionReminderFrequency?: ModelStringInput | null;
  dailyReflectionNotificationTime?: ModelStringInput | null;
  isDailyReflectionNotificationEnabled?: ModelBooleanInput | null;
  timeOffset?: ModelStringInput | null;
  isNewConnectionsNotificationPushActive?: ModelBooleanInput | null;
  isNewConnectionsNotificationEmailActive?: ModelBooleanInput | null;
  newMessagesNotificationType?: ModelStringInput | null;
  isNewMessagesNotificationEnabled?: ModelBooleanInput | null;
  streamToken?: ModelStringInput | null;
  oneSignalUserId?: ModelStringInput | null;
  activeConnections?: ModelIntInput | null;
  userDailyConnections?: ModelStringInput | null;
  connectionsUpdatedOn?: ModelStringInput | null;
  reflectionCompletedOn?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null;
  firstName?: SearchableStringFilterInput | null;
  lastName?: SearchableStringFilterInput | null;
  phone?: SearchableStringFilterInput | null;
  email?: SearchableStringFilterInput | null;
  emailCommunication?: SearchableBooleanFilterInput | null;
  birthdate?: SearchableStringFilterInput | null;
  gender?: SearchableStringFilterInput | null;
  isGenderVisible?: SearchableBooleanFilterInput | null;
  sexualOrientation?: SearchableStringFilterInput | null;
  isSexualOrientationVisible?: SearchableBooleanFilterInput | null;
  value?: SearchableStringFilterInput | null;
  location?: SearchableStringFilterInput | null;
  isLocationVisible?: SearchableBooleanFilterInput | null;
  mentalHealth?: SearchableStringFilterInput | null;
  quality?: SearchableStringFilterInput | null;
  energy?: SearchableStringFilterInput | null;
  starSign?: SearchableStringFilterInput | null;
  isStarSignVisible?: SearchableBooleanFilterInput | null;
  ethnicityID?: SearchableIDFilterInput | null;
  isEthnicityVisible?: SearchableBooleanFilterInput | null;
  religionID?: SearchableIDFilterInput | null;
  isReligionVisible?: SearchableBooleanFilterInput | null;
  height?: SearchableIntFilterInput | null;
  isHeightVisible?: SearchableBooleanFilterInput | null;
  pronounID?: SearchableIDFilterInput | null;
  isPronounVisible?: SearchableBooleanFilterInput | null;
  genderPreferences?: SearchableStringFilterInput | null;
  areGenderPreferencesVisible?: SearchableBooleanFilterInput | null;
  agePreferenceFrom?: SearchableIntFilterInput | null;
  agePreferenceTo?: SearchableIntFilterInput | null;
  distancePreference?: SearchableIntFilterInput | null;
  childrenStatusID?: SearchableIDFilterInput | null;
  wantChildrenStatus?: SearchableStringFilterInput | null;
  isChildrenStatusVisible?: SearchableBooleanFilterInput | null;
  isWantChildrenStatusVisible?: SearchableBooleanFilterInput | null;
  educationLevel?: SearchableStringFilterInput | null;
  isEducationLevelVisible?: SearchableBooleanFilterInput | null;
  school?: SearchableStringFilterInput | null;
  isSchoolVisbile?: SearchableBooleanFilterInput | null;
  areLanguagesVisible?: SearchableBooleanFilterInput | null;
  jobTitle?: SearchableStringFilterInput | null;
  isJobTitleVisible?: SearchableBooleanFilterInput | null;
  work?: SearchableStringFilterInput | null;
  isWorkVisible?: SearchableBooleanFilterInput | null;
  drinkPreference?: SearchableStringFilterInput | null;
  isDrinkPreferenceVisible?: SearchableBooleanFilterInput | null;
  tobaccoPreference?: SearchableStringFilterInput | null;
  isTobaccoPreferenceVisible?: SearchableBooleanFilterInput | null;
  drugPreference?: SearchableStringFilterInput | null;
  isDrugPreferenceVisible?: SearchableBooleanFilterInput | null;
  therapyPreference?: SearchableStringFilterInput | null;
  isTherapyPreferenceVisible?: SearchableBooleanFilterInput | null;
  eatingPreferences?: SearchableStringFilterInput | null;
  areEatingPreferencesVisible?: SearchableBooleanFilterInput | null;
  exercisePreferenceID?: SearchableIDFilterInput | null;
  exercisePreference?: SearchableStringFilterInput | null;
  isExercisePreferenceVisible?: SearchableBooleanFilterInput | null;
  sleepingHabit?: SearchableStringFilterInput | null;
  isSleepingHabitVisible?: SearchableBooleanFilterInput | null;
  hometown?: SearchableStringFilterInput | null;
  isHometownVisible?: SearchableBooleanFilterInput | null;
  prompts?: SearchableStringFilterInput | null;
  userMainPhoto?: SearchableStringFilterInput | null;
  defaultUserPhoto?: SearchableIntFilterInput | null;
  bio?: SearchableStringFilterInput | null;
  discoveringYou?: SearchableStringFilterInput | null;
  isUserActive?: SearchableBooleanFilterInput | null;
  isUserVerified?: SearchableBooleanFilterInput | null;
  isUserOnboarded?: SearchableBooleanFilterInput | null;
  isUserPaused?: SearchableBooleanFilterInput | null;
  isProfileComplete?: SearchableBooleanFilterInput | null;
  isHabitsComplete?: SearchableBooleanFilterInput | null;
  isOnboardingStarted?: SearchableBooleanFilterInput | null;
  onboardingStep?: SearchableIntFilterInput | null;
  signUpStep?: SearchableIntFilterInput | null;
  isSignUpComplete?: SearchableBooleanFilterInput | null;
  dailyReflectionReminderType?: SearchableStringFilterInput | null;
  dailyReflectionReminderFrequency?: SearchableStringFilterInput | null;
  dailyReflectionNotificationTime?: SearchableStringFilterInput | null;
  isDailyReflectionNotificationEnabled?: SearchableBooleanFilterInput | null;
  timeOffset?: SearchableStringFilterInput | null;
  isNewConnectionsNotificationPushActive?: SearchableBooleanFilterInput | null;
  isNewConnectionsNotificationEmailActive?: SearchableBooleanFilterInput | null;
  newMessagesNotificationType?: SearchableStringFilterInput | null;
  isNewMessagesNotificationEnabled?: SearchableBooleanFilterInput | null;
  streamToken?: SearchableStringFilterInput | null;
  oneSignalUserId?: SearchableStringFilterInput | null;
  activeConnections?: SearchableIntFilterInput | null;
  userDailyConnections?: SearchableStringFilterInput | null;
  connectionsUpdatedOn?: SearchableStringFilterInput | null;
  reflectionCompletedOn?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableUserFilterInput | null> | null;
  or?: Array<SearchableUserFilterInput | null> | null;
  not?: SearchableUserFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableUserSortableFields {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  phone = "phone",
  email = "email",
  emailCommunication = "emailCommunication",
  birthdate = "birthdate",
  gender = "gender",
  isGenderVisible = "isGenderVisible",
  sexualOrientation = "sexualOrientation",
  isSexualOrientationVisible = "isSexualOrientationVisible",
  value = "value",
  location = "location",
  isLocationVisible = "isLocationVisible",
  mentalHealth = "mentalHealth",
  quality = "quality",
  energy = "energy",
  starSign = "starSign",
  isStarSignVisible = "isStarSignVisible",
  ethnicityID = "ethnicityID",
  isEthnicityVisible = "isEthnicityVisible",
  religionID = "religionID",
  isReligionVisible = "isReligionVisible",
  height = "height",
  isHeightVisible = "isHeightVisible",
  pronounID = "pronounID",
  isPronounVisible = "isPronounVisible",
  genderPreferences = "genderPreferences",
  areGenderPreferencesVisible = "areGenderPreferencesVisible",
  agePreferenceFrom = "agePreferenceFrom",
  agePreferenceTo = "agePreferenceTo",
  distancePreference = "distancePreference",
  childrenStatusID = "childrenStatusID",
  wantChildrenStatus = "wantChildrenStatus",
  isChildrenStatusVisible = "isChildrenStatusVisible",
  isWantChildrenStatusVisible = "isWantChildrenStatusVisible",
  educationLevel = "educationLevel",
  isEducationLevelVisible = "isEducationLevelVisible",
  school = "school",
  isSchoolVisbile = "isSchoolVisbile",
  areLanguagesVisible = "areLanguagesVisible",
  jobTitle = "jobTitle",
  isJobTitleVisible = "isJobTitleVisible",
  work = "work",
  isWorkVisible = "isWorkVisible",
  drinkPreference = "drinkPreference",
  isDrinkPreferenceVisible = "isDrinkPreferenceVisible",
  tobaccoPreference = "tobaccoPreference",
  isTobaccoPreferenceVisible = "isTobaccoPreferenceVisible",
  drugPreference = "drugPreference",
  isDrugPreferenceVisible = "isDrugPreferenceVisible",
  therapyPreference = "therapyPreference",
  isTherapyPreferenceVisible = "isTherapyPreferenceVisible",
  eatingPreferences = "eatingPreferences",
  areEatingPreferencesVisible = "areEatingPreferencesVisible",
  exercisePreferenceID = "exercisePreferenceID",
  exercisePreference = "exercisePreference",
  isExercisePreferenceVisible = "isExercisePreferenceVisible",
  sleepingHabit = "sleepingHabit",
  isSleepingHabitVisible = "isSleepingHabitVisible",
  hometown = "hometown",
  isHometownVisible = "isHometownVisible",
  prompts = "prompts",
  userMainPhoto = "userMainPhoto",
  defaultUserPhoto = "defaultUserPhoto",
  bio = "bio",
  discoveringYou = "discoveringYou",
  isUserActive = "isUserActive",
  isUserVerified = "isUserVerified",
  isUserOnboarded = "isUserOnboarded",
  isUserPaused = "isUserPaused",
  isProfileComplete = "isProfileComplete",
  isHabitsComplete = "isHabitsComplete",
  isOnboardingStarted = "isOnboardingStarted",
  onboardingStep = "onboardingStep",
  signUpStep = "signUpStep",
  isSignUpComplete = "isSignUpComplete",
  dailyReflectionReminderType = "dailyReflectionReminderType",
  dailyReflectionReminderFrequency = "dailyReflectionReminderFrequency",
  dailyReflectionNotificationTime = "dailyReflectionNotificationTime",
  isDailyReflectionNotificationEnabled = "isDailyReflectionNotificationEnabled",
  timeOffset = "timeOffset",
  isNewConnectionsNotificationPushActive = "isNewConnectionsNotificationPushActive",
  isNewConnectionsNotificationEmailActive = "isNewConnectionsNotificationEmailActive",
  newMessagesNotificationType = "newMessagesNotificationType",
  isNewMessagesNotificationEnabled = "isNewMessagesNotificationEnabled",
  streamToken = "streamToken",
  oneSignalUserId = "oneSignalUserId",
  activeConnections = "activeConnections",
  userDailyConnections = "userDailyConnections",
  connectionsUpdatedOn = "connectionsUpdatedOn",
  reflectionCompletedOn = "reflectionCompletedOn",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}

export type SearchableUserAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableUserAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
  cardinality = "cardinality",
}

export enum SearchableUserAggregateField {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  phone = "phone",
  email = "email",
  emailCommunication = "emailCommunication",
  birthdate = "birthdate",
  gender = "gender",
  isGenderVisible = "isGenderVisible",
  sexualOrientation = "sexualOrientation",
  isSexualOrientationVisible = "isSexualOrientationVisible",
  value = "value",
  location = "location",
  isLocationVisible = "isLocationVisible",
  mentalHealth = "mentalHealth",
  quality = "quality",
  energy = "energy",
  starSign = "starSign",
  isStarSignVisible = "isStarSignVisible",
  ethnicityID = "ethnicityID",
  isEthnicityVisible = "isEthnicityVisible",
  religionID = "religionID",
  isReligionVisible = "isReligionVisible",
  height = "height",
  isHeightVisible = "isHeightVisible",
  pronounID = "pronounID",
  isPronounVisible = "isPronounVisible",
  genderPreferences = "genderPreferences",
  areGenderPreferencesVisible = "areGenderPreferencesVisible",
  agePreferenceFrom = "agePreferenceFrom",
  agePreferenceTo = "agePreferenceTo",
  distancePreference = "distancePreference",
  childrenStatusID = "childrenStatusID",
  wantChildrenStatus = "wantChildrenStatus",
  isChildrenStatusVisible = "isChildrenStatusVisible",
  isWantChildrenStatusVisible = "isWantChildrenStatusVisible",
  educationLevel = "educationLevel",
  isEducationLevelVisible = "isEducationLevelVisible",
  school = "school",
  isSchoolVisbile = "isSchoolVisbile",
  areLanguagesVisible = "areLanguagesVisible",
  jobTitle = "jobTitle",
  isJobTitleVisible = "isJobTitleVisible",
  work = "work",
  isWorkVisible = "isWorkVisible",
  drinkPreference = "drinkPreference",
  isDrinkPreferenceVisible = "isDrinkPreferenceVisible",
  tobaccoPreference = "tobaccoPreference",
  isTobaccoPreferenceVisible = "isTobaccoPreferenceVisible",
  drugPreference = "drugPreference",
  isDrugPreferenceVisible = "isDrugPreferenceVisible",
  therapyPreference = "therapyPreference",
  isTherapyPreferenceVisible = "isTherapyPreferenceVisible",
  eatingPreferences = "eatingPreferences",
  areEatingPreferencesVisible = "areEatingPreferencesVisible",
  exercisePreferenceID = "exercisePreferenceID",
  exercisePreference = "exercisePreference",
  isExercisePreferenceVisible = "isExercisePreferenceVisible",
  sleepingHabit = "sleepingHabit",
  isSleepingHabitVisible = "isSleepingHabitVisible",
  hometown = "hometown",
  isHometownVisible = "isHometownVisible",
  prompts = "prompts",
  userMainPhoto = "userMainPhoto",
  defaultUserPhoto = "defaultUserPhoto",
  bio = "bio",
  discoveringYou = "discoveringYou",
  isUserActive = "isUserActive",
  isUserVerified = "isUserVerified",
  isUserOnboarded = "isUserOnboarded",
  isUserPaused = "isUserPaused",
  isProfileComplete = "isProfileComplete",
  isHabitsComplete = "isHabitsComplete",
  isOnboardingStarted = "isOnboardingStarted",
  onboardingStep = "onboardingStep",
  signUpStep = "signUpStep",
  isSignUpComplete = "isSignUpComplete",
  dailyReflectionReminderType = "dailyReflectionReminderType",
  dailyReflectionReminderFrequency = "dailyReflectionReminderFrequency",
  dailyReflectionNotificationTime = "dailyReflectionNotificationTime",
  isDailyReflectionNotificationEnabled = "isDailyReflectionNotificationEnabled",
  timeOffset = "timeOffset",
  isNewConnectionsNotificationPushActive = "isNewConnectionsNotificationPushActive",
  isNewConnectionsNotificationEmailActive = "isNewConnectionsNotificationEmailActive",
  newMessagesNotificationType = "newMessagesNotificationType",
  isNewMessagesNotificationEnabled = "isNewMessagesNotificationEnabled",
  streamToken = "streamToken",
  oneSignalUserId = "oneSignalUserId",
  activeConnections = "activeConnections",
  userDailyConnections = "userDailyConnections",
  connectionsUpdatedOn = "connectionsUpdatedOn",
  reflectionCompletedOn = "reflectionCompletedOn",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableUserConnection = {
  __typename: "SearchableUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null;
  likerId?: ModelIDInput | null;
  likedId?: ModelIDInput | null;
  amILikedBack?: ModelBooleanInput | null;
  active?: ModelBooleanInput | null;
  channelId?: ModelStringInput | null;
  isUnmatched?: ModelBooleanInput | null;
  isReported?: ModelBooleanInput | null;
  reporterType?: ModelStringInput | null;
  unmatchReason?: ModelStringInput | null;
  reportReason?: ModelStringInput | null;
  details?: ModelStringInput | null;
  unmatchedUserId?: ModelStringInput | null;
  isUnmatchAcked?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLikeFilterInput | null> | null;
  or?: Array<ModelLikeFilterInput | null> | null;
  not?: ModelLikeFilterInput | null;
};

export type SearchableLikeFilterInput = {
  id?: SearchableIDFilterInput | null;
  likerId?: SearchableIDFilterInput | null;
  likedId?: SearchableIDFilterInput | null;
  amILikedBack?: SearchableBooleanFilterInput | null;
  active?: SearchableBooleanFilterInput | null;
  channelId?: SearchableStringFilterInput | null;
  isUnmatched?: SearchableBooleanFilterInput | null;
  isReported?: SearchableBooleanFilterInput | null;
  reporterType?: SearchableStringFilterInput | null;
  unmatchReason?: SearchableStringFilterInput | null;
  reportReason?: SearchableStringFilterInput | null;
  details?: SearchableStringFilterInput | null;
  unmatchedUserId?: SearchableStringFilterInput | null;
  isUnmatchAcked?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableLikeFilterInput | null> | null;
  or?: Array<SearchableLikeFilterInput | null> | null;
  not?: SearchableLikeFilterInput | null;
};

export type SearchableLikeSortInput = {
  field?: SearchableLikeSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableLikeSortableFields {
  id = "id",
  likerId = "likerId",
  likedId = "likedId",
  amILikedBack = "amILikedBack",
  active = "active",
  channelId = "channelId",
  isUnmatched = "isUnmatched",
  isReported = "isReported",
  reporterType = "reporterType",
  unmatchReason = "unmatchReason",
  reportReason = "reportReason",
  details = "details",
  unmatchedUserId = "unmatchedUserId",
  isUnmatchAcked = "isUnmatchAcked",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableLikeAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableLikeAggregateField;
};

export enum SearchableLikeAggregateField {
  id = "id",
  likerId = "likerId",
  likedId = "likedId",
  amILikedBack = "amILikedBack",
  active = "active",
  channelId = "channelId",
  isUnmatched = "isUnmatched",
  isReported = "isReported",
  reporterType = "reporterType",
  unmatchReason = "unmatchReason",
  reportReason = "reportReason",
  details = "details",
  unmatchedUserId = "unmatchedUserId",
  isUnmatchAcked = "isUnmatchAcked",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableLikeConnection = {
  __typename: "SearchableLikeConnection";
  items: Array<Like | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelViewedConnectionFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  connectionId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelViewedConnectionFilterInput | null> | null;
  or?: Array<ModelViewedConnectionFilterInput | null> | null;
  not?: ModelViewedConnectionFilterInput | null;
};

export type ModelViewedConnectionConnection = {
  __typename: "ModelViewedConnectionConnection";
  items: Array<ViewedConnection | null>;
  nextToken?: string | null;
};

export type SearchableViewedConnectionFilterInput = {
  id?: SearchableIDFilterInput | null;
  userId?: SearchableIDFilterInput | null;
  connectionId?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableViewedConnectionFilterInput | null> | null;
  or?: Array<SearchableViewedConnectionFilterInput | null> | null;
  not?: SearchableViewedConnectionFilterInput | null;
};

export type SearchableViewedConnectionSortInput = {
  field?: SearchableViewedConnectionSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableViewedConnectionSortableFields {
  id = "id",
  userId = "userId",
  connectionId = "connectionId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableViewedConnectionAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableViewedConnectionAggregateField;
};

export enum SearchableViewedConnectionAggregateField {
  id = "id",
  userId = "userId",
  connectionId = "connectionId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableViewedConnectionConnection = {
  __typename: "SearchableViewedConnectionConnection";
  items: Array<ViewedConnection | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelSleepingHabitFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSleepingHabitFilterInput | null> | null;
  or?: Array<ModelSleepingHabitFilterInput | null> | null;
  not?: ModelSleepingHabitFilterInput | null;
};

export type ModelSleepingHabitConnection = {
  __typename: "ModelSleepingHabitConnection";
  items: Array<SleepingHabit | null>;
  nextToken?: string | null;
};

export type ModelExercisePreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelExercisePreferenceFilterInput | null> | null;
  or?: Array<ModelExercisePreferenceFilterInput | null> | null;
  not?: ModelExercisePreferenceFilterInput | null;
};

export type ModelExercisePreferenceConnection = {
  __typename: "ModelExercisePreferenceConnection";
  items: Array<ExercisePreference | null>;
  nextToken?: string | null;
};

export type ModelDrugPreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDrugPreferenceFilterInput | null> | null;
  or?: Array<ModelDrugPreferenceFilterInput | null> | null;
  not?: ModelDrugPreferenceFilterInput | null;
};

export type ModelDrugPreferenceConnection = {
  __typename: "ModelDrugPreferenceConnection";
  items: Array<DrugPreference | null>;
  nextToken?: string | null;
};

export type ModelTobaccoPreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTobaccoPreferenceFilterInput | null> | null;
  or?: Array<ModelTobaccoPreferenceFilterInput | null> | null;
  not?: ModelTobaccoPreferenceFilterInput | null;
};

export type ModelTobaccoPreferenceConnection = {
  __typename: "ModelTobaccoPreferenceConnection";
  items: Array<TobaccoPreference | null>;
  nextToken?: string | null;
};

export type ModelTherapyPreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTherapyPreferenceFilterInput | null> | null;
  or?: Array<ModelTherapyPreferenceFilterInput | null> | null;
  not?: ModelTherapyPreferenceFilterInput | null;
};

export type ModelTherapyPreferenceConnection = {
  __typename: "ModelTherapyPreferenceConnection";
  items: Array<TherapyPreference | null>;
  nextToken?: string | null;
};

export type ModelDrinkPreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDrinkPreferenceFilterInput | null> | null;
  or?: Array<ModelDrinkPreferenceFilterInput | null> | null;
  not?: ModelDrinkPreferenceFilterInput | null;
};

export type ModelDrinkPreferenceConnection = {
  __typename: "ModelDrinkPreferenceConnection";
  items: Array<DrinkPreference | null>;
  nextToken?: string | null;
};

export type SearchableDrinkPreferenceFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableDrinkPreferenceFilterInput | null> | null;
  or?: Array<SearchableDrinkPreferenceFilterInput | null> | null;
  not?: SearchableDrinkPreferenceFilterInput | null;
};

export type SearchableDrinkPreferenceSortInput = {
  field?: SearchableDrinkPreferenceSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableDrinkPreferenceSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableDrinkPreferenceAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableDrinkPreferenceAggregateField;
};

export enum SearchableDrinkPreferenceAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableDrinkPreferenceConnection = {
  __typename: "SearchableDrinkPreferenceConnection";
  items: Array<DrinkPreference | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelChildrenStatusFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChildrenStatusFilterInput | null> | null;
  or?: Array<ModelChildrenStatusFilterInput | null> | null;
  not?: ModelChildrenStatusFilterInput | null;
};

export type ModelChildrenStatusConnection = {
  __typename: "ModelChildrenStatusConnection";
  items: Array<ChildrenStatus | null>;
  nextToken?: string | null;
};

export type SearchableChildrenStatusFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableChildrenStatusFilterInput | null> | null;
  or?: Array<SearchableChildrenStatusFilterInput | null> | null;
  not?: SearchableChildrenStatusFilterInput | null;
};

export type SearchableChildrenStatusSortInput = {
  field?: SearchableChildrenStatusSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableChildrenStatusSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChildrenStatusAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableChildrenStatusAggregateField;
};

export enum SearchableChildrenStatusAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChildrenStatusConnection = {
  __typename: "SearchableChildrenStatusConnection";
  items: Array<ChildrenStatus | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelWantChildrenStatusFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWantChildrenStatusFilterInput | null> | null;
  or?: Array<ModelWantChildrenStatusFilterInput | null> | null;
  not?: ModelWantChildrenStatusFilterInput | null;
};

export type ModelWantChildrenStatusConnection = {
  __typename: "ModelWantChildrenStatusConnection";
  items: Array<WantChildrenStatus | null>;
  nextToken?: string | null;
};

export type ModelEducationLevelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEducationLevelFilterInput | null> | null;
  or?: Array<ModelEducationLevelFilterInput | null> | null;
  not?: ModelEducationLevelFilterInput | null;
};

export type ModelEducationLevelConnection = {
  __typename: "ModelEducationLevelConnection";
  items: Array<EducationLevel | null>;
  nextToken?: string | null;
};

export type ModelGenderFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGenderFilterInput | null> | null;
  or?: Array<ModelGenderFilterInput | null> | null;
  not?: ModelGenderFilterInput | null;
};

export type ModelGenderConnection = {
  __typename: "ModelGenderConnection";
  items: Array<Gender | null>;
  nextToken?: string | null;
};

export type SearchableGenderFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableGenderFilterInput | null> | null;
  or?: Array<SearchableGenderFilterInput | null> | null;
  not?: SearchableGenderFilterInput | null;
};

export type SearchableGenderSortInput = {
  field?: SearchableGenderSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableGenderSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableGenderAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableGenderAggregateField;
};

export enum SearchableGenderAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableGenderConnection = {
  __typename: "SearchableGenderConnection";
  items: Array<Gender | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelEthnicityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEthnicityFilterInput | null> | null;
  or?: Array<ModelEthnicityFilterInput | null> | null;
  not?: ModelEthnicityFilterInput | null;
};

export type ModelEthnicityConnection = {
  __typename: "ModelEthnicityConnection";
  items: Array<Ethnicity | null>;
  nextToken?: string | null;
};

export type SearchableEthnicityFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableEthnicityFilterInput | null> | null;
  or?: Array<SearchableEthnicityFilterInput | null> | null;
  not?: SearchableEthnicityFilterInput | null;
};

export type SearchableEthnicitySortInput = {
  field?: SearchableEthnicitySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableEthnicitySortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableEthnicityAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableEthnicityAggregateField;
};

export enum SearchableEthnicityAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableEthnicityConnection = {
  __typename: "SearchableEthnicityConnection";
  items: Array<Ethnicity | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelEthnicityUserFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  ethnicityID?: ModelIDInput | null;
  and?: Array<ModelEthnicityUserFilterInput | null> | null;
  or?: Array<ModelEthnicityUserFilterInput | null> | null;
  not?: ModelEthnicityUserFilterInput | null;
};

export type ModelReligionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelReligionFilterInput | null> | null;
  or?: Array<ModelReligionFilterInput | null> | null;
  not?: ModelReligionFilterInput | null;
};

export type ModelReligionConnection = {
  __typename: "ModelReligionConnection";
  items: Array<Religion | null>;
  nextToken?: string | null;
};

export type SearchableReligionFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableReligionFilterInput | null> | null;
  or?: Array<SearchableReligionFilterInput | null> | null;
  not?: SearchableReligionFilterInput | null;
};

export type SearchableReligionSortInput = {
  field?: SearchableReligionSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableReligionSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableReligionAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableReligionAggregateField;
};

export enum SearchableReligionAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableReligionConnection = {
  __typename: "SearchableReligionConnection";
  items: Array<Religion | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelPronounFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPronounFilterInput | null> | null;
  or?: Array<ModelPronounFilterInput | null> | null;
  not?: ModelPronounFilterInput | null;
};

export type ModelPronounConnection = {
  __typename: "ModelPronounConnection";
  items: Array<Pronoun | null>;
  nextToken?: string | null;
};

export type SearchablePronounFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePronounFilterInput | null> | null;
  or?: Array<SearchablePronounFilterInput | null> | null;
  not?: SearchablePronounFilterInput | null;
};

export type SearchablePronounSortInput = {
  field?: SearchablePronounSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePronounSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePronounAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchablePronounAggregateField;
};

export enum SearchablePronounAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePronounConnection = {
  __typename: "SearchablePronounConnection";
  items: Array<Pronoun | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelSexualOrientationFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSexualOrientationFilterInput | null> | null;
  or?: Array<ModelSexualOrientationFilterInput | null> | null;
  not?: ModelSexualOrientationFilterInput | null;
};

export type ModelSexualOrientationConnection = {
  __typename: "ModelSexualOrientationConnection";
  items: Array<SexualOrientation | null>;
  nextToken?: string | null;
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLanguageFilterInput | null> | null;
  or?: Array<ModelLanguageFilterInput | null> | null;
  not?: ModelLanguageFilterInput | null;
};

export type ModelLanguageConnection = {
  __typename: "ModelLanguageConnection";
  items: Array<Language | null>;
  nextToken?: string | null;
};

export type SearchableLanguageFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableLanguageFilterInput | null> | null;
  or?: Array<SearchableLanguageFilterInput | null> | null;
  not?: SearchableLanguageFilterInput | null;
};

export type SearchableLanguageSortInput = {
  field?: SearchableLanguageSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableLanguageSortableFields {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableLanguageAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableLanguageAggregateField;
};

export enum SearchableLanguageAggregateField {
  id = "id",
  name = "name",
  sortOrder = "sortOrder",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableLanguageConnection = {
  __typename: "SearchableLanguageConnection";
  items: Array<Language | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelLanguageUserFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  languageID?: ModelIDInput | null;
  and?: Array<ModelLanguageUserFilterInput | null> | null;
  or?: Array<ModelLanguageUserFilterInput | null> | null;
  not?: ModelLanguageUserFilterInput | null;
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null;
  isReported?: ModelBooleanInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMatchFilterInput | null> | null;
  or?: Array<ModelMatchFilterInput | null> | null;
  not?: ModelMatchFilterInput | null;
};

export type SearchableMatchFilterInput = {
  id?: SearchableIDFilterInput | null;
  isReported?: SearchableBooleanFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableMatchFilterInput | null> | null;
  or?: Array<SearchableMatchFilterInput | null> | null;
  not?: SearchableMatchFilterInput | null;
};

export type SearchableMatchSortInput = {
  field?: SearchableMatchSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableMatchSortableFields {
  id = "id",
  isReported = "isReported",
  userID = "userID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableMatchAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableMatchAggregateField;
};

export enum SearchableMatchAggregateField {
  id = "id",
  isReported = "isReported",
  userID = "userID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableMatchConnection = {
  __typename: "SearchableMatchConnection";
  items: Array<Match | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelPhotoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPhotoFilterInput | null> | null;
  or?: Array<ModelPhotoFilterInput | null> | null;
  not?: ModelPhotoFilterInput | null;
};

export type ModelPhotoConnection = {
  __typename: "ModelPhotoConnection";
  items: Array<Photo | null>;
  nextToken?: string | null;
};

export type ModelPhotoUserFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  photoID?: ModelIDInput | null;
  and?: Array<ModelPhotoUserFilterInput | null> | null;
  or?: Array<ModelPhotoUserFilterInput | null> | null;
  not?: ModelPhotoUserFilterInput | null;
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStoryFilterInput | null> | null;
  or?: Array<ModelStoryFilterInput | null> | null;
  not?: ModelStoryFilterInput | null;
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection";
  items: Array<Story | null>;
  nextToken?: string | null;
};

export type SearchableStoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableStoryFilterInput | null> | null;
  or?: Array<SearchableStoryFilterInput | null> | null;
  not?: SearchableStoryFilterInput | null;
};

export type SearchableStorySortInput = {
  field?: SearchableStorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableStorySortableFields {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableStoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableStoryAggregateField;
};

export enum SearchableStoryAggregateField {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableStoryConnection = {
  __typename: "SearchableStoryConnection";
  items: Array<Story | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelStoryUserFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  storyID?: ModelIDInput | null;
  and?: Array<ModelStoryUserFilterInput | null> | null;
  or?: Array<ModelStoryUserFilterInput | null> | null;
  not?: ModelStoryUserFilterInput | null;
};

export type ModelDayFilterInput = {
  id?: ModelIDInput | null;
  day?: ModelIntInput | null;
  position?: ModelIntInput | null;
  question?: ModelStringInput | null;
  response?: ModelStringInput | null;
  questionCategory?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDayFilterInput | null> | null;
  or?: Array<ModelDayFilterInput | null> | null;
  not?: ModelDayFilterInput | null;
};

export type SearchableDayFilterInput = {
  id?: SearchableIDFilterInput | null;
  day?: SearchableIntFilterInput | null;
  position?: SearchableIntFilterInput | null;
  question?: SearchableStringFilterInput | null;
  response?: SearchableStringFilterInput | null;
  questionCategory?: SearchableStringFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableDayFilterInput | null> | null;
  or?: Array<SearchableDayFilterInput | null> | null;
  not?: SearchableDayFilterInput | null;
};

export type SearchableDaySortInput = {
  field?: SearchableDaySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableDaySortableFields {
  id = "id",
  day = "day",
  position = "position",
  question = "question",
  response = "response",
  questionCategory = "questionCategory",
  userID = "userID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableDayAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableDayAggregateField;
};

export enum SearchableDayAggregateField {
  id = "id",
  day = "day",
  position = "position",
  question = "question",
  response = "response",
  questionCategory = "questionCategory",
  userID = "userID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableDayConnection = {
  __typename: "SearchableDayConnection";
  items: Array<Day | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelMentalHealthUserFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelMentalHealthUserFilterInput | null> | null;
  or?: Array<ModelMentalHealthUserFilterInput | null> | null;
  not?: ModelMentalHealthUserFilterInput | null;
};

export type ModelMentalHealthUserConnection = {
  __typename: "ModelMentalHealthUserConnection";
  items: Array<MentalHealthUser | null>;
  nextToken?: string | null;
};

export type ModelEnergyUserFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEnergyUserFilterInput | null> | null;
  or?: Array<ModelEnergyUserFilterInput | null> | null;
  not?: ModelEnergyUserFilterInput | null;
};

export type ModelEnergyUserConnection = {
  __typename: "ModelEnergyUserConnection";
  items: Array<EnergyUser | null>;
  nextToken?: string | null;
};

export type ModelCheckInQuestionFilterInput = {
  id?: ModelIDInput | null;
  day?: ModelIntInput | null;
  sortOrder?: ModelIntInput | null;
  title?: ModelStringInput | null;
  question?: ModelStringInput | null;
  quote?: ModelStringInput | null;
  checkInQuestionCategoryID?: ModelIDInput | null;
  checkInQuestionThemeID?: ModelIDInput | null;
  checkInQuestionContentCategoryId?: ModelStringInput | null;
  checkInQuestionContentCategoryName?: ModelStringInput | null;
  checkInQuestionTypeID?: ModelIDInput | null;
  responses?: ModelStringInput | null;
  author?: ModelStringInput | null;
  dayImage?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionFilterInput | null> | null;
  or?: Array<ModelCheckInQuestionFilterInput | null> | null;
  not?: ModelCheckInQuestionFilterInput | null;
};

export type SearchableCheckInQuestionFilterInput = {
  id?: SearchableIDFilterInput | null;
  day?: SearchableIntFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  title?: SearchableStringFilterInput | null;
  question?: SearchableStringFilterInput | null;
  quote?: SearchableStringFilterInput | null;
  checkInQuestionCategoryID?: SearchableIDFilterInput | null;
  checkInQuestionThemeID?: SearchableIDFilterInput | null;
  checkInQuestionContentCategoryId?: SearchableStringFilterInput | null;
  checkInQuestionContentCategoryName?: SearchableStringFilterInput | null;
  checkInQuestionTypeID?: SearchableIDFilterInput | null;
  responses?: SearchableStringFilterInput | null;
  author?: SearchableStringFilterInput | null;
  dayImage?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCheckInQuestionFilterInput | null> | null;
  or?: Array<SearchableCheckInQuestionFilterInput | null> | null;
  not?: SearchableCheckInQuestionFilterInput | null;
};

export type SearchableCheckInQuestionSortInput = {
  field?: SearchableCheckInQuestionSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCheckInQuestionSortableFields {
  id = "id",
  day = "day",
  sortOrder = "sortOrder",
  title = "title",
  question = "question",
  quote = "quote",
  checkInQuestionCategoryID = "checkInQuestionCategoryID",
  checkInQuestionThemeID = "checkInQuestionThemeID",
  checkInQuestionContentCategoryId = "checkInQuestionContentCategoryId",
  checkInQuestionContentCategoryName = "checkInQuestionContentCategoryName",
  checkInQuestionTypeID = "checkInQuestionTypeID",
  responses = "responses",
  author = "author",
  dayImage = "dayImage",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCheckInQuestionAggregateField;
};

export enum SearchableCheckInQuestionAggregateField {
  id = "id",
  day = "day",
  sortOrder = "sortOrder",
  title = "title",
  question = "question",
  quote = "quote",
  checkInQuestionCategoryID = "checkInQuestionCategoryID",
  checkInQuestionThemeID = "checkInQuestionThemeID",
  checkInQuestionContentCategoryId = "checkInQuestionContentCategoryId",
  checkInQuestionContentCategoryName = "checkInQuestionContentCategoryName",
  checkInQuestionTypeID = "checkInQuestionTypeID",
  responses = "responses",
  author = "author",
  dayImage = "dayImage",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionConnection = {
  __typename: "SearchableCheckInQuestionConnection";
  items: Array<CheckInQuestion | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelCheckInQuestionCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionCategoryFilterInput | null> | null;
  or?: Array<ModelCheckInQuestionCategoryFilterInput | null> | null;
  not?: ModelCheckInQuestionCategoryFilterInput | null;
};

export type ModelCheckInQuestionCategoryConnection = {
  __typename: "ModelCheckInQuestionCategoryConnection";
  items: Array<CheckInQuestionCategory | null>;
  nextToken?: string | null;
};

export type SearchableCheckInQuestionCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCheckInQuestionCategoryFilterInput | null> | null;
  or?: Array<SearchableCheckInQuestionCategoryFilterInput | null> | null;
  not?: SearchableCheckInQuestionCategoryFilterInput | null;
};

export type SearchableCheckInQuestionCategorySortInput = {
  field?: SearchableCheckInQuestionCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCheckInQuestionCategorySortableFields {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCheckInQuestionCategoryAggregateField;
};

export enum SearchableCheckInQuestionCategoryAggregateField {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionCategoryConnection = {
  __typename: "SearchableCheckInQuestionCategoryConnection";
  items: Array<CheckInQuestionCategory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelCheckInQuestionThemeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionThemeFilterInput | null> | null;
  or?: Array<ModelCheckInQuestionThemeFilterInput | null> | null;
  not?: ModelCheckInQuestionThemeFilterInput | null;
};

export type ModelCheckInQuestionThemeConnection = {
  __typename: "ModelCheckInQuestionThemeConnection";
  items: Array<CheckInQuestionTheme | null>;
  nextToken?: string | null;
};

export type SearchableCheckInQuestionThemeFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCheckInQuestionThemeFilterInput | null> | null;
  or?: Array<SearchableCheckInQuestionThemeFilterInput | null> | null;
  not?: SearchableCheckInQuestionThemeFilterInput | null;
};

export type SearchableCheckInQuestionThemeSortInput = {
  field?: SearchableCheckInQuestionThemeSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCheckInQuestionThemeSortableFields {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionThemeAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCheckInQuestionThemeAggregateField;
};

export enum SearchableCheckInQuestionThemeAggregateField {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionThemeConnection = {
  __typename: "SearchableCheckInQuestionThemeConnection";
  items: Array<CheckInQuestionTheme | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelCheckInQuestionTypeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCheckInQuestionTypeFilterInput | null> | null;
  or?: Array<ModelCheckInQuestionTypeFilterInput | null> | null;
  not?: ModelCheckInQuestionTypeFilterInput | null;
};

export type ModelCheckInQuestionTypeConnection = {
  __typename: "ModelCheckInQuestionTypeConnection";
  items: Array<CheckInQuestionType | null>;
  nextToken?: string | null;
};

export type SearchableCheckInQuestionTypeFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCheckInQuestionTypeFilterInput | null> | null;
  or?: Array<SearchableCheckInQuestionTypeFilterInput | null> | null;
  not?: SearchableCheckInQuestionTypeFilterInput | null;
};

export type SearchableCheckInQuestionTypeSortInput = {
  field?: SearchableCheckInQuestionTypeSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCheckInQuestionTypeSortableFields {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionTypeAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCheckInQuestionTypeAggregateField;
};

export enum SearchableCheckInQuestionTypeAggregateField {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionTypeConnection = {
  __typename: "SearchableCheckInQuestionTypeConnection";
  items: Array<CheckInQuestionType | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelCheckInQuestionUserFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  checkInQuestionID?: ModelIDInput | null;
  and?: Array<ModelCheckInQuestionUserFilterInput | null> | null;
  or?: Array<ModelCheckInQuestionUserFilterInput | null> | null;
  not?: ModelCheckInQuestionUserFilterInput | null;
};

export type SearchableCheckInQuestionUserFilterInput = {
  id?: SearchableIDFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  checkInQuestionID?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCheckInQuestionUserFilterInput | null> | null;
  or?: Array<SearchableCheckInQuestionUserFilterInput | null> | null;
  not?: SearchableCheckInQuestionUserFilterInput | null;
};

export type SearchableCheckInQuestionUserSortInput = {
  field?: SearchableCheckInQuestionUserSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCheckInQuestionUserSortableFields {
  id = "id",
  userID = "userID",
  checkInQuestionID = "checkInQuestionID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionUserAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCheckInQuestionUserAggregateField;
};

export enum SearchableCheckInQuestionUserAggregateField {
  id = "id",
  userID = "userID",
  checkInQuestionID = "checkInQuestionID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableCheckInQuestionUserConnection = {
  __typename: "SearchableCheckInQuestionUserConnection";
  items: Array<CheckInQuestionUser | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelIceBreakerQuestionFilterInput = {
  id?: ModelIDInput | null;
  question?: ModelStringInput | null;
  iceBreakerQuestionCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIceBreakerQuestionFilterInput | null> | null;
  or?: Array<ModelIceBreakerQuestionFilterInput | null> | null;
  not?: ModelIceBreakerQuestionFilterInput | null;
};

export type SearchableIceBreakerQuestionFilterInput = {
  id?: SearchableIDFilterInput | null;
  question?: SearchableStringFilterInput | null;
  iceBreakerQuestionCategoryID?: SearchableIDFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableIceBreakerQuestionFilterInput | null> | null;
  or?: Array<SearchableIceBreakerQuestionFilterInput | null> | null;
  not?: SearchableIceBreakerQuestionFilterInput | null;
};

export type SearchableIceBreakerQuestionSortInput = {
  field?: SearchableIceBreakerQuestionSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableIceBreakerQuestionSortableFields {
  id = "id",
  question = "question",
  iceBreakerQuestionCategoryID = "iceBreakerQuestionCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableIceBreakerQuestionAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableIceBreakerQuestionAggregateField;
};

export enum SearchableIceBreakerQuestionAggregateField {
  id = "id",
  question = "question",
  iceBreakerQuestionCategoryID = "iceBreakerQuestionCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableIceBreakerQuestionConnection = {
  __typename: "SearchableIceBreakerQuestionConnection";
  items: Array<IceBreakerQuestion | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelIceBreakerQuestionCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelIceBreakerQuestionCategoryFilterInput | null> | null;
  or?: Array<ModelIceBreakerQuestionCategoryFilterInput | null> | null;
  not?: ModelIceBreakerQuestionCategoryFilterInput | null;
};

export type ModelIceBreakerQuestionCategoryConnection = {
  __typename: "ModelIceBreakerQuestionCategoryConnection";
  items: Array<IceBreakerQuestionCategory | null>;
  nextToken?: string | null;
};

export type ModelEatingPreferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sortOrder?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEatingPreferenceFilterInput | null> | null;
  or?: Array<ModelEatingPreferenceFilterInput | null> | null;
  not?: ModelEatingPreferenceFilterInput | null;
};

export type ModelEatingPreferenceConnection = {
  __typename: "ModelEatingPreferenceConnection";
  items: Array<EatingPreference | null>;
  nextToken?: string | null;
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  author?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelQuoteFilterInput | null> | null;
  or?: Array<ModelQuoteFilterInput | null> | null;
  not?: ModelQuoteFilterInput | null;
};

export type SearchableQuoteFilterInput = {
  id?: SearchableIDFilterInput | null;
  text?: SearchableStringFilterInput | null;
  author?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableQuoteFilterInput | null> | null;
  or?: Array<SearchableQuoteFilterInput | null> | null;
  not?: SearchableQuoteFilterInput | null;
};

export type SearchableQuoteSortInput = {
  field?: SearchableQuoteSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableQuoteSortableFields {
  id = "id",
  text = "text",
  author = "author",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableQuoteAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableQuoteAggregateField;
};

export enum SearchableQuoteAggregateField {
  id = "id",
  text = "text",
  author = "author",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableQuoteConnection = {
  __typename: "SearchableQuoteConnection";
  items: Array<Quote | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelAuthorFilterInput | null> | null;
  or?: Array<ModelAuthorFilterInput | null> | null;
  not?: ModelAuthorFilterInput | null;
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection";
  items: Array<Author | null>;
  nextToken?: string | null;
};

export type SearchableAuthorFilterInput = {
  id?: SearchableIDFilterInput | null;
  firstName?: SearchableStringFilterInput | null;
  lastName?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  image?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableAuthorFilterInput | null> | null;
  or?: Array<SearchableAuthorFilterInput | null> | null;
  not?: SearchableAuthorFilterInput | null;
};

export type SearchableAuthorSortInput = {
  field?: SearchableAuthorSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableAuthorSortableFields {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  description = "description",
  image = "image",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableAuthorAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableAuthorAggregateField;
};

export enum SearchableAuthorAggregateField {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  description = "description",
  image = "image",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableAuthorConnection = {
  __typename: "SearchableAuthorConnection";
  items: Array<Author | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  contentCategoryId?: ModelIDInput | null;
  contentTypeId?: ModelIDInput | null;
  authorId?: ModelIDInput | null;
  media?: ModelStringInput | null;
  mediaDuration?: ModelIntInput | null;
  animatedGif?: ModelStringInput | null;
  image?: ModelStringInput | null;
  title?: ModelStringInput | null;
  subTitle?: ModelStringInput | null;
  text?: ModelStringInput | null;
  day?: ModelIntInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentFilterInput | null> | null;
  or?: Array<ModelContentFilterInput | null> | null;
  not?: ModelContentFilterInput | null;
};

export type SearchableContentFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  contentCategoryId?: SearchableIDFilterInput | null;
  contentTypeId?: SearchableIDFilterInput | null;
  authorId?: SearchableIDFilterInput | null;
  media?: SearchableStringFilterInput | null;
  mediaDuration?: SearchableIntFilterInput | null;
  animatedGif?: SearchableStringFilterInput | null;
  image?: SearchableStringFilterInput | null;
  title?: SearchableStringFilterInput | null;
  subTitle?: SearchableStringFilterInput | null;
  text?: SearchableStringFilterInput | null;
  day?: SearchableIntFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableContentFilterInput | null> | null;
  or?: Array<SearchableContentFilterInput | null> | null;
  not?: SearchableContentFilterInput | null;
};

export type SearchableContentSortInput = {
  field?: SearchableContentSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableContentSortableFields {
  id = "id",
  name = "name",
  contentCategoryId = "contentCategoryId",
  contentTypeId = "contentTypeId",
  authorId = "authorId",
  media = "media",
  mediaDuration = "mediaDuration",
  animatedGif = "animatedGif",
  image = "image",
  title = "title",
  subTitle = "subTitle",
  text = "text",
  day = "day",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableContentAggregateField;
};

export enum SearchableContentAggregateField {
  id = "id",
  name = "name",
  contentCategoryId = "contentCategoryId",
  contentTypeId = "contentTypeId",
  authorId = "authorId",
  media = "media",
  mediaDuration = "mediaDuration",
  animatedGif = "animatedGif",
  image = "image",
  title = "title",
  subTitle = "subTitle",
  text = "text",
  day = "day",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentConnection = {
  __typename: "SearchableContentConnection";
  items: Array<Content | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelContentCategoryDayImageFilterInput = {
  id?: ModelIDInput | null;
  contentCategoryId?: ModelIDInput | null;
  url?: ModelStringInput | null;
  day?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentCategoryDayImageFilterInput | null> | null;
  or?: Array<ModelContentCategoryDayImageFilterInput | null> | null;
  not?: ModelContentCategoryDayImageFilterInput | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelContentCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  dashboardImage?: ModelStringInput | null;
  internalPageHeaderImage?: ModelStringInput | null;
  progressionCardDotImage?: ModelStringInput | null;
  reflectionQuestionBackgroundImage?: ModelStringInput | null;
  inDashboard?: ModelBooleanInput | null;
  reflectionQuestionsGradientValues?: ModelStringInput | null;
  contentPageGradientValues?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  sortOrder?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentCategoryFilterInput | null> | null;
  or?: Array<ModelContentCategoryFilterInput | null> | null;
  not?: ModelContentCategoryFilterInput | null;
};

export type ModelContentCategoryConnection = {
  __typename: "ModelContentCategoryConnection";
  items: Array<ContentCategory | null>;
  nextToken?: string | null;
};

export type SearchableContentCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  dashboardImage?: SearchableStringFilterInput | null;
  internalPageHeaderImage?: SearchableStringFilterInput | null;
  progressionCardDotImage?: SearchableStringFilterInput | null;
  reflectionQuestionBackgroundImage?: SearchableStringFilterInput | null;
  inDashboard?: SearchableBooleanFilterInput | null;
  reflectionQuestionsGradientValues?: SearchableStringFilterInput | null;
  contentPageGradientValues?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  sortOrder?: SearchableIntFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableContentCategoryFilterInput | null> | null;
  or?: Array<SearchableContentCategoryFilterInput | null> | null;
  not?: SearchableContentCategoryFilterInput | null;
};

export type SearchableContentCategorySortInput = {
  field?: SearchableContentCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableContentCategorySortableFields {
  id = "id",
  name = "name",
  description = "description",
  dashboardImage = "dashboardImage",
  internalPageHeaderImage = "internalPageHeaderImage",
  progressionCardDotImage = "progressionCardDotImage",
  reflectionQuestionBackgroundImage = "reflectionQuestionBackgroundImage",
  inDashboard = "inDashboard",
  reflectionQuestionsGradientValues = "reflectionQuestionsGradientValues",
  contentPageGradientValues = "contentPageGradientValues",
  isActive = "isActive",
  sortOrder = "sortOrder",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableContentCategoryAggregateField;
};

export enum SearchableContentCategoryAggregateField {
  id = "id",
  name = "name",
  description = "description",
  dashboardImage = "dashboardImage",
  internalPageHeaderImage = "internalPageHeaderImage",
  progressionCardDotImage = "progressionCardDotImage",
  reflectionQuestionBackgroundImage = "reflectionQuestionBackgroundImage",
  inDashboard = "inDashboard",
  reflectionQuestionsGradientValues = "reflectionQuestionsGradientValues",
  contentPageGradientValues = "contentPageGradientValues",
  isActive = "isActive",
  sortOrder = "sortOrder",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentCategoryConnection = {
  __typename: "SearchableContentCategoryConnection";
  items: Array<ContentCategory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelContentTypeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContentTypeFilterInput | null> | null;
  or?: Array<ModelContentTypeFilterInput | null> | null;
  not?: ModelContentTypeFilterInput | null;
};

export type ModelContentTypeConnection = {
  __typename: "ModelContentTypeConnection";
  items: Array<ContentType | null>;
  nextToken?: string | null;
};

export type SearchableContentTypeFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableContentTypeFilterInput | null> | null;
  or?: Array<SearchableContentTypeFilterInput | null> | null;
  not?: SearchableContentTypeFilterInput | null;
};

export type SearchableContentTypeSortInput = {
  field?: SearchableContentTypeSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableContentTypeSortableFields {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentTypeAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableContentTypeAggregateField;
};

export enum SearchableContentTypeAggregateField {
  id = "id",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableContentTypeConnection = {
  __typename: "SearchableContentTypeConnection";
  items: Array<ContentType | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelPromptFilterInput = {
  id?: ModelIDInput | null;
  prompt?: ModelStringInput | null;
  promptCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPromptFilterInput | null> | null;
  or?: Array<ModelPromptFilterInput | null> | null;
  not?: ModelPromptFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type SearchablePromptFilterInput = {
  id?: SearchableIDFilterInput | null;
  prompt?: SearchableStringFilterInput | null;
  promptCategoryID?: SearchableIDFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePromptFilterInput | null> | null;
  or?: Array<SearchablePromptFilterInput | null> | null;
  not?: SearchablePromptFilterInput | null;
};

export type SearchablePromptSortInput = {
  field?: SearchablePromptSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePromptSortableFields {
  id = "id",
  prompt = "prompt",
  promptCategoryID = "promptCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePromptAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchablePromptAggregateField;
};

export enum SearchablePromptAggregateField {
  id = "id",
  prompt = "prompt",
  promptCategoryID = "promptCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePromptConnection = {
  __typename: "SearchablePromptConnection";
  items: Array<Prompt | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelPromptCategoryFilterInput = {
  id?: ModelIDInput | null;
  promptCategoryId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPromptCategoryFilterInput | null> | null;
  or?: Array<ModelPromptCategoryFilterInput | null> | null;
  not?: ModelPromptCategoryFilterInput | null;
};

export type ModelPromptCategoryConnection = {
  __typename: "ModelPromptCategoryConnection";
  items: Array<PromptCategory | null>;
  nextToken?: string | null;
};

export type SearchablePromptCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  promptCategoryId?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePromptCategoryFilterInput | null> | null;
  or?: Array<SearchablePromptCategoryFilterInput | null> | null;
  not?: SearchablePromptCategoryFilterInput | null;
};

export type SearchablePromptCategorySortInput = {
  field?: SearchablePromptCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePromptCategorySortableFields {
  id = "id",
  promptCategoryId = "promptCategoryId",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePromptCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchablePromptCategoryAggregateField;
};

export enum SearchablePromptCategoryAggregateField {
  id = "id",
  promptCategoryId = "promptCategoryId",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePromptCategoryConnection = {
  __typename: "SearchablePromptCategoryConnection";
  items: Array<PromptCategory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelChatPromptFilterInput = {
  id?: ModelIDInput | null;
  prompt?: ModelStringInput | null;
  promptCategoryID?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChatPromptFilterInput | null> | null;
  or?: Array<ModelChatPromptFilterInput | null> | null;
  not?: ModelChatPromptFilterInput | null;
};

export type SearchableChatPromptFilterInput = {
  id?: SearchableIDFilterInput | null;
  prompt?: SearchableStringFilterInput | null;
  promptCategoryID?: SearchableIDFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableChatPromptFilterInput | null> | null;
  or?: Array<SearchableChatPromptFilterInput | null> | null;
  not?: SearchableChatPromptFilterInput | null;
};

export type SearchableChatPromptSortInput = {
  field?: SearchableChatPromptSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableChatPromptSortableFields {
  id = "id",
  prompt = "prompt",
  promptCategoryID = "promptCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChatPromptAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableChatPromptAggregateField;
};

export enum SearchableChatPromptAggregateField {
  id = "id",
  prompt = "prompt",
  promptCategoryID = "promptCategoryID",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChatPromptConnection = {
  __typename: "SearchableChatPromptConnection";
  items: Array<ChatPrompt | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelChatPromptCategoryFilterInput = {
  id?: ModelIDInput | null;
  chatPromptCategoryId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isActive?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChatPromptCategoryFilterInput | null> | null;
  or?: Array<ModelChatPromptCategoryFilterInput | null> | null;
  not?: ModelChatPromptCategoryFilterInput | null;
};

export type ModelChatPromptCategoryConnection = {
  __typename: "ModelChatPromptCategoryConnection";
  items: Array<ChatPromptCategory | null>;
  nextToken?: string | null;
};

export type SearchableChatPromptCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  chatPromptCategoryId?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  isActive?: SearchableBooleanFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableChatPromptCategoryFilterInput | null> | null;
  or?: Array<SearchableChatPromptCategoryFilterInput | null> | null;
  not?: SearchableChatPromptCategoryFilterInput | null;
};

export type SearchableChatPromptCategorySortInput = {
  field?: SearchableChatPromptCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableChatPromptCategorySortableFields {
  id = "id",
  chatPromptCategoryId = "chatPromptCategoryId",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChatPromptCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableChatPromptCategoryAggregateField;
};

export enum SearchableChatPromptCategoryAggregateField {
  id = "id",
  chatPromptCategoryId = "chatPromptCategoryId",
  name = "name",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableChatPromptCategoryConnection = {
  __typename: "SearchableChatPromptCategoryConnection";
  items: Array<ChatPromptCategory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelFeedbackUserFilterInput = {
  id?: ModelIDInput | null;
  feedback?: ModelStringInput | null;
  screen?: ModelStringInput | null;
  imageName?: ModelStringInput | null;
  deviceInfo?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelFeedbackUserFilterInput | null> | null;
  or?: Array<ModelFeedbackUserFilterInput | null> | null;
  not?: ModelFeedbackUserFilterInput | null;
};

export type ModelFeedbackUserConnection = {
  __typename: "ModelFeedbackUserConnection";
  items: Array<FeedbackUser | null>;
  nextToken?: string | null;
};

export type SearchableFeedbackUserFilterInput = {
  id?: SearchableIDFilterInput | null;
  feedback?: SearchableStringFilterInput | null;
  screen?: SearchableStringFilterInput | null;
  imageName?: SearchableStringFilterInput | null;
  deviceInfo?: SearchableStringFilterInput | null;
  userName?: SearchableStringFilterInput | null;
  userEmail?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableFeedbackUserFilterInput | null> | null;
  or?: Array<SearchableFeedbackUserFilterInput | null> | null;
  not?: SearchableFeedbackUserFilterInput | null;
};

export type SearchableFeedbackUserSortInput = {
  field?: SearchableFeedbackUserSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableFeedbackUserSortableFields {
  id = "id",
  feedback = "feedback",
  screen = "screen",
  imageName = "imageName",
  deviceInfo = "deviceInfo",
  userName = "userName",
  userEmail = "userEmail",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableFeedbackUserAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableFeedbackUserAggregateField;
};

export enum SearchableFeedbackUserAggregateField {
  id = "id",
  feedback = "feedback",
  screen = "screen",
  imageName = "imageName",
  deviceInfo = "deviceInfo",
  userName = "userName",
  userEmail = "userEmail",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableFeedbackUserConnection = {
  __typename: "SearchableFeedbackUserConnection";
  items: Array<FeedbackUser | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelFeedbackTesterFilterInput = {
  id?: ModelIDInput | null;
  feedback?: ModelStringInput | null;
  screen?: ModelStringInput | null;
  imageName?: ModelStringInput | null;
  deviceInfo?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelFeedbackTesterFilterInput | null> | null;
  or?: Array<ModelFeedbackTesterFilterInput | null> | null;
  not?: ModelFeedbackTesterFilterInput | null;
};

export type ModelFeedbackTesterConnection = {
  __typename: "ModelFeedbackTesterConnection";
  items: Array<FeedbackTester | null>;
  nextToken?: string | null;
};

export type SearchableFeedbackTesterFilterInput = {
  id?: SearchableIDFilterInput | null;
  feedback?: SearchableStringFilterInput | null;
  screen?: SearchableStringFilterInput | null;
  imageName?: SearchableStringFilterInput | null;
  deviceInfo?: SearchableStringFilterInput | null;
  userName?: SearchableStringFilterInput | null;
  userEmail?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableFeedbackTesterFilterInput | null> | null;
  or?: Array<SearchableFeedbackTesterFilterInput | null> | null;
  not?: SearchableFeedbackTesterFilterInput | null;
};

export type SearchableFeedbackTesterSortInput = {
  field?: SearchableFeedbackTesterSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableFeedbackTesterSortableFields {
  id = "id",
  feedback = "feedback",
  screen = "screen",
  imageName = "imageName",
  deviceInfo = "deviceInfo",
  userName = "userName",
  userEmail = "userEmail",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableFeedbackTesterAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableFeedbackTesterAggregateField;
};

export enum SearchableFeedbackTesterAggregateField {
  id = "id",
  feedback = "feedback",
  screen = "screen",
  imageName = "imageName",
  deviceInfo = "deviceInfo",
  userName = "userName",
  userEmail = "userEmail",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableFeedbackTesterConnection = {
  __typename: "SearchableFeedbackTesterConnection";
  items: Array<FeedbackTester | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelGeneralAppContentFilterInput = {
  id?: ModelIDInput | null;
  contentType?: ModelStringInput | null;
  title?: ModelStringInput | null;
  value?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGeneralAppContentFilterInput | null> | null;
  or?: Array<ModelGeneralAppContentFilterInput | null> | null;
  not?: ModelGeneralAppContentFilterInput | null;
};

export type ModelGeneralAppContentConnection = {
  __typename: "ModelGeneralAppContentConnection";
  items: Array<GeneralAppContent | null>;
  nextToken?: string | null;
};

export type SearchableGeneralAppContentFilterInput = {
  id?: SearchableIDFilterInput | null;
  contentType?: SearchableStringFilterInput | null;
  title?: SearchableStringFilterInput | null;
  value?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableGeneralAppContentFilterInput | null> | null;
  or?: Array<SearchableGeneralAppContentFilterInput | null> | null;
  not?: SearchableGeneralAppContentFilterInput | null;
};

export type SearchableGeneralAppContentSortInput = {
  field?: SearchableGeneralAppContentSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableGeneralAppContentSortableFields {
  id = "id",
  contentType = "contentType",
  title = "title",
  value = "value",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableGeneralAppContentAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableGeneralAppContentAggregateField;
};

export enum SearchableGeneralAppContentAggregateField {
  id = "id",
  contentType = "contentType",
  title = "title",
  value = "value",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableGeneralAppContentConnection = {
  __typename: "SearchableGeneralAppContentConnection";
  items: Array<GeneralAppContent | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelWaitlistUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  userCity?: ModelStringInput | null;
  userIP?: ModelStringInput | null;
  userCoordinates?: ModelStringInput | null;
  userInternetProvider?: ModelStringInput | null;
  userZipCode?: ModelStringInput | null;
  userState?: ModelStringInput | null;
  userTimeZone?: ModelStringInput | null;
  relationshipStatus?: ModelStringInput | null;
  isDistanceImportant?: ModelStringInput | null;
  deviceType?: ModelStringInput | null;
  additionalInfo?: ModelStringInput | null;
  cityState?: ModelStringInput | null;
  referralCode?: ModelStringInput | null;
  verificationLinkToken?: ModelStringInput | null;
  position?: ModelStringInput | null;
  ageRange?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  genderPreference?: ModelStringInput | null;
  readyInterests?: ModelStringInput | null;
  howDidYouHearAboutUs?: ModelStringInput | null;
  helpReady?: ModelStringInput | null;
  features?: ModelStringInput | null;
  comments?: ModelStringInput | null;
  userDevice?: ModelStringInput | null;
  userPlatform?: ModelStringInput | null;
  userAppName?: ModelStringInput | null;
  userAppVersion?: ModelStringInput | null;
  userScreenSize?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWaitlistUserFilterInput | null> | null;
  or?: Array<ModelWaitlistUserFilterInput | null> | null;
  not?: ModelWaitlistUserFilterInput | null;
};

export type ModelWaitlistUserConnection = {
  __typename: "ModelWaitlistUserConnection";
  items: Array<WaitlistUser | null>;
  nextToken?: string | null;
};

export type SearchableWaitlistUserFilterInput = {
  id?: SearchableIDFilterInput | null;
  email?: SearchableStringFilterInput | null;
  userCity?: SearchableStringFilterInput | null;
  userIP?: SearchableStringFilterInput | null;
  userCoordinates?: SearchableStringFilterInput | null;
  userInternetProvider?: SearchableStringFilterInput | null;
  userZipCode?: SearchableStringFilterInput | null;
  userState?: SearchableStringFilterInput | null;
  userTimeZone?: SearchableStringFilterInput | null;
  relationshipStatus?: SearchableStringFilterInput | null;
  isDistanceImportant?: SearchableStringFilterInput | null;
  deviceType?: SearchableStringFilterInput | null;
  additionalInfo?: SearchableStringFilterInput | null;
  cityState?: SearchableStringFilterInput | null;
  referralCode?: SearchableStringFilterInput | null;
  verificationLinkToken?: SearchableStringFilterInput | null;
  position?: SearchableStringFilterInput | null;
  ageRange?: SearchableStringFilterInput | null;
  gender?: SearchableStringFilterInput | null;
  genderPreference?: SearchableStringFilterInput | null;
  readyInterests?: SearchableStringFilterInput | null;
  howDidYouHearAboutUs?: SearchableStringFilterInput | null;
  helpReady?: SearchableStringFilterInput | null;
  features?: SearchableStringFilterInput | null;
  comments?: SearchableStringFilterInput | null;
  userDevice?: SearchableStringFilterInput | null;
  userPlatform?: SearchableStringFilterInput | null;
  userAppName?: SearchableStringFilterInput | null;
  userAppVersion?: SearchableStringFilterInput | null;
  userScreenSize?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableWaitlistUserFilterInput | null> | null;
  or?: Array<SearchableWaitlistUserFilterInput | null> | null;
  not?: SearchableWaitlistUserFilterInput | null;
};

export type SearchableWaitlistUserSortInput = {
  field?: SearchableWaitlistUserSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableWaitlistUserSortableFields {
  id = "id",
  email = "email",
  userCity = "userCity",
  userIP = "userIP",
  userCoordinates = "userCoordinates",
  userInternetProvider = "userInternetProvider",
  userZipCode = "userZipCode",
  userState = "userState",
  userTimeZone = "userTimeZone",
  relationshipStatus = "relationshipStatus",
  isDistanceImportant = "isDistanceImportant",
  deviceType = "deviceType",
  additionalInfo = "additionalInfo",
  cityState = "cityState",
  referralCode = "referralCode",
  verificationLinkToken = "verificationLinkToken",
  position = "position",
  ageRange = "ageRange",
  gender = "gender",
  genderPreference = "genderPreference",
  readyInterests = "readyInterests",
  howDidYouHearAboutUs = "howDidYouHearAboutUs",
  helpReady = "helpReady",
  features = "features",
  comments = "comments",
  userDevice = "userDevice",
  userPlatform = "userPlatform",
  userAppName = "userAppName",
  userAppVersion = "userAppVersion",
  userScreenSize = "userScreenSize",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableWaitlistUserAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableWaitlistUserAggregateField;
};

export enum SearchableWaitlistUserAggregateField {
  id = "id",
  email = "email",
  userCity = "userCity",
  userIP = "userIP",
  userCoordinates = "userCoordinates",
  userInternetProvider = "userInternetProvider",
  userZipCode = "userZipCode",
  userState = "userState",
  userTimeZone = "userTimeZone",
  relationshipStatus = "relationshipStatus",
  isDistanceImportant = "isDistanceImportant",
  deviceType = "deviceType",
  additionalInfo = "additionalInfo",
  cityState = "cityState",
  referralCode = "referralCode",
  verificationLinkToken = "verificationLinkToken",
  position = "position",
  ageRange = "ageRange",
  gender = "gender",
  genderPreference = "genderPreference",
  readyInterests = "readyInterests",
  howDidYouHearAboutUs = "howDidYouHearAboutUs",
  helpReady = "helpReady",
  features = "features",
  comments = "comments",
  userDevice = "userDevice",
  userPlatform = "userPlatform",
  userAppName = "userAppName",
  userAppVersion = "userAppVersion",
  userScreenSize = "userScreenSize",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchableWaitlistUserConnection = {
  __typename: "SearchableWaitlistUserConnection";
  items: Array<WaitlistUser | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  emailCommunication?: ModelSubscriptionBooleanInput | null;
  birthdate?: ModelSubscriptionStringInput | null;
  gender?: ModelSubscriptionStringInput | null;
  isGenderVisible?: ModelSubscriptionBooleanInput | null;
  sexualOrientation?: ModelSubscriptionStringInput | null;
  isSexualOrientationVisible?: ModelSubscriptionBooleanInput | null;
  value?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  isLocationVisible?: ModelSubscriptionBooleanInput | null;
  mentalHealth?: ModelSubscriptionStringInput | null;
  quality?: ModelSubscriptionStringInput | null;
  energy?: ModelSubscriptionStringInput | null;
  starSign?: ModelSubscriptionStringInput | null;
  isStarSignVisible?: ModelSubscriptionBooleanInput | null;
  ethnicityID?: ModelSubscriptionIDInput | null;
  isEthnicityVisible?: ModelSubscriptionBooleanInput | null;
  religionID?: ModelSubscriptionIDInput | null;
  isReligionVisible?: ModelSubscriptionBooleanInput | null;
  height?: ModelSubscriptionIntInput | null;
  isHeightVisible?: ModelSubscriptionBooleanInput | null;
  pronounID?: ModelSubscriptionIDInput | null;
  isPronounVisible?: ModelSubscriptionBooleanInput | null;
  genderPreferences?: ModelSubscriptionStringInput | null;
  areGenderPreferencesVisible?: ModelSubscriptionBooleanInput | null;
  agePreferenceFrom?: ModelSubscriptionIntInput | null;
  agePreferenceTo?: ModelSubscriptionIntInput | null;
  distancePreference?: ModelSubscriptionIntInput | null;
  childrenStatusID?: ModelSubscriptionIDInput | null;
  wantChildrenStatus?: ModelSubscriptionStringInput | null;
  isChildrenStatusVisible?: ModelSubscriptionBooleanInput | null;
  isWantChildrenStatusVisible?: ModelSubscriptionBooleanInput | null;
  educationLevel?: ModelSubscriptionStringInput | null;
  isEducationLevelVisible?: ModelSubscriptionBooleanInput | null;
  school?: ModelSubscriptionStringInput | null;
  isSchoolVisbile?: ModelSubscriptionBooleanInput | null;
  areLanguagesVisible?: ModelSubscriptionBooleanInput | null;
  jobTitle?: ModelSubscriptionStringInput | null;
  isJobTitleVisible?: ModelSubscriptionBooleanInput | null;
  work?: ModelSubscriptionStringInput | null;
  isWorkVisible?: ModelSubscriptionBooleanInput | null;
  drinkPreference?: ModelSubscriptionStringInput | null;
  isDrinkPreferenceVisible?: ModelSubscriptionBooleanInput | null;
  tobaccoPreference?: ModelSubscriptionStringInput | null;
  isTobaccoPreferenceVisible?: ModelSubscriptionBooleanInput | null;
  drugPreference?: ModelSubscriptionStringInput | null;
  isDrugPreferenceVisible?: ModelSubscriptionBooleanInput | null;
  therapyPreference?: ModelSubscriptionStringInput | null;
  isTherapyPreferenceVisible?: ModelSubscriptionBooleanInput | null;
  eatingPreferences?: ModelSubscriptionStringInput | null;
  areEatingPreferencesVisible?: ModelSubscriptionBooleanInput | null;
  exercisePreferenceID?: ModelSubscriptionIDInput | null;
  exercisePreference?: ModelSubscriptionStringInput | null;
  isExercisePreferenceVisible?: ModelSubscriptionBooleanInput | null;
  sleepingHabit?: ModelSubscriptionStringInput | null;
  isSleepingHabitVisible?: ModelSubscriptionBooleanInput | null;
  hometown?: ModelSubscriptionStringInput | null;
  isHometownVisible?: ModelSubscriptionBooleanInput | null;
  prompts?: ModelSubscriptionStringInput | null;
  userMainPhoto?: ModelSubscriptionStringInput | null;
  defaultUserPhoto?: ModelSubscriptionIntInput | null;
  bio?: ModelSubscriptionStringInput | null;
  discoveringYou?: ModelSubscriptionStringInput | null;
  isUserActive?: ModelSubscriptionBooleanInput | null;
  isUserVerified?: ModelSubscriptionBooleanInput | null;
  isUserOnboarded?: ModelSubscriptionBooleanInput | null;
  isUserPaused?: ModelSubscriptionBooleanInput | null;
  isProfileComplete?: ModelSubscriptionBooleanInput | null;
  isHabitsComplete?: ModelSubscriptionBooleanInput | null;
  isOnboardingStarted?: ModelSubscriptionBooleanInput | null;
  onboardingStep?: ModelSubscriptionIntInput | null;
  signUpStep?: ModelSubscriptionIntInput | null;
  isSignUpComplete?: ModelSubscriptionBooleanInput | null;
  dailyReflectionReminderType?: ModelSubscriptionStringInput | null;
  dailyReflectionReminderFrequency?: ModelSubscriptionStringInput | null;
  dailyReflectionNotificationTime?: ModelSubscriptionStringInput | null;
  isDailyReflectionNotificationEnabled?: ModelSubscriptionBooleanInput | null;
  timeOffset?: ModelSubscriptionStringInput | null;
  isNewConnectionsNotificationPushActive?: ModelSubscriptionBooleanInput | null;
  isNewConnectionsNotificationEmailActive?: ModelSubscriptionBooleanInput | null;
  newMessagesNotificationType?: ModelSubscriptionStringInput | null;
  isNewMessagesNotificationEnabled?: ModelSubscriptionBooleanInput | null;
  streamToken?: ModelSubscriptionStringInput | null;
  oneSignalUserId?: ModelSubscriptionStringInput | null;
  activeConnections?: ModelSubscriptionIntInput | null;
  userDailyConnections?: ModelSubscriptionStringInput | null;
  connectionsUpdatedOn?: ModelSubscriptionStringInput | null;
  reflectionCompletedOn?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  likerId?: ModelSubscriptionIDInput | null;
  likedId?: ModelSubscriptionIDInput | null;
  amILikedBack?: ModelSubscriptionBooleanInput | null;
  active?: ModelSubscriptionBooleanInput | null;
  channelId?: ModelSubscriptionStringInput | null;
  isUnmatched?: ModelSubscriptionBooleanInput | null;
  isReported?: ModelSubscriptionBooleanInput | null;
  reporterType?: ModelSubscriptionStringInput | null;
  unmatchReason?: ModelSubscriptionStringInput | null;
  reportReason?: ModelSubscriptionStringInput | null;
  details?: ModelSubscriptionStringInput | null;
  unmatchedUserId?: ModelSubscriptionStringInput | null;
  isUnmatchAcked?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLikeFilterInput | null> | null;
  or?: Array<ModelSubscriptionLikeFilterInput | null> | null;
};

export type ModelSubscriptionViewedConnectionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  connectionId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionViewedConnectionFilterInput | null> | null;
  or?: Array<ModelSubscriptionViewedConnectionFilterInput | null> | null;
};

export type ModelSubscriptionSleepingHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSleepingHabitFilterInput | null> | null;
  or?: Array<ModelSubscriptionSleepingHabitFilterInput | null> | null;
};

export type ModelSubscriptionExercisePreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionExercisePreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionExercisePreferenceFilterInput | null> | null;
};

export type ModelSubscriptionDrugPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDrugPreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionDrugPreferenceFilterInput | null> | null;
};

export type ModelSubscriptionTobaccoPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTobaccoPreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionTobaccoPreferenceFilterInput | null> | null;
};

export type ModelSubscriptionTherapyPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTherapyPreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionTherapyPreferenceFilterInput | null> | null;
};

export type ModelSubscriptionDrinkPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDrinkPreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionDrinkPreferenceFilterInput | null> | null;
};

export type ModelSubscriptionChildrenStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChildrenStatusFilterInput | null> | null;
  or?: Array<ModelSubscriptionChildrenStatusFilterInput | null> | null;
};

export type ModelSubscriptionWantChildrenStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWantChildrenStatusFilterInput | null> | null;
  or?: Array<ModelSubscriptionWantChildrenStatusFilterInput | null> | null;
};

export type ModelSubscriptionEducationLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEducationLevelFilterInput | null> | null;
  or?: Array<ModelSubscriptionEducationLevelFilterInput | null> | null;
};

export type ModelSubscriptionGenderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGenderFilterInput | null> | null;
  or?: Array<ModelSubscriptionGenderFilterInput | null> | null;
};

export type ModelSubscriptionEthnicityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEthnicityFilterInput | null> | null;
  or?: Array<ModelSubscriptionEthnicityFilterInput | null> | null;
};

export type ModelSubscriptionEthnicityUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  ethnicityID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEthnicityUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionEthnicityUserFilterInput | null> | null;
};

export type ModelSubscriptionReligionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionReligionFilterInput | null> | null;
  or?: Array<ModelSubscriptionReligionFilterInput | null> | null;
};

export type ModelSubscriptionPronounFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPronounFilterInput | null> | null;
  or?: Array<ModelSubscriptionPronounFilterInput | null> | null;
};

export type ModelSubscriptionSexualOrientationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSexualOrientationFilterInput | null> | null;
  or?: Array<ModelSubscriptionSexualOrientationFilterInput | null> | null;
};

export type ModelSubscriptionLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLanguageFilterInput | null> | null;
  or?: Array<ModelSubscriptionLanguageFilterInput | null> | null;
};

export type ModelSubscriptionLanguageUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  languageID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLanguageUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionLanguageUserFilterInput | null> | null;
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  isReported?: ModelSubscriptionBooleanInput | null;
  userID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMatchFilterInput | null> | null;
  or?: Array<ModelSubscriptionMatchFilterInput | null> | null;
};

export type ModelSubscriptionPhotoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPhotoFilterInput | null> | null;
  or?: Array<ModelSubscriptionPhotoFilterInput | null> | null;
};

export type ModelSubscriptionPhotoUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  photoID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPhotoUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionPhotoUserFilterInput | null> | null;
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionStoryFilterInput | null> | null;
};

export type ModelSubscriptionStoryUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  storyID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStoryUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionStoryUserFilterInput | null> | null;
};

export type ModelSubscriptionDayFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  day?: ModelSubscriptionIntInput | null;
  position?: ModelSubscriptionIntInput | null;
  question?: ModelSubscriptionStringInput | null;
  response?: ModelSubscriptionStringInput | null;
  questionCategory?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDayFilterInput | null> | null;
  or?: Array<ModelSubscriptionDayFilterInput | null> | null;
};

export type ModelSubscriptionMentalHealthUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  value?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMentalHealthUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionMentalHealthUserFilterInput | null> | null;
};

export type ModelSubscriptionEnergyUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  value?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEnergyUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionEnergyUserFilterInput | null> | null;
};

export type ModelSubscriptionCheckInQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  day?: ModelSubscriptionIntInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  title?: ModelSubscriptionStringInput | null;
  question?: ModelSubscriptionStringInput | null;
  quote?: ModelSubscriptionStringInput | null;
  checkInQuestionCategoryID?: ModelSubscriptionIDInput | null;
  checkInQuestionThemeID?: ModelSubscriptionIDInput | null;
  checkInQuestionContentCategoryId?: ModelSubscriptionStringInput | null;
  checkInQuestionContentCategoryName?: ModelSubscriptionStringInput | null;
  checkInQuestionTypeID?: ModelSubscriptionIDInput | null;
  responses?: ModelSubscriptionStringInput | null;
  author?: ModelSubscriptionStringInput | null;
  dayImage?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckInQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckInQuestionFilterInput | null> | null;
};

export type ModelSubscriptionCheckInQuestionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckInQuestionCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckInQuestionCategoryFilterInput | null> | null;
};

export type ModelSubscriptionCheckInQuestionThemeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckInQuestionThemeFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckInQuestionThemeFilterInput | null> | null;
};

export type ModelSubscriptionCheckInQuestionTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckInQuestionTypeFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckInQuestionTypeFilterInput | null> | null;
};

export type ModelSubscriptionCheckInQuestionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  checkInQuestionID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckInQuestionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckInQuestionUserFilterInput | null> | null;
};

export type ModelSubscriptionIceBreakerQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  question?: ModelSubscriptionStringInput | null;
  iceBreakerQuestionCategoryID?: ModelSubscriptionIDInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionIceBreakerQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionIceBreakerQuestionFilterInput | null> | null;
};

export type ModelSubscriptionIceBreakerQuestionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionIceBreakerQuestionCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionIceBreakerQuestionCategoryFilterInput | null> | null;
};

export type ModelSubscriptionEatingPreferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEatingPreferenceFilterInput | null> | null;
  or?: Array<ModelSubscriptionEatingPreferenceFilterInput | null> | null;
};

export type ModelSubscriptionQuoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  text?: ModelSubscriptionStringInput | null;
  author?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionQuoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuoteFilterInput | null> | null;
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAuthorFilterInput | null> | null;
  or?: Array<ModelSubscriptionAuthorFilterInput | null> | null;
};

export type ModelSubscriptionContentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  contentCategoryId?: ModelSubscriptionIDInput | null;
  contentTypeId?: ModelSubscriptionIDInput | null;
  authorId?: ModelSubscriptionIDInput | null;
  media?: ModelSubscriptionStringInput | null;
  mediaDuration?: ModelSubscriptionIntInput | null;
  animatedGif?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  subTitle?: ModelSubscriptionStringInput | null;
  text?: ModelSubscriptionStringInput | null;
  day?: ModelSubscriptionIntInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContentFilterInput | null> | null;
  or?: Array<ModelSubscriptionContentFilterInput | null> | null;
};

export type ModelSubscriptionContentCategoryDayImageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  contentCategoryId?: ModelSubscriptionIDInput | null;
  url?: ModelSubscriptionStringInput | null;
  day?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContentCategoryDayImageFilterInput | null> | null;
  or?: Array<ModelSubscriptionContentCategoryDayImageFilterInput | null> | null;
};

export type ModelSubscriptionContentCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  dashboardImage?: ModelSubscriptionStringInput | null;
  internalPageHeaderImage?: ModelSubscriptionStringInput | null;
  progressionCardDotImage?: ModelSubscriptionStringInput | null;
  reflectionQuestionBackgroundImage?: ModelSubscriptionStringInput | null;
  inDashboard?: ModelSubscriptionBooleanInput | null;
  reflectionQuestionsGradientValues?: ModelSubscriptionStringInput | null;
  contentPageGradientValues?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  sortOrder?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContentCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionContentCategoryFilterInput | null> | null;
};

export type ModelSubscriptionContentTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContentTypeFilterInput | null> | null;
  or?: Array<ModelSubscriptionContentTypeFilterInput | null> | null;
};

export type ModelSubscriptionPromptFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  prompt?: ModelSubscriptionStringInput | null;
  promptCategoryID?: ModelSubscriptionIDInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPromptFilterInput | null> | null;
  or?: Array<ModelSubscriptionPromptFilterInput | null> | null;
};

export type ModelSubscriptionPromptCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  promptCategoryId?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPromptCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionPromptCategoryFilterInput | null> | null;
};

export type ModelSubscriptionChatPromptFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  prompt?: ModelSubscriptionStringInput | null;
  promptCategoryID?: ModelSubscriptionIDInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChatPromptFilterInput | null> | null;
  or?: Array<ModelSubscriptionChatPromptFilterInput | null> | null;
};

export type ModelSubscriptionChatPromptCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  chatPromptCategoryId?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  isActive?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChatPromptCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionChatPromptCategoryFilterInput | null> | null;
};

export type ModelSubscriptionFeedbackUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  feedback?: ModelSubscriptionStringInput | null;
  screen?: ModelSubscriptionStringInput | null;
  imageName?: ModelSubscriptionStringInput | null;
  deviceInfo?: ModelSubscriptionStringInput | null;
  userName?: ModelSubscriptionStringInput | null;
  userEmail?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFeedbackUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionFeedbackUserFilterInput | null> | null;
};

export type ModelSubscriptionFeedbackTesterFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  feedback?: ModelSubscriptionStringInput | null;
  screen?: ModelSubscriptionStringInput | null;
  imageName?: ModelSubscriptionStringInput | null;
  deviceInfo?: ModelSubscriptionStringInput | null;
  userName?: ModelSubscriptionStringInput | null;
  userEmail?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFeedbackTesterFilterInput | null> | null;
  or?: Array<ModelSubscriptionFeedbackTesterFilterInput | null> | null;
};

export type ModelSubscriptionGeneralAppContentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  contentType?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  value?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGeneralAppContentFilterInput | null> | null;
  or?: Array<ModelSubscriptionGeneralAppContentFilterInput | null> | null;
};

export type ModelSubscriptionWaitlistUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  userCity?: ModelSubscriptionStringInput | null;
  userIP?: ModelSubscriptionStringInput | null;
  userCoordinates?: ModelSubscriptionStringInput | null;
  userInternetProvider?: ModelSubscriptionStringInput | null;
  userZipCode?: ModelSubscriptionStringInput | null;
  userState?: ModelSubscriptionStringInput | null;
  userTimeZone?: ModelSubscriptionStringInput | null;
  relationshipStatus?: ModelSubscriptionStringInput | null;
  isDistanceImportant?: ModelSubscriptionStringInput | null;
  deviceType?: ModelSubscriptionStringInput | null;
  additionalInfo?: ModelSubscriptionStringInput | null;
  cityState?: ModelSubscriptionStringInput | null;
  referralCode?: ModelSubscriptionStringInput | null;
  verificationLinkToken?: ModelSubscriptionStringInput | null;
  position?: ModelSubscriptionStringInput | null;
  ageRange?: ModelSubscriptionStringInput | null;
  gender?: ModelSubscriptionStringInput | null;
  genderPreference?: ModelSubscriptionStringInput | null;
  readyInterests?: ModelSubscriptionStringInput | null;
  howDidYouHearAboutUs?: ModelSubscriptionStringInput | null;
  helpReady?: ModelSubscriptionStringInput | null;
  features?: ModelSubscriptionStringInput | null;
  comments?: ModelSubscriptionStringInput | null;
  userDevice?: ModelSubscriptionStringInput | null;
  userPlatform?: ModelSubscriptionStringInput | null;
  userAppName?: ModelSubscriptionStringInput | null;
  userAppVersion?: ModelSubscriptionStringInput | null;
  userScreenSize?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWaitlistUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionWaitlistUserFilterInput | null> | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type CreateLikeMutation = {
  createLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type UpdateLikeMutation = {
  updateLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type DeleteLikeMutation = {
  deleteLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type CreateViewedConnectionMutationVariables = {
  input: CreateViewedConnectionInput;
  condition?: ModelViewedConnectionConditionInput | null;
};

export type CreateViewedConnectionMutation = {
  createViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type UpdateViewedConnectionMutationVariables = {
  input: UpdateViewedConnectionInput;
  condition?: ModelViewedConnectionConditionInput | null;
};

export type UpdateViewedConnectionMutation = {
  updateViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type DeleteViewedConnectionMutationVariables = {
  input: DeleteViewedConnectionInput;
  condition?: ModelViewedConnectionConditionInput | null;
};

export type DeleteViewedConnectionMutation = {
  deleteViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type CreateSleepingHabitMutationVariables = {
  input: CreateSleepingHabitInput;
  condition?: ModelSleepingHabitConditionInput | null;
};

export type CreateSleepingHabitMutation = {
  createSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSleepingHabitMutationVariables = {
  input: UpdateSleepingHabitInput;
  condition?: ModelSleepingHabitConditionInput | null;
};

export type UpdateSleepingHabitMutation = {
  updateSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSleepingHabitMutationVariables = {
  input: DeleteSleepingHabitInput;
  condition?: ModelSleepingHabitConditionInput | null;
};

export type DeleteSleepingHabitMutation = {
  deleteSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateExercisePreferenceMutationVariables = {
  input: CreateExercisePreferenceInput;
  condition?: ModelExercisePreferenceConditionInput | null;
};

export type CreateExercisePreferenceMutation = {
  createExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateExercisePreferenceMutationVariables = {
  input: UpdateExercisePreferenceInput;
  condition?: ModelExercisePreferenceConditionInput | null;
};

export type UpdateExercisePreferenceMutation = {
  updateExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteExercisePreferenceMutationVariables = {
  input: DeleteExercisePreferenceInput;
  condition?: ModelExercisePreferenceConditionInput | null;
};

export type DeleteExercisePreferenceMutation = {
  deleteExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateDrugPreferenceMutationVariables = {
  input: CreateDrugPreferenceInput;
  condition?: ModelDrugPreferenceConditionInput | null;
};

export type CreateDrugPreferenceMutation = {
  createDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDrugPreferenceMutationVariables = {
  input: UpdateDrugPreferenceInput;
  condition?: ModelDrugPreferenceConditionInput | null;
};

export type UpdateDrugPreferenceMutation = {
  updateDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDrugPreferenceMutationVariables = {
  input: DeleteDrugPreferenceInput;
  condition?: ModelDrugPreferenceConditionInput | null;
};

export type DeleteDrugPreferenceMutation = {
  deleteDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTobaccoPreferenceMutationVariables = {
  input: CreateTobaccoPreferenceInput;
  condition?: ModelTobaccoPreferenceConditionInput | null;
};

export type CreateTobaccoPreferenceMutation = {
  createTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTobaccoPreferenceMutationVariables = {
  input: UpdateTobaccoPreferenceInput;
  condition?: ModelTobaccoPreferenceConditionInput | null;
};

export type UpdateTobaccoPreferenceMutation = {
  updateTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTobaccoPreferenceMutationVariables = {
  input: DeleteTobaccoPreferenceInput;
  condition?: ModelTobaccoPreferenceConditionInput | null;
};

export type DeleteTobaccoPreferenceMutation = {
  deleteTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTherapyPreferenceMutationVariables = {
  input: CreateTherapyPreferenceInput;
  condition?: ModelTherapyPreferenceConditionInput | null;
};

export type CreateTherapyPreferenceMutation = {
  createTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTherapyPreferenceMutationVariables = {
  input: UpdateTherapyPreferenceInput;
  condition?: ModelTherapyPreferenceConditionInput | null;
};

export type UpdateTherapyPreferenceMutation = {
  updateTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTherapyPreferenceMutationVariables = {
  input: DeleteTherapyPreferenceInput;
  condition?: ModelTherapyPreferenceConditionInput | null;
};

export type DeleteTherapyPreferenceMutation = {
  deleteTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateDrinkPreferenceMutationVariables = {
  input: CreateDrinkPreferenceInput;
  condition?: ModelDrinkPreferenceConditionInput | null;
};

export type CreateDrinkPreferenceMutation = {
  createDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDrinkPreferenceMutationVariables = {
  input: UpdateDrinkPreferenceInput;
  condition?: ModelDrinkPreferenceConditionInput | null;
};

export type UpdateDrinkPreferenceMutation = {
  updateDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDrinkPreferenceMutationVariables = {
  input: DeleteDrinkPreferenceInput;
  condition?: ModelDrinkPreferenceConditionInput | null;
};

export type DeleteDrinkPreferenceMutation = {
  deleteDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateChildrenStatusMutationVariables = {
  input: CreateChildrenStatusInput;
  condition?: ModelChildrenStatusConditionInput | null;
};

export type CreateChildrenStatusMutation = {
  createChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateChildrenStatusMutationVariables = {
  input: UpdateChildrenStatusInput;
  condition?: ModelChildrenStatusConditionInput | null;
};

export type UpdateChildrenStatusMutation = {
  updateChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteChildrenStatusMutationVariables = {
  input: DeleteChildrenStatusInput;
  condition?: ModelChildrenStatusConditionInput | null;
};

export type DeleteChildrenStatusMutation = {
  deleteChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateWantChildrenStatusMutationVariables = {
  input: CreateWantChildrenStatusInput;
  condition?: ModelWantChildrenStatusConditionInput | null;
};

export type CreateWantChildrenStatusMutation = {
  createWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateWantChildrenStatusMutationVariables = {
  input: UpdateWantChildrenStatusInput;
  condition?: ModelWantChildrenStatusConditionInput | null;
};

export type UpdateWantChildrenStatusMutation = {
  updateWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteWantChildrenStatusMutationVariables = {
  input: DeleteWantChildrenStatusInput;
  condition?: ModelWantChildrenStatusConditionInput | null;
};

export type DeleteWantChildrenStatusMutation = {
  deleteWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEducationLevelMutationVariables = {
  input: CreateEducationLevelInput;
  condition?: ModelEducationLevelConditionInput | null;
};

export type CreateEducationLevelMutation = {
  createEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEducationLevelMutationVariables = {
  input: UpdateEducationLevelInput;
  condition?: ModelEducationLevelConditionInput | null;
};

export type UpdateEducationLevelMutation = {
  updateEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEducationLevelMutationVariables = {
  input: DeleteEducationLevelInput;
  condition?: ModelEducationLevelConditionInput | null;
};

export type DeleteEducationLevelMutation = {
  deleteEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateGenderMutationVariables = {
  input: CreateGenderInput;
  condition?: ModelGenderConditionInput | null;
};

export type CreateGenderMutation = {
  createGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateGenderMutationVariables = {
  input: UpdateGenderInput;
  condition?: ModelGenderConditionInput | null;
};

export type UpdateGenderMutation = {
  updateGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteGenderMutationVariables = {
  input: DeleteGenderInput;
  condition?: ModelGenderConditionInput | null;
};

export type DeleteGenderMutation = {
  deleteGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEthnicityMutationVariables = {
  input: CreateEthnicityInput;
  condition?: ModelEthnicityConditionInput | null;
};

export type CreateEthnicityMutation = {
  createEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEthnicityMutationVariables = {
  input: UpdateEthnicityInput;
  condition?: ModelEthnicityConditionInput | null;
};

export type UpdateEthnicityMutation = {
  updateEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEthnicityMutationVariables = {
  input: DeleteEthnicityInput;
  condition?: ModelEthnicityConditionInput | null;
};

export type DeleteEthnicityMutation = {
  deleteEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEthnicityUserMutationVariables = {
  input: CreateEthnicityUserInput;
  condition?: ModelEthnicityUserConditionInput | null;
};

export type CreateEthnicityUserMutation = {
  createEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEthnicityUserMutationVariables = {
  input: UpdateEthnicityUserInput;
  condition?: ModelEthnicityUserConditionInput | null;
};

export type UpdateEthnicityUserMutation = {
  updateEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEthnicityUserMutationVariables = {
  input: DeleteEthnicityUserInput;
  condition?: ModelEthnicityUserConditionInput | null;
};

export type DeleteEthnicityUserMutation = {
  deleteEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateReligionMutationVariables = {
  input: CreateReligionInput;
  condition?: ModelReligionConditionInput | null;
};

export type CreateReligionMutation = {
  createReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateReligionMutationVariables = {
  input: UpdateReligionInput;
  condition?: ModelReligionConditionInput | null;
};

export type UpdateReligionMutation = {
  updateReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteReligionMutationVariables = {
  input: DeleteReligionInput;
  condition?: ModelReligionConditionInput | null;
};

export type DeleteReligionMutation = {
  deleteReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePronounMutationVariables = {
  input: CreatePronounInput;
  condition?: ModelPronounConditionInput | null;
};

export type CreatePronounMutation = {
  createPronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePronounMutationVariables = {
  input: UpdatePronounInput;
  condition?: ModelPronounConditionInput | null;
};

export type UpdatePronounMutation = {
  updatePronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePronounMutationVariables = {
  input: DeletePronounInput;
  condition?: ModelPronounConditionInput | null;
};

export type DeletePronounMutation = {
  deletePronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateSexualOrientationMutationVariables = {
  input: CreateSexualOrientationInput;
  condition?: ModelSexualOrientationConditionInput | null;
};

export type CreateSexualOrientationMutation = {
  createSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateSexualOrientationMutationVariables = {
  input: UpdateSexualOrientationInput;
  condition?: ModelSexualOrientationConditionInput | null;
};

export type UpdateSexualOrientationMutation = {
  updateSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteSexualOrientationMutationVariables = {
  input: DeleteSexualOrientationInput;
  condition?: ModelSexualOrientationConditionInput | null;
};

export type DeleteSexualOrientationMutation = {
  deleteSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type CreateLanguageMutation = {
  createLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type UpdateLanguageMutation = {
  updateLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type DeleteLanguageMutation = {
  deleteLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLanguageUserMutationVariables = {
  input: CreateLanguageUserInput;
  condition?: ModelLanguageUserConditionInput | null;
};

export type CreateLanguageUserMutation = {
  createLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLanguageUserMutationVariables = {
  input: UpdateLanguageUserInput;
  condition?: ModelLanguageUserConditionInput | null;
};

export type UpdateLanguageUserMutation = {
  updateLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLanguageUserMutationVariables = {
  input: DeleteLanguageUserInput;
  condition?: ModelLanguageUserConditionInput | null;
};

export type DeleteLanguageUserMutation = {
  deleteLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput;
  condition?: ModelMatchConditionInput | null;
};

export type CreateMatchMutation = {
  createMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput;
  condition?: ModelMatchConditionInput | null;
};

export type UpdateMatchMutation = {
  updateMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput;
  condition?: ModelMatchConditionInput | null;
};

export type DeleteMatchMutation = {
  deleteMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePhotoMutationVariables = {
  input: CreatePhotoInput;
  condition?: ModelPhotoConditionInput | null;
};

export type CreatePhotoMutation = {
  createPhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePhotoMutationVariables = {
  input: UpdatePhotoInput;
  condition?: ModelPhotoConditionInput | null;
};

export type UpdatePhotoMutation = {
  updatePhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePhotoMutationVariables = {
  input: DeletePhotoInput;
  condition?: ModelPhotoConditionInput | null;
};

export type DeletePhotoMutation = {
  deletePhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePhotoUserMutationVariables = {
  input: CreatePhotoUserInput;
  condition?: ModelPhotoUserConditionInput | null;
};

export type CreatePhotoUserMutation = {
  createPhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePhotoUserMutationVariables = {
  input: UpdatePhotoUserInput;
  condition?: ModelPhotoUserConditionInput | null;
};

export type UpdatePhotoUserMutation = {
  updatePhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePhotoUserMutationVariables = {
  input: DeletePhotoUserInput;
  condition?: ModelPhotoUserConditionInput | null;
};

export type DeletePhotoUserMutation = {
  deletePhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput;
  condition?: ModelStoryConditionInput | null;
};

export type CreateStoryMutation = {
  createStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput;
  condition?: ModelStoryConditionInput | null;
};

export type UpdateStoryMutation = {
  updateStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput;
  condition?: ModelStoryConditionInput | null;
};

export type DeleteStoryMutation = {
  deleteStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateStoryUserMutationVariables = {
  input: CreateStoryUserInput;
  condition?: ModelStoryUserConditionInput | null;
};

export type CreateStoryUserMutation = {
  createStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateStoryUserMutationVariables = {
  input: UpdateStoryUserInput;
  condition?: ModelStoryUserConditionInput | null;
};

export type UpdateStoryUserMutation = {
  updateStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteStoryUserMutationVariables = {
  input: DeleteStoryUserInput;
  condition?: ModelStoryUserConditionInput | null;
};

export type DeleteStoryUserMutation = {
  deleteStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateDayMutationVariables = {
  input: CreateDayInput;
  condition?: ModelDayConditionInput | null;
};

export type CreateDayMutation = {
  createDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDayMutationVariables = {
  input: UpdateDayInput;
  condition?: ModelDayConditionInput | null;
};

export type UpdateDayMutation = {
  updateDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDayMutationVariables = {
  input: DeleteDayInput;
  condition?: ModelDayConditionInput | null;
};

export type DeleteDayMutation = {
  deleteDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMentalHealthUserMutationVariables = {
  input: CreateMentalHealthUserInput;
  condition?: ModelMentalHealthUserConditionInput | null;
};

export type CreateMentalHealthUserMutation = {
  createMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMentalHealthUserMutationVariables = {
  input: UpdateMentalHealthUserInput;
  condition?: ModelMentalHealthUserConditionInput | null;
};

export type UpdateMentalHealthUserMutation = {
  updateMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMentalHealthUserMutationVariables = {
  input: DeleteMentalHealthUserInput;
  condition?: ModelMentalHealthUserConditionInput | null;
};

export type DeleteMentalHealthUserMutation = {
  deleteMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEnergyUserMutationVariables = {
  input: CreateEnergyUserInput;
  condition?: ModelEnergyUserConditionInput | null;
};

export type CreateEnergyUserMutation = {
  createEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEnergyUserMutationVariables = {
  input: UpdateEnergyUserInput;
  condition?: ModelEnergyUserConditionInput | null;
};

export type UpdateEnergyUserMutation = {
  updateEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEnergyUserMutationVariables = {
  input: DeleteEnergyUserInput;
  condition?: ModelEnergyUserConditionInput | null;
};

export type DeleteEnergyUserMutation = {
  deleteEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCheckInQuestionMutationVariables = {
  input: CreateCheckInQuestionInput;
  condition?: ModelCheckInQuestionConditionInput | null;
};

export type CreateCheckInQuestionMutation = {
  createCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCheckInQuestionMutationVariables = {
  input: UpdateCheckInQuestionInput;
  condition?: ModelCheckInQuestionConditionInput | null;
};

export type UpdateCheckInQuestionMutation = {
  updateCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCheckInQuestionMutationVariables = {
  input: DeleteCheckInQuestionInput;
  condition?: ModelCheckInQuestionConditionInput | null;
};

export type DeleteCheckInQuestionMutation = {
  deleteCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCheckInQuestionCategoryMutationVariables = {
  input: CreateCheckInQuestionCategoryInput;
  condition?: ModelCheckInQuestionCategoryConditionInput | null;
};

export type CreateCheckInQuestionCategoryMutation = {
  createCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCheckInQuestionCategoryMutationVariables = {
  input: UpdateCheckInQuestionCategoryInput;
  condition?: ModelCheckInQuestionCategoryConditionInput | null;
};

export type UpdateCheckInQuestionCategoryMutation = {
  updateCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCheckInQuestionCategoryMutationVariables = {
  input: DeleteCheckInQuestionCategoryInput;
  condition?: ModelCheckInQuestionCategoryConditionInput | null;
};

export type DeleteCheckInQuestionCategoryMutation = {
  deleteCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCheckInQuestionThemeMutationVariables = {
  input: CreateCheckInQuestionThemeInput;
  condition?: ModelCheckInQuestionThemeConditionInput | null;
};

export type CreateCheckInQuestionThemeMutation = {
  createCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCheckInQuestionThemeMutationVariables = {
  input: UpdateCheckInQuestionThemeInput;
  condition?: ModelCheckInQuestionThemeConditionInput | null;
};

export type UpdateCheckInQuestionThemeMutation = {
  updateCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCheckInQuestionThemeMutationVariables = {
  input: DeleteCheckInQuestionThemeInput;
  condition?: ModelCheckInQuestionThemeConditionInput | null;
};

export type DeleteCheckInQuestionThemeMutation = {
  deleteCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCheckInQuestionTypeMutationVariables = {
  input: CreateCheckInQuestionTypeInput;
  condition?: ModelCheckInQuestionTypeConditionInput | null;
};

export type CreateCheckInQuestionTypeMutation = {
  createCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCheckInQuestionTypeMutationVariables = {
  input: UpdateCheckInQuestionTypeInput;
  condition?: ModelCheckInQuestionTypeConditionInput | null;
};

export type UpdateCheckInQuestionTypeMutation = {
  updateCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCheckInQuestionTypeMutationVariables = {
  input: DeleteCheckInQuestionTypeInput;
  condition?: ModelCheckInQuestionTypeConditionInput | null;
};

export type DeleteCheckInQuestionTypeMutation = {
  deleteCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCheckInQuestionUserMutationVariables = {
  input: CreateCheckInQuestionUserInput;
  condition?: ModelCheckInQuestionUserConditionInput | null;
};

export type CreateCheckInQuestionUserMutation = {
  createCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCheckInQuestionUserMutationVariables = {
  input: UpdateCheckInQuestionUserInput;
  condition?: ModelCheckInQuestionUserConditionInput | null;
};

export type UpdateCheckInQuestionUserMutation = {
  updateCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCheckInQuestionUserMutationVariables = {
  input: DeleteCheckInQuestionUserInput;
  condition?: ModelCheckInQuestionUserConditionInput | null;
};

export type DeleteCheckInQuestionUserMutation = {
  deleteCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateIceBreakerQuestionMutationVariables = {
  input: CreateIceBreakerQuestionInput;
  condition?: ModelIceBreakerQuestionConditionInput | null;
};

export type CreateIceBreakerQuestionMutation = {
  createIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIceBreakerQuestionMutationVariables = {
  input: UpdateIceBreakerQuestionInput;
  condition?: ModelIceBreakerQuestionConditionInput | null;
};

export type UpdateIceBreakerQuestionMutation = {
  updateIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIceBreakerQuestionMutationVariables = {
  input: DeleteIceBreakerQuestionInput;
  condition?: ModelIceBreakerQuestionConditionInput | null;
};

export type DeleteIceBreakerQuestionMutation = {
  deleteIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateIceBreakerQuestionCategoryMutationVariables = {
  input: CreateIceBreakerQuestionCategoryInput;
  condition?: ModelIceBreakerQuestionCategoryConditionInput | null;
};

export type CreateIceBreakerQuestionCategoryMutation = {
  createIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateIceBreakerQuestionCategoryMutationVariables = {
  input: UpdateIceBreakerQuestionCategoryInput;
  condition?: ModelIceBreakerQuestionCategoryConditionInput | null;
};

export type UpdateIceBreakerQuestionCategoryMutation = {
  updateIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteIceBreakerQuestionCategoryMutationVariables = {
  input: DeleteIceBreakerQuestionCategoryInput;
  condition?: ModelIceBreakerQuestionCategoryConditionInput | null;
};

export type DeleteIceBreakerQuestionCategoryMutation = {
  deleteIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateEatingPreferenceMutationVariables = {
  input: CreateEatingPreferenceInput;
  condition?: ModelEatingPreferenceConditionInput | null;
};

export type CreateEatingPreferenceMutation = {
  createEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateEatingPreferenceMutationVariables = {
  input: UpdateEatingPreferenceInput;
  condition?: ModelEatingPreferenceConditionInput | null;
};

export type UpdateEatingPreferenceMutation = {
  updateEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteEatingPreferenceMutationVariables = {
  input: DeleteEatingPreferenceInput;
  condition?: ModelEatingPreferenceConditionInput | null;
};

export type DeleteEatingPreferenceMutation = {
  deleteEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateQuoteMutationVariables = {
  input: CreateQuoteInput;
  condition?: ModelQuoteConditionInput | null;
};

export type CreateQuoteMutation = {
  createQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateQuoteMutationVariables = {
  input: UpdateQuoteInput;
  condition?: ModelQuoteConditionInput | null;
};

export type UpdateQuoteMutation = {
  updateQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteQuoteMutationVariables = {
  input: DeleteQuoteInput;
  condition?: ModelQuoteConditionInput | null;
};

export type DeleteQuoteMutation = {
  deleteQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput;
  condition?: ModelAuthorConditionInput | null;
};

export type CreateAuthorMutation = {
  createAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput;
  condition?: ModelAuthorConditionInput | null;
};

export type UpdateAuthorMutation = {
  updateAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput;
  condition?: ModelAuthorConditionInput | null;
};

export type DeleteAuthorMutation = {
  deleteAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateContentMutationVariables = {
  input: CreateContentInput;
  condition?: ModelContentConditionInput | null;
};

export type CreateContentMutation = {
  createContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput;
  condition?: ModelContentConditionInput | null;
};

export type UpdateContentMutation = {
  updateContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput;
  condition?: ModelContentConditionInput | null;
};

export type DeleteContentMutation = {
  deleteContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateContentCategoryDayImageMutationVariables = {
  input: CreateContentCategoryDayImageInput;
  condition?: ModelContentCategoryDayImageConditionInput | null;
};

export type CreateContentCategoryDayImageMutation = {
  createContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateContentCategoryDayImageMutationVariables = {
  input: UpdateContentCategoryDayImageInput;
  condition?: ModelContentCategoryDayImageConditionInput | null;
};

export type UpdateContentCategoryDayImageMutation = {
  updateContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteContentCategoryDayImageMutationVariables = {
  input: DeleteContentCategoryDayImageInput;
  condition?: ModelContentCategoryDayImageConditionInput | null;
};

export type DeleteContentCategoryDayImageMutation = {
  deleteContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateContentCategoryMutationVariables = {
  input: CreateContentCategoryInput;
  condition?: ModelContentCategoryConditionInput | null;
};

export type CreateContentCategoryMutation = {
  createContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateContentCategoryMutationVariables = {
  input: UpdateContentCategoryInput;
  condition?: ModelContentCategoryConditionInput | null;
};

export type UpdateContentCategoryMutation = {
  updateContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteContentCategoryMutationVariables = {
  input: DeleteContentCategoryInput;
  condition?: ModelContentCategoryConditionInput | null;
};

export type DeleteContentCategoryMutation = {
  deleteContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateContentTypeMutationVariables = {
  input: CreateContentTypeInput;
  condition?: ModelContentTypeConditionInput | null;
};

export type CreateContentTypeMutation = {
  createContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateContentTypeMutationVariables = {
  input: UpdateContentTypeInput;
  condition?: ModelContentTypeConditionInput | null;
};

export type UpdateContentTypeMutation = {
  updateContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteContentTypeMutationVariables = {
  input: DeleteContentTypeInput;
  condition?: ModelContentTypeConditionInput | null;
};

export type DeleteContentTypeMutation = {
  deleteContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePromptMutationVariables = {
  input: CreatePromptInput;
  condition?: ModelPromptConditionInput | null;
};

export type CreatePromptMutation = {
  createPrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePromptMutationVariables = {
  input: UpdatePromptInput;
  condition?: ModelPromptConditionInput | null;
};

export type UpdatePromptMutation = {
  updatePrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePromptMutationVariables = {
  input: DeletePromptInput;
  condition?: ModelPromptConditionInput | null;
};

export type DeletePromptMutation = {
  deletePrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePromptCategoryMutationVariables = {
  input: CreatePromptCategoryInput;
  condition?: ModelPromptCategoryConditionInput | null;
};

export type CreatePromptCategoryMutation = {
  createPromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePromptCategoryMutationVariables = {
  input: UpdatePromptCategoryInput;
  condition?: ModelPromptCategoryConditionInput | null;
};

export type UpdatePromptCategoryMutation = {
  updatePromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePromptCategoryMutationVariables = {
  input: DeletePromptCategoryInput;
  condition?: ModelPromptCategoryConditionInput | null;
};

export type DeletePromptCategoryMutation = {
  deletePromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateChatPromptMutationVariables = {
  input: CreateChatPromptInput;
  condition?: ModelChatPromptConditionInput | null;
};

export type CreateChatPromptMutation = {
  createChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateChatPromptMutationVariables = {
  input: UpdateChatPromptInput;
  condition?: ModelChatPromptConditionInput | null;
};

export type UpdateChatPromptMutation = {
  updateChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteChatPromptMutationVariables = {
  input: DeleteChatPromptInput;
  condition?: ModelChatPromptConditionInput | null;
};

export type DeleteChatPromptMutation = {
  deleteChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateChatPromptCategoryMutationVariables = {
  input: CreateChatPromptCategoryInput;
  condition?: ModelChatPromptCategoryConditionInput | null;
};

export type CreateChatPromptCategoryMutation = {
  createChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateChatPromptCategoryMutationVariables = {
  input: UpdateChatPromptCategoryInput;
  condition?: ModelChatPromptCategoryConditionInput | null;
};

export type UpdateChatPromptCategoryMutation = {
  updateChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteChatPromptCategoryMutationVariables = {
  input: DeleteChatPromptCategoryInput;
  condition?: ModelChatPromptCategoryConditionInput | null;
};

export type DeleteChatPromptCategoryMutation = {
  deleteChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateFeedbackUserMutationVariables = {
  input: CreateFeedbackUserInput;
  condition?: ModelFeedbackUserConditionInput | null;
};

export type CreateFeedbackUserMutation = {
  createFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateFeedbackUserMutationVariables = {
  input: UpdateFeedbackUserInput;
  condition?: ModelFeedbackUserConditionInput | null;
};

export type UpdateFeedbackUserMutation = {
  updateFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteFeedbackUserMutationVariables = {
  input: DeleteFeedbackUserInput;
  condition?: ModelFeedbackUserConditionInput | null;
};

export type DeleteFeedbackUserMutation = {
  deleteFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateFeedbackTesterMutationVariables = {
  input: CreateFeedbackTesterInput;
  condition?: ModelFeedbackTesterConditionInput | null;
};

export type CreateFeedbackTesterMutation = {
  createFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateFeedbackTesterMutationVariables = {
  input: UpdateFeedbackTesterInput;
  condition?: ModelFeedbackTesterConditionInput | null;
};

export type UpdateFeedbackTesterMutation = {
  updateFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteFeedbackTesterMutationVariables = {
  input: DeleteFeedbackTesterInput;
  condition?: ModelFeedbackTesterConditionInput | null;
};

export type DeleteFeedbackTesterMutation = {
  deleteFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateGeneralAppContentMutationVariables = {
  input: CreateGeneralAppContentInput;
  condition?: ModelGeneralAppContentConditionInput | null;
};

export type CreateGeneralAppContentMutation = {
  createGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateGeneralAppContentMutationVariables = {
  input: UpdateGeneralAppContentInput;
  condition?: ModelGeneralAppContentConditionInput | null;
};

export type UpdateGeneralAppContentMutation = {
  updateGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteGeneralAppContentMutationVariables = {
  input: DeleteGeneralAppContentInput;
  condition?: ModelGeneralAppContentConditionInput | null;
};

export type DeleteGeneralAppContentMutation = {
  deleteGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateWaitlistUserMutationVariables = {
  input: CreateWaitlistUserInput;
  condition?: ModelWaitlistUserConditionInput | null;
};

export type CreateWaitlistUserMutation = {
  createWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateWaitlistUserMutationVariables = {
  input: UpdateWaitlistUserInput;
  condition?: ModelWaitlistUserConditionInput | null;
};

export type UpdateWaitlistUserMutation = {
  updateWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteWaitlistUserMutationVariables = {
  input: DeleteWaitlistUserInput;
  condition?: ModelWaitlistUserConditionInput | null;
};

export type DeleteWaitlistUserMutation = {
  deleteWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  id?: string | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type UsersByActiveConnectionsQueryVariables = {
  activeConnections: number;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UsersByActiveConnectionsQuery = {
  usersByActiveConnections?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null;
  sort?: Array<SearchableUserSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableUserAggregationInput | null> | null;
};

export type SearchUsersQuery = {
  searchUsers?: {
    __typename: "SearchableUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
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

export type GetLikeQueryVariables = {
  id: string;
};

export type GetLikeQuery = {
  getLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLikesQuery = {
  listLikes?: {
    __typename: "ModelLikeConnection";
    items: Array<{
      __typename: "Like";
      id: string;
      likerId: string;
      likedId: string;
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
  } | null;
};

export type LikesByLikerIdQueryVariables = {
  likerId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type LikesByLikerIdQuery = {
  likesByLikerId?: {
    __typename: "ModelLikeConnection";
    items: Array<{
      __typename: "Like";
      id: string;
      likerId: string;
      likedId: string;
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
  } | null;
};

export type LikesByLikedIdQueryVariables = {
  likedId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type LikesByLikedIdQuery = {
  likesByLikedId?: {
    __typename: "ModelLikeConnection";
    items: Array<{
      __typename: "Like";
      id: string;
      likerId: string;
      likedId: string;
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
  } | null;
};

export type SearchLikesQueryVariables = {
  filter?: SearchableLikeFilterInput | null;
  sort?: Array<SearchableLikeSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableLikeAggregationInput | null> | null;
};

export type SearchLikesQuery = {
  searchLikes?: {
    __typename: "SearchableLikeConnection";
    items: Array<{
      __typename: "Like";
      id: string;
      likerId: string;
      likedId: string;
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

export type GetViewedConnectionQueryVariables = {
  id: string;
};

export type GetViewedConnectionQuery = {
  getViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ListViewedConnectionsQueryVariables = {
  filter?: ModelViewedConnectionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListViewedConnectionsQuery = {
  listViewedConnections?: {
    __typename: "ModelViewedConnectionConnection";
    items: Array<{
      __typename: "ViewedConnection";
      id: string;
      userId: string;
      connectionId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchViewedConnectionsQueryVariables = {
  filter?: SearchableViewedConnectionFilterInput | null;
  sort?: Array<SearchableViewedConnectionSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableViewedConnectionAggregationInput | null> | null;
};

export type SearchViewedConnectionsQuery = {
  searchViewedConnections?: {
    __typename: "SearchableViewedConnectionConnection";
    items: Array<{
      __typename: "ViewedConnection";
      id: string;
      userId: string;
      connectionId: string;
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

export type GetSleepingHabitQueryVariables = {
  id: string;
};

export type GetSleepingHabitQuery = {
  getSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSleepingHabitsQueryVariables = {
  filter?: ModelSleepingHabitFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSleepingHabitsQuery = {
  listSleepingHabits?: {
    __typename: "ModelSleepingHabitConnection";
    items: Array<{
      __typename: "SleepingHabit";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetExercisePreferenceQueryVariables = {
  id: string;
};

export type GetExercisePreferenceQuery = {
  getExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListExercisePreferencesQueryVariables = {
  filter?: ModelExercisePreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListExercisePreferencesQuery = {
  listExercisePreferences?: {
    __typename: "ModelExercisePreferenceConnection";
    items: Array<{
      __typename: "ExercisePreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDrugPreferenceQueryVariables = {
  id: string;
};

export type GetDrugPreferenceQuery = {
  getDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDrugPreferencesQueryVariables = {
  filter?: ModelDrugPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDrugPreferencesQuery = {
  listDrugPreferences?: {
    __typename: "ModelDrugPreferenceConnection";
    items: Array<{
      __typename: "DrugPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetTobaccoPreferenceQueryVariables = {
  id: string;
};

export type GetTobaccoPreferenceQuery = {
  getTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTobaccoPreferencesQueryVariables = {
  filter?: ModelTobaccoPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTobaccoPreferencesQuery = {
  listTobaccoPreferences?: {
    __typename: "ModelTobaccoPreferenceConnection";
    items: Array<{
      __typename: "TobaccoPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetTherapyPreferenceQueryVariables = {
  id: string;
};

export type GetTherapyPreferenceQuery = {
  getTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTherapyPreferencesQueryVariables = {
  filter?: ModelTherapyPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTherapyPreferencesQuery = {
  listTherapyPreferences?: {
    __typename: "ModelTherapyPreferenceConnection";
    items: Array<{
      __typename: "TherapyPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDrinkPreferenceQueryVariables = {
  id: string;
};

export type GetDrinkPreferenceQuery = {
  getDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDrinkPreferencesQueryVariables = {
  filter?: ModelDrinkPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDrinkPreferencesQuery = {
  listDrinkPreferences?: {
    __typename: "ModelDrinkPreferenceConnection";
    items: Array<{
      __typename: "DrinkPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchDrinkPreferencesQueryVariables = {
  filter?: SearchableDrinkPreferenceFilterInput | null;
  sort?: Array<SearchableDrinkPreferenceSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableDrinkPreferenceAggregationInput | null> | null;
};

export type SearchDrinkPreferencesQuery = {
  searchDrinkPreferences?: {
    __typename: "SearchableDrinkPreferenceConnection";
    items: Array<{
      __typename: "DrinkPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetChildrenStatusQueryVariables = {
  id: string;
};

export type GetChildrenStatusQuery = {
  getChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListChildrenStatusesQueryVariables = {
  filter?: ModelChildrenStatusFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChildrenStatusesQuery = {
  listChildrenStatuses?: {
    __typename: "ModelChildrenStatusConnection";
    items: Array<{
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchChildrenStatusesQueryVariables = {
  filter?: SearchableChildrenStatusFilterInput | null;
  sort?: Array<SearchableChildrenStatusSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableChildrenStatusAggregationInput | null> | null;
};

export type SearchChildrenStatusesQuery = {
  searchChildrenStatuses?: {
    __typename: "SearchableChildrenStatusConnection";
    items: Array<{
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetWantChildrenStatusQueryVariables = {
  id: string;
};

export type GetWantChildrenStatusQuery = {
  getWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListWantChildrenStatusesQueryVariables = {
  filter?: ModelWantChildrenStatusFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListWantChildrenStatusesQuery = {
  listWantChildrenStatuses?: {
    __typename: "ModelWantChildrenStatusConnection";
    items: Array<{
      __typename: "WantChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetEducationLevelQueryVariables = {
  id: string;
};

export type GetEducationLevelQuery = {
  getEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListEducationLevelsQueryVariables = {
  filter?: ModelEducationLevelFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEducationLevelsQuery = {
  listEducationLevels?: {
    __typename: "ModelEducationLevelConnection";
    items: Array<{
      __typename: "EducationLevel";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetGenderQueryVariables = {
  id: string;
};

export type GetGenderQuery = {
  getGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListGendersQueryVariables = {
  filter?: ModelGenderFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListGendersQuery = {
  listGenders?: {
    __typename: "ModelGenderConnection";
    items: Array<{
      __typename: "Gender";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchGendersQueryVariables = {
  filter?: SearchableGenderFilterInput | null;
  sort?: Array<SearchableGenderSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableGenderAggregationInput | null> | null;
};

export type SearchGendersQuery = {
  searchGenders?: {
    __typename: "SearchableGenderConnection";
    items: Array<{
      __typename: "Gender";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetEthnicityQueryVariables = {
  id: string;
};

export type GetEthnicityQuery = {
  getEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListEthnicitiesQueryVariables = {
  filter?: ModelEthnicityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEthnicitiesQuery = {
  listEthnicities?: {
    __typename: "ModelEthnicityConnection";
    items: Array<{
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchEthnicitiesQueryVariables = {
  filter?: SearchableEthnicityFilterInput | null;
  sort?: Array<SearchableEthnicitySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableEthnicityAggregationInput | null> | null;
};

export type SearchEthnicitiesQuery = {
  searchEthnicities?: {
    __typename: "SearchableEthnicityConnection";
    items: Array<{
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type EthnicityUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelEthnicityUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type EthnicityUsersByUserIDQuery = {
  ethnicityUsersByUserID?: {
    __typename: "ModelEthnicityUserConnection";
    items: Array<{
      __typename: "EthnicityUser";
      id: string;
      userID: string;
      ethnicityID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type EthnicityUsersByEthnicityIDQueryVariables = {
  ethnicityID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelEthnicityUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type EthnicityUsersByEthnicityIDQuery = {
  ethnicityUsersByEthnicityID?: {
    __typename: "ModelEthnicityUserConnection";
    items: Array<{
      __typename: "EthnicityUser";
      id: string;
      userID: string;
      ethnicityID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetReligionQueryVariables = {
  id: string;
};

export type GetReligionQuery = {
  getReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListReligionsQueryVariables = {
  filter?: ModelReligionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReligionsQuery = {
  listReligions?: {
    __typename: "ModelReligionConnection";
    items: Array<{
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchReligionsQueryVariables = {
  filter?: SearchableReligionFilterInput | null;
  sort?: Array<SearchableReligionSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableReligionAggregationInput | null> | null;
};

export type SearchReligionsQuery = {
  searchReligions?: {
    __typename: "SearchableReligionConnection";
    items: Array<{
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetPronounQueryVariables = {
  id: string;
};

export type GetPronounQuery = {
  getPronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPronounsQueryVariables = {
  filter?: ModelPronounFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPronounsQuery = {
  listPronouns?: {
    __typename: "ModelPronounConnection";
    items: Array<{
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchPronounsQueryVariables = {
  filter?: SearchablePronounFilterInput | null;
  sort?: Array<SearchablePronounSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchablePronounAggregationInput | null> | null;
};

export type SearchPronounsQuery = {
  searchPronouns?: {
    __typename: "SearchablePronounConnection";
    items: Array<{
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetSexualOrientationQueryVariables = {
  id: string;
};

export type GetSexualOrientationQuery = {
  getSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListSexualOrientationsQueryVariables = {
  filter?: ModelSexualOrientationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSexualOrientationsQuery = {
  listSexualOrientations?: {
    __typename: "ModelSexualOrientationConnection";
    items: Array<{
      __typename: "SexualOrientation";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLanguageQueryVariables = {
  id: string;
};

export type GetLanguageQuery = {
  getLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLanguagesQuery = {
  listLanguages?: {
    __typename: "ModelLanguageConnection";
    items: Array<{
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchLanguagesQueryVariables = {
  filter?: SearchableLanguageFilterInput | null;
  sort?: Array<SearchableLanguageSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableLanguageAggregationInput | null> | null;
};

export type SearchLanguagesQuery = {
  searchLanguages?: {
    __typename: "SearchableLanguageConnection";
    items: Array<{
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type LanguageUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelLanguageUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type LanguageUsersByUserIDQuery = {
  languageUsersByUserID?: {
    __typename: "ModelLanguageUserConnection";
    items: Array<{
      __typename: "LanguageUser";
      id: string;
      userID: string;
      languageID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type LanguageUsersByLanguageIDQueryVariables = {
  languageID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelLanguageUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type LanguageUsersByLanguageIDQuery = {
  languageUsersByLanguageID?: {
    __typename: "ModelLanguageUserConnection";
    items: Array<{
      __typename: "LanguageUser";
      id: string;
      userID: string;
      languageID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetMatchQueryVariables = {
  id: string;
};

export type GetMatchQuery = {
  getMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMatchesQueryVariables = {
  filter?: ModelMatchFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMatchesQuery = {
  listMatches?: {
    __typename: "ModelMatchConnection";
    items: Array<{
      __typename: "Match";
      id: string;
      isReported?: boolean | null;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type MatchesByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMatchFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MatchesByUserIDQuery = {
  matchesByUserID?: {
    __typename: "ModelMatchConnection";
    items: Array<{
      __typename: "Match";
      id: string;
      isReported?: boolean | null;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchMatchesQueryVariables = {
  filter?: SearchableMatchFilterInput | null;
  sort?: Array<SearchableMatchSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableMatchAggregationInput | null> | null;
};

export type SearchMatchesQuery = {
  searchMatches?: {
    __typename: "SearchableMatchConnection";
    items: Array<{
      __typename: "Match";
      id: string;
      isReported?: boolean | null;
      userID: string;
      createdAt: string;
      updatedAt: string;
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

export type GetPhotoQueryVariables = {
  id: string;
};

export type GetPhotoQuery = {
  getPhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPhotosQueryVariables = {
  filter?: ModelPhotoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPhotosQuery = {
  listPhotos?: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type PhotoUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPhotoUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PhotoUsersByUserIDQuery = {
  photoUsersByUserID?: {
    __typename: "ModelPhotoUserConnection";
    items: Array<{
      __typename: "PhotoUser";
      id: string;
      userID: string;
      photoID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type PhotoUsersByPhotoIDQueryVariables = {
  photoID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPhotoUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PhotoUsersByPhotoIDQuery = {
  photoUsersByPhotoID?: {
    __typename: "ModelPhotoUserConnection";
    items: Array<{
      __typename: "PhotoUser";
      id: string;
      userID: string;
      photoID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetStoryQueryVariables = {
  id: string;
};

export type GetStoryQuery = {
  getStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStoriesQuery = {
  listStories?: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type StoriesByCreatedAtQueryVariables = {
  createdAt: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelStoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type StoriesByCreatedAtQuery = {
  storiesByCreatedAt?: {
    __typename: "ModelStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchStoriesQueryVariables = {
  filter?: SearchableStoryFilterInput | null;
  sort?: Array<SearchableStorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableStoryAggregationInput | null> | null;
};

export type SearchStoriesQuery = {
  searchStories?: {
    __typename: "SearchableStoryConnection";
    items: Array<{
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type StoryUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelStoryUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type StoryUsersByUserIDQuery = {
  storyUsersByUserID?: {
    __typename: "ModelStoryUserConnection";
    items: Array<{
      __typename: "StoryUser";
      id: string;
      userID: string;
      storyID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type StoryUsersByStoryIDQueryVariables = {
  storyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelStoryUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type StoryUsersByStoryIDQuery = {
  storyUsersByStoryID?: {
    __typename: "ModelStoryUserConnection";
    items: Array<{
      __typename: "StoryUser";
      id: string;
      userID: string;
      storyID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDayQueryVariables = {
  id: string;
};

export type GetDayQuery = {
  getDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDaysQueryVariables = {
  filter?: ModelDayFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDaysQuery = {
  listDays?: {
    __typename: "ModelDayConnection";
    items: Array<{
      __typename: "Day";
      id: string;
      day: number;
      position: number;
      question: string;
      response: string;
      questionCategory: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type DaysByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelDayFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type DaysByUserIDQuery = {
  daysByUserID?: {
    __typename: "ModelDayConnection";
    items: Array<{
      __typename: "Day";
      id: string;
      day: number;
      position: number;
      question: string;
      response: string;
      questionCategory: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchDaysQueryVariables = {
  filter?: SearchableDayFilterInput | null;
  sort?: Array<SearchableDaySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableDayAggregationInput | null> | null;
};

export type SearchDaysQuery = {
  searchDays?: {
    __typename: "SearchableDayConnection";
    items: Array<{
      __typename: "Day";
      id: string;
      day: number;
      position: number;
      question: string;
      response: string;
      questionCategory: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
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

export type GetMentalHealthUserQueryVariables = {
  id: string;
};

export type GetMentalHealthUserQuery = {
  getMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMentalHealthUsersQueryVariables = {
  filter?: ModelMentalHealthUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMentalHealthUsersQuery = {
  listMentalHealthUsers?: {
    __typename: "ModelMentalHealthUserConnection";
    items: Array<{
      __typename: "MentalHealthUser";
      id: string;
      value: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type MentalHealthUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMentalHealthUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MentalHealthUsersByUserIDQuery = {
  mentalHealthUsersByUserID?: {
    __typename: "ModelMentalHealthUserConnection";
    items: Array<{
      __typename: "MentalHealthUser";
      id: string;
      value: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetEnergyUserQueryVariables = {
  id: string;
};

export type GetEnergyUserQuery = {
  getEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListEnergyUsersQueryVariables = {
  filter?: ModelEnergyUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEnergyUsersQuery = {
  listEnergyUsers?: {
    __typename: "ModelEnergyUserConnection";
    items: Array<{
      __typename: "EnergyUser";
      id: string;
      value: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type EnergyUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelEnergyUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type EnergyUsersByUserIDQuery = {
  energyUsersByUserID?: {
    __typename: "ModelEnergyUserConnection";
    items: Array<{
      __typename: "EnergyUser";
      id: string;
      value: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCheckInQuestionQueryVariables = {
  id: string;
};

export type GetCheckInQuestionQuery = {
  getCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCheckInQuestionsQueryVariables = {
  filter?: ModelCheckInQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCheckInQuestionsQuery = {
  listCheckInQuestions?: {
    __typename: "ModelCheckInQuestionConnection";
    items: Array<{
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchCheckInQuestionsQueryVariables = {
  filter?: SearchableCheckInQuestionFilterInput | null;
  sort?: Array<SearchableCheckInQuestionSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCheckInQuestionAggregationInput | null> | null;
};

export type SearchCheckInQuestionsQuery = {
  searchCheckInQuestions?: {
    __typename: "SearchableCheckInQuestionConnection";
    items: Array<{
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetCheckInQuestionCategoryQueryVariables = {
  id: string;
};

export type GetCheckInQuestionCategoryQuery = {
  getCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCheckInQuestionCategoriesQueryVariables = {
  filter?: ModelCheckInQuestionCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCheckInQuestionCategoriesQuery = {
  listCheckInQuestionCategories?: {
    __typename: "ModelCheckInQuestionCategoryConnection";
    items: Array<{
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchCheckInQuestionCategoriesQueryVariables = {
  filter?: SearchableCheckInQuestionCategoryFilterInput | null;
  sort?: Array<SearchableCheckInQuestionCategorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCheckInQuestionCategoryAggregationInput | null> | null;
};

export type SearchCheckInQuestionCategoriesQuery = {
  searchCheckInQuestionCategories?: {
    __typename: "SearchableCheckInQuestionCategoryConnection";
    items: Array<{
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetCheckInQuestionThemeQueryVariables = {
  id: string;
};

export type GetCheckInQuestionThemeQuery = {
  getCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCheckInQuestionThemesQueryVariables = {
  filter?: ModelCheckInQuestionThemeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCheckInQuestionThemesQuery = {
  listCheckInQuestionThemes?: {
    __typename: "ModelCheckInQuestionThemeConnection";
    items: Array<{
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchCheckInQuestionThemesQueryVariables = {
  filter?: SearchableCheckInQuestionThemeFilterInput | null;
  sort?: Array<SearchableCheckInQuestionThemeSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCheckInQuestionThemeAggregationInput | null> | null;
};

export type SearchCheckInQuestionThemesQuery = {
  searchCheckInQuestionThemes?: {
    __typename: "SearchableCheckInQuestionThemeConnection";
    items: Array<{
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetCheckInQuestionTypeQueryVariables = {
  id: string;
};

export type GetCheckInQuestionTypeQuery = {
  getCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCheckInQuestionTypesQueryVariables = {
  filter?: ModelCheckInQuestionTypeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCheckInQuestionTypesQuery = {
  listCheckInQuestionTypes?: {
    __typename: "ModelCheckInQuestionTypeConnection";
    items: Array<{
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchCheckInQuestionTypesQueryVariables = {
  filter?: SearchableCheckInQuestionTypeFilterInput | null;
  sort?: Array<SearchableCheckInQuestionTypeSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCheckInQuestionTypeAggregationInput | null> | null;
};

export type SearchCheckInQuestionTypesQuery = {
  searchCheckInQuestionTypes?: {
    __typename: "SearchableCheckInQuestionTypeConnection";
    items: Array<{
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type CheckInQuestionUsersByUserIDQueryVariables = {
  userID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCheckInQuestionUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CheckInQuestionUsersByUserIDQuery = {
  checkInQuestionUsersByUserID?: {
    __typename: "ModelCheckInQuestionUserConnection";
    items: Array<{
      __typename: "CheckInQuestionUser";
      id: string;
      userID: string;
      checkInQuestionID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CheckInQuestionUsersByCheckInQuestionIDQueryVariables = {
  checkInQuestionID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCheckInQuestionUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CheckInQuestionUsersByCheckInQuestionIDQuery = {
  checkInQuestionUsersByCheckInQuestionID?: {
    __typename: "ModelCheckInQuestionUserConnection";
    items: Array<{
      __typename: "CheckInQuestionUser";
      id: string;
      userID: string;
      checkInQuestionID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchCheckInQuestionUsersQueryVariables = {
  filter?: SearchableCheckInQuestionUserFilterInput | null;
  sort?: Array<SearchableCheckInQuestionUserSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableCheckInQuestionUserAggregationInput | null> | null;
};

export type SearchCheckInQuestionUsersQuery = {
  searchCheckInQuestionUsers?: {
    __typename: "SearchableCheckInQuestionUserConnection";
    items: Array<{
      __typename: "CheckInQuestionUser";
      id: string;
      userID: string;
      checkInQuestionID: string;
      createdAt: string;
      updatedAt: string;
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

export type GetIceBreakerQuestionQueryVariables = {
  id: string;
};

export type GetIceBreakerQuestionQuery = {
  getIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIceBreakerQuestionsQueryVariables = {
  filter?: ModelIceBreakerQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIceBreakerQuestionsQuery = {
  listIceBreakerQuestions?: {
    __typename: "ModelIceBreakerQuestionConnection";
    items: Array<{
      __typename: "IceBreakerQuestion";
      id: string;
      question: string;
      iceBreakerQuestionCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchIceBreakerQuestionsQueryVariables = {
  filter?: SearchableIceBreakerQuestionFilterInput | null;
  sort?: Array<SearchableIceBreakerQuestionSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableIceBreakerQuestionAggregationInput | null> | null;
};

export type SearchIceBreakerQuestionsQuery = {
  searchIceBreakerQuestions?: {
    __typename: "SearchableIceBreakerQuestionConnection";
    items: Array<{
      __typename: "IceBreakerQuestion";
      id: string;
      question: string;
      iceBreakerQuestionCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetIceBreakerQuestionCategoryQueryVariables = {
  id: string;
};

export type GetIceBreakerQuestionCategoryQuery = {
  getIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListIceBreakerQuestionCategoriesQueryVariables = {
  filter?: ModelIceBreakerQuestionCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListIceBreakerQuestionCategoriesQuery = {
  listIceBreakerQuestionCategories?: {
    __typename: "ModelIceBreakerQuestionCategoryConnection";
    items: Array<{
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetEatingPreferenceQueryVariables = {
  id: string;
};

export type GetEatingPreferenceQuery = {
  getEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListEatingPreferencesQueryVariables = {
  filter?: ModelEatingPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEatingPreferencesQuery = {
  listEatingPreferences?: {
    __typename: "ModelEatingPreferenceConnection";
    items: Array<{
      __typename: "EatingPreference";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetQuoteQueryVariables = {
  id: string;
};

export type GetQuoteQuery = {
  getQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListQuotesQuery = {
  listQuotes?: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      text: string;
      author: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchQuotesQueryVariables = {
  filter?: SearchableQuoteFilterInput | null;
  sort?: Array<SearchableQuoteSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableQuoteAggregationInput | null> | null;
};

export type SearchQuotesQuery = {
  searchQuotes?: {
    __typename: "SearchableQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      text: string;
      author: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetAuthorQueryVariables = {
  id: string;
};

export type GetAuthorQuery = {
  getAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAuthorsQuery = {
  listAuthors?: {
    __typename: "ModelAuthorConnection";
    items: Array<{
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchAuthorsQueryVariables = {
  filter?: SearchableAuthorFilterInput | null;
  sort?: Array<SearchableAuthorSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableAuthorAggregationInput | null> | null;
};

export type SearchAuthorsQuery = {
  searchAuthors?: {
    __typename: "SearchableAuthorConnection";
    items: Array<{
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetContentQueryVariables = {
  id: string;
};

export type GetContentQuery = {
  getContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContentsQuery = {
  listContents?: {
    __typename: "ModelContentConnection";
    items: Array<{
      __typename: "Content";
      id: string;
      name: string;
      contentCategoryId: string;
      contentTypeId: string;
      authorId: string;
      media?: string | null;
      mediaDuration?: number | null;
      animatedGif?: string | null;
      image?: string | null;
      title?: string | null;
      subTitle?: string | null;
      text?: string | null;
      day?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchContentsQueryVariables = {
  filter?: SearchableContentFilterInput | null;
  sort?: Array<SearchableContentSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableContentAggregationInput | null> | null;
};

export type SearchContentsQuery = {
  searchContents?: {
    __typename: "SearchableContentConnection";
    items: Array<{
      __typename: "Content";
      id: string;
      name: string;
      contentCategoryId: string;
      contentTypeId: string;
      authorId: string;
      media?: string | null;
      mediaDuration?: number | null;
      animatedGif?: string | null;
      image?: string | null;
      title?: string | null;
      subTitle?: string | null;
      text?: string | null;
      day?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetContentCategoryDayImageQueryVariables = {
  id: string;
};

export type GetContentCategoryDayImageQuery = {
  getContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListContentCategoryDayImagesQueryVariables = {
  filter?: ModelContentCategoryDayImageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContentCategoryDayImagesQuery = {
  listContentCategoryDayImages?: {
    __typename: "ModelContentCategoryDayImageConnection";
    items: Array<{
      __typename: "ContentCategoryDayImage";
      id: string;
      contentCategoryId: string;
      url: string;
      day: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ContentCategoryDayImagesByContentCategoryIdAndDayQueryVariables = {
  contentCategoryId: string;
  day?: ModelIntKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelContentCategoryDayImageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ContentCategoryDayImagesByContentCategoryIdAndDayQuery = {
  contentCategoryDayImagesByContentCategoryIdAndDay?: {
    __typename: "ModelContentCategoryDayImageConnection";
    items: Array<{
      __typename: "ContentCategoryDayImage";
      id: string;
      contentCategoryId: string;
      url: string;
      day: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetContentCategoryQueryVariables = {
  id: string;
};

export type GetContentCategoryQuery = {
  getContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListContentCategoriesQueryVariables = {
  filter?: ModelContentCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContentCategoriesQuery = {
  listContentCategories?: {
    __typename: "ModelContentCategoryConnection";
    items: Array<{
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchContentCategoriesQueryVariables = {
  filter?: SearchableContentCategoryFilterInput | null;
  sort?: Array<SearchableContentCategorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableContentCategoryAggregationInput | null> | null;
};

export type SearchContentCategoriesQuery = {
  searchContentCategories?: {
    __typename: "SearchableContentCategoryConnection";
    items: Array<{
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      dayImages?: {
        __typename: "ModelContentCategoryDayImageConnection";
        nextToken?: string | null;
      } | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
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

export type GetContentTypeQueryVariables = {
  id: string;
};

export type GetContentTypeQuery = {
  getContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListContentTypesQueryVariables = {
  filter?: ModelContentTypeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContentTypesQuery = {
  listContentTypes?: {
    __typename: "ModelContentTypeConnection";
    items: Array<{
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchContentTypesQueryVariables = {
  filter?: SearchableContentTypeFilterInput | null;
  sort?: Array<SearchableContentTypeSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableContentTypeAggregationInput | null> | null;
};

export type SearchContentTypesQuery = {
  searchContentTypes?: {
    __typename: "SearchableContentTypeConnection";
    items: Array<{
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetPromptQueryVariables = {
  id: string;
};

export type GetPromptQuery = {
  getPrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPromptsQueryVariables = {
  filter?: ModelPromptFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPromptsQuery = {
  listPrompts?: {
    __typename: "ModelPromptConnection";
    items: Array<{
      __typename: "Prompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type PromptsByPromptCategoryIDAndPromptQueryVariables = {
  promptCategoryID: string;
  prompt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPromptFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PromptsByPromptCategoryIDAndPromptQuery = {
  promptsByPromptCategoryIDAndPrompt?: {
    __typename: "ModelPromptConnection";
    items: Array<{
      __typename: "Prompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchPromptsQueryVariables = {
  filter?: SearchablePromptFilterInput | null;
  sort?: Array<SearchablePromptSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchablePromptAggregationInput | null> | null;
};

export type SearchPromptsQuery = {
  searchPrompts?: {
    __typename: "SearchablePromptConnection";
    items: Array<{
      __typename: "Prompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetPromptCategoryQueryVariables = {
  id: string;
};

export type GetPromptCategoryQuery = {
  getPromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPromptCategoriesQueryVariables = {
  filter?: ModelPromptCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPromptCategoriesQuery = {
  listPromptCategories?: {
    __typename: "ModelPromptCategoryConnection";
    items: Array<{
      __typename: "PromptCategory";
      id: string;
      promptCategoryId: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchPromptCategoriesQueryVariables = {
  filter?: SearchablePromptCategoryFilterInput | null;
  sort?: Array<SearchablePromptCategorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchablePromptCategoryAggregationInput | null> | null;
};

export type SearchPromptCategoriesQuery = {
  searchPromptCategories?: {
    __typename: "SearchablePromptCategoryConnection";
    items: Array<{
      __typename: "PromptCategory";
      id: string;
      promptCategoryId: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetChatPromptQueryVariables = {
  id: string;
};

export type GetChatPromptQuery = {
  getChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListChatPromptsQueryVariables = {
  filter?: ModelChatPromptFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChatPromptsQuery = {
  listChatPrompts?: {
    __typename: "ModelChatPromptConnection";
    items: Array<{
      __typename: "ChatPrompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ChatPromptsByPromptCategoryIDAndPromptQueryVariables = {
  promptCategoryID: string;
  prompt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelChatPromptFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ChatPromptsByPromptCategoryIDAndPromptQuery = {
  chatPromptsByPromptCategoryIDAndPrompt?: {
    __typename: "ModelChatPromptConnection";
    items: Array<{
      __typename: "ChatPrompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchChatPromptsQueryVariables = {
  filter?: SearchableChatPromptFilterInput | null;
  sort?: Array<SearchableChatPromptSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableChatPromptAggregationInput | null> | null;
};

export type SearchChatPromptsQuery = {
  searchChatPrompts?: {
    __typename: "SearchableChatPromptConnection";
    items: Array<{
      __typename: "ChatPrompt";
      id: string;
      prompt: string;
      promptCategoryID: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetChatPromptCategoryQueryVariables = {
  id: string;
};

export type GetChatPromptCategoryQuery = {
  getChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListChatPromptCategoriesQueryVariables = {
  filter?: ModelChatPromptCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChatPromptCategoriesQuery = {
  listChatPromptCategories?: {
    __typename: "ModelChatPromptCategoryConnection";
    items: Array<{
      __typename: "ChatPromptCategory";
      id: string;
      chatPromptCategoryId: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchChatPromptCategoriesQueryVariables = {
  filter?: SearchableChatPromptCategoryFilterInput | null;
  sort?: Array<SearchableChatPromptCategorySortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableChatPromptCategoryAggregationInput | null> | null;
};

export type SearchChatPromptCategoriesQuery = {
  searchChatPromptCategories?: {
    __typename: "SearchableChatPromptCategoryConnection";
    items: Array<{
      __typename: "ChatPromptCategory";
      id: string;
      chatPromptCategoryId: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
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

export type GetFeedbackUserQueryVariables = {
  id: string;
};

export type GetFeedbackUserQuery = {
  getFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListFeedbackUsersQueryVariables = {
  filter?: ModelFeedbackUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListFeedbackUsersQuery = {
  listFeedbackUsers?: {
    __typename: "ModelFeedbackUserConnection";
    items: Array<{
      __typename: "FeedbackUser";
      id: string;
      feedback?: string | null;
      screen?: string | null;
      imageName?: string | null;
      deviceInfo?: string | null;
      userName?: string | null;
      userEmail?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchFeedbackUsersQueryVariables = {
  filter?: SearchableFeedbackUserFilterInput | null;
  sort?: Array<SearchableFeedbackUserSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableFeedbackUserAggregationInput | null> | null;
};

export type SearchFeedbackUsersQuery = {
  searchFeedbackUsers?: {
    __typename: "SearchableFeedbackUserConnection";
    items: Array<{
      __typename: "FeedbackUser";
      id: string;
      feedback?: string | null;
      screen?: string | null;
      imageName?: string | null;
      deviceInfo?: string | null;
      userName?: string | null;
      userEmail?: string | null;
      createdAt: string;
      updatedAt: string;
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

export type GetFeedbackTesterQueryVariables = {
  id: string;
};

export type GetFeedbackTesterQuery = {
  getFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListFeedbackTestersQueryVariables = {
  filter?: ModelFeedbackTesterFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListFeedbackTestersQuery = {
  listFeedbackTesters?: {
    __typename: "ModelFeedbackTesterConnection";
    items: Array<{
      __typename: "FeedbackTester";
      id: string;
      feedback?: string | null;
      screen?: string | null;
      imageName?: string | null;
      deviceInfo?: string | null;
      userName?: string | null;
      userEmail?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchFeedbackTestersQueryVariables = {
  filter?: SearchableFeedbackTesterFilterInput | null;
  sort?: Array<SearchableFeedbackTesterSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableFeedbackTesterAggregationInput | null> | null;
};

export type SearchFeedbackTestersQuery = {
  searchFeedbackTesters?: {
    __typename: "SearchableFeedbackTesterConnection";
    items: Array<{
      __typename: "FeedbackTester";
      id: string;
      feedback?: string | null;
      screen?: string | null;
      imageName?: string | null;
      deviceInfo?: string | null;
      userName?: string | null;
      userEmail?: string | null;
      createdAt: string;
      updatedAt: string;
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

export type GetGeneralAppContentQueryVariables = {
  id: string;
};

export type GetGeneralAppContentQuery = {
  getGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListGeneralAppContentsQueryVariables = {
  filter?: ModelGeneralAppContentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListGeneralAppContentsQuery = {
  listGeneralAppContents?: {
    __typename: "ModelGeneralAppContentConnection";
    items: Array<{
      __typename: "GeneralAppContent";
      id: string;
      contentType?: string | null;
      title?: string | null;
      value?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GeneralAppContentsByContentTypeQueryVariables = {
  contentType: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelGeneralAppContentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GeneralAppContentsByContentTypeQuery = {
  generalAppContentsByContentType?: {
    __typename: "ModelGeneralAppContentConnection";
    items: Array<{
      __typename: "GeneralAppContent";
      id: string;
      contentType?: string | null;
      title?: string | null;
      value?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchGeneralAppContentsQueryVariables = {
  filter?: SearchableGeneralAppContentFilterInput | null;
  sort?: Array<SearchableGeneralAppContentSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableGeneralAppContentAggregationInput | null> | null;
};

export type SearchGeneralAppContentsQuery = {
  searchGeneralAppContents?: {
    __typename: "SearchableGeneralAppContentConnection";
    items: Array<{
      __typename: "GeneralAppContent";
      id: string;
      contentType?: string | null;
      title?: string | null;
      value?: string | null;
      createdAt: string;
      updatedAt: string;
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

export type GetWaitlistUserQueryVariables = {
  id: string;
};

export type GetWaitlistUserQuery = {
  getWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListWaitlistUsersQueryVariables = {
  filter?: ModelWaitlistUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListWaitlistUsersQuery = {
  listWaitlistUsers?: {
    __typename: "ModelWaitlistUserConnection";
    items: Array<{
      __typename: "WaitlistUser";
      id: string;
      email?: string | null;
      userCity?: string | null;
      userIP?: string | null;
      userCoordinates?: string | null;
      userInternetProvider?: string | null;
      userZipCode?: string | null;
      userState?: string | null;
      userTimeZone?: string | null;
      relationshipStatus?: string | null;
      isDistanceImportant?: string | null;
      deviceType?: string | null;
      additionalInfo?: string | null;
      cityState?: string | null;
      referralCode?: string | null;
      verificationLinkToken?: string | null;
      position?: string | null;
      ageRange?: string | null;
      gender?: string | null;
      genderPreference?: string | null;
      readyInterests?: string | null;
      howDidYouHearAboutUs?: string | null;
      helpReady?: string | null;
      features?: string | null;
      comments?: string | null;
      userDevice?: string | null;
      userPlatform?: string | null;
      userAppName?: string | null;
      userAppVersion?: string | null;
      userScreenSize?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type WaitlistUsersByEmailQueryVariables = {
  email: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelWaitlistUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type WaitlistUsersByEmailQuery = {
  waitlistUsersByEmail?: {
    __typename: "ModelWaitlistUserConnection";
    items: Array<{
      __typename: "WaitlistUser";
      id: string;
      email?: string | null;
      userCity?: string | null;
      userIP?: string | null;
      userCoordinates?: string | null;
      userInternetProvider?: string | null;
      userZipCode?: string | null;
      userState?: string | null;
      userTimeZone?: string | null;
      relationshipStatus?: string | null;
      isDistanceImportant?: string | null;
      deviceType?: string | null;
      additionalInfo?: string | null;
      cityState?: string | null;
      referralCode?: string | null;
      verificationLinkToken?: string | null;
      position?: string | null;
      ageRange?: string | null;
      gender?: string | null;
      genderPreference?: string | null;
      readyInterests?: string | null;
      howDidYouHearAboutUs?: string | null;
      helpReady?: string | null;
      features?: string | null;
      comments?: string | null;
      userDevice?: string | null;
      userPlatform?: string | null;
      userAppName?: string | null;
      userAppVersion?: string | null;
      userScreenSize?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type WaitlistUsersByCreatedAtQueryVariables = {
  createdAt: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelWaitlistUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type WaitlistUsersByCreatedAtQuery = {
  waitlistUsersByCreatedAt?: {
    __typename: "ModelWaitlistUserConnection";
    items: Array<{
      __typename: "WaitlistUser";
      id: string;
      email?: string | null;
      userCity?: string | null;
      userIP?: string | null;
      userCoordinates?: string | null;
      userInternetProvider?: string | null;
      userZipCode?: string | null;
      userState?: string | null;
      userTimeZone?: string | null;
      relationshipStatus?: string | null;
      isDistanceImportant?: string | null;
      deviceType?: string | null;
      additionalInfo?: string | null;
      cityState?: string | null;
      referralCode?: string | null;
      verificationLinkToken?: string | null;
      position?: string | null;
      ageRange?: string | null;
      gender?: string | null;
      genderPreference?: string | null;
      readyInterests?: string | null;
      howDidYouHearAboutUs?: string | null;
      helpReady?: string | null;
      features?: string | null;
      comments?: string | null;
      userDevice?: string | null;
      userPlatform?: string | null;
      userAppName?: string | null;
      userAppVersion?: string | null;
      userScreenSize?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchWaitlistUsersQueryVariables = {
  filter?: SearchableWaitlistUserFilterInput | null;
  sort?: Array<SearchableWaitlistUserSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableWaitlistUserAggregationInput | null> | null;
};

export type SearchWaitlistUsersQuery = {
  searchWaitlistUsers?: {
    __typename: "SearchableWaitlistUserConnection";
    items: Array<{
      __typename: "WaitlistUser";
      id: string;
      email?: string | null;
      userCity?: string | null;
      userIP?: string | null;
      userCoordinates?: string | null;
      userInternetProvider?: string | null;
      userZipCode?: string | null;
      userState?: string | null;
      userTimeZone?: string | null;
      relationshipStatus?: string | null;
      isDistanceImportant?: string | null;
      deviceType?: string | null;
      additionalInfo?: string | null;
      cityState?: string | null;
      referralCode?: string | null;
      verificationLinkToken?: string | null;
      position?: string | null;
      ageRange?: string | null;
      gender?: string | null;
      genderPreference?: string | null;
      readyInterests?: string | null;
      howDidYouHearAboutUs?: string | null;
      helpReady?: string | null;
      features?: string | null;
      comments?: string | null;
      userDevice?: string | null;
      userPlatform?: string | null;
      userAppName?: string | null;
      userAppVersion?: string | null;
      userScreenSize?: string | null;
      createdAt: string;
      updatedAt: string;
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

export type GetConnectionsQueryVariables = {
  myId: string;
  latitude: number;
  longitude: number;
  range: number;
  agePreferenceFrom: number;
  agePreferenceTo: number;
  genderPreferences: string;
  gender?: string | null;
  extraData?: string | null;
};

export type GetConnectionsQuery = {
  getConnections?: Array<{
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
};

export type GetConnectionsV2QueryVariables = {
  myId: string;
  latitude: number;
  longitude: number;
  range: number;
  agePreferenceFrom: number;
  agePreferenceTo: number;
  genderPreferences: string;
  gender?: string | null;
  extraData?: string | null;
};

export type GetConnectionsV2Query = {
  getConnectionsV2?: Array<{
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
};

export type StreamTokenQueryVariables = {
  userId: string;
};

export type StreamTokenQuery = {
  streamToken?: string | null;
};

export type SendPushNotificationQueryVariables = {
  title: string;
  subtitle?: string | null;
  content: string;
  OneSignalUserId: string;
};

export type SendPushNotificationQuery = {
  sendPushNotification?: string | null;
};

export type AddContactToListQueryVariables = {
  email: string;
};

export type AddContactToListQuery = {
  addContactToList?: string | null;
};

export type ModerateImageQueryVariables = {
  imagePath: string;
};

export type ModerateImageQuery = {
  moderateImage?: string | null;
};

export type SendConnectionEmailQueryVariables = {
  toEmail: string;
  connectionName: string;
};

export type SendConnectionEmailQuery = {
  sendConnectionEmail?: string | null;
};

export type FetchWaitlistUsersQueryVariables = {};

export type FetchWaitlistUsersQuery = {
  fetchWaitlistUsers?: string | null;
};

export type DeleteStreamChannelQueryVariables = {
  channelCid: string;
};

export type DeleteStreamChannelQuery = {
  deleteStreamChannel?: string | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailCommunication?: boolean | null;
    birthdate?: string | null;
    gender?: string | null;
    isGenderVisible?: boolean | null;
    sexualOrientation?: string | null;
    isSexualOrientationVisible?: boolean | null;
    value?: string | null;
    location?: string | null;
    locationLatLong?: {
      __typename: "LatLong";
      latitude: number;
      longitude: number;
    } | null;
    isLocationVisible?: boolean | null;
    mentalHealth?: string | null;
    quality?: string | null;
    energy?: string | null;
    starSign?: string | null;
    isStarSignVisible?: boolean | null;
    ethnicityID?: string | null;
    ethnicity?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isEthnicityVisible?: boolean | null;
    religionID?: string | null;
    religion?: {
      __typename: "Religion";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isReligionVisible?: boolean | null;
    height?: number | null;
    isHeightVisible?: boolean | null;
    pronounID?: string | null;
    pronoun?: {
      __typename: "Pronoun";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isPronounVisible?: boolean | null;
    genderPreferences?: string | null;
    areGenderPreferencesVisible?: boolean | null;
    agePreferenceFrom?: number | null;
    agePreferenceTo?: number | null;
    distancePreference?: number | null;
    childrenStatusID?: string | null;
    childrenStatus?: {
      __typename: "ChildrenStatus";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    wantChildrenStatus?: string | null;
    isChildrenStatusVisible?: boolean | null;
    isWantChildrenStatusVisible?: boolean | null;
    educationLevel?: string | null;
    isEducationLevelVisible?: boolean | null;
    school?: string | null;
    isSchoolVisbile?: boolean | null;
    languages?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    areLanguagesVisible?: boolean | null;
    jobTitle?: string | null;
    isJobTitleVisible?: boolean | null;
    work?: string | null;
    isWorkVisible?: boolean | null;
    drinkPreference?: string | null;
    isDrinkPreferenceVisible?: boolean | null;
    tobaccoPreference?: string | null;
    isTobaccoPreferenceVisible?: boolean | null;
    drugPreference?: string | null;
    isDrugPreferenceVisible?: boolean | null;
    therapyPreference?: string | null;
    isTherapyPreferenceVisible?: boolean | null;
    eatingPreferences?: string | null;
    areEatingPreferencesVisible?: boolean | null;
    exercisePreferenceID?: string | null;
    exercisePreference?: string | null;
    isExercisePreferenceVisible?: boolean | null;
    sleepingHabit?: string | null;
    isSleepingHabitVisible?: boolean | null;
    hometown?: string | null;
    isHometownVisible?: boolean | null;
    prompts?: string | null;
    photos?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    userMainPhoto?: string | null;
    defaultUserPhoto?: number | null;
    stories?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    checkInQuestions?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    bio?: string | null;
    discoveringYou?: string | null;
    isUserActive: boolean;
    isUserVerified?: boolean | null;
    isUserOnboarded?: boolean | null;
    isUserPaused?: boolean | null;
    isProfileComplete?: boolean | null;
    isHabitsComplete?: boolean | null;
    isOnboardingStarted?: boolean | null;
    onboardingStep?: number | null;
    signUpStep?: number | null;
    isSignUpComplete?: boolean | null;
    days?: {
      __typename: "ModelDayConnection";
      nextToken?: string | null;
    } | null;
    matches?: {
      __typename: "ModelMatchConnection";
      nextToken?: string | null;
    } | null;
    dailyReflectionReminderType?: string | null;
    dailyReflectionReminderFrequency?: string | null;
    dailyReflectionNotificationTime?: string | null;
    isDailyReflectionNotificationEnabled?: boolean | null;
    timeOffset?: string | null;
    isNewConnectionsNotificationPushActive?: boolean | null;
    isNewConnectionsNotificationEmailActive?: boolean | null;
    newMessagesNotificationType?: string | null;
    isNewMessagesNotificationEnabled?: boolean | null;
    likesGiven?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    likesReceived?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    streamToken?: string | null;
    oneSignalUserId?: string | null;
    activeConnections?: number | null;
    userDailyConnections?: string | null;
    connectionsUpdatedOn?: string | null;
    reflectionCompletedOn?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
};

export type OnCreateLikeSubscription = {
  onCreateLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?: {
    __typename: "Like";
    id: string;
    likerId: string;
    likedId: string;
    amILikedBack?: boolean | null;
    active?: boolean | null;
    liker?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    liked?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
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
  } | null;
};

export type OnCreateViewedConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionViewedConnectionFilterInput | null;
};

export type OnCreateViewedConnectionSubscription = {
  onCreateViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnUpdateViewedConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionViewedConnectionFilterInput | null;
};

export type OnUpdateViewedConnectionSubscription = {
  onUpdateViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnDeleteViewedConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionViewedConnectionFilterInput | null;
};

export type OnDeleteViewedConnectionSubscription = {
  onDeleteViewedConnection?: {
    __typename: "ViewedConnection";
    id: string;
    userId: string;
    connectionId: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type OnCreateSleepingHabitSubscriptionVariables = {
  filter?: ModelSubscriptionSleepingHabitFilterInput | null;
};

export type OnCreateSleepingHabitSubscription = {
  onCreateSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSleepingHabitSubscriptionVariables = {
  filter?: ModelSubscriptionSleepingHabitFilterInput | null;
};

export type OnUpdateSleepingHabitSubscription = {
  onUpdateSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSleepingHabitSubscriptionVariables = {
  filter?: ModelSubscriptionSleepingHabitFilterInput | null;
};

export type OnDeleteSleepingHabitSubscription = {
  onDeleteSleepingHabit?: {
    __typename: "SleepingHabit";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateExercisePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionExercisePreferenceFilterInput | null;
};

export type OnCreateExercisePreferenceSubscription = {
  onCreateExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateExercisePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionExercisePreferenceFilterInput | null;
};

export type OnUpdateExercisePreferenceSubscription = {
  onUpdateExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteExercisePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionExercisePreferenceFilterInput | null;
};

export type OnDeleteExercisePreferenceSubscription = {
  onDeleteExercisePreference?: {
    __typename: "ExercisePreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateDrugPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrugPreferenceFilterInput | null;
};

export type OnCreateDrugPreferenceSubscription = {
  onCreateDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDrugPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrugPreferenceFilterInput | null;
};

export type OnUpdateDrugPreferenceSubscription = {
  onUpdateDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDrugPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrugPreferenceFilterInput | null;
};

export type OnDeleteDrugPreferenceSubscription = {
  onDeleteDrugPreference?: {
    __typename: "DrugPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTobaccoPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTobaccoPreferenceFilterInput | null;
};

export type OnCreateTobaccoPreferenceSubscription = {
  onCreateTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTobaccoPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTobaccoPreferenceFilterInput | null;
};

export type OnUpdateTobaccoPreferenceSubscription = {
  onUpdateTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTobaccoPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTobaccoPreferenceFilterInput | null;
};

export type OnDeleteTobaccoPreferenceSubscription = {
  onDeleteTobaccoPreference?: {
    __typename: "TobaccoPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTherapyPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTherapyPreferenceFilterInput | null;
};

export type OnCreateTherapyPreferenceSubscription = {
  onCreateTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTherapyPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTherapyPreferenceFilterInput | null;
};

export type OnUpdateTherapyPreferenceSubscription = {
  onUpdateTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTherapyPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionTherapyPreferenceFilterInput | null;
};

export type OnDeleteTherapyPreferenceSubscription = {
  onDeleteTherapyPreference?: {
    __typename: "TherapyPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateDrinkPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrinkPreferenceFilterInput | null;
};

export type OnCreateDrinkPreferenceSubscription = {
  onCreateDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDrinkPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrinkPreferenceFilterInput | null;
};

export type OnUpdateDrinkPreferenceSubscription = {
  onUpdateDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDrinkPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionDrinkPreferenceFilterInput | null;
};

export type OnDeleteDrinkPreferenceSubscription = {
  onDeleteDrinkPreference?: {
    __typename: "DrinkPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionChildrenStatusFilterInput | null;
};

export type OnCreateChildrenStatusSubscription = {
  onCreateChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionChildrenStatusFilterInput | null;
};

export type OnUpdateChildrenStatusSubscription = {
  onUpdateChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionChildrenStatusFilterInput | null;
};

export type OnDeleteChildrenStatusSubscription = {
  onDeleteChildrenStatus?: {
    __typename: "ChildrenStatus";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateWantChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionWantChildrenStatusFilterInput | null;
};

export type OnCreateWantChildrenStatusSubscription = {
  onCreateWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateWantChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionWantChildrenStatusFilterInput | null;
};

export type OnUpdateWantChildrenStatusSubscription = {
  onUpdateWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteWantChildrenStatusSubscriptionVariables = {
  filter?: ModelSubscriptionWantChildrenStatusFilterInput | null;
};

export type OnDeleteWantChildrenStatusSubscription = {
  onDeleteWantChildrenStatus?: {
    __typename: "WantChildrenStatus";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEducationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationLevelFilterInput | null;
};

export type OnCreateEducationLevelSubscription = {
  onCreateEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEducationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationLevelFilterInput | null;
};

export type OnUpdateEducationLevelSubscription = {
  onUpdateEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEducationLevelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationLevelFilterInput | null;
};

export type OnDeleteEducationLevelSubscription = {
  onDeleteEducationLevel?: {
    __typename: "EducationLevel";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateGenderSubscriptionVariables = {
  filter?: ModelSubscriptionGenderFilterInput | null;
};

export type OnCreateGenderSubscription = {
  onCreateGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateGenderSubscriptionVariables = {
  filter?: ModelSubscriptionGenderFilterInput | null;
};

export type OnUpdateGenderSubscription = {
  onUpdateGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteGenderSubscriptionVariables = {
  filter?: ModelSubscriptionGenderFilterInput | null;
};

export type OnDeleteGenderSubscription = {
  onDeleteGender?: {
    __typename: "Gender";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEthnicitySubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityFilterInput | null;
};

export type OnCreateEthnicitySubscription = {
  onCreateEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEthnicitySubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityFilterInput | null;
};

export type OnUpdateEthnicitySubscription = {
  onUpdateEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEthnicitySubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityFilterInput | null;
};

export type OnDeleteEthnicitySubscription = {
  onDeleteEthnicity?: {
    __typename: "Ethnicity";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelEthnicityUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEthnicityUserSubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityUserFilterInput | null;
};

export type OnCreateEthnicityUserSubscription = {
  onCreateEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEthnicityUserSubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityUserFilterInput | null;
};

export type OnUpdateEthnicityUserSubscription = {
  onUpdateEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEthnicityUserSubscriptionVariables = {
  filter?: ModelSubscriptionEthnicityUserFilterInput | null;
};

export type OnDeleteEthnicityUserSubscription = {
  onDeleteEthnicityUser?: {
    __typename: "EthnicityUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    ethnicity: {
      __typename: "Ethnicity";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    ethnicityID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateReligionSubscriptionVariables = {
  filter?: ModelSubscriptionReligionFilterInput | null;
};

export type OnCreateReligionSubscription = {
  onCreateReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateReligionSubscriptionVariables = {
  filter?: ModelSubscriptionReligionFilterInput | null;
};

export type OnUpdateReligionSubscription = {
  onUpdateReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteReligionSubscriptionVariables = {
  filter?: ModelSubscriptionReligionFilterInput | null;
};

export type OnDeleteReligionSubscription = {
  onDeleteReligion?: {
    __typename: "Religion";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePronounSubscriptionVariables = {
  filter?: ModelSubscriptionPronounFilterInput | null;
};

export type OnCreatePronounSubscription = {
  onCreatePronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePronounSubscriptionVariables = {
  filter?: ModelSubscriptionPronounFilterInput | null;
};

export type OnUpdatePronounSubscription = {
  onUpdatePronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePronounSubscriptionVariables = {
  filter?: ModelSubscriptionPronounFilterInput | null;
};

export type OnDeletePronounSubscription = {
  onDeletePronoun?: {
    __typename: "Pronoun";
    id: string;
    name: string;
    users?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateSexualOrientationSubscriptionVariables = {
  filter?: ModelSubscriptionSexualOrientationFilterInput | null;
};

export type OnCreateSexualOrientationSubscription = {
  onCreateSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateSexualOrientationSubscriptionVariables = {
  filter?: ModelSubscriptionSexualOrientationFilterInput | null;
};

export type OnUpdateSexualOrientationSubscription = {
  onUpdateSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteSexualOrientationSubscriptionVariables = {
  filter?: ModelSubscriptionSexualOrientationFilterInput | null;
};

export type OnDeleteSexualOrientationSubscription = {
  onDeleteSexualOrientation?: {
    __typename: "SexualOrientation";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null;
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null;
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null;
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?: {
    __typename: "Language";
    id: string;
    name: string;
    sortOrder?: number | null;
    users?: {
      __typename: "ModelLanguageUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLanguageUserSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageUserFilterInput | null;
};

export type OnCreateLanguageUserSubscription = {
  onCreateLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLanguageUserSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageUserFilterInput | null;
};

export type OnUpdateLanguageUserSubscription = {
  onUpdateLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLanguageUserSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageUserFilterInput | null;
};

export type OnDeleteLanguageUserSubscription = {
  onDeleteLanguageUser?: {
    __typename: "LanguageUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "Language";
      id: string;
      name: string;
      sortOrder?: number | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    languageID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null;
};

export type OnCreateMatchSubscription = {
  onCreateMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null;
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null;
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?: {
    __typename: "Match";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    isReported?: boolean | null;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePhotoSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoFilterInput | null;
};

export type OnCreatePhotoSubscription = {
  onCreatePhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePhotoSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoFilterInput | null;
};

export type OnUpdatePhotoSubscription = {
  onUpdatePhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePhotoSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoFilterInput | null;
};

export type OnDeletePhotoSubscription = {
  onDeletePhoto?: {
    __typename: "Photo";
    id: string;
    name: string;
    sortOrder: number;
    users?: {
      __typename: "ModelPhotoUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePhotoUserSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoUserFilterInput | null;
};

export type OnCreatePhotoUserSubscription = {
  onCreatePhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePhotoUserSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoUserFilterInput | null;
};

export type OnUpdatePhotoUserSubscription = {
  onUpdatePhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePhotoUserSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoUserFilterInput | null;
};

export type OnDeletePhotoUserSubscription = {
  onDeletePhotoUser?: {
    __typename: "PhotoUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    photo: {
      __typename: "Photo";
      id: string;
      name: string;
      sortOrder: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    photoID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null;
};

export type OnCreateStorySubscription = {
  onCreateStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null;
};

export type OnUpdateStorySubscription = {
  onUpdateStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null;
};

export type OnDeleteStorySubscription = {
  onDeleteStory?: {
    __typename: "Story";
    id: string;
    name: string;
    users?: {
      __typename: "ModelStoryUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateStoryUserSubscriptionVariables = {
  filter?: ModelSubscriptionStoryUserFilterInput | null;
};

export type OnCreateStoryUserSubscription = {
  onCreateStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateStoryUserSubscriptionVariables = {
  filter?: ModelSubscriptionStoryUserFilterInput | null;
};

export type OnUpdateStoryUserSubscription = {
  onUpdateStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteStoryUserSubscriptionVariables = {
  filter?: ModelSubscriptionStoryUserFilterInput | null;
};

export type OnDeleteStoryUserSubscription = {
  onDeleteStoryUser?: {
    __typename: "StoryUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    story: {
      __typename: "Story";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    storyID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null;
};

export type OnCreateDaySubscription = {
  onCreateDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null;
};

export type OnUpdateDaySubscription = {
  onUpdateDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null;
};

export type OnDeleteDaySubscription = {
  onDeleteDay?: {
    __typename: "Day";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    day: number;
    position: number;
    question: string;
    response: string;
    questionCategory: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateMentalHealthUserSubscriptionVariables = {
  filter?: ModelSubscriptionMentalHealthUserFilterInput | null;
};

export type OnCreateMentalHealthUserSubscription = {
  onCreateMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMentalHealthUserSubscriptionVariables = {
  filter?: ModelSubscriptionMentalHealthUserFilterInput | null;
};

export type OnUpdateMentalHealthUserSubscription = {
  onUpdateMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMentalHealthUserSubscriptionVariables = {
  filter?: ModelSubscriptionMentalHealthUserFilterInput | null;
};

export type OnDeleteMentalHealthUserSubscription = {
  onDeleteMentalHealthUser?: {
    __typename: "MentalHealthUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEnergyUserSubscriptionVariables = {
  filter?: ModelSubscriptionEnergyUserFilterInput | null;
};

export type OnCreateEnergyUserSubscription = {
  onCreateEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEnergyUserSubscriptionVariables = {
  filter?: ModelSubscriptionEnergyUserFilterInput | null;
};

export type OnUpdateEnergyUserSubscription = {
  onUpdateEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEnergyUserSubscriptionVariables = {
  filter?: ModelSubscriptionEnergyUserFilterInput | null;
};

export type OnDeleteEnergyUserSubscription = {
  onDeleteEnergyUser?: {
    __typename: "EnergyUser";
    id: string;
    value: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCheckInQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionFilterInput | null;
};

export type OnCreateCheckInQuestionSubscription = {
  onCreateCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCheckInQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionFilterInput | null;
};

export type OnUpdateCheckInQuestionSubscription = {
  onUpdateCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCheckInQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionFilterInput | null;
};

export type OnDeleteCheckInQuestionSubscription = {
  onDeleteCheckInQuestion?: {
    __typename: "CheckInQuestion";
    id: string;
    day?: number | null;
    sortOrder?: number | null;
    title?: string | null;
    question: string;
    quote: string;
    checkInQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "CheckInQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionThemeID?: string | null;
    checkInQuestionTheme?: {
      __typename: "CheckInQuestionTheme";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    checkInQuestionContentCategoryId?: string | null;
    checkInQuestionContentCategoryName?: string | null;
    checkInQuestionTypeID: string;
    checkInQuestionType?: {
      __typename: "CheckInQuestionType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    responses?: Array<string | null> | null;
    author?: string | null;
    dayImage?: string | null;
    users?: {
      __typename: "ModelCheckInQuestionUserConnection";
      nextToken?: string | null;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCheckInQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionCategoryFilterInput | null;
};

export type OnCreateCheckInQuestionCategorySubscription = {
  onCreateCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCheckInQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionCategoryFilterInput | null;
};

export type OnUpdateCheckInQuestionCategorySubscription = {
  onUpdateCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCheckInQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionCategoryFilterInput | null;
};

export type OnDeleteCheckInQuestionCategorySubscription = {
  onDeleteCheckInQuestionCategory?: {
    __typename: "CheckInQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCheckInQuestionThemeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionThemeFilterInput | null;
};

export type OnCreateCheckInQuestionThemeSubscription = {
  onCreateCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCheckInQuestionThemeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionThemeFilterInput | null;
};

export type OnUpdateCheckInQuestionThemeSubscription = {
  onUpdateCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCheckInQuestionThemeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionThemeFilterInput | null;
};

export type OnDeleteCheckInQuestionThemeSubscription = {
  onDeleteCheckInQuestionTheme?: {
    __typename: "CheckInQuestionTheme";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCheckInQuestionTypeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionTypeFilterInput | null;
};

export type OnCreateCheckInQuestionTypeSubscription = {
  onCreateCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCheckInQuestionTypeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionTypeFilterInput | null;
};

export type OnUpdateCheckInQuestionTypeSubscription = {
  onUpdateCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCheckInQuestionTypeSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionTypeFilterInput | null;
};

export type OnDeleteCheckInQuestionTypeSubscription = {
  onDeleteCheckInQuestionType?: {
    __typename: "CheckInQuestionType";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelCheckInQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCheckInQuestionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionUserFilterInput | null;
};

export type OnCreateCheckInQuestionUserSubscription = {
  onCreateCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCheckInQuestionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionUserFilterInput | null;
};

export type OnUpdateCheckInQuestionUserSubscription = {
  onUpdateCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCheckInQuestionUserSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInQuestionUserFilterInput | null;
};

export type OnDeleteCheckInQuestionUserSubscription = {
  onDeleteCheckInQuestionUser?: {
    __typename: "CheckInQuestionUser";
    id: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      email?: string | null;
      emailCommunication?: boolean | null;
      birthdate?: string | null;
      gender?: string | null;
      isGenderVisible?: boolean | null;
      sexualOrientation?: string | null;
      isSexualOrientationVisible?: boolean | null;
      value?: string | null;
      location?: string | null;
      isLocationVisible?: boolean | null;
      mentalHealth?: string | null;
      quality?: string | null;
      energy?: string | null;
      starSign?: string | null;
      isStarSignVisible?: boolean | null;
      ethnicityID?: string | null;
      isEthnicityVisible?: boolean | null;
      religionID?: string | null;
      isReligionVisible?: boolean | null;
      height?: number | null;
      isHeightVisible?: boolean | null;
      pronounID?: string | null;
      isPronounVisible?: boolean | null;
      genderPreferences?: string | null;
      areGenderPreferencesVisible?: boolean | null;
      agePreferenceFrom?: number | null;
      agePreferenceTo?: number | null;
      distancePreference?: number | null;
      childrenStatusID?: string | null;
      wantChildrenStatus?: string | null;
      isChildrenStatusVisible?: boolean | null;
      isWantChildrenStatusVisible?: boolean | null;
      educationLevel?: string | null;
      isEducationLevelVisible?: boolean | null;
      school?: string | null;
      isSchoolVisbile?: boolean | null;
      areLanguagesVisible?: boolean | null;
      jobTitle?: string | null;
      isJobTitleVisible?: boolean | null;
      work?: string | null;
      isWorkVisible?: boolean | null;
      drinkPreference?: string | null;
      isDrinkPreferenceVisible?: boolean | null;
      tobaccoPreference?: string | null;
      isTobaccoPreferenceVisible?: boolean | null;
      drugPreference?: string | null;
      isDrugPreferenceVisible?: boolean | null;
      therapyPreference?: string | null;
      isTherapyPreferenceVisible?: boolean | null;
      eatingPreferences?: string | null;
      areEatingPreferencesVisible?: boolean | null;
      exercisePreferenceID?: string | null;
      exercisePreference?: string | null;
      isExercisePreferenceVisible?: boolean | null;
      sleepingHabit?: string | null;
      isSleepingHabitVisible?: boolean | null;
      hometown?: string | null;
      isHometownVisible?: boolean | null;
      prompts?: string | null;
      userMainPhoto?: string | null;
      defaultUserPhoto?: number | null;
      bio?: string | null;
      discoveringYou?: string | null;
      isUserActive: boolean;
      isUserVerified?: boolean | null;
      isUserOnboarded?: boolean | null;
      isUserPaused?: boolean | null;
      isProfileComplete?: boolean | null;
      isHabitsComplete?: boolean | null;
      isOnboardingStarted?: boolean | null;
      onboardingStep?: number | null;
      signUpStep?: number | null;
      isSignUpComplete?: boolean | null;
      dailyReflectionReminderType?: string | null;
      dailyReflectionReminderFrequency?: string | null;
      dailyReflectionNotificationTime?: string | null;
      isDailyReflectionNotificationEnabled?: boolean | null;
      timeOffset?: string | null;
      isNewConnectionsNotificationPushActive?: boolean | null;
      isNewConnectionsNotificationEmailActive?: boolean | null;
      newMessagesNotificationType?: string | null;
      isNewMessagesNotificationEnabled?: boolean | null;
      streamToken?: string | null;
      oneSignalUserId?: string | null;
      activeConnections?: number | null;
      userDailyConnections?: string | null;
      connectionsUpdatedOn?: string | null;
      reflectionCompletedOn?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    language: {
      __typename: "CheckInQuestion";
      id: string;
      day?: number | null;
      sortOrder?: number | null;
      title?: string | null;
      question: string;
      quote: string;
      checkInQuestionCategoryID: string;
      checkInQuestionThemeID?: string | null;
      checkInQuestionContentCategoryId?: string | null;
      checkInQuestionContentCategoryName?: string | null;
      checkInQuestionTypeID: string;
      responses?: Array<string | null> | null;
      author?: string | null;
      dayImage?: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    userID: string;
    checkInQuestionID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateIceBreakerQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionFilterInput | null;
};

export type OnCreateIceBreakerQuestionSubscription = {
  onCreateIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIceBreakerQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionFilterInput | null;
};

export type OnUpdateIceBreakerQuestionSubscription = {
  onUpdateIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIceBreakerQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionFilterInput | null;
};

export type OnDeleteIceBreakerQuestionSubscription = {
  onDeleteIceBreakerQuestion?: {
    __typename: "IceBreakerQuestion";
    id: string;
    question: string;
    iceBreakerQuestionCategoryID: string;
    checkInQuestionCategory?: {
      __typename: "IceBreakerQuestionCategory";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateIceBreakerQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionCategoryFilterInput | null;
};

export type OnCreateIceBreakerQuestionCategorySubscription = {
  onCreateIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateIceBreakerQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionCategoryFilterInput | null;
};

export type OnUpdateIceBreakerQuestionCategorySubscription = {
  onUpdateIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteIceBreakerQuestionCategorySubscriptionVariables = {
  filter?: ModelSubscriptionIceBreakerQuestionCategoryFilterInput | null;
};

export type OnDeleteIceBreakerQuestionCategorySubscription = {
  onDeleteIceBreakerQuestionCategory?: {
    __typename: "IceBreakerQuestionCategory";
    id: string;
    name: string;
    isActive: boolean;
    question?: {
      __typename: "ModelIceBreakerQuestionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateEatingPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionEatingPreferenceFilterInput | null;
};

export type OnCreateEatingPreferenceSubscription = {
  onCreateEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateEatingPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionEatingPreferenceFilterInput | null;
};

export type OnUpdateEatingPreferenceSubscription = {
  onUpdateEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteEatingPreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionEatingPreferenceFilterInput | null;
};

export type OnDeleteEatingPreferenceSubscription = {
  onDeleteEatingPreference?: {
    __typename: "EatingPreference";
    id: string;
    name: string;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null;
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null;
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null;
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?: {
    __typename: "Quote";
    id: string;
    text: string;
    author: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null;
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null;
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null;
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?: {
    __typename: "Author";
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    image: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    quotes?: {
      __typename: "ModelQuoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null;
};

export type OnCreateContentSubscription = {
  onCreateContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null;
};

export type OnUpdateContentSubscription = {
  onUpdateContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null;
};

export type OnDeleteContentSubscription = {
  onDeleteContent?: {
    __typename: "Content";
    id: string;
    name: string;
    contentCategoryId: string;
    contentCategory?: {
      __typename: "ContentCategory";
      id: string;
      name: string;
      description?: string | null;
      dashboardImage?: string | null;
      internalPageHeaderImage?: string | null;
      progressionCardDotImage?: string | null;
      reflectionQuestionBackgroundImage?: string | null;
      inDashboard?: boolean | null;
      reflectionQuestionsGradientValues?: string | null;
      contentPageGradientValues?: string | null;
      isActive: boolean;
      sortOrder?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    contentTypeId: string;
    contentType?: {
      __typename: "ContentType";
      id: string;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Author";
      id: string;
      firstName: string;
      lastName: string;
      description: string;
      image: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
    media?: string | null;
    mediaDuration?: number | null;
    animatedGif?: string | null;
    image?: string | null;
    title?: string | null;
    subTitle?: string | null;
    text?: string | null;
    day?: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateContentCategoryDayImageSubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryDayImageFilterInput | null;
};

export type OnCreateContentCategoryDayImageSubscription = {
  onCreateContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateContentCategoryDayImageSubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryDayImageFilterInput | null;
};

export type OnUpdateContentCategoryDayImageSubscription = {
  onUpdateContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteContentCategoryDayImageSubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryDayImageFilterInput | null;
};

export type OnDeleteContentCategoryDayImageSubscription = {
  onDeleteContentCategoryDayImage?: {
    __typename: "ContentCategoryDayImage";
    id: string;
    contentCategoryId: string;
    url: string;
    day: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null;
};

export type OnCreateContentCategorySubscription = {
  onCreateContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null;
};

export type OnUpdateContentCategorySubscription = {
  onUpdateContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null;
};

export type OnDeleteContentCategorySubscription = {
  onDeleteContentCategory?: {
    __typename: "ContentCategory";
    id: string;
    name: string;
    description?: string | null;
    dashboardImage?: string | null;
    internalPageHeaderImage?: string | null;
    progressionCardDotImage?: string | null;
    reflectionQuestionBackgroundImage?: string | null;
    inDashboard?: boolean | null;
    reflectionQuestionsGradientValues?: string | null;
    contentPageGradientValues?: string | null;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    dayImages?: {
      __typename: "ModelContentCategoryDayImageConnection";
      nextToken?: string | null;
    } | null;
    sortOrder?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateContentTypeSubscriptionVariables = {
  filter?: ModelSubscriptionContentTypeFilterInput | null;
};

export type OnCreateContentTypeSubscription = {
  onCreateContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateContentTypeSubscriptionVariables = {
  filter?: ModelSubscriptionContentTypeFilterInput | null;
};

export type OnUpdateContentTypeSubscription = {
  onUpdateContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteContentTypeSubscriptionVariables = {
  filter?: ModelSubscriptionContentTypeFilterInput | null;
};

export type OnDeleteContentTypeSubscription = {
  onDeleteContentType?: {
    __typename: "ContentType";
    id: string;
    name: string;
    isActive: boolean;
    contents?: {
      __typename: "ModelContentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null;
};

export type OnCreatePromptSubscription = {
  onCreatePrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null;
};

export type OnUpdatePromptSubscription = {
  onUpdatePrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null;
};

export type OnDeletePromptSubscription = {
  onDeletePrompt?: {
    __typename: "Prompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionPromptCategoryFilterInput | null;
};

export type OnCreatePromptCategorySubscription = {
  onCreatePromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionPromptCategoryFilterInput | null;
};

export type OnUpdatePromptCategorySubscription = {
  onUpdatePromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionPromptCategoryFilterInput | null;
};

export type OnDeletePromptCategorySubscription = {
  onDeletePromptCategory?: {
    __typename: "PromptCategory";
    id: string;
    promptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateChatPromptSubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptFilterInput | null;
};

export type OnCreateChatPromptSubscription = {
  onCreateChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateChatPromptSubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptFilterInput | null;
};

export type OnUpdateChatPromptSubscription = {
  onUpdateChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteChatPromptSubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptFilterInput | null;
};

export type OnDeleteChatPromptSubscription = {
  onDeleteChatPrompt?: {
    __typename: "ChatPrompt";
    id: string;
    prompt: string;
    promptCategoryID: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateChatPromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptCategoryFilterInput | null;
};

export type OnCreateChatPromptCategorySubscription = {
  onCreateChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateChatPromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptCategoryFilterInput | null;
};

export type OnUpdateChatPromptCategorySubscription = {
  onUpdateChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteChatPromptCategorySubscriptionVariables = {
  filter?: ModelSubscriptionChatPromptCategoryFilterInput | null;
};

export type OnDeleteChatPromptCategorySubscription = {
  onDeleteChatPromptCategory?: {
    __typename: "ChatPromptCategory";
    id: string;
    chatPromptCategoryId: string;
    name: string;
    isActive: boolean;
    prompts?: {
      __typename: "ModelChatPromptConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateFeedbackUserSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackUserFilterInput | null;
};

export type OnCreateFeedbackUserSubscription = {
  onCreateFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateFeedbackUserSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackUserFilterInput | null;
};

export type OnUpdateFeedbackUserSubscription = {
  onUpdateFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteFeedbackUserSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackUserFilterInput | null;
};

export type OnDeleteFeedbackUserSubscription = {
  onDeleteFeedbackUser?: {
    __typename: "FeedbackUser";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateFeedbackTesterSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackTesterFilterInput | null;
};

export type OnCreateFeedbackTesterSubscription = {
  onCreateFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateFeedbackTesterSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackTesterFilterInput | null;
};

export type OnUpdateFeedbackTesterSubscription = {
  onUpdateFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteFeedbackTesterSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackTesterFilterInput | null;
};

export type OnDeleteFeedbackTesterSubscription = {
  onDeleteFeedbackTester?: {
    __typename: "FeedbackTester";
    id: string;
    feedback?: string | null;
    screen?: string | null;
    imageName?: string | null;
    deviceInfo?: string | null;
    userName?: string | null;
    userEmail?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateGeneralAppContentSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralAppContentFilterInput | null;
};

export type OnCreateGeneralAppContentSubscription = {
  onCreateGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateGeneralAppContentSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralAppContentFilterInput | null;
};

export type OnUpdateGeneralAppContentSubscription = {
  onUpdateGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteGeneralAppContentSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralAppContentFilterInput | null;
};

export type OnDeleteGeneralAppContentSubscription = {
  onDeleteGeneralAppContent?: {
    __typename: "GeneralAppContent";
    id: string;
    contentType?: string | null;
    title?: string | null;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateWaitlistUserSubscriptionVariables = {
  filter?: ModelSubscriptionWaitlistUserFilterInput | null;
};

export type OnCreateWaitlistUserSubscription = {
  onCreateWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateWaitlistUserSubscriptionVariables = {
  filter?: ModelSubscriptionWaitlistUserFilterInput | null;
};

export type OnUpdateWaitlistUserSubscription = {
  onUpdateWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteWaitlistUserSubscriptionVariables = {
  filter?: ModelSubscriptionWaitlistUserFilterInput | null;
};

export type OnDeleteWaitlistUserSubscription = {
  onDeleteWaitlistUser?: {
    __typename: "WaitlistUser";
    id: string;
    email?: string | null;
    userCity?: string | null;
    userIP?: string | null;
    userCoordinates?: string | null;
    userInternetProvider?: string | null;
    userZipCode?: string | null;
    userState?: string | null;
    userTimeZone?: string | null;
    relationshipStatus?: string | null;
    isDistanceImportant?: string | null;
    deviceType?: string | null;
    additionalInfo?: string | null;
    cityState?: string | null;
    referralCode?: string | null;
    verificationLinkToken?: string | null;
    position?: string | null;
    ageRange?: string | null;
    gender?: string | null;
    genderPreference?: string | null;
    readyInterests?: string | null;
    howDidYouHearAboutUs?: string | null;
    helpReady?: string | null;
    features?: string | null;
    comments?: string | null;
    userDevice?: string | null;
    userPlatform?: string | null;
    userAppName?: string | null;
    userAppVersion?: string | null;
    userScreenSize?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
