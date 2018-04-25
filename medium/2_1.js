//Write a function that reverse a number. For i.e. input 32243 should returns 34223.
function reverseNum(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
reverseNum(5607678);