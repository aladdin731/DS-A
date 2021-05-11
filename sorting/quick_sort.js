// time: worst O(n2) ave/best O(n log(n))
// Although we typically take the worst case when describing Big-O for an algorithm, 
// the worst case to be an exceedingly rare occurance even if we choose the pivot at random. 
// Because of this we still consider quickSort an efficient algorithm.

// space: O(n)
// There is an in-place version of quickSort that uses O(log(n)) space. 
// O(log(n)) space is not huge benefit over O(n).
// Just know that a O(logn) space quickSort exists.
// When constant space is important to you, use the in-place version. 


// 小的 pivot 大的
// divide and conquer
// partition



function quickSort(arr) {
    if(arr.length <= 1) return arr;

    // partition O(n)
    let pivot = arr.shift();
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort([2,3,1,-1]))

// We must calculate how many recursive calls we make. 
// The number of recursive calls is the number of times we split the array to reach the base case. 
// This is dependent on how we choose the pivot.

// best case: choose the median -> O(logn) 
// This will halve the array length at every step of the recursion
// worst case: choose the min/max -> O(n)