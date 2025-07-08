# Intraduction of Array

# what is array?
An array is a special variable, which can hold more than one value at a time.
An array are mutable, it means we can change the value of an array after it is created.
An array is a special type of object.

# how to create an array?
There are two ways to create an array:
1. Using array literal
2. Using array constructor

# Using array literal
```javascript
let arrayName = [value1, value2, ...];
```

# Using array constructor
```javascript
let arrayName = new Array(value1, value2, ...);
```

# Accessing array elements
```javascript
let arrayName = [value1, value2, ...];
console.log(arrayName[0]); // value1
console.log(arrayName[1]); // value2
```

# Introduction of indexing in Array
Indexing is the process of assigning a number to each element of an array. The index of the first element is 0, the index of the second element is 1, and so on.

# Example
```javascript
let arrayName = [value1, value2, ...];
console.log(arrayName[0]); // value1
console.log(arrayName[1]); // value2
```

# Introduction of length property in Array
Length property is used to get the length of an array.

# Example
```javascript
let arrayName = [value1, value2, ...];
console.log(arrayName.length); // 3
```

# Introduction of array methods
Array methods are used to perform operations on arrays.

# Example
```javascript
let arrayName = [value1, value2, ...];
console.log(arrayName.push(value3)); // 4
console.log(arrayName.pop()); // value3
console.log(arrayName.shift()); // value1
console.log(arrayName.unshift(value4)); // 4
console.log(arrayName.concat(value5, value6)); // [value4, value2, value3, value5, value6]
console.log(arrayName.slice(1, 3)); // [value2, value3]
console.log(arrayName.splice(1, 2)); // [value2, value3]
console.log(arrayName.reverse()); // [value4, value3, value2]
console.log(arrayName.sort()); // [value2, value3, value4]
console.log(arrayName.sort((a, b) => a - b)); // [value2, value3, value4]
console.log(arrayName.sort((a, b) => b - a)); // [value4, value3, value2]
console.log(arrayName.indexOf(value4)); // 0
console.log(arrayName.lastIndexOf(value4)); // 0
console.log(arrayName.includes(value4)); // true
console.log(arrayName.join()); // value4,value3,value2
console.log(arrayName.toString()); // value4,value3,value2
console.log(arrayName.toLocaleString()); // value4,value3,value2
```

# Introduction of array iteration methods
Array iteration methods are used to iterate over an array.
1. map()
2. forEach()
3. filter()
4. reduce()

# map()
map() method is used to create a new array with the results of calling a function for every array element.

# Example
```javascript
let arrayName = [value1, value2, ...];
let newArray = arrayName.map(function(value) {
    return value * 2;
});
console.log(newArray); // [value1 * 2, value2 * 2, ...]
```

# forEach()
forEach() method is used to call a function for every array element.

# Example
```javascript
let arrayName = [value1, value2, ...];
arrayName.forEach(function(value) {
    console.log(value);
});
```

# filter()
filter() method is used to create a new array with all elements that pass the test implemented by the provided function.

# Example
```javascript
let arrayName = [value1, value2, ...];
let newArray = arrayName.filter(function(value) {
    return value > 10;
});
console.log(newArray); // [value1, value2, ...]
```

# reduce()
reduce() method is used to reduce the array to a single value.

# Example
```javascript
let arrayName = [value1, value2, ...];
let newArray = arrayName.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(newArray); // value1 + value2 + ...
```








