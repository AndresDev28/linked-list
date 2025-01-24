
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() { // Sin parámetros para crear una lista enlazada vacía.
    this.head = null;
    this.tail = null;
  }
  // métodos
  append(value) { /** Agrega un nodo al final de la lista */
    if(this.head === null) {
      const newNode = new Node (value); // Crea un nuevo nodo
      this.head = newNode;
      this.tail = newNode;
    }else {
      const newNode = new Node (value); 
      this.tail.nextNode = newNode; // Accede al último nodo de la lista y modifica su propiedad nextNode para que apunte al nuevo nodo enlazándoce este al final de la lista.
      this.tail = newNode; // Actualiza la propiedad tail para que apunte al nuevo nodo.
    }
  }

  prepend(value) { /** Agrega un nodo al principio de la lista */
    if(this.head === null) {
      const firstNode = new Node(value);
      this.head = firstNode;
      this.tail = firstNode;
    }else {
      const firstNode = new Node(value);
      firstNode.nextNode = this.head; // El nuevo nodo apunta al antiguo head
      this.head = firstNode;
    }
  }

  size() { /** Devuelve el tamano de la lista */
    let count = 0;
    let currentNode = this.head; // Variable para recorrer la lista

    while(currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  getHead() { /** Devuelve el primer elemento de la lista */
    return this.head;
  }

  getTail() { /** Devuelve el último elemento de la lista */
    return this.tail;
  }

  at(index) { /** Devuelve el nodo que contiene el nodo que se encuentra en la posición (índice) especificada de la lista */
    if(index < 0 || index >= this.size()) {
      return null;
    }else {
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentIndex < index && currentNode !== null) {
        currentIndex++;
        currentNode = currentNode.nextNode; // Avanza al siguiente nodo
      }
      return currentNode;
    }
  }

  pop() { /** Elimina el último nodo de la lista y devuelve su valor */
    if (this.head === null) { 
      return; // La lista está vacía
    }
    
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value; // Solo había un nodo en la lista
    }

    let currentNode = this.head;
    while (currentNode.nextNode !== this.tail) { // aseguras de que el bucle termine cuando currentNode sea el penúltimo nodo.
      currentNode = currentNode.nextNode;
    }

    const value = this.tail.value;
    this.tail = currentNode; // Actualiza el tail
    this.tail.nextNode = null; // Elimina el último nodo
    return value;
  }

  contains(value) { /** devuelve verdadero si el valor pasado está en la lista y de lo contrario devuelve falso. */
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) { /** devuelve el índice del nodo que contiene el valor, o nulo si no se encuentra. */
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentIndex++;
      currentNode = currentNode.nextNode
    }
    return null;
  }

  toString() {
    let str = "";
    if (this.head === null) {
      return "null";
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      str+= "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    str+= "null";
    return str;
  }

  insertAt(value, index) { /** Inserta un nuevo nodo con el valor proporcionado en el índice especificado. */
    if ( index < 0 || index > this.size()) {  // Verifica el índice
      return;
    }

    if (index === 0) { 
      this.prepend(value); // Insertar al principio
      return;
    }

    if (index === this.size()) { // Insertar al final
      this.append(value);
      return;
    }

    // Inserción en el medio
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) { // Iteramos hasta llegar el valor de index
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    
    const newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode; // Enlazar el nuevo nodo al nodo que estaba en el índice
    currentNode.nextNode = newNode; // Enlazar al nodo anterior al nuevo nodo
    
  }

  removeAt(index) { /** Elimina el nodo en la posición especificada */
    if (index < 0 || index >= this.size()) {
      return null; // Índice fuera de rango
    }

    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.nextNode;
      if (this.head === null) {
        this.tail = null; // La lista está vacía ahora
      }
      return value;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    const value = currentNode.value;
    previousNode.nextNode = currentNode.nextNode;

    if (currentNode === this.tail) {
      this.tail = previousNode; // Actualiza la cola si se eliminó el último nodo
    }

    return value;
  }

  toString() { /** Devuelve una representación en cadena de la lista */
    let str = "";
    let currentNode = this.head;

    while (currentNode !== null) {
      str += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }

    str += "null";
    return str;
  }
} 


// 3a. Recorrer la lista hasta el nodo anterior al índice
    // 3b. Guardar la referencia al nodo a eliminar
    // 3c. Enlazar el nextNode del nodo anterior al nextNode del nodo a eliminar
    // 3d. Actualizar la cola si eliminamos el último nodo