/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let domain = ['.com' , '.net' , '.us' , '.io']

     pronoun.forEach(elementPronoun => {
      adj.forEach(elementAdj => {
        noun.forEach(elementNoun => {
          domain.forEach(elementDomain => {
            console.log(elementPronoun + elementAdj + elementNoun + elementDomain);
          });
      });
    });
  }); 
