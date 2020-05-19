const color_product = document.querySelector('#product-img')
const white = document.querySelector(".colors-list li:nth-child(1)")
const color_selector = document.querySelector('.colors-list')

white.style.border = '2px solid black'
white.style.transition = '0.5s'

color_selector.addEventListener('click', function(event){

    const clicked_color  = document.getElementById(event.target.id)
    const product_image = document.getElementById('product-img');

    hideAll()
    showColor(clicked_color.parentElement)

    document.getElementById('product-img').src='img/' + imagePrefix() + '_closk_' + event.target.id +'.png'
})

function imagePrefix() {

    const product_image = document.getElementById('product-img');
    var prefix = ""

    if(product_image.dataset.gender == 'man'){
        prefix = "m"
    } else if (product_image.dataset.gender == 'woman') {
        prefix = "w"
    } else if (product_image.dataset.gender == 'baby') {
        prefix = "by"
    } else if(product_image.dataset.gender == 'child'){
        prefix = "c"
    }
        

    return prefix
}

function showColor(color){

    color.style.border = '2px solid black'
    color.style.transition = '0.5s'
}

function hideAll(){

    document.querySelectorAll('.colors-list li').forEach(function(color) {
        color.style.border = 'none'
        color.style.transition = '0.5s'
    });

}
