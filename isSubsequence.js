function isSubsequence(str1, str2) {
        let i = 0;
        let j = 0;
        while (j < str2.length) {
                if (str1[i] === str2[j]) {
                        i++;
                }
                if (i === str1.length) {
                        return true;
                }
                j++;
        }
        return false;
}


console.log(isSubsequence('hell', 'sasa world'));   // false
console.log(isSubsequence('hello', 'hello world'));
// true
console.log(isSubsequence('sing', 'sting'));
// true
console.log(isSubsequence('abc', 'abracadabra'));
// true
console.log(isSubsequence('abc', 'acb'));
// false (order matters)
