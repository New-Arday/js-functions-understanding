function myFunction(num111, num222, num333) {
  console.log(num333);
}

const num111 = 10;
const num222 = 1;
const num333 = 20;

myFunction(num333, num111, 100); // 100 & bunch of errors: Uncaught SyntaxError: Identifier 'num1' has already been declared
