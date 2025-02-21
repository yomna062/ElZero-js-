// task(1) return the bigest word
let thebigest =["yomna" , "gehad" ,"nour" ,"Mohamed","ahmed"]  
let check = thebigest.reduce (function(acc,current,index,arr){
    return acc.length > current.length ? acc : current 

})
console.log (check)
console.log("===================")

//task(2) return the word without @

let removechars = ["E","@" ,"@" ,"L", "Z","E","@","R","@","O"]
let final = removechars.filter(function(ele){
    return !ele.startsWith("@");
}).reduce(function(acc,current){
    return `${acc}${current}`
});
console.log(final)