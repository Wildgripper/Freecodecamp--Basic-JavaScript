// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        newArray.push(arr[i][0]);
        let maxNum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
            newArray.push(maxNum);

        }
    }

    console.log(newArray);
    return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);