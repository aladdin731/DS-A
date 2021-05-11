// 常考
// non-comparison, integer sorting 
// time complexity is superior to every other comparison-based sortign algorithm

// 只有当sort的是整数且知道最大值的时候 用counting sort
// 如果不知道最大值 用radixSort

// time: O(n + k) 
// n 个数字 每个数字都在0..k之间

// space: O(k) counter的长度

// for input arrays containing only positive integers
function countingSort(arr, max) {
  const result = [];
  const counters = new Array(max + 1).fill(0);

  // counter的index就是arr的value O(n)
  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }
  // 从小到大遍历counters 加入result O(k)
  for (let i = 0; i < counters.length; i++) {
    while (counters[i] > 0) {
      result.push(i);
      counters[i]--;
    }
  }

  return result;
}

// In an interview setting, always ask the interviewer 
// if you can be guaranteed that the largest element in the input array is not huge.