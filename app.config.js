import dotenv from "dotenv";
import devConfig from "./config.dev.json";
import stagingConfig from "./config.staging.json";
import betaConfig from "./config.beta.json";
import prodConfig from "./config.prod.json";

// Load environment variables from the .env file
dotenv.config();

const getConfig = (env) => {
  switch (env) {
    case "staging":
      return stagingConfig;
    case "beta":
      return betaConfig;
    case "prod":
      return prodConfig;
    default:
      return devConfig;
  }
};

// Get the environment from the .env file (default to 'dev' if not set)
const config = getConfig(process.env.ENVIRONMENT || "dev");

export default ({ config: baseConfig }) => {
  const updatedConfig = {
    ...baseConfig,
    name: config.name || "Ready Dev",
    slug: config.slug || "ready-platform-app-dev",
    version: config.appVersion || "0.0.1",
    ios: {
      bundleIdentifier: config.bundleIdentifier,
    },
    android: {
      package: config.package,
      versionCode: config.versionCode || 1,
    },
    plugins: [
      [
        "@sentry/react-native/expo",
        {
          organization: config.sentryOrganization,
          project: config.sentryProject,
          dsn: config.sentryDSN,
          enableInExpoDevelopment: true,
          debug: config.sentryDebug || false,
        },
      ],
      ...baseConfig.plugins,
    ],
    extra: {
      oneSignalAppId: config.oneSignalAppId,
      eas: {
        projectId: config.easProjectId,
      },
    },
  };

  console.log("Updated Config", updatedConfig);

  return updatedConfig;
};
