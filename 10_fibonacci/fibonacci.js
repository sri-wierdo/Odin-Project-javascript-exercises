const fibonacci = function(number) {
if(typeof number === "string"){
    number = parseInt(number)
}
if(number < 0){
    return "OOPS"
}

let fibbunacci = [];
let a = 0;
let b = 1;
let c;
fibbunacci.push(b) ;
for(let i = 2 ; i<=number ; i++){
c = a + b;
fibbunacci.push(c);
a = b ;
b = c ;
}
return fibbunacci[fibbunacci.length -1]

};
// Do not edit below this line
module.exports = fibonacci;
