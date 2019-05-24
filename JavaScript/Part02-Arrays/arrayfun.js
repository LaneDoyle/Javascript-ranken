/*
	This is a relatively simple JavaScript array program.
	
	It presents the user with a menu that allows him/her 
	to enter a:
	
	0 to Exit the program normally.
	1 to Generate a new 25 element random number (1 - 100) array.
	2 to Display the array in its original order.
	3 to Display the array in ascending order.
	4 to Display the array in descending order.
	5 to Display the smallest array element.
	6 to Display the largest  array element.
	7 to Display the sum of all array elements.
	8 to Display the average of all array elements.
*/

//	Create global constant
const SIZE		= 25;

//	Create global variables
var numbersOriginal	= new Array(SIZE);																					//	Original array
var numbersCopy	= new Array(SIZE);	
var choice		=   0;																				//	Copy of numbersOriginal array
var sum			=   0;																								//	Sum of  array values
var avg			= 0.0;	

//*********************************************************

function main()
{	//	Begin function main()
	createNewArray();
	displayArray(numbersOriginal, "Original")
	
	while (1 === 1)
	{
		selection = showMenu();
		
		if (choice === 0)
		{
			return;
		}
	}
}	//	End   function main()

//*********************************************************

function showMenu()
{	//	Begin function showMenu()
	var	outputStr	= "";
			
	outputStr += "Enter a 0 to exit the ArrayFun program now";
	outputStr += "\nEnter a 1 to generate a new 25 element array";
	outputStr += "\nEnter a 2 to display the array in original order";
	outputStr += "\nEnter a 3 to display the array in ascending order";
	outputStr += "\nEnter a 4 to display the array in descending order";
	outputStr += "\nEnter a 5 to display the smallest array element";
	outputStr += "\nEnter a 6 to display the largest array element";
	outputStr += "\nEnter a 7 to display the sum of all array elements";
	outputStr += "\nEnter a 8 to display the avg of all array elements\n";
	
	choice = parseInt(prompt(outputStr, "0"));
	
	while ((isNaN(choice)) || (choice < 0) || (choice > 8))
	{	//	Begin while ((isNaN(choice)) || (choice < 0) || (choice > 8))
		showMenu();
	}	//	End   while ((isNaN(choice)) || (choice < 0) || (choice > 8))
	
	callCorrectMethod(choice);
}	//	End   function showMenu()

//*********************************************************

function callCorrectMethod(s)
{	//	Begin function callCorrectMethod(s)
	switch (s)
	{	//	Begin switch (s)
		case 0:
			alert("Program Exiting Normally");
			return;
							
		case 1:
			createNewArray();
			displayArray(numbersOriginal, "Original");
			break;
							
		case 2:
			displayArray(numbersOriginal, "Original");
			break;
							
		case 3:
			sortNumbersAscending(true);
			break;
							
		case 4:
			sortNumbersDescending(true);
			break;
							
		case 5:
			displaySmallestElement();
			break;
							
		case 6:
			displayLargestElement();
			break;
							
		case 7:
			displaySumOfElements(true);
			break;
							
		case 8:
			displayAvgOfElements(false);
			break;
							
		default:
			showMenu();
			break;
	}	//	End   switch (s)
}	//	End   function callCorrectMethod(s)	

//*********************************************************

function createNewArray()
{	//	Begin function createNewArray()
		//	Randomly generate 25 numbers between 1 - 100
		//	As each number is generated, copy said number 
		//	to the numbersCopy array.
		for (var lcv = 0; lcv < numbersOriginal.length; ++lcv)
		{
			numbersOriginal[lcv]	= Math.floor(Math.random() * 100) + 1;
			numbersCopy[lcv]	= numbersOriginal[lcv];
		}
}	//	End   function createNewArray()

//*********************************************************

function displayArray(theArray, theOrder)
{	//	Begin function displayArray(numbersOriginal, "Original")
	var outputStr 	= "The array in " + theOrder + " order:\n";
	var end		= SIZE - 1;
	var lcv		= 0;
	
	for (; lcv < end; ++lcv)
	{
		outputStr += theArray[lcv] + ", ";
	}
	
	outputStr += theArray[lcv];
	
	alert (outputStr);
}	//	End   function displayArray(numbersOriginal, "Original")

//*********************************************************

function sortNumbersAscending(f)
{	//	Begin function sortNumbersAscending()
	numbersCopy.sort(function (a, b) { return a-b });
	
	if (f)
	{
		displayArray(numbersCopy, "Ascending");
	}
}	//	End   function sortNumbersAscending()

//*********************************************************

function sortNumbersDescending(f)
{	//	Begin function sortNumbersDescending()
	numbersCopy.sort(function (a, b) { return b-a });
	
	if (f)
	{
		displayArray(numbersCopy, "Descending");
	}
}	//	End   function sortNumbersDescending()

//*********************************************************

function displaySmallestElement()
{	//	Begin function displaySmallestElement()
	sortNumbersAscending(false);
	alert ("The smallest element is: " + numbersCopy[0]);
}	//	End   function displaySmallestElement()

//*********************************************************

function displayLargestElement()
{	//	Begin function displayLargestElement()
	sortNumbersDescending(false);
	alert ("The largest element is: " + numbersCopy[0]);
}	//	End   function displayLargestElement()

//*********************************************************

function displaySumOfElements(f)
{	//	Begin public void setSum()
	sum = 0;
	
	//	Loop through the numbersOriginal array, adding
	//	each element to the sum accumulator.
	for (var lcv = 0; lcv < numbersOriginal.length; ++lcv)
	{
		sum += numbersOriginal[lcv];
	}
	
	if (f)
	{
		alert ("The sum of all array element is: " + sum);
	}
}	//	End   public void setSum()

//*********************************************************

function displayAvgOfElements(f)
{	//	Begin function displayAvgOfElements(false)
	if (sum === 0)
	{
		displaySumOfElements(false);
	}
	
	//	Calculate and display the average
	avg = sum / numbersOriginal.length / 1.0;
	
	alert("The average of all array elements is: " + avg.toFixed(2));
}	//	End   function displayAvgOfElements()

//*********************************************************
