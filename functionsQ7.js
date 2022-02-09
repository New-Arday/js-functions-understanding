let counter = 1;

function myFunction() {
  counter++;
  console.log(" num?", counter);
  return counter;
}
myFunction();
console.log("what's the number?", counter);
const number = myFunction();
console.log("what's the number now?", counter);
console.log(number);
//50%✔ & 50%❌
