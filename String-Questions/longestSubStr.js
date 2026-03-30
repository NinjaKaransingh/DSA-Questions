// "abcabcbb" → 3  ("abc")
// "bbbbb" → 1 ("b")
// "pwwkew" → 3 ("wke")

function longestSubStr(str) {
  let set = new Set();

  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]); // remove from left
      left++;
    }
    set.add(str[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

console.log(longestSubStr("abcabcbb")); // 3
