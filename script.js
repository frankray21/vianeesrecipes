document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (name && email && subject && message) {
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';

            form.reset();
        }
    });
});
const scrollButton = document.createElement('button');
scrollButton.textContent = '↑';
scrollButton.classList.add('scroll-to-top');
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});