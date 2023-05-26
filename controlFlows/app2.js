// for loop in js
let sum = 0;
for (let i = 0; i <= 30; i++);
{
    console.log(sum)
    sum += 1        // if fail to increment, it will run infinitely, can't execute
}

//while loop ==> execute a code block repeatedly as long as condition is true
let num = 0;
while (num < 20)
{
    console.log("I am a software engineer");
    num++; 
}

//do while ==> execute code ones and then loop
let a = 1;
do{
    console.log(a);
    a++;
}
while (a <= 5)

//if statement ==>make decision within a block of code
if ("20" == 20)  //with === the result is false
{
    console.log("comparison")
}
if ("20" === 20)  
{
    console.log("comparison")
}
else
{
    console.log("they are not equal")
}

//else if statement ==> check several conditions
// grading
let grade = 70

if (grade >= 90 && grade <= 100)
{
    console.log("A")
}
else if (grade >= 80 && grade <= 89)
{
    console,log("B")
}
else if (grade >= 70 && grade <= 79)
{
    console.log("C")
}
else if (grade >= 60 && grade <= 69)
{
    console.log("D")
}
else if (grade >= 0 && grade <= 59)
{
    console.log("E")
}
else
{
    console.log("INVALID GRADE")
}

// switch statement ==> select between multiple options. work in conjuction with break.
const day = prompt("Enter day of the week")
switch (day)
{
    case "Monday":
        console.log("Do JavaScript")
        break
    case "Tuesday":
        console.log ("Do HTML")
            break
    case "Wednesday":
        console.log("Do CSS")
            break
    case "Thursday":
        console.log("Do AI")
            break  
    case "Friday":
        console.log("Take a break")
            break 
    default:
        console.log("You are not allowed to work")      
}
//callback function ==>a function passed as an argument to another function
  function CalculateSum(a, b, callback)
  {
    let result = a / b
    callback(result)
  }
  CalculateSum(10, 5, function(result){
    console.log(result)
  })