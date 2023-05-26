//statements and expressions
var x = 5;
console.log(x + 3); //output: 8

//functions and methods
function greet(name)
{
    console.log("Hello, " + name + "!");
}
greet("Alice"); //Output: "hello, Alice!"

//Control structures
if (x > 10)
{
    console.log("x is greater than 10");
}
else
{
    console.log("x is less than or equal to 10");
}

//Numbers
var a = 3;
var b = 2.5;
var c = a * b;
console.log(c); //Output: 7.5

//Strings
var name = "Alice";
var greeting = "Hello," + name + "!";
console.log(greeting); //Output: "Hello, Alice!"

//Booleans
var isSunny = true;
if (isSunny)
{
    console.log("It's sunny today!");
}
else
{
    console.log("It's not sunny today.");
}

//Objects (arrays)
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]); //Output: 3

//Objects (functions)
function multiply(a, b);
{
    return a * b;
}
var result = multiply(3, 4); //function will never run(unreachable code)
console.log(result); //Output: 12

//Using the var keyboard
var x = 5;
console.log(x); //Output: 5

//Using th let keyboard (block-scoped)
let y = 10;
if (true)
{
    let y = 20;
    console.log(y); //Output: 20
}
console.log(y); //Output: 10

//Arithmetic operators
var a = 10;
var b = 3;
console.log(a + b); //Output: 13
console.log(a - b); //Output: 7
console.log(a * b); //Output: 30
console.log(a / b); //Output: 3.3333
console.log(a % b); //Output: 1

//Comparison operators
console.log(a == b); //Output: false
console.log(a != b); //Output: true
console.log(a > b); //Output: true
console.log(a <= b); //Output: false


  const details = function (name, age, birthplace)
  {
  return `My name is ${name}, I am ${age} years old and I come from ${birthplace}`;
  };        /*(`` used in return to return function)*/
  let name = "Lincy";
  let age = 25;
  let birthplace = "Kikuyu";
  console.log(details(name, age, birthplace));

  
 