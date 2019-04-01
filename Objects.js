/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function () {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    },
};

// *********************************************************************************************************************

/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
console.log(breakfast.price);

// *********************************************************************************************************************

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function printAccountSummary() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " +
            savingsAccount.interestRatePercent + "%.";
    }
};
console.log(savingsAccount.printAccountSummary());

// *********************************************************************************************************************

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Raj",
    friends: 131,
    messages: ["Hi!", "Hey!", "Yeah", "Okay"],
    postMessage: function (message) {
        return facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        return facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        return facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function () {
        return facebookProfile.friends = facebookProfile.friends - 1;
    }
};
console.log(facebookProfile.postMessage("No"));
console.log(facebookProfile.deleteMessage(3, 2));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());

// *********************************************************************************************************************

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function (donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each" );
});