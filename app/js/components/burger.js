const burger = () => {
    let menuBody = document.querySelector('.menu'),
    burgerIcon = document.querySelector('.menu__icon'),
    body = document.querySelector('body');

    burgerIcon.addEventListener('click', () => {
        menuBody.classList.toggle('_active');
        body.classList.toggle('lock')
    })
}

burger();