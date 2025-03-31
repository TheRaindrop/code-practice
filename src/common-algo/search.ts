// 二分查找
// 数组有序

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return [middle];
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return null;
};

console.log('binarySearch: ', binarySearch(arr, 5));
