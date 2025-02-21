//Task(1): convert captal to small and small to capital
let swappingcase ="elZERo"

let sw = swappingcase.split("").map(function(ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("")
console.log(sw)
console.log("============================================")


//task(2) convert positive to negative and negative to positive

let invertingnumbers =[-10 , 1 , -3 ,2 ,-5]
let inv = invertingnumbers.map(function(ele){
    return -ele
})
console.log(inv)
console.log("============================================")


//task(3) ignore numbers from string
let ignorenumbers ="yo2m1na2"
let ignore = ignorenumbers.split("").map(function(ele){
    return isNaN(parseInt(ele))? ele : "";
}).join("")
console.log(ignore)
//////////////////
// same example with arrow function
let ignorennumbers ="yo2m1na2"
let ig =ignorennumbers.split("").map((a) => isNaN(parseInt(a))? a : "" ).join("") 
console.log(ig)