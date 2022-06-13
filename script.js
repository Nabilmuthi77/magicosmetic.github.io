// --Menu Navigasi--
const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide_menu_nav');
});

// --Image Slider--
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);