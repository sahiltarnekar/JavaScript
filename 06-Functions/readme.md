# Topic 06 - Functions

# Defination of function
A function is a block of code which only runs when it is called.

# Syntax of function
```javascript
function functionName(parameter1, parameter2, ...) {
    // code to be executed
}
```

# How to call function
```javascript
functionName(argument1, argument2, ...);
```
# parameter
A parameter is a variable name listed inside the parentheses in the function definition.
# argument
An argument is the value passed to the function when it is called.

# Return statement
The return statement is used to return a value from a function.

# Example
```javascript
function add(a, b) {
    return a + b;
}
```
# Function with return statement
```javascript
function add(a, b) {
    return a + b;
}
```

# Types of function
1. Built-in function
2. User-defined function

# Built-in function
1. `console.log()`, `console.error()`, `console.warn()`, `console.table()`, `console.clear()`, `console.count()`, `console.countReset()`, `console.group()`, `console.groupEnd()`, `console.assert()`, `console.dir()`, `console.dirxml()`, `console.time()`, `console.timeEnd()`, `console.trace()`, `console.profile()`, `console.profileEnd()` etc...

# User-defined function
- 4 ways to create function
    1. simple function
    2. anonymous function
    3. arrow function
    4. IIFE (Immediately Invoked Function Expression)

# simple function
```javascript
function functionName(parameter1, parameter2, ...) {
    // code to be executed
}
```

# anonymous function
```javascript
let functionName = function(parameter1, parameter2, ...) {
    // code to be executed
}
```

# arrow function
```javascript
let functionName = (parameter1, parameter2, ...) => {
    // code to be executed
}
```

# IIFE (Immediately Invoked Function Expression)
```javascript
(function(parameter1, parameter2, ...) {
    // code to be executed
})();
```







