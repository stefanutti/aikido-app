module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Allow Babel to automatically determine whether a file is an ES module
    // or CommonJS. This prevents CommonJS helpers in node_modules from being
    // transformed into ESM default exports, which can cause runtime errors
    // such as "_interopRequireDefault is not a function" on web.
    sourceType: 'unambiguous',
    plugins: [],
  };
};