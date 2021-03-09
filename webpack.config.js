const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.scss$/,

      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        // 3. injects css into DOM "css-loader",
        // 2.turns css into commonjs "sass-loader",
        // 1.turns sass into css
      ],
    }, ],
  },
};