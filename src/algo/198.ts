function rob(nums: number[]): number {
  const n = nums.length;

  const f: number[] = Array(n + 1).fill(0);

  f[0] = 0;
  f[1] = nums[0];

  for (let i = 2; i <= n; ++i) {
    f[i] = Math.max(f[i - 1], f[i - 2] + nums[i - 1]);
  }

  return f[n];
}
// case 1:
const nums = [1, 2, 3, 1];

console.log(rob(nums));
