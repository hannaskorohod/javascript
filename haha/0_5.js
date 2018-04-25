var currencyExchange = {
	fromUsd: function(usd,uah){
		uah = 25.99;
		fromUsd = prompt("Введите сумму в usd"); 
		var result = fromUsd * uah;
		alert(result + " uah");
		},
	fromUah: function(usd,uah){
		usd = 25.99;
		fromUah = prompt("Введите сумму в uah"); 
		var result = fromUah / usd;
		alert(result + " usd");
	}
}
currencyExchange.fromUsd();
currencyExchange.fromUah();
