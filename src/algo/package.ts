/**
 * 背包问题
 * - 给定 n 个物品，每个物品有重量 weight[i] 和价值 value[i]
 * - 背包承重为 capacity
 * - 要求：选择物品装入背包，使总价值最大，且总重量不超过背包容量
 */

/**
dp[i][w] // 表示当 i 件商品时，总重量为 w，对应的总价值

dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weight[i]] + value[i])

d[0][w] = 0
d[1][0] = 0

 */

function getPackage(
  itemList: {
    weight: number;
    value: number;
  }[],
  capacity: number
) {
  const dp = new Array(itemList.length).fill(0).map;
}
