/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini

debugger;
function minimal(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}

function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

// Test case

console.log("minimal : " + minimal(1, 4)); // output: 1
console.log("minimal : " + minimal(3, 2)); // output: 2
console.log("minimal : " + minimal(3, 3)); // output: 3

const array = [1, 2, 3, 4, 5];

const numberToFind1 = 3;
const numberToFind2 = 6;
const numberToFind3 = 5;
const resultIndex1 = findIndex(array, numberToFind1);
const resultIndex2 = findIndex(array, numberToFind2);
const resultIndex3= findIndex(array, numberToFind3);

console.log(`Index dari angka ${numberToFind1} adalah : ${resultIndex1}`);
console.log(`Index dari angka ${numberToFind2} adalah : ${resultIndex2}`);
console.log(`Index dari angka ${numberToFind3} adalah : ${resultIndex3}`);