export default function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
