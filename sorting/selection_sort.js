// time: O(n2)
// space: O(1)
// less swap than bubble sort

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) { // O(n)
        let min = i;
        for(let j = i + 1; j < arr.length; j++) { // O(n/2)
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    return arr;
}

console.log(selectionSort([2,3,1,-1]))

// time: O(n2)
// The inner loop j will make one less iteration for every iteration of i.
// the inner loop j will contribute roughly O(n / 2) on average
// The two loops are nested so our total time complexity is O(n * n / 2) = O(n2)

// space: O(1)
// The amount of memory consumed by the algorithm 
// does not increase relative to the size of the input array. 

// 当input data is streamed in pieces时用insertion sort - online algorithm
// can sort the data live as it is received.
// sorting the most relevant posts in a social media feed 
// 或者长度很短或nearly sorted -- 同bubble sort

// similar to bubble sort
// major difference: select the smallest elements 
// and directly places them at the beginning of the array
// select the next smallest

// 每次在未排序中找最小的 然后和前面的互换
// A single "pass" of selection sort will 
// select the next smallest element of unsorted region of the array 
// and move it to the sorted region.

// Selection sort is complete when the sorted region spans the entire array 
// and the unsorted region is empty!

// Selection Sort only swaps once our inner loop has completely finished traversing the array. 
// Therefore, Selection Sort is optimized to make the least possible number of swaps.
// 比bubble sort少一些swap
