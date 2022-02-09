<!-- <!-- DAY 1: 07/02/22

### Q1

What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2;
}

const result = myFunction(5, 5);
```

Q1:

Step 1: the function called 'myFunction' takes two arguments(datatype - number).

Step 2: the block of code inside the {} is an expression that adds two numbers together.

Step 3: the 'return' keyword performs/delivers a value of the expression AND stops the function alltogether, once the function is called.

step 4: the variable 'result' is holding the value returned from the function. So when I console log the variable result, I expect to get the number 10 as the argument called in the function is 5 by 5.

I got it correct; the answer is 10!

### Q2

What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);
```

Q2:

step one: the block of code inside the function will not return a value as the return keyword is ommited, once called. However, this is still a valid function that adds two numbers - it performs an action but does not return a value.

I expect the result variable to return undefined or nothing, when console logged.

My first instinct was was correct: the result was undefined!

### Q3

What is the value of `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num);
```

Q3:

Step 1: this function takes a single argument(datatype = number).
step 2: it decrements a number by 1 each time
step 3: the function returns a value - it has the return keyword
step 4: the variable num hold the starting number/value of 10
step 5: at this stage, I expect the function to return the number/value of 8 as it has been called twice, due to the nature of the expression that the function is performing.

I got it correct!

### Q4

What is the value of `add` and `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);
```

step 1: this function takes one argument(datatype = number).
step 2: it decrements a number by 1.
step 3: it returns a value because of the 'return' keyword.
step 4: the variable 'num' hold a value of 10 and it's doing nothing
step 5: the variable 'add' hold a number value of 3 at the start.
step 6: the function is called twice - decrementing a number each time
step 7: I expect the variable 'num' to still hold the value of number 10.
Step 8: I expect the variable 'add' to hold the value of 1, at this stage.

My was correct; both predictions came true: num = 10 and add = 1.

### Q5

What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num);
```

Q5:

step 1: the function takes two argument(dataType=number)
step 2: it has the potentials to display something on the console.
step 3: the variable 'num' holds a value of 10
step 4: the variable 'num1' holds a value of 2
step 5: the function is called once with the variable num
step 6: I expect the function to return an error as the num variable is not defined inside the function.
step 7: num1 will not be displayed as it has not been called by the function.

hmm, my understanding was correct, definitly, but my wording was slightly different. It did not throw an error, but it did display 'undefined' which I think means the same thing... right?

### Q6

What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);
``` -->

DAY 2: 08/02/22
Q6:

step 1: the function takes 2 arguments(dataType = number).
step 2: the console log will only display one argument
step 3: variable num holds the value of 10
step 4: variable num1 holds the value of 2
step 5: the function is called with two arguments

On the console, I expect to see value 2 and an error that says: num is not defined.

I got this incorrect. I suspect the outcome has something to do with the order of the variables in the parameters - the value will be stored in the first variable in the function parameters? I'm not sure how this works. Why didn't the console log dispaly the num1(10) when it was declared in all three areas - in the parameters, console log and when calling the func.

### Q7

What will the value of counter be at the end of this program? Why?

```javascript
let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();
```

Q7:

Step 1: the variale counter is declared with value 1
Step 2: function doesn't take any argument
Step 3: inside the function, the variable counter is incrementing by one everytime the function is called.
Step 4: the return keyword is used - we expect the value of 'counter' returned
Step 5: function is called. I expect the console to show 2, at this stage.
Step 6: the function is stored in a variable. I don't think the function is being called , in this statement of code. However, I think the function can be invoked with the 'num' variable here onward. For example: num().

Notes after finding out the results - my new found knowledge!

_Step 6: the function is stored in a variable. I don't think the function is being called , in this statement of code._
Corrections: 1- the function is not being stored; the value of the function is getting stored.
2 - from the results, it appeared that the function did get called. the _code_ was doing three things a: calling the function, b: storing its value in the variable and c: initialising a variable

_However, I think the function can be invoked with the 'num' variable here onward. For example: num()._

Corrections: the variable is storing the value from the function and NOT the function itself. Which means my previous prediction/example is incorrect as I now learnt the job of the variable. It can not act as a function.

### Q8

What will the value of `result` be at the end of this program? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);
```

step 1: function takes 2 args - dataType Nums
step 2: adds two nums
step 3: it returns a value because the return keyword is used
step 4: three variable has been initialised each holding a diffrent values of nums
atep 5: the function is invoked with two args and the value of the function is stored in the 'result' variable.
I expect the result to be 4+10 = 14. -->

Yes!!!!!!! I got it correct - my maths is getting strong
I based my prediction on the what I learnt from Q6.

### Q9

What will be logged out on the console when this code rus? Why?

```javascript
function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1);
```

Step 1: funtions takes 2 args - num1 & num2
step 2: it will display a value on the console
step 3: three variables (num1:10,num2:1 & num3:20) have been declared with diffrent number values
step 4: the function is called with two args - num3 & num 1

I expect the console to display 20 because the first arg called in the function is num3 and so that's the first/only value the fuction will accept first.

I got it correct ✔

### Q10

What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);
```

step 1: function takes 3 args - number datatype
step 2: the function displays a single argument - only one arg is logged in the console log
step 3: three variables(num1:10,num2:1 & num3:20) with diffrent number values are initialised
step 4: the function is called with 3 args - num3, num1 and 100

I expect the console to display ... 20. My prediction is based on first arg called (leftside) takes first position (leftside) in the func parameters and so that's the one that will be logged on the console log.

Answer was 100... I got it incorrect ❌
😕 super confused
