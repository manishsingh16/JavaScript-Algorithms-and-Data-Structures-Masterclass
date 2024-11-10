// first approach

// function maxSubArraySum(arr, num) {
//     var starttime = Date.now();
//     if (arr.length == 0) {
//         return null;
//     }
//     let max = -Infinity;

//     for (var i = 1; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     var endtime = Date.now();
//     console.log("Time taken (in ms):", endtime - starttime); // Output the time taken
//     return max;

// }

//second approach
function maxSubArraySum(arr, num) {
    var starttime = Date.now();
    var max = 0;
    var tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    tempSum = max;

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        max = Math.max(max, tempSum);
    }
    var endtime = Date.now();
    console.log("Time taken (in ms):", endtime - starttime); // Output the time taken
    return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 2, 3], 3));