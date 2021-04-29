export class Node {
  next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }

    curNode.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;

    let curNode = this.head;

    while (curNode.next) {
      length += 1;
      curNode = curNode.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds.');
    }

    if (index == 0) {
      return this.head;
    }

    let counter = 0;

    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds.');
  }

  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftNodeValue = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftNodeValue;
  }

  print() {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  constructor() {}
}
