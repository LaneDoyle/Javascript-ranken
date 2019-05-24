/*
		This is Version6 of a simple Payroll Program written
		in JavaScript.  The program was refined and added to
		in past iterations.

		Iteration 02 will add an if statement that
		will check for and (if necessary) calculate
		overtime.

		Iteration 03 will add looping, making it
		possible to enter more than one employee's
		payroll information.  Total employee and
		total gross pay counters will be kept and
		outputted.

		Iteration 04 will use functions to add
		modularity to the program.

		Iteration 05 will involve passing data to
		the functions.

		Iteration 06 will incorporate arrays into
		the program.

	PAYROLL6
		FUNCTION main()
			DECLARE STRING firstName   = ""	
			DECLARE STRING lastName    = ""	
			DECLARE REAL   hoursWorked = 0	
			DECLARE REAL   hourlyRate  = 0	
			DECLARE REAL   grossPay    = 0  	
		
			FOR lcv = 1 TO 5
				SET totalEmps = totalEmps + 1
				firstName[lcv]     = inputFirstName()
				lastName[lcv]      = inputLastName()
				hoursWorked[lcv]   = inputHoursWorked()
				hourlyRate[lcv]    = inputHourlyRate()
				grossPay[lcv]      = calculateGrossPay(hoursWorked[lcv],
													   hourlyRate[lcv],
													   grossPay[lcv],
													   totalGross[lcv])
				outputIndPayrollInfo(firstName[lcv], lastName[lcv],
									 hoursWorked[lcv], hourlyRate[lcv],
									 grossPay[lcv])
				PROMPT for again
				GET        again
				IF (again = "Y") THEN
					SET keepGoing = true
				ELSE
					SET keepGoing = false
				END IF
			END FOR
			
			outputTotPayrollInfo(totalEmps, totalGross)
		END FUNCTION
		
		FUNCTION inputFirstName
				PROMPT for firstName
				GET        firstName
		END FUNCTION
		
		FUNCTION inputLastName
				PROMPT for lastName
				GET        lastName
		END FUNCTION

		FUNCTION inputHoursWorked
			PROMPT for hoursWorked
					GET        hoursWorked
					PROMPT for hourlyRate
					GET        hourlyRate
		END FUNCTION
		
		FUNCTION calculateGrossPay()
			CALCULATE grossPay = hoursWorked * hourlyRate

			IF (hoursWorked > MAXNONOT) THEN
				SET       regHours = 40
				CALCULATE otHours  = hoursWorked - MAXNONOT
				CALCULATE grossPay = ((regHours * hourlyRate) +
									  (otHours * hourlyRate   * OTRATE))
			ELSE
				CALCULATE grossPay = hourlyRate * hoursWorked
			END IF

			SET totalGross = totalGross + grossPay
		END FUNCTION
		
		FUNCTION outputIndPayrollInfo(firstName, lastName,
									  hoursWorked, hourlyRate,
									  grossPay)
			DISPLAY firstName
			DISPLAY lastName
			DISPLAY hoursWorked
			DISPLAY hourlyRate
			DISPLAY grossPay		
		END FUNCTION
		
		FUNCTION outputTotPayrollInfo(totalEmps, totalGross)
			DISPLAY totalEmps
			DISPLAY totalPay
		END FUNCTION
*/
	function main()
	{

	}

	//**************************************************

	function inputFirstName()
	{

	}

	//**************************************************

	function inputLastName()
	{

	}

	//**************************************************

	function inputhoursWorked()
	{

	}

	//**************************************************

	function inputPayRate()
	{

	}

	//**************************************************

	function calculateGrossPay(hw, pr, gp, tg)
	{

	}

	//**************************************************

	function outputIndPayrollInfo(fn, ln, hw, pr, gp)
	{

	}

	//**************************************************

	function outputTotPayrollInfo(te, tg)
	{

	}
