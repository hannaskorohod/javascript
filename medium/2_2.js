//Write a function that returns reversed string. For i.e. input "hello world" should return "dlrow olleh".

function reverseString(str){
var myString = str.split("").reverse().join("");
return myString;
}
reverseString("hello world");
   