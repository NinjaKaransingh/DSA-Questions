// i/p [12,35,1,10,34,1];  => o/p - 34
// i/p [10,5,10];  => o/p - 5

//best case
//using -Infinity

function secondLargestNum(arr) {
    // let max = Number.NEGATIVE_INFINITY
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i] !== max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax;
}


//average case
// time complexity - O(n logn)
// space complexity - O(logn)
function secondLargestNum(arr) {
    arr.sort((a,b)=>a-b);
    console.log(arr);
    console.log(arr[arr.length - 2]);
}


// console.log(secondLargestNum([12,35,1,10,34,1]));


//worst case
// time complexity - O(n^2)
// space complexity - O(n)
function secondLargestNum(arr) {
    const newArr = [...new Set(arr)];
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] > newArr[i+1]){
            let temp = newArr[i];
            newArr[i] = newArr[i+1];
            newArr[i+1] = temp;

            i = -1;
        }
    }
    console.log(newArr[newArr.length -2])
}

// console.log(secondLargestNum([12,35,1,10,34,1]));
console.log(secondLargestNum([10,5,10]));

