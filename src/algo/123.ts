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
  let buy1 = -prices[0];
  let sell1 = 0;

  let buy2 = -prices[0];
  let sell2 = 0;

  for (let i = 1; i < days; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);

    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
}

// case 1
// const prices = [3, 3, 5, 0, 0, 3, 1, 4];
// 输出：6

// case 2
// const prices = [1, 2, 3, 4, 5];
// 输出：4

// case 3
const prices = [7, 6, 4, 3, 1];
// 输出 0

console.log(maxProfit(prices));
