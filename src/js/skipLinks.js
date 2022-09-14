const skipLinks = document.querySelector('#skip-links');
const skipLink = skipLinks.querySelectorAll('.skip-link');

const goToContent = (event, link) => {
  const id = document.querySelector(`${link}`);

  console.log(event.key);

  if (event.key === 'Enter' || event.key === ' ') {
    id.setAttribute('tabindex', '0');
    id.focus();
    event.preventDefault();
  }

  id.addEventListener('blur', e => {
    e.target.removeAttribute('tabindex');
  });
};

skipLink.forEach(link => {
  const idLink = link.getAttribute('href');

  link.addEventListener('keydown', event => {
    goToContent(event, idLink);
  });
});
