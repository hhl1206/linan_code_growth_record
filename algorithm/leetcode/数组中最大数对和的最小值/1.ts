var minPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[0] + nums[nums.length - 1];
};
console.log(minPairSum([4, 1, 5, 1, 2, 5, 1, 5, 5, 4]));
