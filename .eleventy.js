module.exports = eleventyConfig => {

    eleventyConfig.addPassthroughCopy('./img')

    eleventyConfig.addFilter('lowerAndHyphen', string => string.toLowerCase().replace(/\s/g, "-"))

    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}