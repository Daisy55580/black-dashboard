const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const loadEnvConfig = env => require(`./config/webpack.${env}`)(env); 
// const loadPresetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode,presets } = { mode:'development',presets: []} ) => {
  return webpackMerge (
    {
      devServer:{
        contentBase:'./dist',
        hot:true,
      },
    mode,
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use:[{
            loader:'url-loader',
            options: {
              limit: 5000
            }
          }]
        }
      ]
    },
    output: {
     path: path.resolve(__dirname,'./dist'), //绝对路径
     filename: 'bundle.js'
   },
   plugins: [
      new HTMLWebpackPlugin({
        title: 'Black Dashboard',
        template: path.resolve(__dirname,'./src/index.html')
      }),
      new webpack.ProgressPlugin()
   ]
  },
  loadEnvConfig(mode),
  // loadPresetConfig({mode,presets})

  );
  } 





