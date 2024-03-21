 document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});


