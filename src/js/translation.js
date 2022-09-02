import Translator from "@andreasremdt/simple-translator";

import EN from "../locales/en.json";
import FR from "../locales/fr.json";

const Html = document.querySelector("html");

const langToggle = (lang) => {
  translator.translatePageTo(lang);
};

const translator = new Translator({
  defaultLanguage: "fr",
  detectLanguage: true,
});

translator.add("fr", FR);
translator.add("en", EN);

langToggle(Html.lang);
