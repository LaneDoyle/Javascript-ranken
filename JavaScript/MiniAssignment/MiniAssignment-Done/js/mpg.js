const MINMILES 	=    1;
const MAXMILES 	= 1000;
const MINGALLS 	=    1;
const MAXGALLS 	=  100;
const MINPPG	=	 1.00;
const MAXPPG	=	 5.00;
const BAD		= "Invalid/Out Of Range Input";

var validInput	= true;

var $ = function(id) {
    return document.getElementById(id);
};

var main = function() {
	var miles		= parseFloat($("miles").value);
	var gallons	= parseFloat($("gallons").value);
	var ppg		= parseFloat($("ppg").value);
	var mpg		= "";
	var tripCost	= "";
	var perMile	= "";

	if ((isNaN(miles)) || (miles < MINMILES) || (miles > MAXMILES))
	{
		$("miles").nextElementSibling.firstChild.nodeValue = BAD;        
        $("miles").value = "";		
        $("miles").focus();
		validInput = false;
	}

	if (isNaN(gallons) ||	(gallons < MINGALLS) || (gallons > MAXGALLS))
	{
		$("gallons").nextElementSibling.firstChild.nodeValue = BAD;      
        $("gallons").value = "";		
        $("gallons").focus();
		validInput = false;
	}

	if ((isNaN(ppg)) || (ppg < MINPPG) || (ppg > MAXPPG))
	{
		$("ppg").nextElementSibling.firstChild.nodeValue = BAD;     
        $("ppg").value = "";		
        $("ppg").focus();
		validInput = false;
	}

	if (validInput)
	{
		calculateMpg(miles, gallons);
		calculateTripCost(gallons, ppg, miles);
		$("miles").nextElementSibling.firstChild.nodeValue 	= "";
		$("gallons").nextElementSibling.firstChild.nodeValue 	= "";
		$("ppg").nextElementSibling.firstChild.nodeValue 		= "";
	}
	else
	{
		blankOutAllFields();
	}
};

var calculateMpg = function(miles, gallons) {
	$("mpg").value = (miles / gallons).toFixed(2);
};

var calculateTripCost = function(gu, ppg, m)
{
	var tc = (gu * ppg).toFixed(2);;
	var f  = "$" + tc;
	$("tripCost").value = f;
	calculatePerMile(tc, m);
}

var calculatePerMile = function(tc, m) {
	var pm = (tc / m).toFixed(2);
	$("perMile").value = "$" + pm;
};

var clearAll = function() {
	blankOutAllFields();
    $("miles").focus();
	$("miles").nextElementSibling.firstChild.nodeValue 		= "*";
	$("gallons").nextElementSibling.firstChild.nodeValue 	= "*";
	$("ppg").nextElementSibling.firstChild.nodeValue 		= "*";
	validInput = true;
};

var blankOutAllFields = function() {
    $("miles").value   	= "";
    $("gallons").value 	= "";
	$("ppg").value 		= "";
    $("mpg").value     	= "";
    $("tripCost").value	= "";
    $("perMile").value	= "";
};

window.onload = function() {
	$("calculate").onclick = main;
    $("clear").onclick     = clearAll;
	$("miles").focus();
};