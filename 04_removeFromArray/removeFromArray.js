const removeFromArray = function(arr, ...valuesToRemove){
    let result = []

    for(element of arr){
        if(!valuesToRemove.includes(element)){
            result.push(element);
        }
    }

    return result
}

// Do not edit below this line
module.exports = removeFromArray;
