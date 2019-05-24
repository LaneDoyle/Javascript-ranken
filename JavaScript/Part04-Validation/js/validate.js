//	Declare and initialize global program constants

//	Declare and initialize global program variables
var isValid = true;		//	Boolean form validation success flag
var regexpattern = "";		//	Holds current Regular Expression (regex)pattern
var string = "";			//	String to hold final (valid) results

var $ = function (id) 
{
    return document.getElementById(id);
}

var validateForm = function ()
{
	//	Copy values from form inputs
	//	into local JavaScript variables
	var ssn			= $("ssn").value;
	var fname 		= $("fname").value;
	var lname		= $("lname").value;
	var address		= $("address").value;
	var city			= $("city").value;
	var state			= $("state").value;
	var zip			= $("zip").value;
	var cellphone		= $("cellphone").value;
	var email			= $("email").value;
	var shift;			
	var contactvia;
	var education;
	var password	= $("password").value;
	var confirmpassword	= $("confirmpassword").value;
	
	//alert ("Inputted password was: " + password + "\n" +
	//	   "Inputted confirm  was: " + confirmpassword);
/*	var birthdate		= $("birthDate").value;
	var favoritecolor	= $("favoritecolor").value;
	var personalwebsite	= $("personalwebsite").value;
	var ccnumber		= $("ccnumber").value;
*/	
	//	Validate Social Security Number Field
	validateSSN(ssn);
	validateFirstName(fname);
	validateLastName(lname);
	validateAddress(address);
	validateCity(city);
	validateState(state);
	validateZip(zip);
	validateCellPhone(cellphone);
	validateEmail(email);
	validateShift();
	validateContactVia();
	validateEducation();
	validatePassword(password);
	validateConfirmPassword(confirmpassword, password);
	//validateBirthDate();
	//validateFavoriteColor();
	//validatePersonalWebsite();
	//validateCCNumber();
	
	alert("The current values are:\n" + string);
};

function validateSSN(s)
{
	if (s == "")
	{ 
		$("ssn_error").firstChild.nodeValue = 
						"SSN Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^\d{3}-\d{2}-\d{4}$/;
	
		if (!s.match(regexpattern))
		{
			$("ssn_error").firstChild.nodeValue = 
						"SSN Must Be In nnn-nn-nnnn Format.";
			isValid = false;
		}
		else
		{
			$("ssn_error").firstChild.nodeValue = "";
			string += "Social Security Number:  " + s + "\n";
		} 
	}
}

function validateFirstName(f)
{
	// Validate the First Name
	if (f.trim() == "")
	{ 
		$("fname_error").firstChild.nodeValue = 
						"First Name Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^([A-Za-z]){1,50}$/;
	
		if (!f.match(regexpattern))
		{
			$("fname_error").firstChild.nodeValue = 
						"First Name Must Be Alpha Only.";
			isValid = false;
		}
		else
		{
			$("fname_error").firstChild.nodeValue = "";
			string += "First Name:  " + f + "\n";
		} 		
	}
}

function validateLastName(l)
{
	// Validate the Last Name
	if (l.trim() == "")
	{ 
		$("lname_error").firstChild.nodeValue = 
						"Last Name Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^([A-Za-z]){1,50}$/;
	
		if (!l.match(regexpattern))
		{
			$("lname_error").firstChild.nodeValue = 
						"Last Name Must Be Alpha Only.";
			isValid = false;
		}
		else
		{
			$("lname_error").firstChild.nodeValue = "";
			string += "Last Name:  " + l + "\n";
		} 		
	}
}

function validateAddress(a)
{
	// Validate the Address
	if (a.trim() == "")
	{ 
		$("address_error").firstChild.nodeValue = 
						"Address Required.";
		isValid = false;
	}
	else
	{
		$("address_error").firstChild.nodeValue = "";
		string += "Address:  " + a + "\n";
	}
}

function validateCity(c)
{
	// Validate the City
	if (c.trim() == "")
	{ 
		$("city_error").firstChild.nodeValue = 
						"City Required.";
		isValid = false;
	}
	else
	{
		$("city_error").firstChild.nodeValue = "";
		string += "City:  " + c + "\n";
	}	
}

function validateState(s)
{
	// Validate the Address
	if ((s == "Please Select Your State:") || (s == ""))
	{ 
		$("state_error").firstChild.nodeValue = 
						"State Name Required.";
		isValid = false;
	}
	else
	{
		$("state_error").firstChild.nodeValue = "";
		string += "State:  " + s + "\n";
	}
}

function validateZip(z)
{
	// Validate the Zip Code
	if (z.trim() == "")
	{ 
		$("zip_error").firstChild.nodeValue = 
						"Zip Code Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^\d{5}([\-]\d{4})?$/;
	
		if (!z.match(regexpattern))
		{
			$("zip_error").firstChild.nodeValue = 
						"Zip Code nnnnn or nnnnn-nnnn only.";
			isValid = false;
		}
		else
		{
			$("zip_error").firstChild.nodeValue = "";
			string += "Zip Code: " + z + "\n";
		}
	} 		
}

function validateCellPhone(c)
{
	// Validate the Phone Number
	if (c.trim() == "")
	{ 
		$("cellphone_error").firstChild.nodeValue = 
						"Phone Number Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^\d{3}-\d{3}-\d{4}$/;
	
		if (!c.match(regexpattern))
		{
			isValid = false;
			$("cellphone_error").firstChild.nodeValue = 
						"# must be in nnn-nnn-nnnn format.";
		}
		else
		{
			$("cellphone_error").firstChild.nodeValue = "";
			string += "Phone Number:  " + c + "\n";
		} 		
	}
}

function validateEmail(e)
{
	// Validate the Email Address
	if (e.trim() == "")
	{ 
		$("email_error").firstChild.nodeValue = 
						"Email Address Required.";
		isValid = false;
	}
	else
	{
		regexpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	
		if (!e.match(regexpattern))
		{
			$("email_error").firstChild.nodeValue = 
						"Invalid email address input.";
			isValid = false;
		}
		else
		{
			$("email_error").firstChild.nodeValue = "";
			string += "Email Address:  " + e + "\n";
		} 		
	}
}

function validateShift()
{
	var els		= document.getElementsByClassName('sh');
	var count		= 0;
	
//	alert("The value of els in the validateShift() function is: " + els.length)
	for (var i = 0; i < els.length; ++i)
	{
		if (els[i].checked)
		{
			++count;
			break;
		} 
	}
	
//	alert("Count = " + count);
	if (count === 0)
	{		
		$("shift_error").firstChild.nodeValue = "Shift Preference Required.";
		isValid = false;
	}
	else
	{
		var s = document.querySelector('input[name = "shift"]:checked').value;
//		alert ("The checked one is: " + s);
		$("shift_error").firstChild.nodeValue = "";
		string += "Desired Shift:  " + 
				 s.charAt(0).toUpperCase() + s.slice(1) + "\n";
	}
}

function validateContactVia()
{
	var inputElems	= document.getElementsByTagName("input");
    var count 	= 0;
	var choices = "";
	
    for (var i = 0; i < inputElems.length; ++i)
	{
		if (inputElems[i].type === "checkbox" && inputElems[i].checked === true)
		{
			$("contactvia_error").firstChild.nodeValue = "";
//			alert ("The value of inputElems[i].value is " + inputElems[i].value)
			choices += inputElems[i].value + " ";
			++count;
		}
	}
	
	if (count == 0)
	{
		$("contactvia_error").firstChild.nodeValue = 
					"Contact Via Required.";
		isValid = false;
	}
	else
	{
		string += "Contact Via:  " + choices + "\n";
	}
}

function validateEducation()
{
	var els		= document.getElementsByClassName('edu');
	var count		= 0;
	
//	alert("The value of els in the validateEducation() function is: " + els.length)
	for (var i = 0; i < els.length; ++i)
	{
		if (els[i].checked)
		{
			++count;
			break;
		} 
	}
	
//	alert("Count = " + count);
	if (count === 0)
	{		
		$("education_error").firstChild.nodeValue = "Highest Education Required.";
		isValid = false;
	}
	else
	{
		var e = document.querySelector('input[name = "education"]:checked').value;
//		alert ("The checked one is: " + e);
		$("education_error").firstChild.nodeValue = "";
		string += "Highest Education:  " + 
				 e.charAt(0).toUpperCase() + e.slice(1) + "\n";
	}
}

function validatePassword(p)
{
	// Validate the Password
	if (p == "")
	{ 
		$("password_error").firstChild.nodeValue = 
						"Password Required.";
		isValid = false;
	}
	else
	{
		if ((p.length < 10) || (p.length > 25))
		{
			$("password_error").firstChild.nodeValue = 
						"Password Must Be 10 - 25 Characters.";
			isValid = false;
		}
		else
		{
			$("password_error").firstChild.nodeValue = "";
			string += "Password:  " + p + "\n";
		} 		
	}
}

function validateConfirmPassword(c, p)
{
	// Validate the Confirm Password
	if (c == "")
	{ 
		$("confirmpassword_error").firstChild.nodeValue = 
						"Confirm Password Required.";
		isValid = false;
	}
	else
	{
		if (c != p)
		{
			$("confirmpassword_error").firstChild.nodeValue = 
						"Confirm Password Must == Password.";
			isValid = false;
		}
		else
		{
			$("confirmpassword_error").firstChild.nodeValue = "";
			string += "Confirm Password:  " + c + "\n";
		} 		
	}
}

var clearAll = function() {
	$("ssn").value				=	"";
	$("ssn_error").value			=	"*";
	$("fname").value				=	"";
	$("fname_error").value		=	"*";
	$("lname").value				=	"";
	$("lname_error").value		=	"*";
	$("address").value			=	"";
	$("address_error").value		=	"*";
	$("city").value				=	"";
	$("city_error").value			=	"*";
	$("state").value				=	"";
	$("state_error").value		=	"*";
	$("zip").value				=	"";
	$("zip_error").value			=	"*";
	$("cellphone").value			=	"";
	$("cellphone_error").value	=	"*";
	$("email").value				=	"";
	$("email_error").value 		=	"*";
	$("shift").value				=	"";
	$("shift_error").value 		=	"*";
	$("contactvia").value			=	"";
	$("contactvia_error").value	=	"*";
	$("education").value 			=	"";
	$("education_error").value	=	"*";
	$("password").value 			=	"";
	$("password_error").value		=	"*";
	$("confirmpassword").value 	=	"";
	$("confirmpassword_error").value = "*";
	$("ssn").focus();
}

//	"Register" the functions
window.onload = function() {
	$("validate").onclick		=	validateForm;
	$("clear").onclick			=	clearAll;
	$("ssn").focus();
};
