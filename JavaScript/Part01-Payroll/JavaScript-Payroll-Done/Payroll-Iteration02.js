/*
		This is Version 2 of a simple Payroll Program written
		in JavaScript.  The program will be refined and added
		to in future iterations.

		Iteration 02 will add an if statement that
		will check for and (if necessary) calculate
		overtime.
		
		INPUT			PROCESSING					OUTPUT
		=======================================================
		firstName		PROMPT for firstName		firstName
		lastName		GET        firstName		lastName
		hoursWorked		PROMPT for lastName			hoursWorked
		hourlyRate		GET        lastName			hourlyRate
						PROMPT for hoursWorked		grossPay
						GET        hoursWorked
						PROMPT for hourlyRate
						GET        hourlyRate
						CALCULATE  grossPay
						DISPLAY    firstName
						DISPLAY    lastName
						DISPLAY    hoursWorked
						DISPLAY    hourlyRate
						DISPLAY    grossPay
						
		PAYROLL2
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

			IF (hoursWorked > MAXNONOT) THEN
				SET       regHours = 40
				CALCULATE otHours  = hoursWorked - MAXNONOT
				CALCULATE grossPay = ((regHours * hourlyRate) +
									  (otHours * hourlyRate   * OTRATE))
			ELSE
				CALCULATE grossPay = hourlyRate * hoursWorked
			END IF
			
			DISPLAY firstName
			DISPLAY lastName
			DISPLAY hoursWorked
			DISPLAY hourlyRate
			DISPLAY grossPay		
		END
*/

//	Constant declarations
const MAXNONOT	= 40;		//	Max number of non-OT hours one can work
const OTRATE	=  1.5;		//	Overtime rate

//	Variable declarations
var firstName		= "";
var lastName 		= "";
var hoursWorked 	= 0;
var hourlyRate 	= 0;
var grossPay 		= 0;
var regHours		= 0;
var otHours		= 0;
	
function main()
{	
	//	Prompt for variable values
	firstName 		= prompt("Enter First Name: ", "First Name");
	lastName 		= prompt("Enter Last Name: ",  "Last Name");
	hoursWorked 	= parseFloat(prompt("Enter Hours Worked: ", "Hours"));
	hourlyRate 	= parseFloat(prompt("Enter Hourly Rate: ",  "Rate"));
	
	//	Check if employee worked more than 40 hours (MANNONOT)
	if (hoursWorked > MAXNONOT)		//	Employee has OT pay coming
	{
		regHours = MAXNONOT;
		otHours  = hoursWorked - MAXNONOT;
		
		//	Calculate grossPay
		grossPay = ((regHours * hourlyRate) +
				  (otHours * hourlyRate * OTRATE));
				  
		/*
			grossPay = ((MAXNONOT * hourlyRate) +
						((hoursWorked - MAXNONOT) * hourlyRate * OTRATE))
		*/
	}
	else							//	Employee has no OT pay coming
	{
		grossPay = hoursWorked * hourlyRate;
	}
	
	alert("First Name: " 	+ firstName 	+ "\n" +
	      "Last Name: "  	+ lastName 	+ "\n" +
		  "Hours Worked: " 	+ hoursWorked.toFixed(2)	+ "\n" +
		  "Hourly Rate: "  	+ hourlyRate.toFixed(2)	+ "\n" +
		  "Gross Pay: $"   	+ grossPay.toFixed(2));
}
