const MINHOURS	=	 0.0;
const MAXHOURS	=	84.0;
const MINRATE	=	 0.0;
const MAXRATE 	=  100.00;
const MAXNONOT	=	40.00;
const OTRATE	=	 1.5;
const BADFNAME	= "First Name Field Missing";
const BADLNAME	= "Last  Name Field Missing";
const BADNUM	= "Invalid/Out Of Range Input";

var validfName		=	false;
var validlName		=	false;
var validHours		=	false;
var validRate		=	false;

var $ = function(id) {
    return document.getElementById(id);
};

var totEmps	= 0;
var totGross	= 0.0;

var main = function() {
	var fName	= $("fName").value;
	var lName	= $("lName").value;
	var hours		= parseFloat($("hours").value);
	var rate		= parseFloat($("rate").value);
	var gross		= 0.0;

	if (fName == "")
	{
		$("fName").nextElementSibling.firstChild.nodeValue = BADFNAME;        
        $("fName").value = "";		
        $("fName").focus();
		validfName = false;
	}
	else
	{
		validfName = true;
		$("fName").nextElementSibling.firstChild.nodeValue = "";
	}

	if (lName == "")
	{
		$("lName").nextElementSibling.firstChild.nodeValue = BADLNAME;        
        $("lName").value = "";		
        $("lName").focus();
		validlName = false;
	}
	else
	{
		$("lName").nextElementSibling.firstChild.nodeValue ="";
		validlName = true;
	}
	
	if ((isNaN(hours)) || (hours < MINHOURS) || (hours > MAXHOURS))
	{
		$("hours").nextElementSibling.firstChild.nodeValue = BADNUM;        
        $("hours").value = "";		
        $("hours").focus();
		validHours = false;
	}
	else
	{
		$("hours").nextElementSibling.firstChild.nodeValue = "";
		validHours = true;
	}

	if (isNaN(rate) || (rate < MINRATE) || (rate > MAXRATE))
	{
		$("rate").nextElementSibling.firstChild.nodeValue = BADNUM;      
        $("rate").value = "";		
        $("rate").focus();
		validRate = false;
	}
	else
	{
		$("rate").nextElementSibling.firstChild.nodeValue = "";
		validRate = true;
	}
	
	if (validfName && validlName && validHours && validRate)
	{
		$("fName").nextElementSibling.firstChild.nodeValue		= "";
		$("lName").nextElementSibling.firstChild.nodeValue 	= "";
		$("hours").nextElementSibling.firstChild.nodeValue		= "";
		$("rate").nextElementSibling.firstChild.nodeValue 		= "";
		calculateGross(hours, rate);
	}
	else
	{
		//blankOutAllFields();
		//blankOutAllSpans();
	}
};

var calculateGross = function(hours, rate) {
	//	Check if employee worked more than 40 hours (MANNONOT)
	if (hours > MAXNONOT)		//	Employee has OT pay coming
	{
		var regHours = MAXNONOT;
		var otHours  = hours - MAXNONOT;
		
		//	Calculate grossPay
		gross = ((regHours * rate) +
			    (otHours  * rate  * OTRATE));
	}
	else							//	Employee has no OT pay coming
	{
		gross = hours * rate;
	}

	//	Increment the total number of employees by 1
	++totEmps;

	//alert ("TotGross = " + totGross);
	
	//	Add current gross  to totGross
	totGross += gross;		

	$("gross").value = gross.toFixed(2);
	$("totEmps").value = totEmps;
	$("totGross").value = totGross.toFixed(2);
};

var clearAll = function() {
	blankOutAllFields();
	asteriskOutAllSpans();
	validInput = true;
};

var blankOutAllFields = function() {
	$("fName").value 	= "";
	$("lName").value	= "";
    $("hours").value	= "";
    $("rate").value	= "";
	$("gross").value	= "";
	$("fName").focus();
};

var blankOutAllSpans = function() {
	$("fName").nextElementSibling.firstChild.nodeValue		= "";
	$("lName").nextElementSibling.firstChild.nodeValue 	= "";
	$("hours").nextElementSibling.firstChild.nodeValue		= "";
	$("rate").nextElementSibling.firstChild.nodeValue 		= "";
};

var asteriskOutAllSpans = function() {
	$("fName").nextElementSibling.firstChild.nodeValue		= "*";
	$("lName").nextElementSibling.firstChild.nodeValue 	= "*";
	$("hours").nextElementSibling.firstChild.nodeValue		= "*";
	$("rate").nextElementSibling.firstChild.nodeValue 		= "*";
};

window.onload = function() {
	$("calculate").onclick = main;
    $("clear").onclick     = clearAll;
	$("fName").focus();
};