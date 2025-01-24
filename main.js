import { LinkedList } from './linked-list.js';

const myList = new LinkedList();
const myList2 = new LinkedList();

console.log("Testing insertAt:");

myList.append("first");
myList.append("second");
myList.append("third");

myList.insertAt("zero", 0);
console.log("List after inserting at the beginning: ", myList.toString());

myList.insertAt("fourth", myList.size());
console.log("List after inserting at the end: ", myList.toString());

myList.insertAt("middle", 2);
console.log("List after inserting in the middle: ", myList.toString());

let listSize = myList.size();
console.log("List size: ", listSize);

console.log("Testing removeAt:");

myList2.append("Dog");
myList2.append("Cat");
myList2.append("Bird");
myList2.append("Mouse");
console.log("Original list:", myList2.toString());

myList2.removeAt(0);
console.log("List after removing the head (Dog):", myList2.toString());

myList2.removeAt(myList2.size() - 1);
console.log("List after removing the tail (Mouse):", myList2.toString());

myList2.removeAt(1);
console.log("List after removing from the middle (Bird):", myList2.toString());

console.log("Testing pop:");

const myList3 = new LinkedList();
myList3.append("first");
myList3.append("second");
myList3.append("third");

console.log("Original list:", myList3.toString());

let poppedValue = myList3.pop();
console.log("Popped value:", poppedValue);
console.log("List after pop:", myList3.toString());

poppedValue = myList3.pop();
console.log("Popped value:", poppedValue);
console.log("List after pop:", myList3.toString());

poppedValue = myList3.pop();
console.log("Popped value:", poppedValue);
console.log("List after pop:", myList3.toString());
