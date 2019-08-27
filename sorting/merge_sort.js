
arr = [5,5,4,3,2,1,3,3,2,2,3,4];

console.log('unSorted array is', arr);
merge_sort(arr, 0, arr.length - 1);
console.log('Sorted array is', arr);
function merge_sort(arr, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        merge_sort(arr, p, q);
        merge_sort(arr, q + 1, r);
        merging(arr, p, q, r)
    }

}






function merging(arr, p, q, r) {
    const n1 = q - p + 1;
    const n2 = r - q;
    const arr1 = new Array(n1);
    const arr2 = new Array(n2);
    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[p + i]
    }

    for (let j = 0; j < n2; j++) {
        arr2[j] = arr[j + q + 1];
    }

    let a = 0;
    let b = 0;
    let c = p;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
            arr[c] = arr1[a];
            a++
        } else {
            arr[c] = arr2[b];
            b++;
        }
        c++;
    }

    while (a < arr1.length) {
        arr[c] = arr1[a];
        a++;
        c++
    }

    while (b < arr2.length) {
        arr[c] = arr2[b];
        b++;
        c++;
    }
}