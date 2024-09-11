/* function calculateTax(income, expenses) {
  if (income < expenses || (income && expenses) < 0) {
    return "Invalid Input";
  } else {
    const diffVal = income - expenses;
    return (diffVal * 0.2).toFixed(2);
  }
}

function sendNotification(email) {
  const mail = email.split("@");
  const userName = mail[0];
  const domainName = mail[1];
  if (email.includes("@") === false) {
    return "Invalid Email";
  } else {
    return `${userName} sent you an email from ${domainName}`;
  }
}
 */
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
let finalResult = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
for(const some of finalResult){
  console.log(some);
  console.log(finalResult[some]);
}
// hoi na