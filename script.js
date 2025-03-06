document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! Our checkout system is currently under development.');
        });
    });
});