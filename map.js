//key:value 


const fruits = new Map();

fruits.set('apple', 1);
fruits.set('banana', 2);
fruits.set('orange', 3);
fruits.set('grape', 4);

console.log(fruits.get('apple'));


// Differences       Object            Map
// 1. Key type        String, Symbol    Any type
// 2. Iteration       Not ordered       Ordered
// 3. Size            Not available     Size property
// 4. Performance     Slower            Faster
//5. Iteration        via keys()        for     

const cache = new Map();
function expensiveCalculation(num) {
  if (cache.has(num)) return cache.get(num);
  // Simulate heavy computation
  let result = num * 2;
  cache.set(num, result);
  return result;
}

console.log(expensiveCalculation(5)); // 10, retrieved from cache


const mapp = new Map();
mapp.set('apple', 1)
mapp.set('apple', 1)
mapp.set('apple', 1)
mapp.set('apple', 1)
mapp.set('apple', 1)

console.log(mapp);


const object = { name :"a", name:'a'}
console.log(object);