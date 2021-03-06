/* eslint-disable no-unused-vars */
'use strict';
var storeData = [];
var salesForm = document.getElementById('sales-form');


var time = ['6 am','7 am','8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm', ];
var Table = document.getElementById('cookieTable');

Store.prototype.calcTotals = function(){ //get random intiger and store it in prototype:"numbers"
  for(var i = 0 ; i < time.length; i++){ //loop iteration for each our
    var randomCustomers = Math.ceil(Math.random() * (this.max - this.min)) + this.min ;//'this' keyword, followed by assigned variable (A1) then push to array in variable 'customers per hour' (random number)
    this.cookiesSoldPerHr.push(Math.floor((this.avgCookie * randomCustomers)));
  }
};

//create constructor function
function Store(location, min, max, avgCookie){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiesSoldPerHr = [] ; //THESE LINES
  this.total = 0;
  storeData.push(this);
}

//create instances with variables to pass through constructor perameters


//create var holding form



//create function that accepts input values of form
function handleSalesForm(event){
  event.preventDefault();
  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgCookie = parseInt(event.target.avgCookie.value);
  //assign to store variable
  var newStore = new Store(location, min, max, avgCookie);
  newStore.calcTotals();
  // storeData[storeData.length -1].calcTotals();


  //renders this but not correctly, renders all stores again and adds them.
  renderTable();

//when submit is hit run handle
// if(!event.target.location.value || !event.target.min.value || !event.target.max.value || !event.target.avgCookie.value){
//   return alert("Please fill in the fields below:")
// }

// if(isNaN(location) || isNaN(min) || isNaN(max) || isNaN(avgCookie)){
//   return alert('Please us positive numbers')
// }
// if (min > max || max < min || location.length < 2 || avgCookie < 1){
//   return alert('Please enter logical and valid inputs)
// }
}
//take random nymber and multiply by the avg cookie
//for as long as the data array has iterations, run the numbers andn cookies sold per hour prototypes on the data array
function totalsAcross(){
  for(var i = 0; i < storeData.length; i++){
    storeData[i].calcTotals();
  }
}
//displays table
Store.prototype.render = function(){

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  //create loop and repeat 15 times and once for each iteration of cookies sold per hour
  for(var i = 0 ; i < time.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldPerHr[i]; //only loop the cookies sold per hour[i]
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  this.sumOfValues();
  tdEl.textContent = this.total;
  trEl.appendChild(tdEl);
  Table.appendChild(trEl);
};

Store.prototype.sumOfValues = function (){
  this.total = 0;
  for(var i = 0; i < time.length ; i++){
    //takes all values in array and adds them to itself, getting sum then assigning that to total
    this.total += this.cookiesSoldPerHr[i];
  }
};

//make header row, leading with a blank header element, then loop the results down the table, and add "total" to the end of header loop
function autoMakeHeader(){
  var trEl = document.createElement('tr');
  var blankTh = document.createElement('th');
  //  thEl = document.createElement('th')
  trEl.appendChild(blankTh);
  //loop 15 times, create header element, assign the time array iterations into header (hours)
  for(var i = 0 ; i < time.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = time[i] ;
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th'); //add totals" header to end of table header
  totalEl.textContent = 'Totals:';
  trEl.appendChild(totalEl);
  Table.appendChild(trEl);
}

function autoMakeFooter(){

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var sumOfTotals = 0;
  tdEl.textContent = 'Totals:';
  trEl.appendChild(tdEl);
  // tdEl.appendChild(blankTh);
  for (var i = 0 ; i < time.length ; i++){
    var hourlyTotals = 0;
    for (var j = 0 ; j < storeData.length; j++){
      hourlyTotals += storeData[j].cookiesSoldPerHr[i];
    }
    sumOfTotals += hourlyTotals;

    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = sumOfTotals;
  trEl.appendChild(tdEl);
  Table.appendChild(trEl);
}


function renderAllStores(){ //takes all data stored and displays them on the table
  for(var i = 0; i < storeData.length ; i++ ){
    storeData[i].render();
  }
}

//footer total
function renderTable(){
  Table.innerHTML = '';
  autoMakeHeader(); //makes header row
  renderAllStores(); //calls render constructor function
  autoMakeFooter();
}
new Store('1st and Pike',23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
totalsAcross();
salesForm.addEventListener('submit', handleSalesForm);
renderTable();
