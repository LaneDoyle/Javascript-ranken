/*
		This is Version5 of a simple Payroll Program written
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

		Iteration 04 will use functions to add
		modularity to the program.

		Iteration 05 will involve passing data to
		the functions.

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

	PAYROLL5
		FUNCTION main()
			DECLARE STRING firstName   = ""	
			DECLARE STRING lastName    = ""	
			DECLARE REAL   hoursWorked = 0	
			DECLARE REAL   hourlyRate  = 0	
			DECLARE REAL   grossPay    = 0  	
		
			WHILE (keepGoing = TRUE)
				SET totalEmps = totalEmps + 1
				firstName     = inputFirstName()
				lastName      = inputLastName()
				hoursWorked   = inputHoursWorked()
				hourlyRate    = inputHourlyRate()
				grossPay      = calculateGrossPay(hrsWorked, hourlyRate,
												  grossPay,  totalGross)
				outputIndPayrollInfo(firstName, lastName,
									 hrsWorked, hourlyRate,
									 grossPay)
				PROMPT for again
				GET        again
				IF (again = "Y") THEN
					SET keepGoing = true
				ELSE
					SET keepGoing = false
				END IF
			END WHILE
			
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

			IF (hrsWorked > MAXNONOT) THEN
				SET       regHours = 40
				CALCULATE otHours  = hrsWorked - MAXNONOT
				CALCULATE grossPay = ((regHours * hourlyRate) +
									  (otHours * hourlyRate   * OTRATE))
			ELSE
				CALCULATE grossPay = hourlyRate * hrsWorked
			END IF

			SET totalGross = totalGross + grossPay
		END FUNCTION
		
		FUNCTION outputIndPayrollInfo(firstName, lastName,
									  hrsWorked, hourlyRate,
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
