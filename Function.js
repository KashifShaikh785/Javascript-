// Regular Function
function add(a, b) {
    return a + b;
  }
  
  // Arrow Function
  const addArrow = (a, b) => a + b;
  
  // Test the functions
  const num1 = 76;
  const num2 = 19;
  
  console.log("Using Regular Function:");
  console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`);
  
  console.log("\nUsing Arrow Function:");
  console.log(`The sum of ${num1} and ${num2} is: ${addArrow(num1, num2)}`);
  