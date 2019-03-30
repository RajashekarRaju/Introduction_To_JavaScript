/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log((1 + 3 - 2) * 21);


/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);


/*
 * Programming Quiz: Favorite Food (2-3)
 */
console.log("Chicken");


/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);


/*
 * Programming Quiz: All Tied Up (2-5)
 */
var joke = "Why couldn't the shoes go out and play?\nThey were all tied up!";
console.log(joke);


/*
 * Programming Quiz: Yosa Buson (2-6)
 */
var haikuOne = "Blowing from the west\n";
var haikuTwo = "Fallen leaves gather\n";
var haikuThree = "In the east.";
var haiku = haikuOne + haikuTwo + haikuThree;
console.log(haiku);


/*
 * Programming Quiz: Semicolons! (2-8)
 */

// your code goes here
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + " " + thingTwo);


/*
 * Programming Quiz: What's my Name? (2-9)
 */

// your code goes here
var fullName = "K E Rajasekhar";
console.log(fullName);


/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
var finalTotal = total.toFixed(2);
console.log("$" + finalTotal);


/*
 * Programming Quiz: MadLibs (2-11)
 *
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 *
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */
var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib = "The Intro to JavaScript course is " + adjective1 + "." + " James and Julia are so " + adjective2 + "." + " I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);


/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here
var firstName = 'Julia';
var interest = 'cats';
var hobby = 'play video games';
var awesomeMessage = "Hi, my name is " + firstName + "." + " I love " + interest + "." + " In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);