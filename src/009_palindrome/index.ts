function isPalindrome(x: number): boolean {
  // Step:
  // 1. find the way to reverse from left to right
  // 2. compare
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
