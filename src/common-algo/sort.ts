const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let curr = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = curr;
      }
    }
  }
  return arr;
};

const arr = [7, 6, 5, 4, 3, 2, 1];

const selectSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== arr[minIdx]) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
};
// console.log('selectSort: ', selectSort(arr));

const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = Math.floor(arr.length / 2);
  // 分左右
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    }
    if (arr[i] <= arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
};

// console.log('quickSort: ', quickSort(arr));

// 分治法
