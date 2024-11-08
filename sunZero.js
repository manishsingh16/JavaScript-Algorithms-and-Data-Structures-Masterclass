//First Approach
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//second Approach
function sumZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > 0; j--) {
            let sum = arr[i] + arr[j];
            if (sum === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 10]));