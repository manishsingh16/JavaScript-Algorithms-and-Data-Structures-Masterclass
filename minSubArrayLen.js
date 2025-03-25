function minSubArrayLen(nums, target) {
    let n = nums.length;
    let left = 0;  // Left pointer for the sliding window
    let currentSum = 0;  // Current sum of the window
    let minLength = Infinity;  // To track the minimum length of the subarray

    for (let right = 0; right < n; right++) {
        // Expand the window by adding the current element to currentSum
        currentSum += nums[right];

        // Shrink the window from the left as long as currentSum >= target
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= nums[left];  // Remove the left element
            left++;  // Move the left pointer to the right
        }
    }

    // If minLength was updated, return the minimum length, otherwise return 0
    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));  // Output: 2 ([4, 3])
console.log(minSubArrayLen([1, 4, 4], 4));           // Output: 1 ([4])
console.log(minSubArrayLen([1, 1, 1, 1, 1, 1], 11)); // Output: 0 (no such subarray)
console.log(minSubArrayLen([1, 2, 3, 4, 5], 11));    // Output: 3 ([3, 4, 5])
