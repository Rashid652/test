let BurgerBtn = document.querySelector('.burger-btn')
let Burger = document.querySelector('.burger')

BurgerBtn.addEventListener('click', function() {
    Burger.classList.toggle('active')
})