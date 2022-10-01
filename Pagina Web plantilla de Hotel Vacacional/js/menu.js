const folleto = document.querySelector('.folleto')
const menu = document.querySelector('.menu-navegacion')


folleto.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != folleto){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})