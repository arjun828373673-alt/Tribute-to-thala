document.querySelectorAll('nav a').forEach(anchor=> {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector('targetId');
    if (targetSection) {
        targetSection.scrollIntoView({
            behaviour: 'smooth',
            block: 'start'
        });
    }
 });
});

window.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('header h1');
})
