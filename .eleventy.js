
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/scripts');

    eleventyConfig.addFilter("dayDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        pathPrefix: "/look-and-feel-corporate-identity/",

        dir: {
            input: "src",
            output: "public"
        }
    };
}
