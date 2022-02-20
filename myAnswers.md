DAY 1: 07/02/22

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
```

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
atep 5: the function is invoked with two args and the value of the function is stored in the 'result' variable. -->
I expect the result to be 4+10 = 14. -->

Yes, I got it correct - my maths is getting strong!
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

DAY 3 - 09/02/22

### Q11

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

const result = myFunction(1, 1, 1);
```

Q11:

Step 1: function takes 3 args - number datatype
Step2: function adds 3 nums.
Step 3: function will return something (return keyword isused)
Step 4: 3 variables has been declared and assigned to values
Step 5: function is called with 3 nums - not with the variavles created - and the its value is stored in the var result.

I expect var result to hold 3 because the code will first add the 2 numbers and then add to 3rd number (1+1=2+1=3?) result should equal to 3
I got it correct ✔ 👍

### Q12

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);
```

Q12:

step 1: the first function (getSomeValue) returns 2 (holds value of digit 2) and takes no args
step 2: the second function (myfunction) takes a single arg
step 3: inside myfunction the first func is called and its value is stored in var (num2)
step 4: the function returns a value of two digits multiplied
step 5: myfunc is invoked with arg (5)and its results is stored in var result

I expect result to be 2\*5 = 10
Got it correct ✔👍

### Q13

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);
```

Q13:

I expect var result to procduce same value as q12 as everything is the same exept the getsomevalue is called twice inside the myfun but this does not make any diffrence to the results as we're ony using it once - directly

I was spot on ✔👌 the aswer was 10 - 2\*5 = 10

### Q14

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);
```

Q14:

step 1: the getsomevalue func returns number 2 everytime its invoked
step 2: the myfunction is declared and takes single arg
step 3: the return keyword is returning a sum of 2\*2 because it's multpying the getsome func
step 4: the myfunction is invoked with arg of number 5 but it will not do anything as the arg has not been used in the expression inside the func

I expect the ressult variable to equal to 4 - 2\*2 = 4

I was correct! ✔

### Q15

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);
```

Q15:

Step 1: myfunction is declared and takes 1 arg
step 2: the condition in the if statement seems incomplete to me (if what is true? It's not comparing anything). It would make sense to me if it was phrased if(num1 === -10){return true}. But if this is a valid conditional statement then I expect it to mean: if the arg passed into the func is -10 then return true.
step 3: the value of the 'return num1 \* 10' is expected to return if the first condition is false.
step 4: the function is called with an arg of number 5

I expect the result to be: 5\*10 = 50

Got it incorrect ❌
The answer was -10

### Q16

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if (false) {
    return -100;
  }

  return num1 * 10;
}

const result = myFunction(5);
```

Q16:

Function takes a single arg - num
The if statement condition is set to false this which means the func will return the 2nd return
expected result is 50 - 5\*10 - arrived to this conclution based on the previous question (q15)

I was correct! ✔
my understanding is: 5/10
Lewis explained it on the function understanding channel but I didn't fully get it.

### Q17

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return -100;

  return num1 * 10;
}

const result = myFunction(5);
```

Q17:

This func accepts 1 arg - num
It has two returns with out condition seperating them; I suspect the func will return the first return OR the console will throw an error

I'm leaning more towards a return of -100
My inkling was correct! ✔✔✔ Result is -100

### Q18

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return num1 * 10;

  return -100;
}

const result = myFunction(5);
```

Q18:

Function take 1 arg - num
The func will return the first return
Super confident that the result will be 50- 5\*10 as functions stop running, once it return the first return.
Got it correct ✔

### Q19

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num2;
}

const result = myFunction(5, 10, 15);
```

Q19:
Functon takes 3 args - nums
it returns a single arg
The func is invoked with 3 args and its value is assigned to the result car.

With reservations, I suspect the result to be: 5

Got it incorrect - the result is 10; I think I understand why the answer is 10 ( the arg of the input matches with the return placeholder) ❌

### Q20

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num3;
}

const num1 = 20;
const num2 = 200;
const num3 = 1000;

const result = myFunction(5, 10, num3, 15);
```

Q20:

The function takes 3 args - nums
It add 2 numbers
The func is called with 4 args, one of them being a var which has a value of 1000

I think the answer will be: 5+1000
Was correct, result is 1005 ✔

### Q21

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = myFunction(10, 20);
myFunction(100, 2);
```

Q21:

Function take 2 args
result var is declared and is set add 2 args
The func returns the var result

The function is called twice - first time, a var (result) is declared and holds its value (10+20 = 30) AND the secondtime, the func is called with 2 args - 100 and 2

I'm expecting the console to display two value:
1 - the result = 30
2 - 102
My Prediction was spot on for both - I'm getting really good at my maths!🥳

### Q22

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result = 0;
myFunction(100, 2);
```

Q22:

Function takes 2 args
Inside the func, a result name is declared with the 'let' var and it adds 2 values
The func returns the value of result var

Outside the func, a result name is declared with the 'let' and is set to 0
Lastly, the func is called with 2 args - 100 & 2

The result variable will remain 0
When I console log the myFunction(100, 2), I'm expecting its value to be: 100+2 = 102

Easy-peasy, got it correct✔✔

### Q23

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  result = num1 + num2;
}

let result = 0;
myFunction(100, 2);
```

1 -function takes 2 args
2 -inside the func, undeclared result name is supposedly set to add up 2 nums
3 -a result name is declared with the 'let' and is set to 0
4- the func is invoked with two nums - 100 & 2

I'm feelinbg 50 50 here; when I console log the myFunction(100, 2), I'm expecting nothing in return as the keyword return was not used. Having said that, I also acknowlege the expression inside the func (despite its invalid assignment )
Will take a leap and expect the answer to be nothing.
The result variable will remain 0 ✔
Got an undefined - I think I was correct? if undefined and nothingness means the same thing?

### Q24

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1 + num2;
  return 100;
}

const result = myFunction(5, 2);
```

Function takes 2 args
const var (name result) is declared and holds an expression of adding 2 nums
The return keyword is returning 100

The function is called with two args and it's value is set to a const var (result)
When I console log the var result, I expect the answer to be 100, despite the value logged in the result var, insode the func block. This is because the func will return what it's set to - and that is 100.
The func args is valid and will sit inside the func unless the return key is set to the var result.

CORRECT!!! Answer is 100 ✔✔✔

Thanks for this exercise. I found parts of it easy and others confusing - such as question: 6, 10 and 15
