ls = localStorage
const shoppingCart = document.querySelector('.shopping-cart')
const invoiceNode = document.querySelector('.invoice')
const subtotal = document.querySelector('#subtotal-price')
const tax = document.querySelector('#tax-price')
const total = document.querySelector('#total-price')
const modalTotal = document.querySelector('#modal-price')


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


// MODAL OPEN AND CLOSE
const checkoutModal = document.querySelector('#checkoutModal')
const modalCheckOutBtn = document.querySelector('.checkout-btn')
const showModal = () => {
    checkoutModal.classList.toggle('show')
    checkoutModal.classList.toggle('hide')
}

const hideModal = () => {
    checkoutModal.classList.toggle('show')
    checkoutModal.classList.toggle('hide')
}



function createRow(cartItem) {
    const cartRow = document.createElement('section')
    cartRow.className = 'cart-row'
    
    
    const cartLeft = document.createElement('div')
    const itemImage = document.createElement('img')
    const itemTitle = document.createElement('span')
    itemImage.src = cartItem.img
    itemTitle.className = 'title'
    itemTitle.textContent = cartItem.title
    cartLeft.className = 'shopping-cart-left'
    
    
    const cartRight = document.createElement('div')
    const itemPrice = document.createElement('span')
    itemPrice.className = 'price'
    itemPrice.textContent = cartItem.price
    cartRight.className = 'shopping-cart-right'
    cartRow.append(cartLeft, cartRight) 
    cartLeft.append(itemImage, itemTitle)
    cartRight.appendChild(itemPrice)
    
    return cartRow
    
}





let sum = 0
let storedItems = ls.getItem('cart')
let storedItemsToParse = JSON.parse(storedItems)
for (let i = 0; i < storedItemsToParse.length; i++){
     const row = createRow(storedItemsToParse[i])
     shoppingCart.insertBefore(row, invoiceNode)
     
     
     sum += Number(storedItemsToParse[i].price.slice(1))
     let sumToFixed = Number(sum.toFixed(2))
     console.log(sumToFixed)
     
    subtotal.textContent = '$' + sumToFixed
    let taxAmount = Number((sumToFixed * 0.0625).toFixed(2))
    tax.textContent = '$' + taxAmount
    let totalAmount = Number(taxAmount + sumToFixed).toFixed(2)
    
    total.textContent = '$' + totalAmount
    modalTotal.textContent = 'The total of ' + '$' + totalAmount 
    + ' will be charged to your card.'
    
}


// get all object in local storage array
// target prices
// add all prices together
// display in DOM




