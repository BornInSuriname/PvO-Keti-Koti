document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hiddenSections = document.querySelectorAll('.hidden');

function revealOnScroll() {
    hiddenSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

document.getElementById("year").innerText = new Date().getFullYear();