function calculateStandardDeviation(data) {
    // Check if the input array is empty or has only one element
    if (data.length < 2) {
      throw new Error("Data should have at least two values for standard deviation calculation.");
    }
  
    // Calculate the count
    const count = data.length;
  
    // Calculate the mean (average)
    const mean = data.reduce((sum, value) => sum + value, 0) / count;
  
    // Calculate the sum of squared differences
    const squaredDifferencesSum = data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0);
  
    // Calculate the variance
    const variance = squaredDifferencesSum / (count - 1); // Use (n-1) for sample variance
  
    // Calculate the standard deviation (square root of variance)
    const standardDeviation = Math.sqrt(variance);
  
    // Round the result to two decimal places
    const roundedStandardDeviation = Math.round(standardDeviation * 100) / 100;
  
    // Log the count, mean, variance, and standard deviation
    console.log(`Count: ${count}`);
    console.log(`Mean: ${mean}`);
    console.log(`Variance: ${variance}`);
    console.log(`Standard Deviation: ${roundedStandardDeviation}`);
  
    return roundedStandardDeviation;
  }
  
  try {
    // Example usage
    const data = [4, 5, 6];
    const result = calculateStandardDeviation(data);
    console.log(`The standard deviation is approximately: ${result}`);
  } catch (error) {
    console.error(error.message);
  }
  