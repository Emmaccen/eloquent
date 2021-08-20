console.log('this is an escape \'\\n\' ')
console.log(typeof 4.5)
console.log('z' < 'a')
// Upper case letters are considered lesser in ordering to lowercase letrs
console.log('Z' < 'a')
// There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
/*NaN is supposed to denote the result of a nonsensical computation, 
and as such, it isn’t equal to the result of any other nonsensical 
computations. */
console.log(NaN == NaN) // → false
console.log(false == 0) // → true
console.log(null == undefined); // → true 
console.log(null == 0); // → false
// 0 == false and "" == false are also true

console.log(2 > 1 && 'true', 'value')

// prompt('Enter Password !');
let arr = [2,4,6,8]
console.log(...arr)
console.log(Math.max(...arr))

let num = '7'
console.log(typeof num)
console.log(typeof Number(num))

let result = 1; 
for (let counter = 0; counter < 10; counter = counter + 1) { 
    result = result * 2; 
} 
console.log(result)

// ============== Exercise 1 ==============

// LOOPING A TRIANGLE (my solution before looking at answer)
let content = '#'
let count = 0;
do{
    console.log(content)
    content += '#'
    count ++
}while(count < 7)

// LOOPING A TRIANGLE ( authors solution)

for (let line = "#"; line.length < 8; line += "#"){
  console.log(line);

}

// FIZZBUZZ (my solution before looking at answer)
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if(i % 3 === 0){
            console.log('Fizz')
        }if(i % 5 === 0){
            console.log('Buzz')
        }if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz !')
        }
        else if( (i % 3 !== 0 && i % 5 !== 0)  && (i % 3 !== 0 || i % 5 !== 0)){
            console.log(i)
        }
    }
}
// authors solution to FIZZBUZZ
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

// fizzBuzz()

// CHESS BOARD
// am not ganna do this one, i think i have a wrong idea about the solution
// ===========================

// authors solution to CHESS BOARD

// declear a size
let size = 8;
// declear a printer
let board = "";

for (let y = 0; y < size; y++) {
    //for every grid row
  for (let x = 0; x < size; x++) {
      //for every column
      // check if we're on an even (2, 4, 6, 8, etc) or odd(1, 3, 5 etc) column line then
      // decide if a " " or "#" should be printed first
    if ((x + y) % 2 == 0) {
        //print " " if we're on an odd column line
      board += " ";
    } else {
        // print "#" if we're on an odd column line
      board += "#";
    }
  }
  // move to next row
  board += "\n";
}
// print the chessboard
console.log(board);

// ================================

console.log('Who Created The Universe : ', answer())

function answer() {
    return 'God Almighty'
}

// lets confuse the machine

// function chicken() {
//     return cooking()
// }

// function cooking () {
//     return chicken()
// }

//console.log(chicken(), 'came first')//output will be "out of stack space"

function power(base, exponent){
    let result = 1
    for (let i = 0; i < exponent; i ++){
        result *= base
    }
    return result
}
function power2(base, exponent){
    if(exponent === 0){
        return 1
    }else {
        return base * power2(base, exponent - 1)
    }
}
console.log(power(2,5), '\n')
console.log(power2(2,5))

// functions that multiply by an arbitrary amount
function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2);
    console.log(twice(5));