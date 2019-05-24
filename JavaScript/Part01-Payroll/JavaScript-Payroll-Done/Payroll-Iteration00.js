/*
		This is Version 0 of a simple Payroll Program written
		in JavaScript.  The program will be refined and added
		to in future iterations.
		
		INPUT			PROCESSING					OUTPUT
		=======================================================
		firstName		SET	firstName				firstName
		lastName		SET lastName				lastName
		hoursWorked		SET hoursWorked				hoursWorked
		hourlyRate		SET hourlyRate				hourlyRate
						CALCULATE grossPay			grossPay
						DISPLAY firstName
						DISPLAY lastName
						DISPLAY hoursWorked
						DISPLAY hourlyRate
						DISPLAY grossPay
						
		PAYROLL1
			DECLARE STRING firstName   = "YourFirstName"	
			DECLARE STRING lastName    = "YourLastName"	
			DECLARE REAL   hoursWorked = 40	
			DECLARE REAL   hourlyRate  = 25	
			DECLARE REAL   grossPay    = 0  	
			
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
	var firstName		= "Jeff";
	var lastName 		= "Scott";
	var hoursWorked 	= 40;
	var hourlyRate 	= 25;
	var grossPay 		= 0;
	
	grossPay = hoursWorked * hourlyRate;
	
	alert("First Name: " 	+ firstName 	+ "\n" +
	      "Last Name: "  	+ lastName 	+ "\n" +
		  "Hours Worked: " 	+ hoursWorked	+ "\n" +
		  "Hourly Rate: "  	+ hourlyRate	+ "\n" +
		  "Gross Pay: "    	+ grossPay.toFixed(2));
}
