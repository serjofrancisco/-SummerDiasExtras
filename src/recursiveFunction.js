console.log(fatorial(5));

function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// console.log(fatorial(5));

// fatorial(5) * fatorial(4) * fatorial(3) * fatorial(2) * fatorial(1) * fatorial(0)

// fatorial(5) * fatorial(4) * fatorial(3) * fatorial(2) * fatorial(1) * 1

// fatorial(5) * fatorial(4) * fatorial(3) * fatorial(2) * 1 * 1

// fatorial(5) * fatorial(4) * fatorial(3) * 2 * 1 * 1

// fatorial(5) * fatorial(4) * 3 * 2 * 1 * 1

// fatorial(5) * 4 * 3 * 2 * 1 * 1

// 5 * 4 * 3 * 2 * 1 * 1