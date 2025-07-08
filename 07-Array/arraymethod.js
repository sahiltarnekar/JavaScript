let arr4 = [100, 200, 300];
let arr3 = [1000, 2000, 3000];
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
// 2.pop
arr.pop();
console.log(arr);
// 3.shift
arr.shift();
console.log(arr);
// 4.unshift
arr.unshift(0);
console.log(arr);
// 5.slice
console.log(arr.slice(2, 4));
// 6.splice
arr.splice(2, 2, 59, 60, 100);
console.log(arr);
// 7.concat
let newArr = arr.concat(arr4, arr3);
console.log(newArr);
// 8. alternative spread operator
let newArr2 = [...arr, ...arr4, ...arr3];
console.log(newArr2);
// 9. join
console.log(newArr2.join(" ")); // join always return in string
// 10. toString
console.log(newArr2.toString());
// 11. indexOf
console.log(newArr2.indexOf(100));
console.log(newArr2.indexOf(1000));
console.log(newArr2.indexOf(10000));
// 12. reverse
console.log(newArr2.reverse());
// 13. find
console.log(newArr2.find((element) => element > 100));
console.log(newArr2.find((element) => element > 1000));
console.log(newArr2.find((element) => element > 10000));

// 14. flat
let heroes = ['spidermen' ,'hulk',['wanda' ,'ironmen'] ,'thor'];
console.log(heroes);
console.log(heroes.flat(Infinity));

// 15. short 
let arr5 = [1, 2, 10, 4, 50, 6, 7, 8, 9, 10];
arr5.sort();
console.log(arr5);
// 16. sort
let arr6 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr6);
arr6.sort((a, b) => a - b);
console.log(arr6);
