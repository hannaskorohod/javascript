//Write a function that returns only pair numbers. For i.e. input [1,5,23,4,2,5,6] should return [4,2,6].
var arrNum = function (arr){
var arr1 =[];
for (var n in arr){
if (arr[n] % 2 == 0){
arr1.push(arr[n]);
		}
};
return arr1;
};
var arr = [1,4,6,84,73,8];
console.log(arrNum(arr));
