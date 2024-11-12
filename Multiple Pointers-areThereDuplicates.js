
function areThereDuplicates(...args) {
    if (args.length === 0) {
        return false;
    }
    const result = {};
    for (var i = 0; i < args.length; i++) {
        var char = args[i];
        if (result[char]) {
            return true;
        } else {
            result[char] = 1;
        }
    }
    return false;
}
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 



// areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}


// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}