function isPalindrome(str) {
  // if (typeof str !== "String") {
  //   return false;
  // }

  str = str.toString().toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left = left + 1;
      right = right - 1;
    }
  }
  return true;
}
console.log(isPalindrome("Мадам"));
console.log(isPalindrome("Стол"));
console.log(isPalindrome(121));
console.log(isPalindrome(1212));
