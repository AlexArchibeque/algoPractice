// memoization
// js obj, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    console.log(memo)
    return memo[n];  
};

// O(n) Time
// O(n) Space

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

// console.log(fib(10))


const gridTraveler = (l,w) => {
    
}