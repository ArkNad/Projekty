//PRZYGOTOWANIE NAPISU
//stworzenie hasla i pobranie dlugosci
var powitalnyNapis = "Witaj";
var dlugosc = powitalnyNapis.length;
//zamien znaki na duze
powitalnyNapis = powitalnyNapis.toUpperCase();

//pojemnik na zakryte haslo
var zakrytyNapis = "-----";

//deklaracja znaków
var litery = new Array(5)
litery[0] = "W";
litery[1] = "I";
litery[2] = "T";
litery[3] = "A";
litery[4] = "J";
//deklaracja pozycji znaku ktory ma zostac zmieniony
var nrZnaku = 0;

//Algorytm podmiany znaków
String.prototype.ustawZnak = function(miejsce, znak) {
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


//wykonaj pierwsza iteracje podmiany napisu 
//zakrytyNapis = zakrytyNapis.ustawZnak(1, litery[0]);

//funkcja uruchamiajaca algorytm
function wypiszNapis() {
		
	if (nrZnaku < dlugosc+1) {
		document.getElementById("napis").innerHTML = zakrytyNapis;
	
		zakrytyNapis = zakrytyNapis.ustawZnak(nrZnaku, litery[nrZnaku]);
	
		nrZnaku++;
		
        setTimeout("wypiszNapis()", 1000); // wykonaj funkcję ponownie po 1000ms (1 sekunda)
    }
	else {
		zakrytyNapis = "-----";
		nrZnaku = 0;
		
		setTimeout("wypiszNapis()", 1000); // wykonaj funkcję ponownie po 1000ms (1 sekunda)
	}
}

//Uruchomienie programu
window.onload = wypiszNapis;


