const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// 冒泡
const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// console.log('bubbleSort: ', bubbleSort(arr));

// 选择排序
const selectSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
};
console.log('selectSort: ', selectSort(arr));

// 快速排序
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let midIdx = Math.floor(arr.length / 2);
  const left = arr.filter((v) => v < arr[midIdx]);
  const mid = arr.filter((v) => v === arr[midIdx]);
  const right = arr.filter((v) => v > arr[midIdx]);

  return [...quickSort(left), ...mid, ...quickSort(right)];
};

// console.log('quickSort: ', quickSort(arr));
