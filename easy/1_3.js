//1.3) Write a function that returns average number of values. Do not use Math. For i.e. [1,4,2] should return [2.33].

var numbers = function (a, b, c){
	var culc = (a + b + c) / 3;
	return culc.toFixed(2);
}

numbers(1,4,2);
