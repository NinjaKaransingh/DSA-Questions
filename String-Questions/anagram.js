// const isAnagram = (s, t) => {
//   if (s.length !== t.length) throw new Error("String length must be same");

//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      obj1[s[i]] = +1;
    } else {
      obj1[s[i]] = 1;
    }

    if (obj2[t[i]]) {
      obj2[t[i]] = +1;
    } else {
      obj2[t[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    }
  }
  return true;
};

// function sum(a) {
//   function inner(b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   }
//   return inner;
// }

// console.log(sum(4)(5)(3)());


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "rat"));
