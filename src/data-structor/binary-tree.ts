class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(root: TreeNode<T>, node: TreeNode<T>) {
    if (node.value <= root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
}
