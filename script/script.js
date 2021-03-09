'use stricts'

// disable empty links
const emptyLinks = document.querySelectorAll('a[href=""]');

emptyLinks.forEach( (item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// menu
const subMenu = document.querySelector('.submenu'),
      subMenuItem = subMenu.querySelectorAll('.submenu__item');

subMenu.addEventListener('mouseover', () => {
    subMenu.classList.add('activ');
    subMenuItem.forEach( (item) => {
        item.classList.add('activ');
    });
});
subMenu.addEventListener('mouseout', () => {
    subMenu.classList.remove('activ');
    subMenuItem.forEach( (item) => {
        item.classList.remove('activ');
    });
});

// modal
const modalWindow = document.querySelectorAll('.modal'),
      modalContent = modalWindow.querySelectorAll('.modal__content'),
      modalBtnClose = modalContent.querySelectorAll('.modal__close');

