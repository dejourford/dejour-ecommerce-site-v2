ls = localStorage
const shoppingCart = document.querySelector('.shopping-cart')
const invoiceNode = document.querySelector('.invoice')


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






let storedItems = ls.getItem('cart')
let storedItemsToParse = JSON.parse(storedItems)
for (let i = 0; i < storedItemsToParse.length; i++){
     const createRow = () => {
        const cartRow = document.createElement('section')
        cartRow.className = 'cart-row'
        
        
        const cartLeft = document.createElement('div')
        const itemImage = document.createElement('img')
        const itemTitle = document.createElement('span')
        itemImage.src = storedItemsToParse[i].img
        itemTitle.className = 'title'
        itemTitle.textContent = storedItemsToParse[i].title
        cartLeft.className = 'shopping-cart-left'
        
        
        const cartRight = document.createElement('div')
        const itemPrice = document.createElement('span')
        itemPrice.className = 'price'
        itemPrice.textContent = storedItemsToParse[i].price
        cartRight.className = 'shopping-cart-right'
        cartRow.append(cartLeft, cartRight) 
        cartLeft.append(itemImage, itemTitle)
        cartRight.appendChild(itemPrice)
        
        shoppingCart.insertBefore(cartRow, invoiceNode)


    }
    
     
    createRow()
    
}


//assign row elements from each object in ls array



