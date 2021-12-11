const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // dev-serveriiin davuu tal ni coden dr uurchlult hiivel automataar uurchlultiig haruulna
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html", // manai ene index.html-g distruu hiine shuu gej zaaj ugch bna , dr duridsan main.js iig ene index.html-d hiij ugdug bid html codendoo zaaj uguugui bgaa
    }),
  ],
};
