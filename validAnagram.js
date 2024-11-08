function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    var result = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        var char = str1[i];
        result[char] = (result[char] || 0) + 1;
    }
    for (var j = 0; j < str2.length; j++) {
        var char = str2[j];
        if (!result[char]) {
            return false;
        }
        result[char]--;
    }
    return true;
}

console.log(validAnagram(" ", " "));