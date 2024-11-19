module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
          ],
          root: ["."],
          alias: {
            "@src": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@i18n": "./src/i18n",
            "@locales": "./src/locales",
            "@store": "./src/store",
            "@api": "./src/api",
            "@graphql": "./src/graphql",
            "@chatconfig": "./src/chatConfig",
            "@detox": "./src/detox",
          },
        },
      ],
      "react-native-paper/babel",
      "react-native-reanimated/plugin", // Reanimated plugin has to be listed last.
    ],
  };
};
