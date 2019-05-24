/*
		This is Version 4 of a simple Payroll Program written
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

		PAYROLL4
			DECLARE STRING firstName   = ""	
			DECLARE STRING lastName    = ""	
			DECLARE REAL   hoursWorked = 0	
			DECLARE REAL   hourlyRate  = 0	
			DECLARE REAL   grossPay    = 0  	
		
			WHILE (keepGoing = TRUE)
				SET totalEmps = totalEmps + 1
				inputFirstName()
				inputLastName()
				inputHoursWorked()
				inputHourlyRate()
				calculateGrossPay()
				outputIndPayrollInfo()
				PROMPT for again
				GET        again
				IF (again = "Y") THEN
					SET keepGoing = true
				ELSE
					SET keepGoing = false
				END IF
			END WHILE
			
			outputTotPayrollInfo()

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
		
		FUNCTION outputIndPayrollInfo()
			DISPLAY firstName
			DISPLAY lastName
			DISPLAY hoursWorked
			DISPLAY hourlyRate
			DISPLAY grossPay		
		END FUNCTION
		
		FUNCTION outputTotPayrollInfo()
			DISPLAY totalEmps
			DISPLAY totalPay
		END FUNCTION
*/

	//	Global Constant declarations
	const MAXNONOT = 40;		//	Max number of non-OT hours one can work
	const OTRATE	=  1.5;		//	Overtime rate
	const MINHOURS	=  0;		//	Minimum hours emp can work
	const MAXHOURS	= 84;		//	Maximum hours emp can work
	const MINRATE	=  0;		//	Minimum hourly emp rate
	const MAXRATE	= 100;		//	Maximum hourly emp rate
	
	//	Global Variable declarations
	var firstName		= "";
	var lastName 		= "";
	var hoursWorked 	= 0;
	var hourlyRate 	= 0;
	var grossPay 		= 0;		//	Employee gross pay*
	var regHours		= 0;		//	Non-Overtime hours worked
	var otHours		= 0;		//	Overtime hours worked
	var totEmployees	= 0;		//	Total # of employees
	var totGrossPay	= 0;		//	Total amount of grossPay
	var keepGoing		= true;		//	Program continue variable
	var again			= "";		//	Used with program continue variable

	function main()
	{
		while (keepGoing)			//	while (keepGoing == true)
		{
		}
		
		outputTotPayrollInfo();		//	Output the employee accumlators info
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

	function inputHoursWorked()
	{
	}

	//**************************************************

	function inputPayRate()
	{
	}

	//**************************************************

	function calculateGrossPay()
	{
	}

	//**************************************************

	function outputIndPayrollInfo()
	{
	}

	//**************************************************

	function outputTotPayrollInfo()
	{

	}
