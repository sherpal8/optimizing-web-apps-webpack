const path = require('path');
const webpack = require('webpack');

const baseConfig = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/dist/',
    watchContentBase: false,
    hotOnly: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = function (env) {
  /** first, webpack will read the CLI-entered value for ENV */
  /** then, it will use that value inside this exported function */
  /** then, it determine the env */
  /** finally, webpack will return baseConfig object with the right props */
  const isDevelopment = env === 'development';
  /**
  * to set up env, inside CLI type:
  *   NODE_ENV=development npm run build
  */
  console.log(`This is a ${isDevelopment ? 'development' : 'production'} build`);

  if (isDevelopment) {
    baseConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  };
   return baseConfig 
};