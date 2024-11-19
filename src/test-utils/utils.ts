//isScreenShowed.ts
import { by, element, expect } from "detox";
// to check that the screen with screenId is visible, used for //navigation
export const isScreenShowed = async (screenId: string) => {
  const myScreen = element(by.id(`screen.${screenId}`));
  await expect(myScreen).toBeVisible();
};
