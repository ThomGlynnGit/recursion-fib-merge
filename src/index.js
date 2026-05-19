export function fibonacci(n, result = [0, 1]) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (result.length === n) {
    return result;
  }
  result.push(result[result.length - 1] + result[result.length - 2]);
  return fibonacci(n, result);
}

export function mergeSort(list) {
  return [];
}

function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }
}

console.log(fibonacci(3));
