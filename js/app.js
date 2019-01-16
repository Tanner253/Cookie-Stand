/* eslint-disable no-unused-vars */
'use strict';
var storeData = [];

var time = ['6 am','7 am','8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm', ];
var Table = document.getElementById('cookie-Table');

Store.prototype.numbers = function(){ //get random intiger and store it in prototype:"numbers"
  for(var i = 0 ; i < time.length; i++){ //loop iteration for each our
    this.customersPerHr.push(Math.floor(Math.random() * (this.max - this.min)) + this.min); //'this' keyword, followed by assigned variable (A1) then push to array in variable 'customers per hour' (random number)
    }
}

//create constructor function
function Store(location, min, max, avgCookie){
  this.location = location;
  this.min = min
  this.max = max
  this.avgCookie = avgCookie
  this.customersPerHr = [] ; //A1
  this.cookiesSoldPerHr = [] ; //THESE LINES
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

Store.prototype.cookiesSoldHr = function(){
  for(var i = 0; i < time.length ; i++ ){
      this.cookiesSoldPerHr.push(Math.floor((this.avgCookie * this.customersPerHr[i])))
      //THESE LINES


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

function renderAllStores(){
  for(var i = 0; i < storeData.length ; i++ ){
    storeData[i].render()
  }
}


autoMakeHeader();


renderAllStores();
