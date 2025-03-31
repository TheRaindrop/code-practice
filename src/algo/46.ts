/**
46. 全排列
中等
相关标签
相关企业

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：

输入：nums = [1]
输出：[[1]]

 

提示：

    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    nums 中的所有整数 互不相同

 */

function permute(nums: number[]): number[][] {
  const res: number[][] = []; // 路径值记录

  function backtrack(path: number[], used: boolean[]) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;

      // 试探
      backtrack(path, used);

      // 回溯，回归原位
      path.pop();
      used[i] = false;
    }
  }

  // 回溯算法核心实现
  // 回溯：路径、已选择列表

  const initPath: number[] = [];
  const used = new Array(nums.length).fill(false);

  backtrack(initPath, used);

  return res;
}

console.log('permute: ', permute([1, 2, 3]));
