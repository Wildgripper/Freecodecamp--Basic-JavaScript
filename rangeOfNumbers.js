function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    }
    let countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;

};

console.log(rangeOfNumbers(2, 15));