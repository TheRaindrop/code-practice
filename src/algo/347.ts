function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const arr = Array.from(map);

  // quick sort
  const quickSort = (arr: [number, number][]): [number, number][] => {
    // let left = 0;
    // let right = arr.length - 1;
    if (arr.length <= 1) {
      return arr;
    }

    const midIdx = Math.floor(arr.length / 2);
    let left: [number, number][] = arr.filter(
      (item) => item[1] > arr[midIdx][1]
    );
    let mid: [number, number][] = arr.filter(
      (item) => item[1] === arr[midIdx][1]
    );
    let right: [number, number][] = arr.filter(
      (item) => item[1] < arr[midIdx][1]
    );
    return [...quickSort(left), ...mid, ...quickSort(right)];
  };

  const newArr = quickSort(arr);
  console.log('new arr: ', newArr);

  const retArr = [];
  for (let i = 0; i < k; i++) {
    retArr.push(newArr[i][0]);
  }
  return retArr;
}

const nums = [5, 3, 1, 1, 1, 3, 73, 1],
  k = 2;

console.log(topKFrequent(nums, k));

function topKFrequent2(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  return Array.from(countMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((curr) => curr[0]);
}
