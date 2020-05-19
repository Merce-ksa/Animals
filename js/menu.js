const hamburger = document.getElementById('menu_on')
const header = document.getElementById('header-main')

hamburger.addEventListener('click', function(event){
    header.classList.toggle('visible_menu')
})