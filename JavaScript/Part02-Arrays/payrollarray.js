/*
*/

//	Global constant
const NUMEMPS	=	5;	//	Number of employees

function main()
{
	//	Declare and initialize variables
	var firstName	=	new Array(NUMEMPS);
	var lastName	=	new Array(NUMEMPS);
	var hrsWorked	=	new Array(NUMEMPS);
	var payRate	=	new Array(NUMEMPS);
	var grossPay	=	new Array(NUMEMPS);
	var totEmps	=	0;
	var totGross	=	0.0;
	var avgGross	= 	0.0;
	
	for (var lcv = 0; lcv < NUMEMPS; ++lcv)
	{	//	Begin for...
		//	Increment total employees accumulator
		++totEmps;
		
		//	Input employee info
		firstName[lcv]	= inputFirstName();
		lastName[lcv]	= inputLastName();
		hrsWorked[lcv]	= inputHrsWorked();
		payRate[lcv]	= inputPayRate();
		grossPay[lcv]	= calculateGrossPay(
					  hrsWorked[lcv],
					  payRate[lcv]);
		outputIndInfo(firstName[lcv], lastName[lcv],
				 hrsWorked[lcv], payRate[lcv],
				 grossPay[lcv]);
		
		//	Add current employee's gross pay
		//	to the total gross accumulator
		totGross += grossPay[lcv];
	}	//	End   for...
	
	//	Output total gross pay
	outputTotals(totGross);
	
	//	Calculate average gross pay
}

//*************************************

function inputFirstName()
{
	var fn = prompt("Please enter first name",
					"first name");
	return fn;
}

//*************************************

function inputLastName()
{
	var ln = prompt("Please enter last name",
					"last name");
	return ln;
}

//*************************************

function inputHrsWorked()
{
	var hw = parseFloat(prompt(
						"Please enter hours worked",
						"40"));
	while ((isNaN(hw))	||
		   (hw < 0))
	{
		hw = parseFloat(prompt(
						"INVALID INPUT!!!" +
						"Please enter hours worked",
						"40"));   
	}
	
	return hw;
}

//*************************************

function inputPayRate()
{
	var pr = parseFloat(prompt(
						"Please enter pay rate",
						"25"));
	while ((isNaN(pr))	||
		   (pr < 0))
	{
		pr = parseFloat(prompt(
						"INVALID INPUT!!!" +
						"Please enter pay rate",
						"25"));   
	}
	
	return pr;
}

//*************************************

function calculateGrossPay(hw, hr)
{
	return hw * hr;
}

//*************************************

function outputIndInfo(fn, ln, hw, hr, gp)
{
	document.write("<br><br>First Name: "	+ fn		+ "<br>"	+
				 "Last Name: " 	+ ln		+ "<br>"	+
				 "Hrs Worked: "	+ hw	+ "<br>"	+
				 "Pay Rate: $"	+ hr.toFixed(2) + "<br>"	+
				 "Gross Pay: $"	+ gp.toFixed(2));
}

//*************************************

function outputTotals(tg)
{
	document.write("<br><br>Total Gross: $"	
					+ tg.toFixed(2));
					
	document.write("<br><br>Average Gross: $"	
					+ (tg.toFixed(2) / NUMEMPS).toFixed(2));
}

//*************************************
