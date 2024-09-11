/* function checkDigitsInName(input) {
  // Check if the input is a string
  if (typeof input !== 'string') {
      return 'Invalid Input';
  }
  
  // Iterate through each character of the string
  for (let i = 0; i < input.length; i++) {
      // Check if the character is a digit
      if (input[i] >= '0' && input[i] <= '9') {
          return true; // Return true if a digit is found
      }
  }
  
  // Return false if no digits are found
  return false;
}

// Test cases
console.log(checkDigitsInName("Raj123")); // true
console.log(checkDigitsInName("n9ayeem")); // true
console.log(checkDigitsInName("e1mu3")); // true
console.log(checkDigitsInName("Suman")); // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#")); // false
console.log(checkDigitsInName(["Raj"])); // Invalid Input
 */
/* let sum = 0;
let finalResult = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
if((typeof finalResult) !== "object"){
  return "invalid";
}

if (finalResult.isFFamily === true) {
  finalResult.isFFamily = 20;
} else if (finalResult.isFFamily === false) {
  finalResult.isFFamily = 0;
}

sum = finalResult.testScore + finalResult.schoolGrade + finalResult.isFFamily;
console.log(sum);
 */

/* function calculateTax(income, expenses) {
  if (income < expenses || (income && expenses) < 0) {
    return "Invalid Input";
  } else {
    const diffVal = income - expenses;
    return (diffVal * 0.2);
  }
} */

/* function sendNotification(email) {
  const mail = email.split("@");
  const userName = mail[0];
  const domainName = mail[1];
  if (email.includes("@") === false) {
    return "Invalid Email";
  } else {
    return `${userName} sent you an email from ${domainName}`;
  }
} */

/* function checkDigitsInName(name) {
    if (typeof name !== "string") {
      return "Invalid Input";
    }
    for (const names of name) {
      if (names >= "0" && names <= "9") {
        return true;
      }
    }
    return false;
  } */

/* function calculateFinalScore(obj) {
  let sum = 0;
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  if (obj.isFFamily === true) {
    obj.isFFamily = 20;
  } else if (obj.isFFamily === false) {
    obj.isFFamily = 0;
  }
  sum = obj.testScore + obj.schoolGrade + obj.isFFamily;
  if (sum > 80) {
    return true;
  } else if (sum < 80) {
    return false;
  }
} */

function waitingTime(waitingTimes, serialNumber) {
  let avgSum = 0;
  const waitingLength = waitingTimes.length;
  const isratCount = serialNumber - 1;
  const isratStand = isratCount - waitingLength;

  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }
  for (const waitTime in waitingTimes) {
    avgSum += waitingTimes[waitTime];
  }
  let avgVal = Math.round(avgSum / waitingLength);
  return avgVal * isratStand;
}

const val = waitingTime([7, 8, 3, 4, 5], "9");
console.log(val);
// .toFixed(2)
