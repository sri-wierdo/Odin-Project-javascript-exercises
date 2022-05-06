const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
    let temp = str.split(" ");
    temp = temp.join("");
    temp = temp.toLowerCase();
    let temp2 = temp.split("");
    temp2 = temp2.reverse()
    temp2 = temp2.join("")
    if(temp == temp2){
        return true;
    }else{return false}

};

// Do not edit below this line
module.exports = palindromes;
