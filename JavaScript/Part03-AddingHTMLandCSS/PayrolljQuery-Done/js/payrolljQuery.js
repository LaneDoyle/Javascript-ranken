"use strict";

//*******************************************

$(document).ready(function() {
	const MINHOURS	=	  0.0;
	const MAXHOURS	=	 84.0;
	const MINRATE	=	  0.0;
	const MAXRATE 	= 	100.00;
	const MAXNONOT	=	 40.00;
	const OTRATE	=	  1.5;
	const BADFNAME	= 	"First Name Field Missing";
	const BADLNAME	= 	"Last  Name Field Missing";
	const BADNUM	= 	"Invalid/Out Of Range Input";
	const NANINPUT	= 	"Non-Numeric Input";
	const OORHOURS	= 	"Hours Must Be Between 0 - 84";
	const OORRATE	= 	"Rate  Must Be Between 0 - 100";

	//	Declare and initialize variables
	var fName		= 	"";
	var lName		= 	"";
	var hours			= 	0.0;
	var rate			=	0.0;
	var gross			= 	0.0
	var totEmps		=	0;
	var totGross		=	0.0;
		
	var validfName		=	false;
	var validlName		=	false;
	var validHours		=	false;
	var validRate		=	false;

	//*******************************************

	$("#reset").click(function() {
		$("#fName").val("");
		$("#lName").val("");
		$("#hours").val("");
		$("#rate").val("");
		$("#gross").val("");

		$("#fNameSpan").text("*");
		$("#lNameSpan").text("*");
		$("#hoursSpan").text("*");
		$("#rateSpan").text("*");
		$("#fName").focus();
	});

	//*******************************************

	$("#calculate").click(function() {
		fName	= 	($("fName").val());
		lName	= 	($("lName").val());
		var h   = 	document.getElementById("hours").value;
		hours		= 	parseFloat(h);
		var r	=	document.getElementById("rate").value;
		rate		=	parseFloat(r);
	
		if ($("#fName").val() == '')
		{
			$("#fNameSpan").text(BADFNAME);		
			validfName = false;
		}
		else
		{
			$("#fNameSpan").text("");			
			validfName = true;
		}
		
		//	Validate last  name form field
		if ($("#lName").val() == '')
		{
			$("#lNameSpan").text(BADLNAME);
			validlName = false;
		}
		else
		{
			$("#lNameSpan").text("");
			validlName = true;
		}
		
		//	Validate hours form field
		if (isNaN(hours))
		{
			$("#hoursSpan").text(NANINPUT);	
			validHours = false;	
		}	
		else if((hours < MINHOURS) || (hours > MAXHOURS)) 
		{
			$("#hoursSpan").text(OORHOURS);
			validHours = false;
		}
		else
		{
			$("#hoursSpan").text("");
			validHours = true;
		}

		//	Validate rate form field
		if (isNaN(rate))
		{
			$("#rateSpan").text(NANINPUT);
			validRate	= false;	
		}
		//	Next check for out-of-range input
		else if((rate < MINRATE) || (rate > MAXRATE)) 
		{
			$("#rateSpan").text(OORRATE);
			validRate	= false;
		}
		// Input was vaild
		else
		{
			$("#rateSpan").text("");
			validRate = true;
		}
		
		if (validfName && validlName && validHours & validRate)
		{
			$("#gross").val(calculateGross(gross));
			$("#totEmps").val(totEmps);
			$("#totGross").val(totGross).toFixed(2);
		}		
	});

	//*******************************************
	
	function calculateGross(gross) {
		var regHours = MAXNONOT;
		var otHours  = hours - MAXNONOT;
		
		alert ("hours = " + hours + " rate = " + rate);
		
		//	Check if employee worked more than 40 hours (MANNONOT)
		if (hours > MAXNONOT)		//	Employee has OT pay coming
		{
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
		
		alert ("Returning now.  gross = " + gross);
		
		return gross.toFixed(2);
	};
	
});

//*******************************************
