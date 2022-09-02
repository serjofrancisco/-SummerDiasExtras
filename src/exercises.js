const cards = require('./cards.js');

const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    message: 'Hello World',
    greeting: {'Hello': 'World'},
}

const {name, age, city, message, greeting} = obj;


const infos = [
    {
      obj1: {
        cidade: "sp",
      },
    },
    {
      obj2: {
        cidade: "ssa",
      },
    },
    {
      obj3: {
        cidade: "bh",
      },
    },
  ];
  const keys = infos.map((e) => Object.keys(e));
  console.log(keys)
  
  const keysFlat = infos.flatMap((e) => Object.keys(e));
  console.log(keysFlat)
  


 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

const arr2 = [11, 12, 13, 14, 15];

function getLowestNumber(arr) {
    let menor = -Infinity;
    arr.forEach((number) => {
        if (number <= menor) {
            menor = number;
        }
    })
    return menor;
}

// console.log(getLowestNumber(arr));


// function sum(array, ...array2) {
//    console.log(array, array2)
//    return true
// }
//   console.log(sum(arr, arr2, 9, 8, 0));
//   const arr = []
// infos.forEach((info) => {
//     if(Object.values(info)[0].cidade === 'sp' || Object.values(info)[0].cidade === 'ssa'){
//         arr.push(info)
//     }
// });

// console.log(arr)
