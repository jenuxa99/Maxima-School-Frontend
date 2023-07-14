"use strict";

$('.slider').slick({
    infinity: true,
    prevArrow: '<button class="own-btn prev-btn">&lt</button>',
    nextArrow: '<button class="own-btn next-btn">&gt;</button>',
});

const modalMenuEl = document.querySelector('.modal-menu-wrapper');
const modalCloseEl = document.querySelector('#modal-menu-close');
const modalOpenEl = document.querySelector('#modal-menu-open');
const containerEl = document.querySelector('.container');

modalOpenEl.addEventListener('click', () => {
    modalMenuEl.classList.add('slide-in');
    containerEl.classList.add('blur');
});

modalCloseEl.addEventListener('click', () => {
    modalMenuEl.classList.remove('slide-in');
    containerEl.classList.remove('blur');
});