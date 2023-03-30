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

// DATA STRUCTURES

// // Array

// const arr = [1, 2, 3, "Beibarys"];
// arr.push(4); // adding at the end
// arr.unshift(0); // adding at the beginning
// arr.pop(); //remove from the end
// arr.shift(); //remove from beginning

// for (const item of arr) {
//   console.log(item);
// }

// // map, filter, reduce, concat, slice and splice

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const sum = numbers.reduce((prev, curr) => prev + curr, 9);
// console.log(sum);
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2);
// console.log(newArr);
// const slice = numbers.slice(1, 4);
// console.log(slice);
// const arrSplice = [1, 2, 3, 4, 5];
// arrSplice.splice(2, 2, "a", "b");
// console.log(arrSplice);

// // Objects

// const obj = {
//   name: "Heisenberg",
//   age: 25,
//   sayMyName: function () {
//     console.log(this.name);
//   },
// };
// obj.hobby = "Football";
// delete obj.hobby;

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.hobby);
// obj.sayMyName();

// // Object.keys() .values() .entries()

// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values);

// const entries = Object.entries(obj);
// console.log(entries);

// // Sets

// const set = new Set([1, 2, 3]);
// set.add(4); // adding new value to set
// console.log(set.has(4)); // to check has the set some value (true,false)
// set.delete(3); // delete some value
// console.log(set.size); // check size of set
// set.clear(); // to hide values in the set

// for (const item of set) {
//   console.log(item);
// }

// // Map

// const map = new Map([["a", 1], ["b", 2]]);

// map.set('c',3) // to add new key-value pair
// console.log(map.has('a')) // to see has the map the key-value
// map.delete('c') // to delete key-value pair
// console.log(map.size) // to see the size of key-value pair
// map.clear() // to clear the map

// for(const [key,value] of map){
//     console.log(`${key}: ${value}`)
// }

// // Stack implement

// // peek() - get the value of the top element without removing it
// // isEmpty() - check if the stack is empty
// // size() - get the number of elements in the stack
// // print() - visualize the elements in the stack

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const stack = new Stack();
// console.log(stack.isEmpty());

// stack.push(20);
// stack.push(10);
// stack.push(30);

// console.log(stack.size());
// stack.print();

// console.log(stack.pop());
// console.log(stack.peek());

// // Queue Imolementation

// // peek() - get the value of the element at the front of the queue without removing it
// // isEmpty() - check if the queue is empty
// // size() - get the numbers of elemnts in the queue
// // print() - visualize the elements in the queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue(10));
// console.log(queue.peek())

// // Queue Implementation optimised

// class Queue {
//   constructor() {
//     this.items = {};
//     this.rear = 0;
//     this.front = 0;
//   }

//   enqueue(element) {
//     this.items[this.rear] = element;
//     this.rear++;
//   }

//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }

//   isEmpty() {
//     return this.rear - this.front === 0;
//   }

//   peek() {
//     return this.items[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());

// // Circular queue imolementation

// // isFull() - check if the queue is full

// class circularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1;
//     this.front = -1;
//   }

//   isFull() {
//     return this.currentLength === this.capacity;
//   }

//   isEmpty() {
//     return this.currentLength === 0;
//   }

//   enqueue(element) {
//     if (!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = element;
//       this.currentLength += 1;
//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength -= 1;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return item;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//     return null;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const queue = new circularQueue(5);
// console.log(queue.isEmpty())

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// console.log(queue.isFull())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.print()
// queue.enqueue(60)
// queue.print()

// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
