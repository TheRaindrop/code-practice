/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1Start = m - 1,
    n2Start = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    console.log(`第 ${i} 次，nums1：${nums1}, ${n1Start}`);
    console.log(`         nums2：${nums2}, ${n2Start}`);
    if (nums1[n1Start] > nums2[n2Start] && n1Start >= 0) {
      nums1[i] = nums1[n1Start--];
    } else {
      if (n2Start >= 0) {
        nums1[i] = nums2[n2Start--];
      } else {
        nums1[i] = nums1[n1Start--];
      }
    }
    console.log(`-------------final：${nums1}`);
  }
}

// const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  // 输出：[1,2,2,3,5,6]
  // 解释：需要合并 [1,2,3] 和 [2,5,6] 。
  // 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
  
// const nums1 = [1], m = 1, nums2: number[] = [], n = 0
  // 输出：[1]
  // 解释：需要合并 [1] 和 [] 。
  // 合并结果是 [1] 。
  
const nums1 = [0], m = 0, nums2 = [1], n = 1
  // 输出：[1]
  // 解释：需要合并的数组是 [] 和 [1] 。
  // 合并结果是 [1] 。
  // 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
  

merge(nums1, m, nums2, n);

console.log('final nums1: ', nums1);
