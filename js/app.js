/* eslint-disable no-unused-vars */
'use strict';

// Object literal notation

// Let's model some Seattle beaches in code! Take a look at the HTML to see which ones. Were going to take the seagull data from that we store in JavaScript and render it into the DOM.

// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week.



// function getRandomInt(min , max){ //take in min and max property
//   return Math.floor(Math.random() * (max - min)) + min; //does math

// }

var storeData = [];
//arrays for individual stores - results per hour

// var storeTwo = [];
// var storeThree = [];
// var storeFour = [];
// var storeFive = [];






var time = ['6 am','7 am','8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm', ];
var Table = document.getElementById('cookie-Table');

//create constructor function
function Store(location, min, max, avgCookie){
  this.location = location;
  this.min = min
  this.max = max
  this.avgCookie = avgCookie
  this.customersPerHr = [] ;
  this.cookiesSoldPerHr = [] ;
  this.total = 0
  storeData.push(this)
}



//create instances with variables to pass through constructor perameters
new Store("1st and Pike",23, 65, 6.3)
new Store('SeaTac', 3, 24, 1.2)
new Store('Seattle Center', 11, 38, 3.7)
new Store('Capitol Hill', 20, 38, 2.3)
new Store('Alki', 2, 16, 4.6)
//console.table(storeResults) -worked
Store.prototype.numbers = function(){
  for(var i = 0 ; i < time.length; i++){
    

    
this.customersPerHr.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);

  }
}

Store.prototype.cookiesSoldHr = function(){
  for(var i = 0; i < time.length ; i++ ){
      this.cookiesSoldPerHr.push(Math.floor((this.avgCookie * this.customersPerHr[i])))


  }

}




for(var i = 0; i < storeData.length; i++){
storeData[i].numbers();
storeData[i].cookiesSoldHr();

  
}

Store.prototype.render = function(){

  var trEl = document.createElement('tr')
  var tdEl = document.createElement('td')
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
//create loop and repeat 15 times and once for each iteration of cookies sold per hour
  for(var i = 0 ; i < time.length; i++){
    var tdEl = document.createElement('td')
    tdEl.textContent = this.cookiesSoldPerHr[i];
    trEl.appendChild(tdEl) 
   
  }
    tdEl = document.createElement('td')
    this.sumOfValues();
    tdEl.textContent = this.total;
    trEl.appendChild(tdEl) 

   

  // tdEl = document.createElement('td')
  // tdEl.textContent = this.avgSales;
  // trEl.appendChild(tdEl);

  // tdEl = document.createElement('td')
  // tdEl.textContent = this.avgSales
  // trEl.appendChild(tdEl);
  Table.appendChild(trEl);
  


}



Store.prototype.sumOfValues = function (){
  
  for(var i = 0; i < time.length ; i++){
  this.total += this.cookiesSoldPerHr[i]
  }
 
  
}


function autoMakeHeader(){
  var trEl = document.createElement('tr');
  var blankTh = document.createElement('th')
  // var thEl = document.createElement('th');
   thEl = document.createElement('th')
   
  
  trEl.appendChild(blankTh)
  for(var i = 0 ; i < time.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = time[i] ;
    trEl.appendChild(thEl);
    

  }
  var totalEl = document.createElement('th')
  totalEl.textContent = 'Totals:'
  trEl.appendChild(totalEl)

  
  Table.appendChild(trEl);
}

// function valuesOne(){
//   var trEl = document.createElement('tr')
//   var thEl = document.creatElement('th')
//   for(var i = 0; i < storeOne ; i++){
//   thEl = document.createElement('th')
//   thEl.textContent = storeOne[i];
//   trEl.appendChild(thEl)
//   }
//   Table.appendChild(trEl);
// }

function renderAllStores(){
  for(var i = 0; i < storeData.length ; i++ ){
    storeData[i].render()
  }
}


autoMakeHeader();


renderAllStores();


// var Pike = {
//   Location: '1st and Pike',
//   minimumCustomers: 23,
//   maximumCustomers: 65,
//   avgCookieSale: 6.3,
//   render: function(){
//     for ( var i = 0 ; i < time.length ; i++){
//       // eslint-disable-next-line no-inner-declarations
// //       var PikeEl = document.createElement('li');
//       var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers); //pass in two parameters for math function
//       var amountOfCookies = amountOfCustomers * this.avgCookieSale; //multiply avg cookies by number given by math function
//       amountOfCookies=Math.floor(amountOfCookies); //round math output
//       console.log('amount of cookies', amountOfCookies);
//       avgSales.push(amountOfCookies); //put output in array'
      
//       //cookieTotal = amountOfCookies + total;
//       // console.log(total);


//     }
    
//   }
// };
// Pike.render();
// // var totalli = document.createElement('li');
// // totalli.textContent = 'Total: ' ${cookieTotal};
// // PikeUl.appendchild(totalLi);




// //create object
// var SeaTac = {
//   //object properties
//   Location: '1st and Pike',
//   minimumCustomers:3 ,
//   maximumCustomers: 24,
//   avgCookieSale: 1.2,
//   render: function(){
//     for ( i = 0 ; i < time.length ; i++){ //loop for how many values are in array
//       // eslint-disable-next-line no-inner-declarations
//       var SeaTacEl = document.createElement('li'); //make list element
//       var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers); //get a customer number between max and min
//       var amountOfCookies = amountOfCustomers * this.avgCookieSale; //multiply how many customers * avg amount of cookies
//       amountOfCookies=Math.floor(amountOfCookies); //round result to nearest whole intiger
//       storeTwo.push(amountOfCookies); //push result to results array
      
//     }
//   }
// };
// //call object





// var SeattleCenter = {
//   Location: '1st and Pike',
//   minimumCustomers:11,
//   maximumCustomers: 38,
//   avgCookieSale: 2.3,
//   render: function(){
//     for ( i = 0 ; i < time.length ; i++){
//       // eslint-disable-next-line no-inner-declarations
//       var SeattleCenterEl = document.createElement('li');
//       var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//       var amountOfCookies = amountOfCustomers * this.avgCookieSale;
//       amountOfCookies=Math.floor(amountOfCookies);
//       storeThree.push(amountOfCookies);
     
//     }
//   }
// }







// var CapitolHill = {
//   Location: '1st and Pike',
//   minimumCustomers:20,
//   maximumCustomers: 38,
//   avgCookieSale: 2.3,
//   render: function(){
//     for ( i = 0 ; i < time.length ; i++){
//       // eslint-disable-next-line no-inner-declarations
//       var CapitolHillEl = document.createElement('li');
//       var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//       var amountOfCookies = amountOfCustomers * this.avgCookieSale;
//       amountOfCookies=Math.floor(amountOfCookies);
//       storeFour.push(amountOfCookies);
   
//     }
//   }
// }






// var Alki = {
//   Location: '1st and Pike',
//   minimumCustomers: 2,
//   maximumCustomers: 16,
//   avgCookieSale: 4.6,
//   render: function(){
//     for ( i = 0 ; i < time.length ; i++){
//       // eslint-disable-next-line no-inner-declarations
//       var alkiEl = document.createElement('li');
//       var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
//       var amountOfCookies = amountOfCustomers * this.avgCookieSale;
//       amountOfCookies=Math.floor(amountOfCookies);
//       storeFive.push(amountOfCookies);
      
//     }
//   }
// };



// var ResultsUl = document.getElementById('Array');

// function Results(){
//   for(i=0 ; i < results.length ; i++){
//     var resultsEl = document.createElement('li');
//     resultsEl.textContent = `${results[i]}`;
//     ResultsUl.appendChild(resultsEl);
//     console.log(resultsEl);

//   }
// }
// Results(); //call function to store resilt in a variable.


// Pike.render();
// SeaTac.render();
// SeattleCenter.render();
// CapitolHill.render();
// Alki.render();
