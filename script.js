document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('header h1');
    const hours = new Date().getHours();
    let greeting = "The Man The Myth The Mahi";

    if (hours < 12) {
        greeting = "Good Morning, Thala Fan! — The Man The Myth The Mahi";
    } else if (hours < 18) {
        greeting = "Good Afternoon, Thala Fan! — The Man The Myth The Mahi";
    }  else {
        greeting = "Good Evening, Thala Fan! — The Man The Myth The Mahi";
    }

    headerTitle.textContent = greeting;

});

const observerOptions = {
    thershold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.computedStyleMap.opacity = '1';
            entry.target.computedStyleMap.transform = 'TranslateY(0)';
            observer.unobserve(entry.target);
        }
 });
}, observerOptions);