/*.................. */
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//Find Smallest Number In All Variables And Return Intege
console.log(Math.round(Math.min(a,b,c,d)));
//Use Variables a + d One Time To Get The Needed Output  //1000
console.log(Math.pow(a,Math.trunc(d)));
//Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));
