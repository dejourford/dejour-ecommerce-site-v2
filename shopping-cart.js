ls = localStorage
 
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

let storedTotals = ls.getItem('subtotal')
const numbers = JSON.parse(storedTotals)
const sum = numbers.reduce( (total, number) =>
    total + number, 0).toFixed(2);
console.log(sum)


