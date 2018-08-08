//2.5) Write a JavaScript function to find the first not repeated character. For i.e. input 'abacddbec', should return 'e'.

function repeated(myData){
	for(var i=0; i < myData.length; i++){
		if(myData.indexOf(myData[i]) == myData.lastIndexOf(myData[i])){
			console.log(myData[i]);
		}
	  }
  }

repeated('abacddbec');
