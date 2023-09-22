/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
    let returnedArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //   returnedArray[i] = fn(arr[i], i)
    // } 
    arr.forEach((elem, index) => returnedArray.push(fn(elem, index)))
    return returnedArray;
};