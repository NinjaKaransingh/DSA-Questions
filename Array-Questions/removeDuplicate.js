// Given an integer array nums sorted in non-decreasing order, remove the given duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums

// i/p => [0,0,1,1,1,2,3,4,4,5,5,5,5] => [0,1,2,3,4,5] => o/p => 6(unique numbers in the array after removing the duplocates)

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i = -1; //i--;
    }
  }
  console.log(arr.length);
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 5]));

// [0,1,0,1,2,1,4,3,4,5,5,5,5] =>first we need to sort then remove the duplicate [0,1,2,3,4,5]
// function removeDuplicateElement(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i = -1;
//     }
//   }
//   console.log(arr);
// }

// removeDuplicateElement([0, 1, 0, 1, 2, 1, 4, 3, 4, 5, 5, 5, 5]);

// function removeDuplicateWithoutJSbuild(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     // if (obj[arr[i]]) {
//     //   obj[arr[i]] += 1;
//     // } else {
//     //   obj[arr[i]] = 1;
//     // }
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === 1) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(
//   removeDuplicateWithoutJSbuild([0, 1, 0, 1, 2, 1, 4, 3, 4, 5, 5, 5, 5])
// );

function removeDuplicateFromSortedArr(arr) {
    // [0,0,1,1,2,3,3,5,5]
    if(!arr.length) return 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
   console.log(arr.splice(i+1));
   console.log(arr);
}

removeDuplicateFromSortedArr([0,0,1,1,2,3,3,5,5]);