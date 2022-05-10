let number = 2;
let fn = 1;
let fn_1 = 1;

function fibonacci(number, limit, fn, fn_1){
    if (limit == 0){
        console.log('F(0) = 0');
        return;
    }
    if (limit == 1){
        console.log('F(1) = 1');
        return;
    }
    if (number == limit){
        console.log('F(', limit, ') = ', fn);
        return;
    }
    let new_fn_1 = fn;
    fn = fn + fn_1;
    if (number == limit){
        console.log('F(', limit, ') = ', fn);
        return;
    }
    number += 1;
    fibonacci(number,limit,fn,new_fn_1);
}

const fs = require('fs');

fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;
    const limit = data.toString();
    fibonacci(number, limit, fn, fn_1);
})