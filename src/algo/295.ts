class MedianFinder {
  dataList: number[] = [];

  addNum(num: number): void {
    this.dataList.push(num);
    this.dataList.sort((a, b) => a - b);
  }

  findMedian(): number {
    const isEven = this.dataList.length % 2 === 0;
    const midIdx = isEven
      ? this.dataList.length / 2 - 1
      : Math.floor(this.dataList.length / 2);
    console.log(
      '---: ',
      this.dataList,
      isEven,
      midIdx,
      this.dataList[midIdx],
      this.dataList[midIdx + 1]
    );
    const median = isEven
      ? (this.dataList[midIdx] + this.dataList[midIdx + 1]) / 2
      : this.dataList[midIdx];

    return median;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
