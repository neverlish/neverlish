var {BST} = require('./BST');

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var min = nums.getMin();
console.log('The minimum value of the BST is: ' + min); // 3

var max = nums.getMax();
console.log('The maximum value of the BST is: ' + max); // 99

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

inOrder(nums.root);

var value = 3;
var found = nums.find(value);

if (found != null) {
  console.log('Found ' + value + ' in the BST.'); // Found 3 in the BST.
} else {
  console.log(value + ' was not found in the BST.');
}
