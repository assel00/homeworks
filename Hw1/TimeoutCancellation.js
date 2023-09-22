/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const timeout = setTimeout(() => {
        fn(...args);
    }, t)
    return cancel = () => {
        clearTimeout(timeout);
    }
};