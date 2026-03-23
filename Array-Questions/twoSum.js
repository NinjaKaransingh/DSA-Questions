function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "not found";
}

console.log(twoSum([4, 1, 9, 2], 8)); //Output: not found
console.log(twoSum([1, 5, 3, 7], 8)); //Output : [0,3]

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
