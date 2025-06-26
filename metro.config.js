// metro.config.js
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

// pull the FULL default lists
const {
  resolver: { sourceExts: defaultSourceExts, assetExts },
  transformer,
} = defaultConfig;

// create our merged config
const customConfig = mergeConfig(defaultConfig, {
  resolver: {
    assetExts,
    // ✅ keep every default ext and just append "css"
    sourceExts: [...defaultSourceExts, "css"],
  },
  transformer: {
    ...transformer,
    // ✅ tell Metro to use css transformer
    babelTransformerPath: require.resolve("react-native-css-transformer"),
  },
});

// wrap with NativeWind
module.exports = withNativeWind(customConfig, {
  input: "./src/global.css",
});
