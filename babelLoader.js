const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'tee-loader', 
            {
              loader: 'babel-loader',
              options: {
                babelrc: true /** will get preset value from babelrc */
              }
            },
            {
              loader: 'tee-loader',
              options: {
                label: 'before'
              }
            }
          ],
        }
      ]
    },
    resolveLoader: {
      alias: {
        "tee-loader": path.resolve(__dirname, 'tee-loader.js')
      }
    }
}