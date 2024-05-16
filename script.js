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
const projetoCinco = document.querySelector(".dev5");
const projetoSeis = document.querySelector(".dev6");
const projetoSete = document.querySelector(".dev7");
const projetoOito = document.querySelector(".dev8");
const projetoNove = document.querySelector(".dev9");

const contacts = {
    linkedin : {
        element: document.querySelector(".linkedin"),
        url: 'https://www.linkedin.com/in/wogabriel/'
    },
    whatsapp : {
        element:  document.querySelector(".whatsapp"),
        url : 'https://wa.me/5551993180317'
    },
    email : {
        element: document.querySelector(".email"),
        url: 'gabrielantunesemp@gmail.com'
    } 
}

const projetos = {
    jogoDaVelha: 'https://uobiel.github.io/jogoDaVelha/',
    jogoDaMemoria: 'https://uobiel.github.io/memoriGame/',
    petShop: 'https://uobiel.github.io/projetoPetShop/',
    hamburgueria: 'https://uobiel.github.io/projetoHamburgueria/',
    gestaoUniversitaria: 'https://uobiel.github.io/gestaoUniversitaria/',
    notas: 'https://uobiel.github.io/notas/',
    buscaCep: 'https://uobiel.github.io/buscaCEP/',
    paises: 'https://uobiel.github.io/Paises/',
    clima: 'https://uobiel.github.io/ProjetoClima/'
}

contacts.linkedin.element.addEventListener('click', () => acessaSite(contacts.linkedin.url));
contacts.whatsapp.element.addEventListener('click', () => acessaSite(contacts.whatsapp.url));

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
projetoCinco.addEventListener('click', () => acessaSite(projetos.notas));
projetoSeis.addEventListener('click', () => acessaSite(projetos.gestaoUniversitaria));
projetoSete.addEventListener('click', () => acessaSite(projetos.paises));
projetoOito.addEventListener('click', () => acessaSite(projetos.clima));
projetoNove.addEventListener('click', () => acessaSite(projetos.buscaCep));