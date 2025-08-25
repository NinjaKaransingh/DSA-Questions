// Hamming Distance
// Given 2 strings x and y, return the Hamming distance b/w them

// i/p x ="Hello", y = "hwllr";
// o/p : 2

function hammingDistance(x,y) {
    if(x.length !== y.length) throw new Error("Strings must be same length");
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if(x[i] !== y[i]){
            count++;
        }
    }
    return count;
}

console.log(hammingDistance("hello","hwllr"));


//Given 2 integers x & y, return the hamming distance b/w their bits


var hammingDistanceNum = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length < y.length) {
        while (x.length !== y.length) x = "0" + x;
    }
    else {
        while (x.length !== y.length) y = "0" + y;
    }
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) count++
    }
    return count;
};

console.log(hammingDistanceNum(1,4));
