function isPalindrome(x: number): boolean {
  // With string
  //   const stringNum = String(x);
  //   if (x < 0) return false;
  //   if (stringNum.length === 1) return true;
  //   for (let i = 0; i < stringNum.length / 2; i++) {
  //     if (stringNum.charAt(i) !== stringNum.charAt(stringNum.length - 1 - i))
  //       return false;
  //   }
  //   return true;

  //   Without string;
  if (x < 0) return false;
  if (x % 10 == 0) return false;
  let original = x;
  let reversed = 0;
  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return x === reversed;
}

console.log(isPalindrome(1), 1); // return true
console.log(isPalindrome(11), 2); // return true
console.log(isPalindrome(12), 3); // return false
console.log(isPalindrome(121), 4); // return true
console.log(isPalindrome(124), 5); // return false
console.log(isPalindrome(1331), 6); // return true
console.log(isPalindrome(1334), 7); // return false

console.log("mod 10", 11 % 10);
