function isPalindrome(str) {
  let backward = str.length - 1
  for (let i = 0; i < str.length; i++) {
    let x = str[i]
    let y = str[backward - i]
    if (x != y) {
      return false
    } else {
      return true
    }
  }
}

console.log(isPalindrome('arara')); // true
console.log(isPalindrome('loving')); // false