document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.setAttribute('tabindex', '-1');
    });
});

document.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('details').forEach((other) => {
                if (other !== item) other.removeAttribute('open');
            });
        }
    });
});
