// // NAV CLOSE
const closeBtn = document.querySelector('.fa-xmark')
const mobileNav =  document.querySelector('.mobile-nav')
const hamburgerMenu = document.querySelector('.fa-bars-staggered')

closeMenu = () => {
    mobileNav.classList.remove('open')
    mobileNav.classList.add('close')
   
}

openMenu = () => {
    mobileNav.classList.remove('close')
    mobileNav.classList.add('open')
    
   
}