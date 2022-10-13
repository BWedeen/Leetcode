// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

/**
 *  @param {number} n
 *  @return {number}
 */

var tribonacci = function(n) {
    let fibs = [0, 1, 1]

    for(let i = 2; i < n; i++) {
        fibs.push(fibs[i - 2] + fibs[i - 1] + fibs[i]);
    }

    return fibs[n];
};
