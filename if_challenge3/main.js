let st = "Elzero Web School";

if( (st.length*2) == "34")
{
    console.log("good")
}

//////////////////////////////////////////
if(st.length !== "string"){
    console.log("good")
}
/////////////////////////
if((st.charAt(st.indexOf("w")).toLowerCase()) === "w"){
    console.log("jj")
}
/////////////////////////////

if(typeof (st.length) === "number"){
    console.log("good")
}
///////////////////////////////////////////////
if((st.slice(0,6).repeat(2)) ==="ElzeroElzero" ){
    console.log("good")
}
console.log("=========================================")
////تكاليف من 32:37
//1
let numO =19;
if(numO<10){
    console.log(`${"00"}${numO}`)
}else if(numO>10 && numO<100){
    console.log(`${"0"}${numO}`)
}else{
    console.log(numO)
}
console.log("===============================")
///2
let num1 = 9;
let num2 = "9";
let num3 = "20";

if(num1 == num2){
    console.log("num1=num2")
}
if(num1 !== num2){
    console.log(" Is The Same Value As {num2} But Not The Same Type")
}
if(num1 !== num3){
    console.log("Is Not The Same Value Or The Same Type As {num2}")
}
if(num2 != num3){
    console.log("Is The Same Type As {num2} But Not The Same Value")
}
///3
console.log("===========================3")
let num11 = 10;
let num12 = 30;
let num13 = "30";

if(num13 >= num11){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}