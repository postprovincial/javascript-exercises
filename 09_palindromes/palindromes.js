const palindromes = function(value) {
    // Remove all non-alphanumeric characters (including punctuation AND spaces)
    let cleanStr = value.replace(/[^a-z0-9]/gi, '');
    // Convert to lowercase
    cleanStr = cleanStr.toLowerCase();
    
    // Reverse and compare
    let reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
