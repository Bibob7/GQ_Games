/*
 * In dieser Datei k�nnen eigene JavaScript-Funktionen definiert werden oder zus�tzliche JavaScript-Dateien nachgeladen werden.
 *
 * Die Funktion loadJSFile("fileName.js") wird von der GeoQuest-App. zur Verf�gung gestellt, um zus�tzliche JavaScript-Dateien nachzuladen.
 * Als Parameter wird der Dateiname als String �bergeben.
 *
 */
 
loadJSFile("additionalCustomer.js");

function someFunction() {
	document.getElementById("Test").style.backgroundColor="white";
	tag = document.getElementById("Test").firstChild;
	tag.data = tag.data + "customer.js Ausgabe   ";
}

someFunction();
