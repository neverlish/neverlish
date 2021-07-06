function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

module.exports.Node = Node;
