
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        // 这里必须新建一个变量 不然i会被覆盖
        let cur = arr[i];
        // 注意这里是var 因为要在block外用j
        for(var j = i - 1; j >= 0 && arr[j] > cur; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cur;
    }
    return arr;
}

console.log(insertionSort([2,3,1,-1]))





// Insert into the sorted region