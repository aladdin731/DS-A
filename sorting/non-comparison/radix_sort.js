// 不考
// non-comparison, integer sorting algorithm.
// most often used on lists of binary numbers
// all data be converted to binary (or some other integer representation) before Radix Sort is invoked.
// 从个位到最高位

// time:O(n * k)
// space: O(n + k)
// The amount of memory consumed by the algorithm increases 
// relative to both the size of the input array and the length of the longest integer.

const getDigitFrom = (num, place) => 
    Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

// Special case where num === 0 is due to log10(0) = -Infinity
const getIntLength = (num) => 
    (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

// for input arrays containing only positive integers
function radixSort(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []); // Array of empty arrays

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}

// contain both positive and negative integers
function radixSortWithNegatives(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  var negatives = arr.filter(item => item < 0);
  var negativesSorted = [];
  if (negatives.length > 0) {
    negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
                        .reverse()
                        .map(item => -item);
  }

  var positives = arr.filter(item => item >= 0);
  let maxDigits = getMaxDigits(positives);

  for(let k = 0; k < maxDigits; k++){
    let buckets = Array.from({length: 10}, () => []);

    for (let i = 0; i < positives.length; i++) {
        let digit = getDigitFrom(positives[i], k);
        buckets[digit].push(positives[i]);
    }
    positives = [].concat(...buckets);
  }
  return negativesSorted.concat(positives);
}


