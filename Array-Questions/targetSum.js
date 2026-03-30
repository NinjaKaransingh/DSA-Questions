// Brute force technique where time complexity is O(n^2)

function targetSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "not found";
}

console.log(targetSum([1, 2, 4, 6, 8, 9, 14, 15], 13)); //[2,5]

// using 2 pointers approach but we need to sort the array if required in ascending order where time complexity is O(n) if sorted
// if not sorted then need to sort first then time coomplexity would be O(n log n)
function targetSumTwoPointer(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  //before this we need to sort the array if not sorted
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(targetSumTwoPointer([1, 2, 4, 6, 8, 9, 14, 15], 13)); //[2,5]

// using hashmap if interviewer asked to not to sort - time complexity is O(n)
function twoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }

  return "not found";
}

console.log(twoSum([1, 5, 3, 7], 8));
