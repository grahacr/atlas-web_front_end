function countPrimeNumbers() {
  let count = 0;

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let j = 2; j <= 100; j++) {
    if (isPrime(j)) {
      count++;
    }
  }
  return count;
}

setTimeout(() => {
  let startTime = performance.now();

  for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
  }
  let endTime = performance.now();
  let execTime = endTime - startTime;
  console.log(`Execution time of calculating prime numbers 100 times was ${execTime} milliseconds`);
}, 0);
