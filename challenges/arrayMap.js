const subarraySumTarget = (arr, target) => {
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = 0;

  while (endIndex < arr.length) {
    currentSum += arr[endIndex];

    while (currentSum > target) {
      currentSum -= arr[startIndex];
      startIndex++;
    }

    if (currentSum === target) {
      return true;
    }

    endIndex++;
  }

  return false;
};
