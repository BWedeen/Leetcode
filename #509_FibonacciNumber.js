/*   The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of 
 *   the two preceding ones, starting from 0 and 1.
 */

/*
 *   @param {number} n
 *   @return {number}
 */
 
var fib = function(n) {
    let fibs = [0, 1];
  
    for(let i = 2; i <= n; i++) {
        fibs.push(fibs[i - 1] + fibs [i - 2]);
    }
  
    return fibs[n];
};
