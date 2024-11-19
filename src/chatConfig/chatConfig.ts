const getChatApiKey = () => {
  console.log(
    "process.env.EXPO_PUBLIC_ENVIRONMENT",
    process.env.EXPO_PUBLIC_ENVIRONMENT,
  );
  switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
    case "dev":
      return "sy7a6sfsnuk7"; // Dev
    case "staging":
      return "5qcm7pdxmfds"; // Staging
    case "beta":
      return "nvtb7dpk7tw4"; // Beta
    case "prod":
      return "trv6ndfpdn3u"; // Prod
    default:
      throw new Error("Unknown environment");
  }
};

export const CHAT_API_KEY = getChatApiKey();
