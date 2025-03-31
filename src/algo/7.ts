/**
7. 整数反转
中等
相关标签
相关企业

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。

 

示例 1：

输入：x = 123
输出：321

示例 2：

输入：x = -123
输出：-321

示例 3：

输入：x = 120
输出：21

示例 4：

输入：x = 0
输出：0

 

提示：-231 <= x <= 231 - 1
 */

function reverse(x: number): number {
  const isPositive = x >= 0 ? true : false;
  let abX = Math.abs(x);

  const numArr: number[] = [];
  while (abX >= 1) {
    const r = abX % 10;
    numArr.push(r);
    abX = Math.floor(abX / 10);
  }
  let r: number = 0;
  let base = 1;
  for (let i = numArr.length - 1; i >= 0; i--) {
    r += numArr[i] * base;
    base = base * 10;
  }
  if (isPositive) {
    return r > 2 ** 31 - 1 ? 0 : r;
  } else {
    return 0 - r < 0 - 2 ** 31 ? 0 : 0 - r;
  }
}
