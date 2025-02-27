// function maxProfit(prices: number[]): number {
//   let benefit = 0;
//   for (let i = 1; i < prices.length; i++) {
//       if (prices[i] > prices[i - 1]) {
//           benefit += prices[i] - prices[i - 1]
//       }
//   }
//   return benefit
// };

// ---------动态规划
function maxProfit(prices: number[]): number {
  const days = prices.length;
  const dp = new Array(days).fill(0).map((v) => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < days; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  console.log('dp array: ', dp);
  return dp[days - 1][0];
}

// 示例 1：

// const prices = [7, 1, 5, 3, 6, 4];
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。

// 示例 2：

// const prices = [1, 2, 3, 4, 5];
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 最大总利润为 4 。

// 示例 3：

const prices = [7, 6, 4, 3, 1];
// 输出：0
// 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。

console.log(maxProfit(prices));
