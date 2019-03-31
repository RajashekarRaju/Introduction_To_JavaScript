/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var name;

while (x <= 20) {
    // check divisibility
    if (x % 3 === 0) {
        name = "Julia";
    } else if (x % 5 === 0) {
        name = "James";
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        name = "JuliaJames";
    } else {
        name = x;
    }
    // print Julia, James, or JuliaJames
    console.log(name);

    // increment x
    x++;
}

// *********************************************************************************************************************

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var lyrics;

while (num > 0) {

    // check value of num
    if (num === 1) {
        // 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice
        // on the wall!
        lyrics = num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it " +
            "around... " + (num - 1) + " bottles of juice on the wall!";
    } else if (num - 1 === 1) {
        lyrics = num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it " +
            "around... " + (num - 1) + " bottle of juice on the wall!";
    } else {
        lyrics = num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it " +
            "around... " + (num - 1) + " bottles of juice on the wall!";
    }

    // print lyrics using num
    console.log(lyrics);

    // don't forget to check pluralization on the last line!

    // decrement num
    num = num - 1;
}

// *********************************************************************************************************************

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var seconds = 60;

while (seconds >= 0) {

    if (seconds === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (seconds === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (seconds === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (seconds === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (seconds === 6) {
        console.log("Main engine start");
    } else if (seconds === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + seconds + " seconds");
    }

    seconds = seconds - 1;
}

// *********************************************************************************************************************

/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
for (var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}

// *********************************************************************************************************************

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 5; x <= 9; x++) {
    console.log(x);
}

// *********************************************************************************************************************

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}

// *********************************************************************************************************************

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var solution = 1;
var number = 12;
for (var i = 1; i <= number; i++) {
    solution = solution * i;
}
console.log(solution);

// *********************************************************************************************************************

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for (var row = 0; row < 26; row++) {
    for (var seat = 0; seat < 100; seat++) {
        console.log(row + "-" + seat);
    }
}