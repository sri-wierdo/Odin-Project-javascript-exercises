const reverseString = function(string) {
    let tmp = string.split("");
    tmp = tmp.reverse()
    string = tmp.join("")
    return string;
};

// Do not edit below this line
module.exports = reverseString;
