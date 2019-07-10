module.exports = {
  plugins: [
    require('autoprefixer')({
      'overrideBrowserslist': ['> 1%', 'last 5 versions']
    }),
    require('postcss-pxtorem')({
      rootValue: 75,
      propList: ['*'],
      selectorBlackList: []
    })
  ]
}