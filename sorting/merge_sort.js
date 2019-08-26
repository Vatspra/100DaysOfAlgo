
arr = [6, 6, 7, 1, 4, 5,];


merge_sort(arr, 0, arr.length - 1);

console.log(arr);
function merge_sort(arr, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        // console.log("p is ", p);
        // console.log("q is ", q);
        // console.log("r is", r)
        merge_sort(arr, p, q);
        merge_sort(arr, q + 1, r);
        merging(arr, p, q, r)
    }

}






function merging(arr, p, q, r) {

    const n1 = q - p + 1;
    const n2 = r - p;

    const arr1 = [];
    const arr2 = [];
    // console.log(arr1)
    for (let i = 0; i < n1; i++) {
        // console.log("i is", i, arr[i]);
        arr1[i] = arr[p + i]
        // arr1.push(arr[i])
    }

    for (let j = 0; j < n2; j++) {
        // arr2.push(arr[i]);
        arr2[j] = arr[q + 1 + j]
    }

    console.log(arr1);
    console.log(arr2);

    // arr1.push(Infinity);
    // arr2.push(Infinity);
    // console.log("arr1 is", arr1);
    // console.log("arr2 is", arr2);

    // for (i = 0; i < arr.length; i++) {
    //     let a = 0;
    //     let b = 0;
    //     if (arr1[a] <= arr2[b]) {
    //         arr[a] = arr1[a];
    //         a++
    //     } else {
    //         arr[b] = arr2[b];
    //         b++;
    //     }
    // }
    let a = 0;
    let b = 0;
    let c = p;
    while (a < n1 && b < n2) {
        if (arr1[a] <= arr2[b]) {
            arr[c] = arr1[a];
            a++
        } else {
            arr[c] = arr2[b];
            b++;
        }
        c++;
    }

    while (a < n1) {
        arr[c] = arr1[a];
        a++;
        c++
    }

    while (b < n2) {
        arr[c] = arr1[b];
        b++;
        c++;
    }
}