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

	//	Global Constant declarations
	const MAXNONOT = 40;		//	Max number of non-OT hours one can work
	const OTRATE	=  1.5;		//	Overtime rate
	const MINHOURS	=  0;		//	Minimum hours emp can work
	const MAXHOURS	= 84;		//	Maximum hours emp can work
	const MINRATE	=  0;		//	Minimum hourly emp rate
	const MAXRATE	= 100;		//	Maximum hourly emp rate

	//	Global variables declared and initialized
	var totEmployees	= 0;		//	Total # of employees
	var totGrossPay	= 0;		//	Total amount of grossPay
		
	function main()
	{
		//	Local Variable declarations
		var firstName		= "";
		var lastName		= "";
		var hoursWorked	= 0;
		var hourlyRate 	= 0;
		var grossPay 		= 0;		//	Employee gross pay*
		var regHours		= 0;		//	Non-Overtime hours worked
		var otHours		= 0;		//	Overtime hours worked
		var keepGoing		= true;		//	Program continue variable
		var again			= "";		//	Used with program continue variable
		
		while (keepGoing)	//	Same thing as while (keepGoing == true)
		{
			firstName 		= inputFirstName();
			lastName 		= inputLastName();
			hoursWorked	= inputHoursWorked();
			hourlyRate		= inputHourlyRate();
			grossPay		= calculateGrossPay(hoursWorked, hourlyRate);
			outputIndPayrollInfo(firstName, lastName, hoursWorked, hourlyRate, grossPay);
			keepGoing		= runProgramAgain();
		}
		
		outputTotPayrollInfo();
	}

	//**************************************************

	function inputFirstName()
	{		
		var fn = "";		//	First name
		
		do
		{
			fn = prompt("Enter First Name: ", "First Name");

		} while(fn.trim() == "");
		
		return fn;
	}

	//**************************************************

	function inputLastName()
	{
		var ln = "";		//	Last name
		
		do
		{
			ln = prompt("Enter Last Name: ", "Last Name");

		} while(ln.trim() == "");
		
		return ln;
	}

	//**************************************************

	function inputHoursWorked()
	{
		var hw = 0.0;
		
		do
		{
			hw = parseFloat(prompt("Enter hours worked between " + MINHOURS  	+
														 " and " + MAXHOURS	+ ":", "40"));

		} while((isNaN(hw)) || (hw < MINHOURS) || (hw > MAXHOURS));
		
		return hw;
	}

	//**************************************************

	function inputHourlyRate()
	{
		var hr = 0.0;
		
		do
		{
			hr = parseFloat(prompt("Enter hourly rate between " + MINRATE  	+
														     " and " + MAXRATE	+ ":", 25));

		} while((isNaN(hr)) || (hr < MINRATE) || (hr > MAXRATE));
		
		return hr;
	}

	//**************************************************

	function calculateGrossPay(hw, hr)
	{
		//	Declare and initialize local variables
		var regHours 	= 0;	//	Non-overtime hours worked
		var otHours  	= 0;	//	Overtime hours worked
		var gross		= 0;	//	Calculated gross pay	
		
		//	Check if employee worked more than 40 hours (MANNONOT)
		if (hw > MAXNONOT)		//	Employee has OT pay coming
		{
			regHours = MAXNONOT;
			otHours  = hw - MAXNONOT;
			
			//	Calculate grossPay
			gross = ((regHours * hr) +
				    (otHours * hr * OTRATE));
		}
		else							//	Employee has no OT pay coming
		{
			gross = hw * hr;
		}

		//	Increment the total number of employees by 1
		++totEmployees;
		
		//	Add current grossPay to totalGrossPay
		totGrossPay += gross;

		return gross;
	}

	//**************************************************

	function outputIndPayrollInfo(firstName, lastName, hoursWorked, hourlyRate, grossPay)
	{
		alert("First Name: " 	+ firstName 	+ "\n" +
			  "Last Name: "  	+ lastName 	+ "\n" +
			  "Hours Worked: " 	+ hoursWorked.toFixed(2)	+ "\n" +
			  "Hourly Rate: "  	+ hourlyRate.toFixed(2)	+ "\n" +
			  "Gross Pay: "    	+ grossPay.toFixed(2));
	}
	
	//**************************************************
	
	function runProgramAgain()
	{
		var kg = true;		//	Keep going boolean flag
		
		//	Ask the user if they want to run the program again or not
		var again = prompt("Run Program Again?", "Y");
		again = again.charAt(0).toUpperCase();
			
		if (again != "Y")
		{
			kg = false;
		}
		
		return kg;
	}
	

	//**************************************************
	
	function outputTotPayrollInfo()
	{
		alert("Total Number Of Employees: "	+	totEmployees	+ "\n" +
			  "Total Payroll Amount: $"  	+	totGrossPay.toFixed(2));
	}
	
	//**************************************************
