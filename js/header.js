var notify_cart = document.getElementById('icon-shopping-cart') 

var storage_cart = window.localStorage.getItem('notifyCart') || 0
//damos el valor de storage a notify_cart
notify_cart.setAttribute('data-count', storage_cart)