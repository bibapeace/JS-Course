// ALGORITHMS OF JS

// FIBONACCI

// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// // Big-O = 0(n)

// FACTORIAL

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
// // Big-O = O(n)

// // PRIME NUMBER

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// // Big-O = O(n)

// function isPrime(n){
//   if(n<2){
//     return false
//   }
//   for(let i = 2; i<=Math.sqrt(n); i++){
//     if(n % i === 0){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

// // Power of two

// function isPowerOfTwo(n) {
//   if(n<1){
//     return false
//   }
//   while (n > 1) {
//     if (n % 2 != 0) {
//       return false
//     }
//     n = n/2
//   }
//   return true
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))

// function isPowerOfTwoBitWise(n){
//   if (n<1) {
//     return false
//   }
//   return (n & (n-1)) === 0
// }
// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(2))
// console.log(isPowerOfTwoBitWise(5))

// // Recursion Fibonacci

// function recursiveFibonacci(n) {
//   if (n<2) {
//     return n
//   }
//   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(7))

// // Recursion Factorial of a number

// function recursiveFactorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(5));

// // Linear Search

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));

// // Binary Search

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// // Recursive Binary Search

// function recursiveBinarySearch(arr, target){
//     return search(arr, target, 0, arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return - 1
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }

//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//         return search(arr, target, middleIndex + 1, rightIndex)
//     }
// }

// console.log(recursiveBinarySearch([-5,2,4,6,10], 10))
// console.log(recursiveBinarySearch([-5,2,4,6,10], 6))
// console.log(recursiveBinarySearch([-5,2,4,6,10], 20))

// // Big-O = O(logn)

// // Bubble Sort

// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);

// // Big-O = O(n^2)

// // Insertion Sort

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
// }

// const arr = [8, 20, -2, 4, -6];
// insertionSort(arr);
// console.log(arr);

// // Big-O = O(n^2)

// // Quick Sort

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));

// // Merge Sort

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr));

// // Big-O = O(nlogn)

// // Cartesian Product

// function cartesianProduct(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]]);
//     }
//   }

//   return result;
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(cartesianProduct(arr1, arr2));

// // Big-O = O(mn)

// // Climbing Staircase

// function climbingStaircase(n) {
//     const noOfWays = [1,2]
//     for (let i = 2; i <= n; i++){
//         noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
//     }

//     return noOfWays[n-1]
// }

// console.log(climbingStaircase(1))
// console.log(climbingStaircase(2))
// console.log(climbingStaircase(3))
// console.log(climbingStaircase(4))
// console.log(climbingStaircase(5))

// // Big-O = O(n)

// // Tower of Hanoi

// function towerOfHanoi(n, fromRod, toRod, usingRod) {
//   if (n === 1) {
//     console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//     return;
//   }
//   towerOfHanoi(n - 1, fromRod, usingRod, toRod);
//   console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
//   towerOfHanoi(n - 1, usingRod, toRod, fromRod);
// }

// towerOfHanoi(3, "A", "C", "B");

// // Big-O = O(2^n)