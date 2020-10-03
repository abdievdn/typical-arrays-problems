exports.min = function min (arr) {
  if (arr === undefined || arr.length === 0) return 0;
  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) minNumber = arr[i];
  }
  return minNumber;
}

exports.max = function max (arr) {
  if (arr === undefined || arr.length === 0) return 0;
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
  }
  return maxNumber;
}

exports.avg = function avg (arr) {
  if (arr === undefined || arr.length === 0) return 0;
  let sum = 0;
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

