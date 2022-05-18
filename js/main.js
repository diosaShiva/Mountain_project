const navButton = document.querySelector ('.button');
const mobileNav = document.querySelector ('.mobile-nav');
const body = document.body;

navButton.addEventListener ('click', (event) => {
    toggleMobileNav () ;
    event.stopPropagation();
});

window.addEventListener ('click', () => {

    if (body.classList.contains ('no-scroll')) {
        toggleMobileNav () ;
    }
});

mobileNav.addEventListener ('click', (event) => {
    event.stopPropagation();
});


function toggleMobileNav () {
    mobileNav.classList.toggle ('mobile-nav-active');
    navButton.classList.toggle ('button-close');
    body.classList.toggle ('no-scroll');
}
