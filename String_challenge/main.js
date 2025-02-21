let a ="Elzero Web School";


//1-Zero include[Slice,charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6));
//2-8H
console.log(a.charAt(13).toUpperCase().repeat(8));
//3-return array //Elzero
console.log(a.split(" ",1));
//4-only using "substr" method +template literals in your solution
//Elzero School
console.log(a.substr(0,7)+a.substr(11,17));
//5-اول حرف واخر حرف smaall
//الباقي كله capital
console.log(a[0].toLowerCase()+a.slice(1,a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase())