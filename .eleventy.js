module.exports = eleventyConfig => {

    eleventyConfig.addPassthroughCopy('./img')
    eleventyConfig.addPassthroughCopy('./_redirects')
    eleventyConfig.addPassthroughCopy('./_headers')
    eleventyConfig.addPassthroughCopy('./font')

    eleventyConfig.addFilter('lowerAndHyphen', string => string.toLowerCase().replace(/\s/g, "-"))

    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}