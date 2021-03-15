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

// Burger menu icon
const burgerMenuIcon = document.querySelector('.burger-icon'),
      burgerMenuIconLine = burgerMenuIcon.querySelector('.burger-line');

burgerMenuIcon.addEventListener('click', () => {
    burgerMenuIcon.classList.toggle('activ');
    burgerMenuIconLine.classList.toggle('activ');
});

// modal 
const btnCloseModal = document.querySelectorAll('[data-close]'),
      btnOpenModal = document.querySelectorAll('[data-modal-btn]'),
      BtnOpenModalLogin = document.querySelectorAll('[data-modal-btn="user"]'),
      linkRegisterUser = document.querySelector('.login-in__reg-link'),
      modal = document.querySelectorAll('[data-modal]'),
      modalUser = document.querySelector('[data-modal="user"]'),
      modalRegister = document.querySelector('[data-modal="register"]'),
      modalSubscribe = document.querySelector('[data-modal="subscribe"]');

BtnOpenModalLogin.forEach( item => {
    item.addEventListener('click', ()=>{
        modalUser.classList.add('show');
        modalUser.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
});      

function closeModal() {
    modal.forEach( item => {
        item.classList.remove('show');
        item.classList.add('hide');
        document.body.style.overflow = '';
    });
}

btnCloseModal.forEach( item => {
    item.addEventListener('click', closeModal);
});

modal.forEach( (item) => {
    item.addEventListener('click', (e) =>{
        if (e.target === item) {
            // console.log(item);
            closeModal();
        }
    });
});

document.addEventListener('keydown', (e) =>{
    if (e.code === "Escape") {
        closeModal();
    }
});

linkRegisterUser.addEventListener('click', () =>{
    closeModal();
    modalRegister.classList.remove('hide');
    modalRegister.classList.add('show');
});


// disable btn registration, subscribe
const btnRegister = document.querySelector('.register__btn'),
      btnSubscribe = document.querySelector('.modal-subscribe__btn');

btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
});
btnSubscribe.addEventListener('click', (e) => {
    e.preventDefault();
});

// subscribe
const linkModalSubscribe = document.querySelector('.subscribe__btn');

linkModalSubscribe.addEventListener('click', (e) =>{
    e.preventDefault();
    modalSubscribe.classList.remove('hide');
    modalSubscribe.classList.add('show');
    document.body.style.overflow = 'hidden';
});
