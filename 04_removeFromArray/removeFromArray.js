/*tried to execute the code with two for loops in the starting, but for some ungodly reason the code didn't work
hence ended up using the indexof method
here we are using the indexOf() method which return the index of given value inside an array if the value 
is present in the array,
so here we'll loop through the elements and check if they are present in the array, and if they does we're splicing them from the array */
const removeFromArray = function(array, ...elements) { //"..." three dots is the spread operator which is used to convert individual elements into an array it can also work in reverse as well that is "...Array" converts the array into individual elements
    for(let i = 0 ; i < elements.length ; i++){                     
    let array_index = array.indexOf(elements[i])
    if(array_index > -1 ){
        array.splice(array_index , 1)
    }
}
    return array

};
//console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
 