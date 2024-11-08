function charCount(str) {
    var result = {}
    var str = str.trim(' ');
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}
console.log(charCount("this is the password of atm is 1212"));