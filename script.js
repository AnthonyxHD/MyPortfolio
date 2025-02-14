document.addEventListener('DOMContentLoaded', () => {
    const h2Elements = document.querySelectorAll('h2'); // Selects all h2 elements

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('h2-animate'); // Apply animation to the intersecting h2
                observer.unobserve(entry.target); // Stop observing this h2 after animation triggers
            }
        });
    }, {
        threshold: 1,
    });

    h2Elements.forEach(h2 => observer.observe(h2)); // Observe each h2 individually
});



document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('img.img-fluid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imageElement.classList.add('sticker-animate');
                observer.unobserve(imageElement);
            }
        });
    }, {
        threshold: 1,
    });

    observer.observe(imageElement);
});



