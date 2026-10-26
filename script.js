

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
