const arr = ['a', 'b', 'c', 'a', 'z', 'b', 'b', 'l', 'l', 'm', 'p'];

const obj = {};
arr.forEach((item) => {
    if (obj[item]) {
        obj[item] += 1;
    } else {
        obj[item] = 1;
    }
});

console.log(obj);