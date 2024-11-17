function goTo_index()					{location.replace("CSC102_11-17-2024_Index_HTML.html");}
function goTo_boards() 					{location.replace("CSC102_10-21-2024_boards_HTML.html");}
function goTo_games() 					{location.replace("CSC102_10-27-2024_games_HTML.html");}
function goTo_palindromeChecker() 		{location.replace("CSC102_11-09-2024_palindrome checker_HTML.html");}
function goTo_userInputValidation()		{location.replace("CSC102_11-09-2024_User Input Validation_HTML.html");}
function goTo_incorporateAudio()		{location.replace("CSC102_11-10-2024_Incorporate Audio_HTML.html");}
function goTo_eventDrivenProgramming()	{location.replace("CSC102_11-11-2024_Event Driven Programming_HTML.html");}
function goTo_table() 					{location.replace("CSC102_11-17-2024_table_HTML.html");}

function sound(src) 						// Helper function to add library support to play audio.
{
	this.sound = document.createElement("audio");		// Create audio
	this.sound.src = src;					// Define source
	
	this.play = function()					// music function
	{
		this.sound.play();				// play sound
	}
}

function play() 						
{
	mySound = new sound("Audio/sms-alert-3-daniel_simon.mp3");
	mySound.play();					
}

function reloadPage()
{
 	window.location.reload();
}

function palindrome()
{
    var string1 = document.getElementById("firstString").value; //Define a variable called first name and set it equal to the input firstNameString from HTML.
    var string2 = document.getElementById("secondString").value; //Define a variable called last name and set it equal to the input lastNameString from HTML.
    
    var splitString = string1.split(""); //Split the string into characters, separated by commas.
    //alert(splitString);
    
    var reverseString = splitString.reverse(); //Reverse the new separated string.
    //alert(reverseString);

    var joinString = reverseString.join(""); //Join the reversed new string back together.
    //alert(joinString);

    if(string1 == joinString) //Compare the original string to the new string.
    {
        document.getElementById("truthSerum").innerHTML = "Your first word '" + string1 + "' is a palindrome!"; //Answer if evaluation is true.
    }
    else
    {
        document.getElementById("truthSerum").innerHTML = "Your first word '" + string1 + "' is not a palindrome!"; // OR ELSE say this.
    }

    var i = 0; //Declare the variable and set it to 0 just in case.
    var reversed = ""; //Declare a variable called reversed and set it to blank.
    for (i = string2.length-1; i>=0; i--) //Setting the i loop to be the length of the word, then run that number of times by subracting 1 each iteration.
    {
        reversed += string2[i]; //As you grab each letter in the for loop above, paste it into the string then move the curser forward for the next letter.
    }
    if (reversed == string2) // J U D G E M E N T     D A Y
    {
        document.getElementById("truthSerum2").innerHTML = "Your second word '" + string2 + "' is a palindrome!";   //Answer if evaluation is true.
    }
    else
    {
        document.getElementById("truthSerum2").innerHTML = "Your second word '" + string2 + "' is not a palindrome!";   // OR ELSE say this.
    }

}
/*
//I have arbitrarily decided that the minimum characters in someones name is 6 characters. I don't believe in upper limits for names so I only evaluate on the low side.
    if (fullName.length <=6)
    {
        document.getElementById("nameStatus").innerHTML = "Please enter your full First name and full Last Name to proceed.";
    }
    else // If you made it this far, you must be passing.
    {
        document.getElementById("nameStatus").innerHTML = "Welcome back " + fullName;
    }
/*    
//I have arbitrarily decided that the acceptable employee ID range is 600,000 to 699,999.
    if (empNum > 699999) //Ensure our employee ID isn't greater than 699,999.
    {
        document.getElementById("empNumStatus").innerHTML = "Sus bro, this number is too high.";
    }
    else if ((empNum < 600000)) //Ensure our employee ID isn't less than 600,000
    {
        document.getElementById("empNumStatus").innerHTML = "Sus bro, this number is too low.";
    }
    else //If the number isn't out of range, it must be good (Or there is some witchcraft going on).
    {
        document.getElementById("empNumStatus").innerHTML = "Your Employee ID has been accepted."
    }
}
*/