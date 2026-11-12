
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/scripts');

    eleventyConfig.addFilter("dayDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    eleventyConfig.addFilter("kabab", (str) => {
        return String(str)
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")   // any run of non-alphanumerics becomes one hyphen
            .replace(/^-+|-+$/g, "");      // strip leading/trailing hyphens
    });

    return {
        pathPrefix: "/look-and-feel-corporate-identity/",

        dir: {
            input: "src",
            output: "public"
        }
    };
}
