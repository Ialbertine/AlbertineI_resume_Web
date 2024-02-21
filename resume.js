document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form-contact');

    form.addEventListener('submit', function (event) {
        const nameInput = document.querySelector('.form-text[name="name"]');
        const emailInput = document.querySelector('.form-text[name="email"]');
        const phoneInput = document.querySelector('.form-text[name="phonenumber"]');
        const messageInput = document.querySelector('.form-textarea');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '') {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
});

