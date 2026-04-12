const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

const cssInput = path.resolve(__dirname, "global.css").replace(/\\/g, "/");

module.exports = withNativeWind(config, { input: cssInput });
