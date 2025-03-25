function findLongestSubstring(s) {
    let start = 0;  // Left pointer of the window
    let maxLength = 0;  // The length of the longest substring found
    let seen = new Map();  // To store characters and their most recent index

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the map and its index is greater than or equal to `start`
        if (seen.has(char) && seen.get(char) >= start) {
            // Move the `start` pointer to one past the last occurrence of `char`
            start = seen.get(char) + 1;
        }

        // Update the most recent index of the current character
        seen.set(char, end);

        // Calculate the current length of the window
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring(''));// 0
console.log(findLongestSubstring('rithmschool'));// 7
console.log(findLongestSubstring('thisisawesome'));// 6
console.log(findLongestSubstring('thecatinthehat'));// 7
console.log(findLongestSubstring('bbbbbb'));// 1
console.log(findLongestSubstring('longestsubstring'));// 8
console.log(findLongestSubstring('thisishowwedoit'));// 6