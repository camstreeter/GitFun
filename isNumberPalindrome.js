/*
Make a copy of the original input and assign units digit using modulo and place in reversed version
until done, compare the reversed number with the original. If equal, return true.
Steps
1
  Copy the input 1331
  digit = 1331 % 10 = 1
  reversed number = 1
  number copy = 133
2
  digit = 133 % 10 = 3
  reversed number = 13
  number copy = 13
3
  digit = 13 % 10 = 3
  reversed number = 133
  number copy = 1
4
  digit = 1 % 10 = 1
  reversed number = 1331
  number copy = 0
5
  1331 = 1331 return true
*/

const isNumberPalindrome = (number) => {
  var copy = number; // copy input number to build reversed number
  var reversed = 0;
  var digit = 0; // init reversed number and digit
  for (var i = 0; copy > 0; i++) { // iterate until copy is 0 or less
    digit = copy % 10; // current digit is copy % 10
    reversed = (reversed * 10) + digit; // multiply reversed number by 10 and add the digit
    copy = Math.trunc(copy / 10) // divide the number copy by 10 and remove decimals
  }
  return reversed === number;
}

