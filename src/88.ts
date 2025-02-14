/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1Start = nums1.length,
    n2Start = n - 1;
  for (let i = m - 1; i >= 0; i--) {
    if (nums1[n1Start] > nums2[n2Start]) {
      nums1[i] = nums1[n1Start--];
    } else {
      nums1[i] = nums2[n2Start--];
    }
  }
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);

console.log('final nums1: ', nums1);
