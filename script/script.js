'use stricts'

// disable empty links
const emptyLinks = document.querySelectorAll('a[href=""]');

emptyLinks.forEach( (item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
