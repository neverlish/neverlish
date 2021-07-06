var {Node} = require('./Node');

function BST() {
  this.root = null;
  this.insert = insert;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.update = update;
}

function insert(data) {
  var n = new Node(data, null, null);

  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // 자식이 없는 노드
    if (node.left == null && node.right == null) {
      return null;
    }
    // 왼쪽 자식이 없는 노드
    if (node.left == null) {
      return node.right;
    }
    // 오른쪽 자식이 없는 노드
    if (node.right == null) {
      return node.left;
    }
    // 두 자식이 있는 노드
    // var tempNode = getSmallest(node.right);
    // node.data = tempNode.data;
    // node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

function update(data) {
  var grade = this.find(data);
  grade.count++;
  return grade;
}

module.exports.BST = BST;
