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

// PRODUCTS 
const products = [ 
    {
        title: 'Drake Crewneck',
        price: '$49.99',
        img: 'images/Drake-Crewneck.png'
    },
    {
        title: 'Gucci T-Shirt',
        price: '$149.99',
        img: 'images/Gucci-TShirt.png'
    },

    {
        title: 'Kobe Bryant Jersey',
        price: '$299.99',
        img: 'images/Kobe-Bryant-Jersey.png'
    },

    {
        title: 'Michael Jordan Jersey',
        price: '$299.99',
        img: 'images/Michael-Jordan-Jersey.png'
    },

    {
        title: 'Nike Crewneck',
        price: '$29.99',
        img: 'images/Nike-Crewneck.png'
    },

    {
        title: 'OVO Hoodie',
        price: '$129.99',
        img: 'images/OVO-Hoodie.png'
    },

    {
        title: 'Supreme T-Shirt',
        price: '$99.99',
        img: 'images/Supreme-TShirt.png'
    },

    {
        title: 'Women\'s Kentucky Crewneck',
        price: '$49.99',
        img: 'images/Womens-Kentucky-Crewneck.png'
    },

    {
        title: 'Women\'s Louis Vuitton T-Shirt',
        price: '$149.99',
        img: 'images/Womens-LousVuitton-Shirt.png'
    },

    {
        title: 'Women\'s OVO T-Shirt',
        price: '$59.99',
        img: 'images/Womens-OVO-Shirt.png'
    },

    {
        title: 'Yeezus T-Shirt',
        price: '$79.99',
        img: 'images/Yeezus-Shirt.png'
    }
    
]


console.log(products.length)
for (let i = 0; i < products.length; i++) {
    console.log(products[i])
}