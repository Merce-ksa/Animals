const btn_minus = document.getElementById('minus')
const btn_plus = document.getElementById('plus')

const text_quantity = document.getElementById('qty')

var quantity = 1

if (btn_plus) {
    btn_plus.addEventListener('click', function(){
        quantity++
        text_quantity.textContent = quantity
})

}

if (btn_minus) {

btn_minus.addEventListener('click', function(){

    if(quantity > 1){
        quantity--
        text_quantity.textContent = quantity
    }
})
}

const cart = document.getElementById('cart')
const buy = document.getElementById('buy')



cart.addEventListener('click', function(event){

    //cada vez que damos al botton añadir a carrito
    const count_cart = Number(storage_cart) + quantity

    //añadimos el valor al storage 
    window.localStorage.setItem('notifyCart', count_cart)
    notify_cart.setAttribute('data-count', count_cart)
})

notify_cart.addEventListener('animationend', function(){
    notify_cart.classList.remove('show-count')
})

const color_product = document.querySelector('#product-img')
const white = document.querySelector(".colors-list li:nth-child(1)")
const beig = document.querySelector(".colors-list li:nth-child(2)")
const grey = document.querySelector(".colors-list li:nth-child(3)")
const blue = document.querySelector(".colors-list li:nth-child(4)")
const green = document.querySelector(".colors-list li:nth-child(5)")
const yellow = document.querySelector(".colors-list li:nth-child(6)")

function activeColor(color){
    color.style.border = '2px solid black'
    color.style.transition = '0.5s'
}

if (color_product) {
    if (color_product.dataset.color == 'white'){
        activeColor(white)
    }else if (color_product.dataset.color == 'beig'){
        activeColor(beig)
    }else if (color_product.dataset.color == 'grey'){
        activeColor(grey)
    }else if (color_product.dataset.color == 'blue'){
        activeColor(blue)
    }else if (color_product.dataset.color == 'green'){
        activeColor(green)
    }else if (color_product.dataset.color == 'yellow'){
        activeColor(yellow)
    }
}








