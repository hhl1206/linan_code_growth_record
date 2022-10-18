/*
 * @Author: linan
 * @Date: 2022-06-28 11:33:44
 * @Last Modified by: linan
 * @Last Modified time: 2022-06-28 13:57:57
 */
var wiggleSort = function (nums) {
  let clone = [].concat(nums);
  clone = clone.sort((a, b) => a - b);
  let left = Math.floor((clone.length - 1) / 2);
  let right = clone.length - 1;
  for (let i = 0; i < clone.length; i++) {
    if (i % 2 === 0) {
      nums[i] = clone[left];
      left--;
    } else {
      nums[i] = clone[right];
      right--;
    }
  }
  // const numLen = nums.length;
  // let res = [];
  // for (let i = 0; i < numLen; i++) {
  //   res[0] = nums[i];

  //   for (let j = 0; j < numLen; j++) {
  //     if (j !== i) {
  //       if (res.length % 2 === 1 && res[res.length - 1] < nums[j]) {
  //         res.push(nums[j]);
  //       }
  //       if (res.length % 2 === 0 && res[res.length - 1] > nums[j]) {
  //         res.push(nums[j]);
  //       }
  //       // if (j === nums.length - 1 && res.length < numLen) {
  //       //   console.log(res, j);
  //       //   res = [];
  //       // }
  //     }
  //   }

  //   if (res.length < numLen) {
  //     console.log("1", res);
  //     res = [];
  //   }
  //   if (res.length === numLen) {
  //     return;
  //   }
  // }
  // // console.log("res", res);
  // return res;
};
console.log("res", wiggleSort([1, 5, 1, 1, 6, 4]));
