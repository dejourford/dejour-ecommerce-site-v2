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
        category: 'Tops',
        title: 'Drake Crewneck',
        price: '$49.99',
        img: 'images/Drake-Crewneck.png',
        link: 'index.html',
    },
    {
        category: 'Tops',
        title: 'Gucci T-Shirt',
        price: '$149.99',
        img: 'images/Gucci-TShirt.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Kobe Bryant Jersey',
        price: '$299.99',
        img: 'images/Kobe-Bryant-Jersey.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Michael Jordan Jersey',
        price: '$299.99',
        img: 'images/Michael-Jordan-Jersey.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Nike Crewneck',
        price: '$29.99',
        img: 'images/Nike-Crewneck.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'OVO Hoodie',
        price: '$129.99',
        img: 'images/OVO-Hoodie.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Supreme T-Shirt',
        price: '$99.99',
        img: 'images/Supreme-TShirt.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Kentucky Crewneck',
        price: '$49.99',
        img: 'images/Womens-Kentucky-Crewneck.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Louis Vuitton T-Shirt',
        price: '$149.99',
        img: 'images/Womens-LousVuitton-Shirt.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'OVO T-Shirt',
        price: '$59.99',
        img: 'images/Womens-OVO-Shirt.png',
        link: 'index.html'
    },

    {
        category: 'Tops',
        title: 'Yeezus T-Shirt',
        price: '$79.99',
        img: 'images/Yeezus-Shirt.png',
        link: 'index.html'
    },

    {
        category: 'Shoes',
        title: 'Jordan 11',
        price: '$79.99',
        img: 'images/Jordan-11.png',
        link: 'index.html'
    },

    {
        category: 'Shoes',
        title: 'Kobe Mamba',
        price: '$49.99',
        img: 'images/Kobe-Black-Mamba.png',
        link: 'index.html'
    },

    {
        category: 'Shoes',
        title: 'Nike Air Force 1',
        price: '$39.99',
        img: 'images/NikeAF1.png',
        link: 'index.html'
    },

    {
        category: 'Shoes',
        title: 'Yeezy 350',
        price: '$79.99',
        img: 'images/Yeezy-350.png',
        link: 'index.html'
    },

    {
        category: 'Shoes',
        title: 'Yeezy Slides',
        price: '$79.99',
        img: 'images/Yeezy-Slides.png',
        link: 'index.html'
    },

    {
        category: 'Bottoms',
        title: 'Bape Pants',
        price: '$79.99',
        img: 'images/Bape-Pants.png',
        link: 'index.html'
    },

    {
        category: 'Bottoms',
        title: 'Bape Shorts',
        price: '$79.99',
        img: 'images/Bape-Shorts.png',
        link: 'index.html'
    },

    {
        category: 'Bottoms',
        title: 'Peach Dress',
        price: '$79.99',
        img: 'images/Womens-Dress.png',
        link: 'index.html'
    }

]




console.log(products.length)



// cycle through all products
for (let i = 0; i < products.length; i++) {
    
    // create function for making cards
    createNewCard = () => {
    
    // create a new card each time
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    
    // create the card body
    const newCardBody = document.createElement('div')
    newCardBody.classList.add('card-body')
    
    // create the img div
    const cardImg = document.createElement('img')
    cardImg.classList.add('img')
    cardImg.src = products[i].img
    
    //create anchor tags for each image 
    var link = document.getElementById("link");
    var aTag = document.createElement('a');
    aTag.setAttribute('href',`${products[i].link}`);
    aTag.setAttribute('id','link');
    aTag.textContent = "View Item";
    newCardBody.append(aTag);
    
    // create the card footer div
    const newCardFooter = document.createElement('div')
    newCardFooter.classList.add('card-footer')
    
    // create the card title span
    const cardTitle = document.createElement('span')
    cardTitle.classList.add('title')
    cardTitle.textContent = products[i].title
    
    // create the card price span
    const cardPrice = document.createElement('span')
    cardPrice.classList.add('price')
    cardPrice.textContent = products[i].price
    
    // create the add to cart button
    const addToCartBtn = document.createElement('button')
    addToCartBtn.classList.add('add-to-cart-btn')
    addToCartBtn.textContent = 'Add To Cart'

    // append all elements to card 
    // and card to DOM
    newCard.appendChild(newCardBody)
    newCard.appendChild(newCardFooter)
    newCardBody.append(cardImg)
    newCardFooter.append(cardTitle, cardPrice, addToCartBtn)
    tops.append(newCard)
    }
    
    
    // if statement for tops
    if (products[i].category == 'Tops'){
        createNewCard()
    }
}