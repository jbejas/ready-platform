import dayjs from "dayjs";
// Sentry
import { captureEvent } from "@sentry/react-native";

export const sentryTracker = (event, screen, user) => {
  captureEvent({
    message: event,
    level: "info", // Severity level (fatal, error, warning, info, debug)
    tags: {
      // Custom tags
      screen,
    },
    extra: {
      // Additional data
      timestamp: dayjs().valueOf(),
    },
    user: {
      // Associating the event with a user
      id: user.id,
      email: user.email,
    },
  });
};
