// Logarithm - aside
// -> just a naive implementation of logs out of curiosity

function logarithm(base, number) {
  if (number === 1) return 0; // base case
  return 1 + logarithm(base, number / base); // recursive step
}

log(logarithm(2, 32)); // 5

// Also investigate:
// -> how to implement logs using loops instead of recursion
// -> how libraries approximate logarithms
