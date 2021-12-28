const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    defaultLanguage: "en",
    fallbackLng: ["en"]
  },
  localePath: path.resolve("./pages/public/locales")
};
