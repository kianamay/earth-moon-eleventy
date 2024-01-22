module.exports = function(eleventyConfig){
    eleventyConfig.addPassThroughCopy("images");
    eleventyConfig.addPassThroughCopy("styles");
}