/*
		This is Version 3 of a simple Payroll Program written
		in JavaScript.  The program will be refined and added
		to in future iterations.

		Iteration 02 will add an if statement that
		will check for and (if necessary) calculate
		overtime.

		Iteration 03 will add looping, making it
		possible to enter more than one employee's
		payroll information.  Total employee and
		total gross pay counters will be kept and
		outputted.

		INPUT			PROCESSING					OUTPUT
		=======================================================
		firstName		PROMPT for firstName		firstName
		lastName		GET        firstName		lastName
		hoursWorked		PROMPT for lastName			hoursWorked
		hourlyRate		GET        lastName			hourlyRate
						PROMPT for hoursWorked		grossPay
						GET        hoursWorked		totalEmps
						PROMPT for hourlyRate		totalGross
						GET        hourlyRate
						CALCULATE  grossPay
						DISPLAY    firstName
						DISPLAY    lastName
						DISPLAY    hoursWorked
						DISPLAY    hourlyRate
						DISPLAY    grossPay
						
		PAYROLL3
			DECLARE STRING firstName   = ""	
			DECLARE STRING lastName    = ""	
			DECLARE REAL   hoursWorked = 0	
			DECLARE REAL   hourlyRate  = 0	
			DECLARE REAL   grossPay    = 0  	
		
			WHILE (keepGoing = TRUE)
				SET        totalEmps = totalEmps + 1
				PROMPT for firstName
				GET        firstName
				PROMPT for lastName
				GET        lastName
				PROMPT for hoursWorked
				GET        hoursWorked
				PROMPT for hourlyRate
				GET        hourlyRate
				PROMPT for again
				GET        again
			
				CALCULATE grossPay = hoursWorked * hourlyRate

				IF (hoursWorked > MAXNONOT) THEN
					SET       regHours = 40
					CALCULATE otHours  = hoursWorked - MAXNONOT
					CALCULATE grossPay = ((regHours * hourlyRate) +
										  (otHours * hourlyRate   * OTRATE))
				ELSE
					CALCULATE grossPay = hourlyRate * hoursWorked
				END IF

				SET totalGross = totalGross + grossPay;
				
				DISPLAY firstName
				DISPLAY lastName
				DISPLAY hoursWorked
				DISPLAY hourlyRate
				DISPLAY grossPay		

				PROMPT for again
				GET        again

				IF (again = "Y") THEN
					SET keepGoing = true
				ELSE
					SET keepGoing = false
				END IF
			END WHILE
			
			DISPLAY totalEmps
			DISPLAY totalPay
		END
*/
function main()
{	
	//	Constant declarations
	
	//	Variable declarations
	
	while(keepGoing)				//	Shortcut for while(keepGoing == true)
	{
		//	Prompt for variable values
		
		//	Check if employee worked more than 40 hours (MANNONOT)
			  
		//	New code added for payroll-iteration03
		
		//	Increment the total number of employees by 1
		
		//	Add current grossPay to totalGrossPay
		
		//	Ask the user if they want to run the program again or not
		
	}
}
