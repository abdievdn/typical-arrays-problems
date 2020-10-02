exports.min = function min (arr) {
  let minNumber = arr[0];
  if (minNumber === undefined) return 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) minNumber = arr[i];
  }
  return minNumber;
}

exports.max = function max (arr) {
  let maxNumber = arr[0];
  if (maxNumber === undefined) return 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) maxNumber = arr[i];
  }
  return maxNumber;
}

exports.avg = function avg (arr) {
  let sum = 0;
  let number = arr[0];
  if (number === undefined) return 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

