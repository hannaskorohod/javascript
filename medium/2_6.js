//Write a JavaScript program to calculate the factorial of a number. Sample f(5) should return 120.

function recursion(number){

	if(number < 0)
		return -1;
	else if(number === 0)
		return 1;
	else{
		return (number * recursion(number - 1));
	}
	}

recursion(5);
