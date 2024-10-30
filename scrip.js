const hamburger_menu=document.querySelector('.hamburger-menu');
const nav=document.querySelector('.nav');
const close_icon=document.querySelector('.close-icon');

hamburger_menu.addEventListener('click',()=>{
    console.log('clicked');
    nav.classList.toggle('visible');
    hamburger_menu.classList.add('hidden')

})

close_icon.addEventListener('click',()=>{
    nav.classList.remove('visible');
    hamburger_menu.classList.remove('hidden')

})