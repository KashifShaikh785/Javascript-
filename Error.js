// Function that throws an error if the argument is not a number
function validateNumber(num) {
    if (typeof num !== 'number') {
      throw new Error("Invalid argument, number expected");
    }
    return num;
  }
  
  // Example 1: Division with error handling
  function performDivision(a, b) {
    try {
      if (b === 0) throw new Error("Division by zero");
      console.log(`Result: ${a / b}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      console.log("Division attempt completed.");
    }
  }
  
  // Example 2: Validation with error handling
  function validateInput(input) {
    try {
      validateNumber(input);
      console.log("Valid number:", input);
    } catch (error) {
      console.error(`Validation Error: ${error.message}`);
    } finally {
      console.log("Validation attempt completed.");
    }
  }
  
  // Perform operations
  performDivision(10, 0);    // This will cause a division by zero error
  validateInput("a");        // This will cause a validation error
  validateInput(42);         // This will pass validation
  