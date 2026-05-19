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
  if (list.length < 2) return list;
  else {
    let leftHalf = mergeSort(list.slice(0, Math.round(list.length / 2)));
    let rightHalf = mergeSort(
      list.slice(Math.round(list.length / 2), list.length),
    );

    console.log(leftHalf + "||" + rightHalf);
    const result = [];
    let i = 0;
    let j = 0;
    while (leftHalf.length !== i && rightHalf.length !== j) {
      if (leftHalf[i] < rightHalf[j]) {
        result.push(leftHalf[i]);
        i++;
      } else {
        result.push(rightHalf[j]);
        j++;
      }
    }
    return [...result, ...leftHalf.slice(i), ...rightHalf.slice(j)];
  }
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

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
