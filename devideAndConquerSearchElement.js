
function sortAnArray(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currrentElement = arr[middle];
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(sortAnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));