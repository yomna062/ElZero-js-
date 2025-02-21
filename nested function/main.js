//EX(1)
function saymessage(fname , lname){
    let message =`hello`;
    function concatmsg(){
        return `${message} ${fname} ${lname}`
    }
    return concatmsg()
    
}
console.log(saymessage("yomna" , "badr"))
//EX(2)
function saymsg(ffname , llname){
    let msg =` helloo`
    function concatmsgg(){
        function fullname(){
            return` ${ffname} ${llname} `
        }
        return `${message} ${fullname}`
    }
    return concatmsgg()
}
console.log(saymessage("malik", "badr"))