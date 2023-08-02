
import Data from './data.json' assert {type: 'json'};


let loader = document.querySelector('.loader');
let destinationNav = document.getElementById('destNav');
let destinationContent= document.getElementById('destContent');
let indicators= document.getElementById('carousel-indicators');
let carouselContainer= document.getElementById('carousel-container');
let techNav = document.getElementById('techNav');
let techContent= document.getElementById('techContent');

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

/*---------------------destination----------------------------*/
let destNavContent = Data.destinations.map((item, i) => {
  return  `<li class="nav-item" role="presentation">
  <button class="${(i===0)?'active':''} nav-link  subhead3" id="${item.name.toLowerCase()}-tab" data-toggle="tab" data-target="#${item.name.toLowerCase()}"
      type="button" role="tab" aria-controls="${item.name.toLowerCase()}" aria-selected="true">${item.name.toUpperCase()}</button>
</li>`
}).join('');


let destContent=  Data.destinations.map((item, i) => {
  return  ` <div class="${(i===0)?'show active':''} tab-pane fade" id="${item.name.toLowerCase()}" role="tabpanel" aria-labelledby="${item.name.toLowerCase()}-tab">
  <div class="row">
     <div class="col-lg-6 text-center">
         <img src="${item.images.png}" class="img-fluid dest-img" />
     </div>
     <div class="col-lg-5 offset-lg-1 text-center text-lg-left mt-3 mt-lg-0">
    
         <h1 class="head2 mb-3">${item.name.toUpperCase()}</h1>
         <p class="body-text mb-5">
             ${item.description}
         </p>
         <div class="hr"></div>
         <div class="mt-3 d-flex info justify-content-center justify-content-lg-start">
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

if ( document.URL.includes("destination.html") ) {
    destinationContent.insertAdjacentHTML('beforeend', destContent);
    destinationNav.insertAdjacentHTML('beforeend', destNavContent);
}

/*--------------------------crew----------------------------*/
let crewIndicator = Data.crew.map((item, i) => {
    return  `   <li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="${(i===0)?'active':''}"></li>`
  }).join('');
  
  
  let crewContent=  Data.crew.map((item, i) => {
    return  `<div class="${(i===0)?'active':''} carousel-item">
    <div class="row align-items-center">
    <div class="col-lg-6 m-auto order-md-6 img-container" >
        <img class="img-fluid" src="${item.images.png}" alt="First slide">   
    </div>

    <div class="carousel-caption text-lg-left col-lg-6 mb-5  order-md-1">
        <h4 class="head4 mb-2">${item.name}</h4>
        <h3 class="head3">${item.role}</h3>
        <p class="body-text ml-lg-0">${item.bio}</p>
      </div>
</div>
</div>`;
  }).join('');
  
  if ( document.URL.includes("crew.html") ) {
    carouselContainer.insertAdjacentHTML('beforeend', crewContent);
      indicators.insertAdjacentHTML('beforeend', crewIndicator);
  }

  /*---------------------------technology-------------------*/
  