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
