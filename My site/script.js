let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

//scroll active section
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +  height) {
            navLinks.forEach(links => {
                links.classList.remove('activ');
                document.querySelector('header nav a[href*=' + id +']').classList.add('activ');
            });
        };
    });  

 //scroll for navbar sticky 
header.classList.toggle('sticky', window.scrollY > 100);

//scroll icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx bxs-tag-x');
    navbar.classList.toggle('activ');

//remove menu icon after click
menuIcon.classList.remove('bxs-tag-x');
menuIcon.classList.remove('activ');
   }
};

//dark light mode
let darkModeIcon = document.querySelector('#darkMode');

darkModeIcon.onclick = () => {
     darkModeIcon.classList.toggle('bx-sun'); 
     document.body.classList.toggle('dark-mode');
}; 

//scroll reveal mode
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200, 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, img, .service-container, .portofolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img, p', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });