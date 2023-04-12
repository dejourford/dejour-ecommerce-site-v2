ls = localStorage
const shoppingCart = document.querySelector('.shopping-cart')
const invoiceNode = document.querySelector('.invoice')
const subtotalPrice = document.querySelector('#subtotal-price')

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


function addToCartTotal(cartItem) {
    let sum = 0

}


let sum = 0
let storedItems = ls.getItem('cart')
let storedItemsToParse = JSON.parse(storedItems)
for (let i = 0; i < storedItemsToParse.length; i++){
     const row = createRow(storedItemsToParse[i])
     shoppingCart.insertBefore(row, invoiceNode)
    
     
     sum += Number(storedItemsToParse[i].price.slice(1))
     let sumToFixed = sum.toFixed(2)
     console.log(sumToFixed)
    

    
}


// get all object in local storage array
// target prices
// add all prices together
// display in DOM




