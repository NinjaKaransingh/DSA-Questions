function firstNonRepeatedChar(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;   
    }

    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]] === 1) return str[i];
    }
    return null;
}

console.log(firstNonRepeatedChar("aakash"));