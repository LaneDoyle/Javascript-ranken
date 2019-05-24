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
function main()
{	

	//	Constant declarations
	
	//	Variable declarations
	
	//	Prompt for variable values
}













