let products

fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then((data)=>{
  products=data
  console.log(products);
  
})
.catch((err)=>{
  console.log("error:",err);
})

setTimeout(()=>{

let main = document.querySelector('.main')

products.forEach(product => {
    let card = document.createElement('div') 
    card.classList.add('card')
    let image = document.createElement('img')
    image.setAttribute('src',product.image)
    image.setAttribute('height','200')
    let pro_title = document.createElement('p')
    pro_title.innerText = product.title
    pro_title.classList.add('product-name')

    let price = document.createElement('p')
    price.innerText = "Price:  ₹"+product.price
    price.classList.add('price')

    
    card.append(image,pro_title,price)
    main.append(card)

    
});
},2000)