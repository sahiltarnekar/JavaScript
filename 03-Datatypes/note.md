# Topic :- Datatype

# Data Types in JavaScript

JavaScript is a dynamically typed language, meaning that variables are not bound to a specific data type. The data type of a variable can change during runtime.

## Primitive Data Types

Primitive data types are immutable and are not objects. They are the most basic data types. The primitive data types in JavaScript are:

1. **String**: Represents textual data. Example: `"Hello, World!"`.

2. **Number**: Represents both integer and floating-point numbers. Example: `42`, `3.14`.

- Special numeric values: `Infinity`, `-Infinity`, `NaN` (Not a Number).

3. **BigInt**: Represents integers of arbitrary length. Created by appending `n` to the end of an integer. Example: `1234567890123456789012345678901234567890n`.

4. **Boolean**: Represents a logical entity and can have two values: `true` and `false`.

5. **Undefined**: Represents a variable that has been declared but not assigned a value. Example: `let a;` then `a` is `undefined`.

6. **Null**: Represents the intentional absence of any object value. Example: `let a = null;`.

7. **Symbol**: A unique and immutable primitive value that may be used as the key of an object property. Example: `let sym = Symbol('description');`.

## Non-Primitive Data Type (Object)

The only non-primitive data type is **Object**. Objects are used to store collections of data and more complex entities. Objects can be created using object literals, constructors, or classes.

Examples of objects include:

- **Object**: `{ key: 'value' }`

- **Array**: `[1, 2, 3]`

- **Function**: `function myFunc() {}`