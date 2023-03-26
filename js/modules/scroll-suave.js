export default function initScrollSmooth() {
  const internLinks = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // })
  }

  internLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
