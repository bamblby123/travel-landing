(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('.header');

        window.onscroll = () => {
            if (window.pageYOffset > 50) {
                header.classList.add('header-active');
            } else {
                header.classList.remove('header-active');
            }
        }
    })
})();

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link')
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
    if(window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function () {
                menu.classList.remove('header__nav-active');
            })
        }
    }
})();