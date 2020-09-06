module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false /** will not get preset value from babelrc */
              //   presets: [
              //     ['@babel/preset-env', {
              //       debug: true,
              //       modules: false,
              //       targets: {
              //       browsers: ['> 1%', 'not IE < 12']
              //       }
              //   }]
              // ]
            }
          }
        }
      ]
    }
}