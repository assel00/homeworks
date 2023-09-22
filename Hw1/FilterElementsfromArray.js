/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArr = [];

    arr.forEach((i, index) => { if (fn(i, index)) filteredArr.push(i) })
    //     for (let i = 0; i < arr.length; i++) {
    //   if (fn(arr[i], i)) filteredArr.push(arr[i])
    // }

    return filteredArr;



};