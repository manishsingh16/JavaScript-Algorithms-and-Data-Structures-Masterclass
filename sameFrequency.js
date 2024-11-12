
function sameFrequnecy(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    var result = {};
    for (var i = 0; i < str1.length; i++) {
        var char = str1[i];
        result[char] = (result[char] || 0) + 1;
    }

    for (var i = 0; i < str2.length; i++) {
        var char = str2[i];
        if (!result[char]) {
            return false;
        }
        result[char]--;
    }
    return true;
}
console.log(sameFrequnecy(22, 222));