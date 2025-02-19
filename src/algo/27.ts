function removeElement(nums: (number | undefined)[], val: number): number {
  let k = 0;
  const emptyArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    console.log('-----------::::', k, nums, i, emptyArr);
    if (nums[i] === val) {
      nums[i] = undefined;
      emptyArr.push(i);
    } else {
      k++;
      if (emptyArr.length) {
        const empIdx = emptyArr.shift();
        if (empIdx !== undefined) {
          nums[empIdx] = nums[i];
          nums[i] = undefined;
          emptyArr.push(i);
        }
      }
    }
  }
  return k;
}

// case 1
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

removeElement(nums, val);

console.log('nums: ', nums);
