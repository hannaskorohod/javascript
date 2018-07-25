function combStr(n){
var myArr = [];
for(i=0; i < n.length; i++){
	for(j=i+1; j < n.length + 1; j++){
	myArr.push(n.slice(i, j));
}}
return myArr;
}

combStr('dog');
