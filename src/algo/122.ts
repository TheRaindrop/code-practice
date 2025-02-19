function maxProfit(prices: number[]): number {
  let benefit = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          benefit += prices[i] - prices[i - 1]
      }
  }
  return benefit
};