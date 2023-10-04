// Define the probabilities P(A) and P(B)
const PA = 0.45; // Replace with the actual value of P(A)
const PB = 0.70;  // Replace with the actual value of P(B)

// Calculate P(A∩B) - Probability of the intersection of A and B
const PIntersection = PA * PB;

// Calculate P(A∪B) - Probability of the union of A and B
const PUnion = PA + PB - PIntersection;

// Calculate P(A∆B) - Probability of the symmetric difference of A and B
const PSymmetricDifference = PA + PB - 2 * PIntersection;

// Calculate P((A∪B)') - Probability of the complement of the union of A and B
const PComplementUnion = 1 - PUnion;

// Calculate P(A') - Probability of the complement of A
const PComplementA = 1 - PA;

// Calculate P(B') - Probability of the complement of B
const PComplementB = 1 - PB;

// A always occurring 
const alwaysOccurring = (Math.pow(PA,3)*100)
// A never  occurring 
const neverOccurring = (Math.pow(PComplementA,3)*100)
// A occurring at least once
const occurringOnce = ((1-Math.pow(PComplementA,3))*100)


// // B always occurring 
// const alwaysOccurringB = (Math.pow(PB,3)*100)
// // B never  occurring 
// const neverOccurringB = (Math.pow(PComplementB,3)*100)
// // B occurring at least once
// const occurringOnceB = ((1-Math.pow(PComplementB,3))*100)

// Print the results
console.log(alwaysOccurring)
console.log(neverOccurring)
console.log(occurringOnce)

console.log("P(A∩B): " + PIntersection);
console.log("P(A∪B): " + PUnion);
console.log("P(A∆B): " + PSymmetricDifference);
console.log("P((A∪B)'): " + PComplementUnion);
console.log("P(A'): " + PComplementA);
console.log("P(B'): " + PComplementB);