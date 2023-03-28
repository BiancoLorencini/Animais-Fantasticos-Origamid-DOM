export default function initAnimaNumeros() {}

const numeros = document.querySelectorAll("[data-numero]");

numeros.forEach((numero) => {
  const total = +numero.innerText;
  const incremento = Math.floor(total / 100);
  let start = 0;
  const timer = setInterval(() => {
    start = start + incremento;
    numero.innerText = start;
    if (start > total) {
      numero.innerText = total;
      clearInterval(timer);
    }
  }, 9000 * Math.random());
});

function handleMutation() {
  console.log("mutou")
};

const observeTarget = document.querySelector(".numeros");
const observer = new MutationObserver(handleMutation);

observer.observe(observeTarget, {attributes: true});
