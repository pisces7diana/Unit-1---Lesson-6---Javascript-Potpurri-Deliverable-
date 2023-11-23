// setAlarm
    // Write a function named setAlarm that has two arguments.

        // The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
        // The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
        // The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

function setAlarm(employed, vacationing){
    if (employed && !vacationing) {
        return true;
      } else {
        return false;
      }
    }


// Count Odd Numbers
    // Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

let i = 1, oddNumberCount = 7;
let count = 0;

while (i <= oddNumberCount) {
    if (i % 2 !== 0) {
        count++;
    }
    i++;
}

console.log(`There are ${count} positive odd numbers that are below 7`)



// Disemvoweling Trolls

    // Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

function trollsBeGone(string) {
    return string.replace(/[aeiou]/gi, '');
  }

const result = trollsBeGone("This website is for losers LOL");
console.log(result);


// Bank Account Summary
    // Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)

const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000,
};

    // Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.

function bankAccountSummary(bankInfo) {
    // Using Object.values to get an array of all values in the object
    const accountValues = Object.values(bankInfo);
  
    // Using reduce to calculate the sum of all values
    const totalBalance = accountValues.reduce((acc, currentValue) => acc + currentValue, 0);
  
    return totalBalance;
  }

const summary = bankAccountSummary(bankInfo);
console.log(summary);


    // Save your bankAccountSummary total to a variable called bankTotal
const bankTotal = bankAccountSummary(bankInfo);

    // Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.
function inTheRed(bankTotal) {
    return bankTotal < 0;
}

console.log('Bank Account Summary:', bankTotal);
console.log('In the Red:', inTheRed(bankTotal));