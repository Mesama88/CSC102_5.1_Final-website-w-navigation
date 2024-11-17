function goTo_index()					{location.replace("CSC102_11-17-2024_Index_HTML.html");}
function goTo_boards() 					{location.replace("CSC102_10-21-2024_boards_HTML.html");}
function goTo_games() 					{location.replace("CSC102_10-27-2024_games_HTML.html");}
function goTo_palindromeChecker() 		{location.replace("CSC102_11-09-2024_palindrome checker_HTML.html");}
function goTo_userInputValidation()		{location.replace("CSC102_11-09-2024_User Input Validation_HTML.html");}
function goTo_incorporateAudio()		{location.replace("CSC102_11-10-2024_Incorporate Audio_HTML.html");}
function goTo_eventDrivenProgramming()	{location.replace("CSC102_11-11-2024_Event Driven Programming_HTML.html");}
function goTo_table() 					{location.replace("CSC102_11-17-2024_table_HTML.html");}

var sec = 0; // Global variable
var danceSpeed = 0; //Determines how much the image moves.
var intervalId = 0; 

function sound(src) 						            // Helper function to add library support to play audio.
{
	this.sound = document.createElement("audio");		// Create audio
	this.sound.src = src;					            // Define source
	
	this.play = function()					            // music function
	{
		this.sound.play();				                // play sound
	}
}

function timer()                                        // A function that can be called.
{
    document.getElementById("timerMsg").innerHTML = "Timer started, please wait";   //Publishes this message to screen.
    setTimeout(()=>             // Performs the function after the defined delay.
    {
        document.getElementById("timerMsg").innerHTML = "5 seconds have elapsed";   //Publishes this message to screen.
    }, 5000)                                            // Run every 5000ms or 5s.
}

function clock()                                        // A function that can be called.
{   
    sec++;                                              // Increment the sec variable by 1.
    document.getElementById("intervalMsg").innerHTML = sec + " seconds have passed";    // Print this message to screen.
    setInterval(clock, 1000);                           // Run the clock function every 1000ms.
}

function dancingGhost()                                 // A function that can be called.
{
    document.getElementById("stopDancing").disabled=false;      // Sets the stop button to not be disabled. Meaning it's enabled.
    document.getElementById("dancingGhost").disabled=true;  // Sets the start button to be disabled. Meaning it's disabled.
    var image = document.getElementById("ghost");
    intervalId = setInterval(function()
        {
            image.style.left = danceSpeed + "px";           // Set the position as the new X value in pixels + the original X value in pixels.
            image.style.top = danceSpeed + "px";            // Set the position as the new Y value in pixels + the original Y value in pixels.
            document.getElementById("XandY").innerHTML = "x =  " + image.style.left + "     and y= " + image.style.top;     // Print the x and y values to screen. Mostly a troubleshotting line or giving you feedback to customize a pattern.
            danceSpeed += 4;                                    // Increments the movement speed by the determined amount.
        }, 50)                                                  // Run every 50ms or .5s
}
 
function stopDancing()
{
    document.getElementById("stopDancing").disabled=true;       // Sets the stop button to be disabled. Meaning it's disabled.
    document.getElementById("dancingGhost").disabled=false;     // Sets the start button not to be disabled. Meaning it's enabled.
    clearInterval(intervalId);                                  // Sets the value of intervalId to 0; meaning that the above function no longer runs.
}

function play() 				                           // A function that can be called.		
{
	mySound = new sound("Audio/sms-alert-3-daniel_simon.mp3");      // Points to the sound that you desire and sets it as mySound.
	mySound.play();					                                // Plays the sound.
}

function reloadPage()                                   // A function that can be called.
{
 	window.location.reload();                           // Reloads the window, resetting anything that is active.
}

function palindrome()                                   // A function that can be called.
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