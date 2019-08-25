const readline = require('readline');
let inputArray = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// inter input from command line , and save it to input array
rl.question('Enter the input to sort(should be comma separated)? ', (answer) => {
    inputArray = answer.split(',');

    // sort the array
    sort(inputArray);
    rl.close();
});



function sort(arr) {
   
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    console.log(arr);
}