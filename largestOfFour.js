function largestOfFour(arr) {
    let newArray = [];
    let maxNum;
    for (let i = 0; i < arr.length; i++) {
        maxNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
        }
        newArray.push(maxNum);
    }
    return newArray;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
