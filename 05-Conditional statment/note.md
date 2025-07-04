# Topic : Conditional Statements

# Conditional Statements
# - Conditional statements are used to perform different actions based on different conditions.
# - There are 3 types of conditional statements:
#   - if statement
#   - if...else statement
#   - if...else if...else statement
#   - Nested if...else statement
#   - Switch case statement

## 1. if statement
```javascript
if (condition) {
    // code to be executed if condition is true
}
``` 

## 2. if...else statement
```javascript
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false        
    }
```

## 3. if...else if...else statement
```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true 
} else {
    // code to be executed if condition1 and condition2 are false
    }
```

## 4. Nested if...else statement
```javascript
if (condition1) {
    // code to be executed if condition1 is true
    if (condition2) {
        // code to be executed if condition1 is true and condition2 is true
    } else {
        // code to be executed if condition1 is true and condition2 is false
    }
} else {
    // code to be executed if condition1 is false
    }
```

## 5. Switch case statement
```javascript
switch (expression) {
    case value1:
        // code to be executed if expression matches value1
        break;
    case value2:
        // code to be executed if expression matches value2
        break;
    default:
        // code to be executed if expression does not match any of the values
        }
```

