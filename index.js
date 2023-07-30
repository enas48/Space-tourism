
import Data from './data.json' assert {type: 'json'};


let loader = document.querySelector('.loader');
let destinationNav = document.getElementById('myTab');
let destinationContent= document.getElementById('myTabContent');

/*preloader*/
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear")
}
console.log(Data)
$('#open_menu').on("click", function () {
  $('header nav').addClass('active')
});
$('#close_menu').on("click", function () {
  $('header nav').removeClass('active')
});

/*destination*/

let destNavContent = Data.destinations.map((item, i) => {
  return (i === 0) ? `<li class="nav-item" role="presentation">
  <button class="nav-link active subhead3" id="${item.name.toLowerCase()}-tab" data-toggle="tab" data-target="#${item.name.toLowerCase()}"
      type="button" role="tab" aria-controls="${item.name.toLowerCase()}" aria-selected="true">${item.name.toUpperCase()}</button>
</li>`:

    `<li class="nav-item" role="presentation">
<button class="nav-link subhead3" id="${item.name.toLowerCase()}-tab" data-toggle="tab" data-target="#${item.name.toLowerCase()}"
    type="button" role="tab" aria-controls="${item.name.toLowerCase()}" aria-selected="true">${item.name.toUpperCase()}</button>
</li>`;
}).join('');


let destContent=  Data.destinations.map((item, i) => {
  return (i === 0) ? `  <div class="tab-pane fade  show active" id="${item.name.toLowerCase()}" role="tabpanel" aria-labelledby="${item.name.toLowerCase()}-tab">
  <div class="row">
     <div class="col-lg-6">
         <img src="${item.images.png}" class="img-fluid" />
     </div>
     <div class="col-lg-5 offset-lg-1 text-center text-lg-left">
         <h1 class="head2 mb-3">${item.name.toUpperCase()}</h1>
         <p class="body-text mb-5">
             ${item.description}
         </p>
         <div class="hr"></div>
         <div class="mt-3 d-flex info">
             <div class="">
                 <span class="subhead2 d-inline-block mb-2">AVG. DISTANCE</span><br />
                 <span class="subhead1">${item.distance}</span>
             </div>
             <div>
                 <span class="subhead2 d-inline-block mb-2">EST. TRAVEL TIME</span><br />
                 <span class="subhead1">${item.travel}</span>
             </div>
         </div>
     </div>
 </div>
</div>`:

`<div class="tab-pane fade " id="${item.name.toLowerCase()}" role="tabpanel" aria-labelledby="${item.name.toLowerCase()}-tab">
    <div class="row">
    <div class="col-lg-6">
        <img src="${item.images.png}" class="img-fluid" />
    </div>
    <div class="col-lg-5 offset-lg-1 text-center text-lg-left">
        <h1 class="head2 mb-3">${item.name.toUpperCase()}</h1>
        <p class="body-text mb-5">
            ${item.description}
        </p>
        <div class="hr"></div>
        <div class="mt-3 d-flex info">
            <div class="">
                <span class="subhead2 d-inline-block mb-2">AVG. DISTANCE</span><br />
                <span class="subhead1">${item.distance}</span>
            </div>
            <div>
                <span class="subhead2 d-inline-block mb-2">EST. TRAVEL TIME</span><br />
                <span class="subhead1">${item.travel}</span>
            </div>
        </div>
    </div>
</div>
 </div>`;
}).join('');

destinationNav.insertAdjacentHTML('beforeend', destNavContent);
destinationContent.insertAdjacentHTML('beforeend', destContent);

