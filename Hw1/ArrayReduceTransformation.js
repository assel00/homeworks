/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {

  if (nums.length != 0) {
    let sum = init;
    for (let i = 0; i < nums.length; i++) {
      if (nums.length != 0) { sum = fn(sum, nums[i]) }
    }
    return sum;
  }
  else return init;

};