const sessaoDois = document.querySelector("#sessao-dois");
const cards = document.querySelectorAll(".cards");
const sections = document.querySelectorAll(".hidden");
const botaoQA = document.querySelector(".qaButton");
const botaoDev = document.querySelector(".devButton");
const paginaUm = document.querySelector(".pageOne");
const paginaDois = document.querySelector(".pageTwo");
const projetoUm = document.querySelector(".dev1");
const projetoDois = document.querySelector(".dev2");
const projetoTres = document.querySelector(".dev3");
const projetoQuatro = document.querySelector(".dev4");

const contactElements = {
    linkedin: document.querySelector(".linkedin"),
    whatsapp: document.querySelector(".whatsapp"),
    email: document.querySelector(".email")
}

const projetos = {
    jogoDaVelha: 'https://uobiel.github.io/jogoDaVelha/',
    jogoDaMemoria: 'https://uobiel.github.io/memoriGame/',
    petShop: 'https://uobiel.github.io/projetoPetShop/',
    hamburgueria: 'https://uobiel.github.io/projetoHamburgueria/'
}

contactElements.linkedin.addEventListener('click', () => acessaSite("www.google.com.br"));

const acessaSite = (url) => {
    window.open(url, '_blank');
}

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

sections.forEach(section => myObserver.observe(section));

botaoDev.addEventListener('click', function(){
    paginaUm.style.display = 'none';
    paginaDois.style.display = 'inline';
})

botaoQA.addEventListener('click', function(){
    paginaUm.style.display = 'inline';
    paginaDois.style.display = 'none';
})

projetoUm.addEventListener('click', () => acessaSite(projetos.jogoDaVelha));
projetoDois.addEventListener('click', () => acessaSite(projetos.jogoDaMemoria));
projetoTres.addEventListener('click', () => acessaSite(projetos.petShop));
projetoQuatro.addEventListener('click', () => acessaSite(projetos.hamburgueria));