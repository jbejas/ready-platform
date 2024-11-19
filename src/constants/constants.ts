export const STORY_TIMING = 5000;
export const STORY_PAUSE = 100000000000;
export const BASIC_INFO_TOTAL_STEPS: number = 8;
export const AGE_RANGE_MIN: number = 18;
export const AGE_RANGE_MAX: number = 80;
export const DISCOVERY_CATEGORY: string = "Discovery";
export const FILL_THE_BLANK: string = "Fill the blank";
export const ERROR_MESSAGES = {
  UserNotFoundException: "Please check your phone number",
};
export const REFLECTION_DAYS = 10;
export const DAY_MAIN_POSITION = 10;
export const ADDITIONAL_INSET_TOP = 60;
export const ADDITIONAL_INSET_BOTTOM = 60;

/**
 * This variable stores the screens for the "about you" step.
 * It is used to generate the progress bar and to move to the next step when clicking "next".
 */
export const ONBOARDING_ABOUT_YOU_SCREENS = [
  "GenderScreen",
  "GenderPreferenceScreen",
  "EthnicityScreen",
  "LanguagesScreen",
  "LocationScreen",
  "DistanceScreen",
  "AgeRangeScreen",
  "HeightScreen",
];
export const ONBOARDING_ABOUT_YOU_NEXT_SCREEN = "ProfileCompleteScreen";

export const ONBOARDING_SCREENS = [
  "ProfileSetupScreen", // 0
  "DiscoveringYouScreen", // 1
  "SecondProfileSetupScreen", // 2
  ...ONBOARDING_ABOUT_YOU_SCREENS,
  "ProfileCompleteScreen", // 11
  "UserPhotoScreen", // 12

  // "MentalHeathScreen",
  // "QualityScreen",
  // "EnergyScreen",
  // "SecondProfileSetupScreen",
  // "StarSignScreen",
  // "GenderScreen",
  // "PronounsScreen",
  // "KidsScreen",
  // "WantKidsScreen",
  // "ReligionScreen",
  // "HometownScreen",
  // "SchoolScreen",
  // "EducationScreen",
  // "FirstHabitsSetupScreen",
  // "TobaccoScreen",
  // "DrugsScreen",
  // "AlcoholScreen",
  // "TherapyScreen",
  // "ExerciseScreen",
];

export const SIGNUP_SCREENS = [
  "UserNameScreen", // 0
  "UserDateOfBirthScreen", // 1
  "AboutReadyScreen", // 2
];

export const STAR_SIGNS = [
  {
    value: "Aries",
  },
  {
    value: "Taurus",
  },
  {
    value: "Gemini",
  },
  {
    value: "Cancer",
  },
  {
    value: "Leo",
  },
  {
    value: "Virgo",
  },
  {
    value: "Libra",
  },
  {
    value: "Scorpio",
  },
  {
    value: "Sagittarius",
  },
  {
    value: "Capricorn",
  },
  {
    value: "Aquarius",
  },
  {
    value: "Pisces",
  },
];
