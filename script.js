"use strict";
const arr = [ 1, 2, 3];
arr[100]=555;
console.log(arr[100]);
console.log(arr);
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};
//create valueble b
const b = 'g';

//create new property of arrObj:
arrObj[b] = '789'; // is same to arrObj['g'] = '789';

//create new property of arrObj:
arrObj.b = '1234';

//2nd way to create new property of arrObj:
arrObj['f'] = '5678';// this way is more safe

//error, bec. js thinks its valueble b
console.log(arrObj[b]);

//this is right way
console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj['f']);
console.log(arrObj.f);
console.log(arrObj);