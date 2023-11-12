// 1 - Iterate 0 to 10 using for loop, do the same using while and do while loop


// for (let i=0; i<= 10; i++) {
//   console.log(i);
// }




// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i=10; i>=0; i--){
//     console.log(i);
// }



// let i=10;
// while(i>=0){
//     console.log(i);
//     i--;
// }




// 3 - Iterate 0 to n using for loop


//  let n=8;
//  for (let i=0; i<= n; i++) {
//       console.log(i);
//     }



// 4 - Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }

// 5 - Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i <= 100; i++) {
//         if (i % 2 !== 0) {
//           console.log(i);
//         }
//       }



// 6 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//     The sum of all numbers from 0 to 100 is 5050.

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);


// 7 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


// let sumEvens = 0;
// let sumOdds = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     // Even number
//     sumEvens += i;
//   } else {
//     // Odd number
//     sumOdds += i;
//   }
// }

// console.log("Sum of evens:",sumEvens);
// console.log("Sum of odds:",sumOdds);


// 8 - Develop a small script which generate array of 5 random numbers

//   function generateRandomArray() {
//     const randomArray = [];
  
//     for (let i = 0; i < 5; i++) {
//       const randomNumber = Math.floor(Math.random() * 10) + 1;
//       randomArray.push(randomNumber);
//     }
//     return randomArray;
//   }
//   const randomNumbers = generateRandomArray();
//   console.log(randomNumbers);



// 9 - Write a script which generates a random hexadecimal number.
//     ex: '#ee33df'


// function generateRandomHexCode() {
//     const randomColor = Math.floor(Math.random() * 100000).toString(16);
//     const hexCode = '#' + '0'.repeat(6 - randomColor.length) + randomColor;
//     return hexCode;
//   }
  
//   const randomHexCode = generateRandomHexCode();
//   console.log( randomHexCode);


// 10 - Write a script which generates a random rgb color number.
//     rgb(240,180,80)


function generateRandomRGBColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
  
    // Create the RGB color string
    const rgbColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return rgbColor;
  }
  const randomRGBColor = generateRandomRGBColor();
  console.log(randomRGBColor);