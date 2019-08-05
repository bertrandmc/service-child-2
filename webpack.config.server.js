const path = require('path');

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build/server"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/culturetrip-ui')
        ],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  target: "node"
};
