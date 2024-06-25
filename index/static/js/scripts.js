// Scripts 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Inicializar ScrollReveal
ScrollReveal().reveal('.reveal-top', {
    distance: '25px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'top',
    reset: true
});

ScrollReveal().reveal('.reveal-right', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'right',
    reset: true
});

ScrollReveal().reveal('.reveal-left', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'left',
    reset: true
})

ScrollReveal().reveal('.reveal-bottom', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    reset: true
})