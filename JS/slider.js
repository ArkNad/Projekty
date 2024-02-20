//Math.floor zaokraglenie liczby do calosci
//Math.random generowanie liczby pseudolosowej z zakresu 0 - 1
//rezultat -> zaokraglij((0..1)*3) -> 0..3
var numer = Math.floor(Math.random()*3);
			
var timer1 = 0;
var timer2 = 0;

//obsluga zdarzenia - nasluchiwacz		
var sliderAUTO = document.getElementById('przycisk1');
sliderAUTO.addEventListener("click", function() { zmienslajd(); });
var sliderMANUAL = document.getElementById('przycisk2');
sliderMANUAL.addEventListener("click", function() { ustawslajd(0); });
			
function ustawslajd(nrslajdu) {
		clearTimeout(timer1);
		clearTimeout(timer2);
		numer = nrslajdu - 1;
				
		schowaj();
		setTimeout("zmienslajd()", 500);
				
}
			
function schowaj() {
	$("#slider").fadeOut(500);
} 

function zmienslajd() {
	numer++; if (numer>3) numer=0;
				
	var plik = "<img src=\"img/z" + numer + ".jpg\" />";
				
	$("#slider").html(plik);
	$("#slider").fadeIn(500);
				
	timer1 = setTimeout("zmienslajd()", 5000);
	timer2 = setTimeout("schowaj()", 4500);
			
}