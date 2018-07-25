//Write a function that reverse a number. For i.e. input 32243 should returns 34223.

function reverseNum(n)
{
     var result = n.toString().split("").reverse().join("");
     return result;
}
reverseNum(5607678);
