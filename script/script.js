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
const btnCloseModal = document.querySelectorAll('[data-close]'),
      btnOpenModal = document.querySelectorAll('[data-modal-btn]'),
      BtnOpenModalLogin = document.querySelector('[data-modal-btn="user"]'),
      btnRegisterUser = document.querySelector('.login-in__reg-link'),
      modal = document.querySelectorAll('[data-modal]'),
      modalUser = document.querySelector('[data-modal="user"]'),
      modalRegister = document.querySelector('[data-modal="register"]');

BtnOpenModalLogin.addEventListener('click', ()=>{
    modalUser.classList.add('show');
    modalUser.classList.remove('hide');
    document.body.style.overflow = 'hidden';
})

function closeModal() {
    modal.forEach( item => {
        item.classList.remove('show');
        item.classList.add('hide');
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

btnRegisterUser.addEventListener('click', () =>{
    closeModal();
    modalRegister.classList.remove('hide');
    modalRegister.classList.add('show');
})