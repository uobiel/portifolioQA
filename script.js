const sessaoDois = document.querySelector("#sessao-dois");
const cards = document.querySelectorAll(".cards");
const sections = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

sections.forEach(section => myObserver.observe(section));
