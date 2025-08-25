function roateByKSteps(arr, k) {
    size = arr.length;
  if (k === 0 || k < 0) return arr;

  if (k > size) k = k % size;

//   for (let i = 0; i < size; i++) {
    const rotated = arr.splice(- k, size);
    console.log(rotated); //[5,6,7]
    console.log(arr);

    arr.unshift(...rotated);

    return arr;
//   }
}
arr = [1, 2, 3, 4, 5, 6, 7];
console.log(roateByKSteps(arr, 3));


//Not using any js in-built methods
// [1, 2, 3, 4, 5, 6, 7] => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]
// O(n) - time complexity
// O(1) - space complexity
function roateByKSteps(arr,k) {
    const n = arr.length;
    if(k > n) k = k % n;

    reverseArr(arr, 0, n-1);      
    reverseArr(arr, 0, k-1);   
    reverseArr(arr, k, n-1);   

    return arr;
}

function reverseArr(arr,left,right) {
    while(left < right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}

console.log(roateByKSteps([-99,-3,1,4,3], 7));


