const path = require('path');

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: "./src/shared/PlacesToStay.js",
  output: {
    library: 'PlacesToStay',
    libraryTarget: 'umd',
    filename: 'PlacesToStay.js',
    path: path.resolve(__dirname, "build/client")
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
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'styled-components': {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      root: "styled"
    }
  }
};
