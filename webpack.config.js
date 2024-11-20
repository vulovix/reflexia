const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    foo: "./src/main-foo.ts",
    bar: "./src/main-bar.ts",
    baz: "./src/main-baz.ts",
    qux: "./src/main-qux.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "[name]Module",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
};
