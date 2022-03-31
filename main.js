const iceCream = [{name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1.99}, {name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1.99}, 
{name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2.99}]


const vessels = [{name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2.99}, 
{name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4.99}]

const toppings = [{name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1.99}, 
{name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2.99}]

let cart = []
let total = 0


function addIceCreamToCart(name){
    let chosenIceCream = iceCream.find(flavor => flavor.name == name)
    cart.push(chosenIceCream)
    console.log("cart contents", cart);
    drawCart()
}
function addVesselToCart(name){
    let chosenVessel = vessels.find(style => style.name == name)
    cart.push(chosenVessel)
    console.log("cart contents", cart);
    drawCart()
}
function addToppingToCart(name){
    let chosenTopping = toppings.find(kind => kind.name == name)
    cart.push(chosenTopping)
    console.log("cart contents", cart);
    drawCart()
}

function drawCart(name){
    let template = ''
    let subtotal = 0
    cart.forEach(i => {
        template += `
        <div class="card p-3">
                           <span class="pb-2">${i.name}</span>
                           <span class="pb-2">${i.price}</span>
                      </div>
                      `
        Math.floor(subtotal += i.price)
        console.log('sub', subtotal);
        document.getElementById('cart').innerHTML = template
    })
}

//#region
function drawIceCream(){
    let template = ''
    iceCream.forEach(ingredient => {
        template += `
        <div class="col p-3 d-flex flex-column shadow border">
            <span class="p-1"><img class="img-fluid" src="${ingredient.image}" alt=""></span>
            <span class="p-1 fs-3">${ingredient.name}</span>
            <span class="p-1 fs-3">$${ingredient.price}</span>
            <button id="icecream-btn" onclick="addIceCreamToCart('${ingredient.name}')" class="btn btn-primary">Add to Cart</button>
        </div>
        
        `
        document.getElementById('icecream-template-row').innerHTML = template
    })    
}

function drawVessels(){
    let template = ''
    vessels.forEach(vessel => {
        template += `
        <div class="col p-3 d-flex flex-column shadow border justify-content-between">
        <span class="p-1"><img class="img-fluid" src="${vessel.image}" alt=""></span>
        <div class="d-flex flex-column">
            <span class="p-1 fs-3">${vessel.name}</span>
            <span class="p-1 fs-3">$${vessel.price}</span>
            <button id="vessel-btn" onclick="addVesselToCart('${vessel.name}')" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
        `
        document.getElementById('vessel-template-row').innerHTML = template
    })    
}

function drawToppings(){
    let template = ''
    toppings.forEach(topping => {
        template += `
        <div class="col p-3 d-flex flex-column">
            <span class="p-1"><img class="img-fluid" src="${topping.image}" alt=""></span>
            <span class="p-1 fs-3">${topping.name}</span>
            <span class="p-1 fs-3">$${topping.price}</span>
            <button id="toppings-btn" onclick="addToppingToCart('${topping.name}')" class="btn btn-primary">Add to Cart</button>
        </div>
        `
        document.getElementById('topping-template-row').innerHTML = template
    })    
}
//#endregion


drawIceCream();
drawVessels();
drawToppings()