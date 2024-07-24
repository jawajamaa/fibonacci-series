function fibonacci(num) {

  if (num === 0) {
    return 0

  } else if (num === 1 || num === 2) {
    return 1

  } else {
    const a = 0;
    const b = 1;
    const c = 1;
    const fib = [a, b, c]
    for (let n = 2; n <= num; n++) {
        d = fib[fib.length - 2] + fib[fib.length - 1]
        // console.log("Line 18, d:", d)
        fib.push(d)
        // console.log("Line 20, fib:", fib)
      } 
    const ans = fib[`${num}`]
    // console.log("Line 22, fib:", fib)
    // console.log("Line 23, num-1:", `${num-1}`)
    // console.log("Line 24, ans:", ans)
    return ans
  }
}

// console.log(fibonacci(10))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// parameter 'num' is the nth digit of the sequence
// sequence begins with 0,1 and continues based on value of 'num' given as arg
// declare two variables for the succeeding two integers?
