// Define a person object with properties for name, age, and hobbies
let person = {
    name: "Kashif",
    age: 22,
    hobbies: ["reading", "gaming", "coding"]
  };
  
  // Define an array of objects representing multiple people
  let people = [
    { name: "Kashif", age: 22, hobbies: ["reading", "gaming", "coding"] },
    { name: "Nataliya", age: 23, hobbies: ["running", "painting", "traveling"] },
    { name: "Mehwish", age: 22, hobbies: ["swimming", "cycling", "hiking"] },
    { name: "Noushaba", age: 21, hobbies: ["reading", "drawing", "dancing"] },
    { name: "Maya", age: 32, hobbies: ["writing", "photography", "gardening"] }
  ];
  
  // Function to filter people by age and return their names
  function filterByAge(people, age) {
    return people
      .filter(person => person.age > age)
      .map(person => person.name);
  }
  
  // Test the filterByAge function
  const ageThreshold = 20;
  const namesAboveAge = filterByAge(people, ageThreshold);
  
  console.log(`People older than ${ageThreshold}: ${namesAboveAge.join(", ")}`);
  