
function sortAnArray(arr, num) {
    if (arr.length == 0) {
        return null;
    }
    var index = -Infinity;
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            index = i;
            return index;
        } else {
            index = -1;
        }
    }
    return index;
}
console.log(sortAnArray([2, 9, 1, 8, 5, 6, 3, 4, 7, 10, 11, 25, 45, 34, 56, 67, 78, 53, 74, 83, 39, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30], 25));