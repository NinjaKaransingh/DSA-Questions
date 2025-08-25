function reverseArr(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(reverseArr([1,2,5,7]));
