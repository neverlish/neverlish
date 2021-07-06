var {BST} = require('./BST');

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log('Inorder traversal: ');
inOrder(nums.root); // 3 16 22 23 37 45 99

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

console.log('Preorder traversal: ');
preOrder(nums.root); // 23 16 3 22 45 37 99

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}

console.log('Postorder traversal: ');
postOrder(nums.root); // 3 22 16 37 99 45 23
