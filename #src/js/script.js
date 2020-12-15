'use strict'

const modal = document.querySelector('.modal__signIn'),
    closeModal = document.querySelector('.close__modal'),
    layer = document.querySelector('.modal__overlay'),
    loginButton = document.querySelector('#login__button');

loginButton.addEventListener('click', (ev) => {
    toggleModal();
    layer.addEventListener('click', (ev) => {
        toggleModal();
    });
});

closeModal.addEventListener('click', (ev) => {
    toggleModal();
});

function toggleModal(){
    modal.classList.toggle("hide");
    layer.classList.toggle("hide");
}