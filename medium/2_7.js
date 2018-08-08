/*Write a JavaScript function to generate a random integer. For i.e. console.log(rand(20,1)); 
should returns each time random number from in a range 20 to 1.*/

function randomNumb(max, min) {
  return Math.floor(Math.random() * Math.floor(max));
}

randomNumb(20,1);
