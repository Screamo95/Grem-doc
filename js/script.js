// Бургер меню

openBurger = document.querySelector(`.burger__open`)
closeBurger = document.querySelector(`.burger__close`)
linkBurger = document.querySelector(`.burger__nav`)
burgerMenu = document.querySelector(`.burger__menu`)

openBurger.onclick = function() {
  burgerMenu.classList.add(`burger__menu-open`)
  burgerMenu.classList.remove(`burger__menu-close`)
  openBurger.classList.add(`burger__start`)
  closeBurger.classList.remove(`burger__start`)
}

closeBurger.onclick = function() {
  burgerMenu.classList.remove(`burger__menu-open`)
  burgerMenu.classList.add(`burger__menu-close`)
  openBurger.classList.remove(`burger__start`)
  closeBurger.classList.add(`burger__start`)
}

linkBurger.onclick = function() {
  burgerMenu.classList.remove(`burger__menu-open`)
  burgerMenu.classList.add(`burger__menu-close`)
  openBurger.classList.remove(`burger__start`)
  closeBurger.classList.add(`burger__start`)
}

// Product swiper
const product_swiper = new Swiper('.product .swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Выпадающее меню job

document.querySelector(`.job__btn`).onclick = function() {
  document.querySelector(`.job__select`).classList.toggle(`job__select_close`)
}

document.querySelector(`.job__select-link_1`).onclick = function() {
  document.querySelector(`.job__select`).classList.add(`job__select_close`)
  document.querySelector(`.job__btn-txt`).textContent = `Наше производство`
  document.querySelector(`.job__box_1`).classList.remove(`job__box_close`)
  document.querySelector(`.job__box_2`).classList.add(`job__box_close`)
  document.querySelector(`.job__box_3`).classList.add(`job__box_close`)
}

document.querySelector(`.job__select-link_2`).onclick = function() {
  document.querySelector(`.job__select`).classList.add(`job__select_close`)
  document.querySelector(`.job__btn-txt`).textContent = `Лесоуправление и заготовка`
  document.querySelector(`.job__box_2`).classList.remove(`job__box_close`)
  document.querySelector(`.job__box_1`).classList.add(`job__box_close`)
  document.querySelector(`.job__box_3`).classList.add(`job__box_close`)
}

document.querySelector(`.job__select-link_3`).onclick = function() {
  document.querySelector(`.job__select`).classList.add(`job__select_close`)
  document.querySelector(`.job__btn-txt`).textContent = `Питомник`
  document.querySelector(`.job__box_3`).classList.remove(`job__box_close`)
  document.querySelector(`.job__box_1`).classList.add(`job__box_close`)
  document.querySelector(`.job__box_2`).classList.add(`job__box_close`)
}