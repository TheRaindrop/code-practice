/**
 * 123. 买卖股票的最佳时机 III
相关标签
相关企业

给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * 思路
最终态有：
1. 一次也没有交易
2. 只买了一次 buy1
3. 买一次、卖一次：sell1
4. 买两次、卖一次：buy2
5. 买两次，卖两次：sell2


 */
function maxProfit(prices: number[]): number {
  const days = prices.length;
  const dp = new Array(days).fill(0).map(() => new Array(2).fill(0));

  const buy1: number[] = [];
  const sell1: number[] = [];
  const buy2: number[] = [];
  const sell2: number[] = [];

  let n = 10;
  buy1[n] = Math.max(buy1[n - 1], -prices[n]);
  sell1[n] = Math.max(sell1[n - 1], buy1[n - 1] + prices[n]);
  buy2[n] = Math.max(buy2[n - 1], sell1[n - 1] + prices[n]);
  sell2[n] = Math.max(sell2[n - 1], buy2[n - 1] + prices[n]);

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
}
