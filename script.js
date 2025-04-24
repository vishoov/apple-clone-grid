// Searching

// 1. Linear Search
const arr=[1,2,3,45,56,43,5,3,5,3,5,3,5,3,34]
function linear(arr, target){
for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
    if(arr[i] === target){
        return i;

    }
}
return -1;


}
// Time Complexity -> O(n)
// Space Complexity -> O(1)
console.log(linear(arr, 56));

// METHOD -> arr.indexOf() 


console.log(arr.indexOf(43));
console.log(arr.includes(3));

console.log(arr.find((ele) => ele === 3));

console.log(arr.filter((ele) => ele % 2 === 0));


const users=[
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jack", age: 35},
    {name: "Jill", age: 40},
    {name: "Joe", age: 45},
     {   name: "John",
        age: 25,
    },
    {
        name: "Jane",
        age: 30,
    },
    {
        name: "Doe",
        age: 25,
    },
]

console.log(users.filter((user)=>user.age === 25));


// 2. Binary Search

function binary(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] === target){
            console.log("mid", arr[mid]);
            return mid;
        }
        else if(arr[mid] < target){
            console.log("mid", arr[mid]);
            start = mid + 1;
        }
        else{
            console.log("mid", arr[mid]);
            end = mid - 1;
        }
    }
    return -1;
}


console.log(binary([1,2,3,5,6,7,8,9,10], 7));


