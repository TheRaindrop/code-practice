function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let findIdx = -1;

  while (left <= right) {
    console.log('search: ', left, right);
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      findIdx = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return findIdx;
}

const nums = [-1, 0, 3, 5, 9, 12];
const t = 9;

const r = search(nums, t);
console.log('result: ', r);
