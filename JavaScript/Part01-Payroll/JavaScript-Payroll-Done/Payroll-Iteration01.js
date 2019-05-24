/*
		This is Version 1 of a simple Payroll Program written
		in JavaScript.  The program will be refined and added
		to in future iterations.
		
		INPUT			PROCESSING					OUTPUT
		=======================================================
		firstName		PROMPT for firstName		firstName
		lastName		GET firstName				lastName
		hoursWorked		PROMPT for lastName			hoursWorked
		hourlyRate		GET lastName				hourlyRate
						PROMPT for hoursWorked		grossPay
						GET hoursWorked
						PROMPT for hourlyRate
						GET hourlyRate
						CALCULATE grossPay
						DISPLAY firstName
						DISPLAY lastName
						DISPLAY hoursWorked
						DISPLAY hourlyRate
						DISPLAY grossPay
						
		PAYROLL1
			DECLARE STRING firstName   = ""	
			DECLARE STRING lastName    = ""	
			DECLARE REAL   hoursWorked = 0	
			DECLARE REAL   hourlyRate  = 0	
			DECLARE REAL   grossPay    = 0  	
			
			PROMPT for firstName
			GET        firstName
			PROMPT for lastName
			GET        lastName
			PROMPT for hoursWorked
			GET        hoursWorked
			PROMPT for hourlyRate
			GET        hourlyRate
			
			CALCULATE grossPay = hoursWorked * hourlyRate
			
			DISPLAY firstName
			DISPLAY lastName
			DISPLAY hoursWorked
			DISPLAY hourlyRate
			DISPLAY grossPay		
		END
*/
function main()		// Program driver
{
	//	Variable declarations
	var firstName		= "";
	var lastName 		= "";
	var hoursWorked 	= 0;
	var hourlyRate 	= 0;
	var grossPay 		= 0;
	
	//	Prompt for variable values
	firstName 		= prompt("Enter First Name: ", "First Name");
	lastName 		= prompt("Enter Last Name: ",  "Last Name");
	hoursWorked 	= parseFloat(prompt("Enter Hours Worked: ", "Hours"));
	hourlyRate 	= parseFloat(prompt("Enter Hourly Rate: ",  "Rate"));
	
	grossPay = hoursWorked * hourlyRate;
	
	alert("First Name: " 	+ firstName 	+ "\n" +
	      "Last Name: "  	+ lastName 	+ "\n" +
		  "Hours Worked: " 	+ hoursWorked.toFixed(2)	+ "\n" +
		  "Hourly Rate: "  	+ hourlyRate.toFixed(2)	+ "\n" +
		  "Gross Pay: "    	+ grossPay.toFixed(2));
}
