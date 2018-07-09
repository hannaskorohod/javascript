function converter(amount, convertFrom, convertTo){
	var usdToUah =  26.24;
	var uahToUsd =  0.038;
	var result = 0;

	if(convertFrom == "usd" &&  convertTo == "uah"){
		result = amount * usdToUah;
	} else if (convertFrom == "uah" &&  convertTo == "usd"){
		result = amount * uahToUsd;
	}
	console.log(amount + " " + convertFrom + " = " + result + convertTo);	
}

converter(100, "usd", "uah");
converter(1700, "uah", "usd");
