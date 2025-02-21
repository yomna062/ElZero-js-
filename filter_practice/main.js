// task(1) filter words more  than 4 charcters

let sentence = "I play with my patapitoo";
let smallwords = sentence.split(" ").filter(function(ele) {
    return ele.length <= 4;
}).join(" ");
console.log(smallwords);
console.log("=========================")


// task(2) filter strings + multiply

let mix = "A13BS2ZX"
let mixed = mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele))
}).map(function(ele){
    return ele*ele
})
.join("")
console.log(mixed)

