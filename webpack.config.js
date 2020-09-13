const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const babelLoader = require('./babelLoader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [{
  name: 'other',
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'app/other'),
    filename: 'app.bundle.js'
  }
},
function (env) {
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
  
  const baseConfig = {
    entry: './app/app.js',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/'
    },
    mode: 'none',
    plugins: [
      new CleanWebpackPlugin({ dry: true, cleanOnceBeforeBuildPatterns: ['app/dist'] }),
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopment,
        ENV_IS : JSON.stringify(env)
      }),
      // new webpack.HotModuleReplacementPlugin()
    ]
  };

  if (isDevelopment) {
    return merge(baseConfig, {
      devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true,
        host: '0.0.0.0' /** this allow anyone to access our IP/localhost from their external computers */
      },
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // {  /** to create/ compile our own plugin */
        //   apply(compiler) {
        //     compiler.hooks.done.tap("done", params => console.log(require('util').inspect(compiler.options)));
        //     // compiler.plugin("done", function(params) { /** old syntax */
        //     //   console.log(require('util').inspect(compiler.options));
        //     // })
        //   }
        // }
      ]
    });
  } else {
    return merge(baseConfig, babelLoader);
  };
}];