let array = [1, 2, 3, 4, 5];
// map 
let newArray = array.map((element) =>{

    return element * 2;
})
console.log(newArray);    
// forEach
array.forEach((element, index) =>{
    newArray[index] = element * 2;
});
console.log(newArray);
// filter
let filterArray = array.filter((element) => element > 3);
console.log(filterArray);
// reduce
let reduceArray = array.reduce((acc, element) => acc + element, 0);
console.log(reduceArray);
