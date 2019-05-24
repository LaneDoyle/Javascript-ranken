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
	const MAXNONOT = 40;		//	Max number of non-OT hours one can work
	const OTRATE	=  1.5;		//	Overtime rate
	
	//	Variable declarations
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
	
	while(keepGoing)				//	Shortcut for while(keepGoing == true)
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

		//	Increment the total number of employees by 1
		++totEmployees;	// totEmployees = totEmployees + 1; totEmployees += 1; totEmployess++; also work here	
		
		//	Add current grossPay to totalGrossPay
		totGrossPay += grossPay;	
		
		//	Ask the user if they want to run the program again or not
		again = prompt("Run Program Again?", "Y");
		again = again.charAt(0).toUpperCase();
		
		if (again == "Y")
		{
			keepGoing = true;
		}
		else
		{
			keepGoing = false;
		}
	}		

	alert("Total Number Of Employees: "	+	totEmployees	+ "\n" +
		  "Total Payroll Amount: $"  	+ 	totGrossPay.toFixed(2));
}
