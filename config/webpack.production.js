module.exports = () => ({
  devtool: 'source-map',
  output :{
    filename: '[chunkhash].js'
  },
  module:{
    rules:[{

      test:/\.css$/,
      use:['style-loader','css-loader']
    }
      
    ]
  }

});