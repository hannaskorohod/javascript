//Write an function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function upperFirstLet(n){
var result = n.split(' ');

for( var i=0; i < result.length; i++){
	result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1) ;
	}

return result.join(' ');
}
upperFirstLet("the quick brown fox");
