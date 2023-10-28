// src/app.mjs

// Import mathFunctions module
// import { add, subtract, secretKey } from './modules/mathFunctions.mjs';
import fetchApiData from './modules/api.mjs'

const apiData = await fetchApiData();
console.log(apiData.results);

// async function main() {
//     try {
//       const apiData = await fetchApiData();
//       console.log(apiData);
//       // Use the API data in your application
//     } catch (error) {
//       console.error('API request error:', error);
//     }
//   }
  
//   main();


