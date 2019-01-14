'use strict';

// Object literal notation

// Let's model some Seattle beaches in code! Take a look at the HTML to see which ones. Were going to take the seagull data from that we store in JavaScript and render it into the DOM.

// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week.

// Since we know we'll need days of the week, that is already set up for us.
//1- create element to hold data
//2- assign data to the element
//3-  put the element in the DOM
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var alkiUl = document.getElementById('alkibeach');
var goldenUl = document.getElementById('gg');
var edmondsUl = document.getElementById('edmondsbeach');

var alki = {
  name: 'Alki' ,
  neighborhood: 'West Seattle',
  seagullCount: [212, 44, 34, 11, 18, 88, 377],
  render: function(){
    for (var i = 0 ; i < days.length ; i ++ ){
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
      alkiUl.appendChild(liEl);
    }
  }
};

// var goldenGardens = {
//   name: 'Golden Gardens' ,
//   neighborhood: 'Ballard',
//   seagullCount: [45, 233, 256, 122, 76, 45, 22],
//   render: function(){
//     for (var i = 0 ; i < days.length ; i ++ ){
//       var goldenEl = document.createElement('li');
//       goldenEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
//       goldenUl.appendChild(goldenEl);
//     }
//   }
// };

// var edmonds = {
//   name: 'Edmonds Beach' ,
//   neighborhood: 'Edmonds',
//   seagullCount: [88, 687, 89, 24, 56, 22, 65],
//   render: function(){
//     for (var i = 0 ; i < days.length ; i ++ ){
//       var edmondsEl = document.createElement('li');
//       edmondsEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
//       edmondsUl.appendChild(edmondsEl);
//     }
//   }
// };

// alki.render();
// edmonds.render();
// goldenGardens.render();
var PikeUl = document.getElementById('Pike')
var SeaTacUl = document.getElementById('Seatac')
var SeattleCenter = document.getElementById('SeattleCenter')
var CapitolHill = document.getElementById('Alki')
var time = ['6 am','7 am','8 am', '9am', '10 am','11 am','12 pm''1 pm''2 pm''3 pm''4 pm''5 pm''6 pm''7 pm''8 pm']
