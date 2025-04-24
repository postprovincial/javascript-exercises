const sumAll = function(firstValue, secondValue) {
    let sum = 0;

    if(!(Number.isInteger(firstValue) && Number.isInteger(secondValue) && firstValue > 0 & secondValue > 0)){
        return 'ERROR';
    }


    const passedValues = [firstValue, secondValue];
    let smallest = Math.min(...passedValues);
    let largest = Math.max(...passedValues);


    for(i = smallest; i <= largest; i++){
            sum += i;
        }
     
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
