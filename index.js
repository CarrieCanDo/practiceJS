let numbers1 = [1, 2, 3, 4, 5];  //create two arrays of numbers called numbers1 and numbers2
let numbers2 = [6, 7, 8, 9, 10];

const numbers = [...numbers1, ...numbers2]; /*use the spread operator to create an array called number
                                              that combines the elements of numbers1 and numbers2*/
const square = (num) => num * num;   /*Define an arrow function called square that accepts a number as an argument and 
                                       returns the square of the number*/

const squares = numbers.map(square);  /*use map method to create a new array called squares that contains the squares of the 
                                        numbers in the nu.array*/

const isEven = (num) => num % 2 === 0; /*define an arrow function called isEven that accepts a number as an argument and returns true if the
                                          number is even, otherwise false*/

const evenSquares = squares.filter(isEven); /* use filter method to create a new array called evenSquares that contains only the even squares
                                               from the squares array*/

const [firstEvenSquare, secondEvenSquare] = evenSquares; /*use destructuring assigment to extract the 1st and 2nd elements of the evenSquares
                                                           array into constants firstEvenSqaure and secondEvenSquare*/

console.log(`Original numbers array: ${numbers}`);  /*use a template literal to log the orginal numbers array, the squares array, the 
                                                      evenSquares array, and the extracted even squares.*/
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}, Second even square: ${secondEvenSquare}`);