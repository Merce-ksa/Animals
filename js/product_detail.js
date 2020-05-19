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

//notify_cart.addEventListener('animationend', function(){
    //notify_cart.classList.remove('show-count')
//})







