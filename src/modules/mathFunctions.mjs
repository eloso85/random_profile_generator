// src/mathFunctions.mjs

// Export a simple addition function
export function add(a, b) {
    return a + b;
  }
  
  // Export a subtraction function
  export function subtract(a, b) {
    return a - b;
  }
  
  export function secretKey(){
    return console.log(process.env.SECRET_KEY);
  }