/*
 * Eigene JavaScript-Dateien, wie z.B. diese, k�nnen in customer.js eingebunden werden. Die Funktionsweise wird dort erkl�rt.
 *
 */
 
function anyFunction() {
	tag = document.getElementById("Test").firstChild;
	tag.data = tag.data + "additionalCustomer.js Ausgabe   ";
	alert("JavaScriptAlert!!!");
}

anyFunction();