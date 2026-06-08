document.getElementById("contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});


let tamanhoFonte = 100;
const minimo = 70;
const maximo = 140;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    if (tamanhoFonte < maximo) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoFonte}%`;
    }
});

document.getElementById("diminuirFonte").addEventListener("click", () => {
    if (tamanhoFonte > minimo) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = `${tamanhoFonte}%`;
    }
});


const botaoMenu = document.getElementById("toggle-menu");
const painel = document.getElementById("painel-acessibilidade");

botaoMenu.addEventListener("click", function (e) {
    e.stopPropagation(); 
    painel.classList.toggle("ativo"); 

  
    var estaAberto = painel.classList.contains("ativo");
    this.setAttribute("aria-expanded", estaAberto);
});


document.addEventListener("click", function (e) {
    if (!painel.contains(e.target) && !botaoMenu.contains(e.target)) {
        painel.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", false);
    }
});