//set is a data structure that only stores unqiue values 
const arr = new Array();
const set = new Set();
// const arr = [];
for(let i=0; i<10; i++){
    set.add(i);
    set.add(i);
    arr.push(i);
    arr.push(i);
}

console.log(set);
console.log(arr);

const obj= {
    name: "John",
    age: 25,
    city: "New York",
}

const users = new Set();
users.add(obj);
users.add(obj);
console.log(users);

const num = new Number(5);
console.log(num);

console.log(set.has(5));
console.log(set.size);

console.log(set.delete(5));
console.log(set);

const arr1 = [1,2,3,4,5,6,7,7,8,9,10];
const unique = [...new Set(arr1)];
// ...-> exists in the set
// [] -> unique = array
console.log(unique);


const arr2 = [1,2,3,4,5,6, 6, 6, 7, 7, 8, 8];

//print the duplicates using set

const uniques = new Set(arr2);

console.log(uniques);


const duplicated = [];
for (let ele of arr2) {
    if (uniques.has(ele)) {
        uniques.delete(ele);
    } else {
        duplicated.push(ele);
    }
}

console.log(duplicated);