/* eslint-disable no-unused-vars */
'use strict';

Object literal notation

Let's model some Seattle beaches in code! Take a look at the HTML to see which ones. Were going to take the seagull data from that we store in JavaScript and render it into the DOM.

Let's make note of the name, neighborhood, and seagull count of each beach for each day last week.

Since we know we'll need days of the week, that is already set up for us.
1- create element to hold data
2- assign data to the element
3-  put the element in the DOM
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var alkiUl = document.getElementById('alkibeach');
var goldenUl = document.getElementById('gg');
var edmondsUl = document.getElementById('edmondsbeach');

var alki = {
  name: 'Alki' ,
  neighborhood: 'West Seattle',
  seagullCont.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      alkiUl.appendChild(liEl);
    }
  }unt: [212, 44, 34, 11, 18, 88, 377],
  render: function(){
    for (var i = 0 ; i < days.length ; i ++ ){
      var liEl = docume
};

var goldenGardens = {
  name: 'Golden Gardens' ,
  neighborhood: 'Ballard',
  seagullCount: [45, 233, 256, 122, 76, 45, 22],
  render: function(){
    for (var i = 0 ; i < days.length ; i ++ ){
      var goldenEl = document.createElement('li');
      goldenEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      goldenUl.appendChild(goldenEl);
    }
  }
};

var edmonds = {
  name: 'Edmonds Beach' ,
  neighborhood: 'Edmonds',
  seagullCount: [88, 687, 89, 24, 56, 22, 65],
  render: function(){
    for (var i = 0 ; i < days.length ; i ++ ){
      var edmondsEl = document.createElement('li');
      edmondsEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      edmondsUl.appendChild(edmondsEl);
    }
  }
};

alki.render();
edmonds.render();
goldenGardens.render();
var results = [];
//math function
function getRandomInt(min , max){ //take in min and max property
  return Math.floor(Math.random() * (max - min)) + min; //does math

}






var time = ['6 am','7 am','8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
var PikeUl = document.getElementById('Pike');
var SeaTacUl = document.getElementById('Seatac');
var SeattleCenterUl = document.getElementById('SeattleCenter');
var CapitolHillUl = document.getElementById('CapitolHill');
var AlkiUl = document.getElementById('Alki');
var i ;
var cookieTotal = 0;
// eslint-disable-next-line no-redeclare


// eslint-disable-next-line no-redeclare
var Pike = {
  Location: '1st and Pike',
  minimumCustomers: 23,
  maximumCustomers: 65,
  avgCookieSale: 6.3,
  render: function(){
    for ( i = 0 ; i < time.length ; i++){
      // eslint-disable-next-line no-inner-declarations
      var PikeEl = document.createElement('li');
      var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers); //pass in two parameters for math function
      var amountOfCookies = amountOfCustomers * this.avgCookieSale; //multiply avg cookies by number given by math function
      amountOfCookies=Math.floor(amountOfCookies); //round math output
      console.log('amount of cookies', amountOfCookies);
      results.push(amountOfCookies); //put output in array
      //cookieTotal = amountOfCookies + total;
      // console.log(total);

      PikeEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
      PikeUl.appendChild(PikeEl);

    }
  }
};

// var totalli = document.createElement('li');
// totalli.textContent = 'Total: ' ${cookieTotal};
// PikeUl.appendchild(totalLi);




//create object
var SeaTac = {
  //object properties
  Location: '1st and Pike',
  minimumCustomers:3 ,
  maximumCustomers: 24,
  avgCookieSale: 1.2,
  render: function(){
    for ( i = 0 ; i < time.length ; i++){ //loop for how many values are in array
      // eslint-disable-next-line no-inner-declarations
      var SeaTacEl = document.createElement('li'); //make list element
      var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers); //get a customer number between max and min
      var amountOfCookies = amountOfCustomers * this.avgCookieSale; //multiply how many customers * avg amount of cookies
      amountOfCookies=Math.floor(amountOfCookies); //round result to nearest whole intiger
      results.push(amountOfCookies); //push result to results array
      SeaTacEl.textContent = `${time[i]}: ${amountOfCookies} cookies`; // assign this text to the new li element
      SeaTacUl.appendChild(SeaTacEl); //assign li element to unordered list
    }
  }
};
//call object





var SeattleCenter = {
  Location: '1st and Pike',
  minimumCustomers:11,
  maximumCustomers: 38,
  avgCookieSale: 2.3,
  render: function(){
    for ( i = 0 ; i < time.length ; i++){
      // eslint-disable-next-line no-inner-declarations
      var SeattleCenterEl = document.createElement('li');
      var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
      var amountOfCookies = amountOfCustomers * this.avgCookieSale;
      amountOfCookies=Math.floor(amountOfCookies);
      results.push(amountOfCookies);
      SeattleCenterEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
      SeattleCenterUl.appendChild(SeattleCenterEl);
    }
  }
};







var CapitolHill = {
  Location: '1st and Pike',
  minimumCustomers:20,
  maximumCustomers: 38,
  avgCookieSale: 2.3,
  render: function(){
    for ( i = 0 ; i < time.length ; i++){
      // eslint-disable-next-line no-inner-declarations
      var CapitolHillEl = document.createElement('li');
      var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
      var amountOfCookies = amountOfCustomers * this.avgCookieSale;
      amountOfCookies=Math.floor(amountOfCookies);
      results.push(amountOfCookies);
      CapitolHillEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
      CapitolHillUl.appendChild(CapitolHillEl);
    }
  }
};






var Alki = {
  Location: '1st and Pike',
  minimumCustomers: 2,
  maximumCustomers: 16,
  avgCookieSale: 4.6,
  render: function(){
    for ( i = 0 ; i < time.length ; i++){
      // eslint-disable-next-line no-inner-declarations
      var alkiEl = document.createElement('li');
      var amountOfCustomers = getRandomInt(this.minimumCustomers, this.maximumCustomers);
      var amountOfCookies = amountOfCustomers * this.avgCookieSale;
      amountOfCookies=Math.floor(amountOfCookies);
      results.push(amountOfCookies);
      alkiEl.textContent = `${time[i]}: ${amountOfCookies} cookies`;
      AlkiUl.appendChild(alkiEl);
    }
  }
};

Pike.render();
SeaTac.render();
SeattleCenter.render();
CapitolHill.render();
Alki.render();


var ResultsUl = document.getElementById('Array');

function Results(){
  for(i=0 ; i < results.length ; i++){
    var resultsEl = document.createElement('li');
    resultsEl.textContent = `${results[i]}`;
    ResultsUl.appendChild(resultsEl);
    console.log(resultsEl);

  }
}
Results(); //call function to store resilt in a variable.