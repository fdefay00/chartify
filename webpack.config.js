const path = require('path');
module.exports = (env) => {
  console.log({ env });
  return {
    entry: './app/index.js',
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), //this is the folder you want to save your bundle in - feel free to change
    },
    devtool: 'source-map',

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
