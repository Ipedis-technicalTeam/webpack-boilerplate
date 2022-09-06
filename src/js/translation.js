import Translator from "@andreasremdt/simple-translator";

import EN from "../locales/en.json";
import FR from "../locales/fr.json";

const translator = new Translator({
  defaultLanguage: "fr",
  detectLanguage: true,
  debug: true,
  persist: false,
  fileLocation: "./src/locales",
});

translator.add("fr", FR);
translator.add("en", EN);

export const translationToggle = (lang, data) => {
  if (lang === "fr") {
    translator.translatePageTo("fr");
  } else if (lang === "en") {
    translator.translatePageTo("en");
  } else {
    translator.add(lang, data);
    translator.translatePageTo(lang);
  }
};
