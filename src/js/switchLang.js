import { translationToggle } from './translation';

const Btn = document.querySelector('#switch-lang');

let isFrench = true;

const toggle = () => {
  if (isFrench === true) {
    translationToggle('fr');
  } else {
    translationToggle('en');
  }
};

Btn.addEventListener('click', () => {
  isFrench = !isFrench;
  toggle();
});
