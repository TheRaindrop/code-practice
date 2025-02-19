function search(
  arr: number[],
  start: number,
  end: number,
  target: number
): boolean {
  if (start >= end) {
    return arr[start] === target;
  }
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] > target) {
    return search(arr, start, mid - 1, target);
  } else {
    return search(arr, mid + 1, end, target);
  }
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let isMatch = false;
  // 首先纵向查找
  const colMatchIdx: number[] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    console.log('------', matrix, i);
    if (matrix[0][i] <= target && matrix[matrix.length - 1][i] >= target) {
      colMatchIdx.push(i);
    }
  }

  // 横向查找
  if (colMatchIdx.length) {
    for (let j = 0; j < matrix.length; j++) {
      isMatch = search(
        matrix[j],
        colMatchIdx[0],
        colMatchIdx[colMatchIdx.length - 1],
        target
      );
      if (isMatch) {
        break;
      }
    }
  }
  return isMatch;
}

// case 1:
// const matrix = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//   ],
//   target = 5;
// 输出：true

// case 2:
// const matrix = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//   ],
//   target = 20;
// 输出：false

// case 3:
const matrix = [[1, 1]],
  target = 1;

console.log(searchMatrix(matrix, target));
