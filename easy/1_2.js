
function myNumbers(numbers){
	var emptyArr = [];
	emptyArr.max = Math.max(...numbers);
	emptyArr.min = Math.min(...numbers);
	return emptyArr;
};
	var numbers = [3,5,767,32,7,9];
	console.log(myNumbers(numbers));


