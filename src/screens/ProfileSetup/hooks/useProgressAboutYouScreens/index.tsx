import { useNavigationState } from "@react-navigation/native";
import {
  ONBOARDING_ABOUT_YOU_NEXT_SCREEN,
  ONBOARDING_ABOUT_YOU_SCREENS,
} from "@src/constants/constants";

const PROGRESS_MIN = 5;

export default function useProgressAboutYouScreens() {
  const currentStackName = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const currentStep = ONBOARDING_ABOUT_YOU_SCREENS.indexOf(currentStackName);

  const nextStep =
    currentStep === ONBOARDING_ABOUT_YOU_SCREENS.length - 1
      ? ONBOARDING_ABOUT_YOU_NEXT_SCREEN
      : ONBOARDING_ABOUT_YOU_SCREENS[currentStep + 1];

  const calculateProgress = (step: number) =>
    Math.max((step / ONBOARDING_ABOUT_YOU_SCREENS.length) * 100, PROGRESS_MIN);

  return {
    beforeProgress: calculateProgress(currentStep - 1),
    progress: calculateProgress(currentStep),
    nextStep,
  };
}
