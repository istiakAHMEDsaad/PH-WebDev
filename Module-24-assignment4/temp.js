function checkDigitsInName(input) {
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
