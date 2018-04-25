

var myArr = [2,4,5,6,4,3,3,22,222,222,222, 1];
var result =[];
myArr.forEach(function(element, index) {
	if (myArr.indexOf(element, index + 1) > -1) {
	if (result.indexOf(element) === -1) {
        result.push(element);
    }
}
});

console.log(result);