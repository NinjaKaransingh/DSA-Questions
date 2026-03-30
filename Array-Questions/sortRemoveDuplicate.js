function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      i = -1;
    }
  }
  return removeDuplicateElement(arr);
  //    return arr;
}

function removeDuplicateElement(arr) {
  // arr = [...new Set(arr)]
  // return arr;

  let obj = {};

  for (const val of arr) {
    obj[val] = obj[val] ? obj[val] + 1 : 1;
  }
  let uniqueArr = [];
  for (const value of arr) {
    if (obj[value] === 1) {
      uniqueArr.push(value);
    }
  }
  console.log(obj);
  // return uniqueArr.length;
  return uniqueArr;
}

console.log(sortArr([0, -2, 1, 3, 3, 1]));
