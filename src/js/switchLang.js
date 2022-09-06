import { translationToggle } from "./translation";

const Html = document.querySelector("html");
const Btn = document.querySelector("#switch-lang");

let isFrench = true;

const toggle = () => {
  if (isFrench === true) {
    Html.lang = "fr";
    translationToggle("fr");
  } else {
    Html.lang = "en";
    translationToggle("en");
  }
};

Btn.addEventListener("click", () => {
  isFrench = !isFrench;
  toggle();
});

translationToggle(Html.lang);
