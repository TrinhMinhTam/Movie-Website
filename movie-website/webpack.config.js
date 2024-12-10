const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Cấu hình hiện tại của bạn...
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
      assert: require.resolve("assert/"),
      zlib: require.resolve("browserify-zlib"),
      util: require.resolve("util/"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
