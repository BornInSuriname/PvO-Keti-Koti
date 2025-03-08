function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav-links');
    if (!e.target.closest('nav')) {
        nav.classList.remove('active');
    }
});
