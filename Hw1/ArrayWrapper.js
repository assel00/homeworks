/**
 * @param {number[]} nums
 */

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((acc, val) => acc += val, 0)
    }

    toString() {
        return `[${this.nums.join(",")}]`
    }
}