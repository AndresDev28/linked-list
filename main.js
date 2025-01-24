import { LinkedList } from './linked-list.js';

const myList = new LinkedList();
const myList2 = new LinkedList();

// Probando insertAt(value,index)

console.log("Probando insertAt:");

myList.append("first");
myList.append("second");
myList.append("third");

myList.insertAt("cero", 0);
console.log("Lista despues de insertar al inicio: ", myList.toString());

myList.insertAt("fourth", myList.size());
console.log("Lista despues de insertar al final: ", myList.toString());

myList.insertAt("midle", 2);
console.log("Lista despues de insertar al medio: ", myList.toString());

let listSize = myList.size();
console.log("Tamano de la lista: ", listSize);

console.log("Probando removeAt:");

myList2.append("Dog");
myList2.append("Cat");
myList2.append("Bird");
myList2.append("Mouse");
console.log("Lista original:", myList2.toString());

// console.log("Eliminando Cat:");
myList2.removeAt(0);

console.log("Lista modificada:", myList2.toString());
