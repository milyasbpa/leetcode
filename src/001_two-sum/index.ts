function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) {
      return [seen.get(comp)!, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

// Test case
// Output: [0, 1]
console.log(twoSum([2, 7, 11, 15], 9));
