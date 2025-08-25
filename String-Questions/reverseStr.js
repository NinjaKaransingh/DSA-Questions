function reverseStr(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = reversed + str[str.length - 1 - i];
  }
  return reversed;
}

console.log(reverseStr("gadag"));

let arr = [1, 2, 3, 4];

function remove1stelement(arr) {
    let removed = [];
  for (let i = 1; i < arr.length; i++) {
        removed.push(arr[i]);
  }
  return removed;
}
console.log(remove1stelement(arr));

