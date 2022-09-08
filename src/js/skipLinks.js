const skipLinks = document.querySelector("#skip-links");
const skipLink = skipLinks.querySelectorAll(".skip-link");

const goToContent = (event, link) => {
  const id = document.querySelector(`${link}`);

  if (event.key === "Enter") {
    id.setAttribute("tabindex", "0");
    id.focus();
    event.preventDefault();
  }
};

skipLink.forEach((link) => {
  const idLink = link.getAttribute("href");

  link.addEventListener("keydown", (event) => {
    goToContent(event, idLink);
  });
});
