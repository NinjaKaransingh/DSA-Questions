// Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// i/p -> x = 121 ---> o/p -> true
// i/p -> x = 10 ---> o/p -> false

// const isPlaindrome = (x) => {
//     return x === +x.toString().split("").reverse().join('');
// }

const isPlaindrome = (input)=>{
    // let reversed = "";
    const str = input.toString();
    for(let i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
} 

console.log(isPlaindrome(1100));

