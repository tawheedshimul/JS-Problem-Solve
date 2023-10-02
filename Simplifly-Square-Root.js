function simplifySquareRoot(number) {
  if (number <= 1) return "√" + number;

  let sqrt = Math.floor(Math.sqrt(number));
  let result = "";

  for (let i = 2; i <= sqrt; i++) {
    while (number % (i * i) === 0) {
      if (result !== "") {
        result = i ;
        // result += " * "
      }
      result += i;
      number /= i * i;
    }
  }

  if (number > 1) {
    if (result !== "") {
      result += "";
    }
    result += "√" + number;
  }

  return result !== "" ? result.replace(/\* \*/g, " * ") : "√" + number;
}

// Test cases
console.log("√20 = " + simplifySquareRoot(20));    // Output: √20 = 2√5
console.log("√4 = " + simplifySquareRoot(4));      // Output: √4 = 2
console.log("√48 = " + simplifySquareRoot(48));    // Output: √48 = 4√3
console.log("√1 = " + simplifySquareRoot(1));      // Output: √1 = 1
console.log("√96 = " + simplifySquareRoot(96));      // Output: √9 = 3
console.log("√108 = " + simplifySquareRoot(108));  // Output: √108 = 6√3
console.log("√31 = " + simplifySquareRoot(31));    // Output: √31 = √31
console.log("√188 = " + simplifySquareRoot(188));    // 
console.log("√31 = " + simplifySquareRoot(31));    // Output: √31 = √31