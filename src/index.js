exports.min = function min (arr) {
  let minNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) minNumber = arr[i];
  }
  return minNumber;
}

exports.max = function max (arr) {
  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
  }
  return maxNumber;
}

exports.avg = function avg (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

