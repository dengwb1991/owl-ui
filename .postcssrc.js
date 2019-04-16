module.exports = {
  plugins: [
    require('autoprefixer')({
      'browsers': ['> 1%', 'last 2 versions']
    }),
    require('postcss-pxtorem')({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    })
  ]
}