const name = require("./package.json").name;
module.exports = {
    publicPath: './',
    outputDir:`dist/${name}`,
    lintOnSave:false
  }