const closeBtn = document.querySelector('#arrow');
const menu = document.querySelector('#menu');
const menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click',()=>{
    console.log('clicked')
    menuBar.classList.add('closeIcon');
    menu.classList.add('visible');
    menu.classList.remove('closeIcon');
    closeBtn.classList.add('visible')

});

  closeBtn.addEventListener('click', () => {
    menuBar.classList.remove('closeIcon');
    menu.classList.remove('visible');
    menu.classList.add('closeIcon');
    closeBtn.classList.remove('visible')

    
  });