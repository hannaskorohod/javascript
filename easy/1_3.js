//1.3) Write a function that returns average number of values. Do not use Math. For i.e. [1,4,2] should return [2.33].

function myNumber(a, b, c){
	var sum = a + b + c;
	var averNum = sum / 3;
	return averNum.toFixed(2);
};
myNumber(1,4,2);