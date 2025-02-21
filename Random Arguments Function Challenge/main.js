function showdetiels(a , b, c){
    let name;
    let age ;
    let status;

    typeof a === "string"? name = a : typeof a === "number"? age = a : status =a;
    typeof b === "string"? name = b : typeof b === "number"? age = b : status =b;
    typeof c === "string"? name = c : typeof c === "number"? age = c : status =c;

    status === true ? "avilable" : "not avilable";

    document.write (`<p> Hello ${name} , your Age is ${age}, ${status} </p>`)

}
showdetiels("yomna" , 32 , true)
showdetiels(33 , "lolo" , true)
showdetiels("kemo" , 32 , true)




for( let i=0; i<=30 ;i++){
    console.log (`10 * ${i}=`);
}




