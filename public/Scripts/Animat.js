const elements = document.querySelectorAll(".ElementScrow");
const elementsScrow = Array.from(elements);

console.log(elementsScrow);

const windowHeingMargin = window.innerHeight * 0.68;

export const AnimaScrow = () => {
  elementsScrow.forEach((element) => {
    const nextElement = element.getBoundingClientRect().top - windowHeingMargin;

    nextElement <= 0
      ? element.classList.add("ScrowMove")
      : element.classList.remove("ScrowMove");
  });
};


/* ============TESTE1

window.addEventListener("scroll", function (event) {
  console.log("Elemento alvo:", event.target);
  console.log("Tipo de evento:", event.type);
  
  console.log("Posição de rolagem vertical:", window.scrollY);
  console.log("Posição de rolagem horizontal:", window.scrollX);
},false);

*/

