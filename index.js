/*preloader*/
import myJson from './data.json' assert {type: 'json'};

let loader=document.querySelector('.loader');

window.addEventListener("load",vanish);

function vanish(){
  loader.classList.add("disppear")
}
console.log(myJson)
$('#open_menu').on( "click", function() {
 $('header nav').addClass('active')
} );
$('#close_menu').on( "click", function() {
  $('header nav').removeClass('active')
 } );