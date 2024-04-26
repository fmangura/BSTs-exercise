class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;
    while (this) {
      if (val < currNode.val) {
        if (currNode.left === null) {
          currNode.left = newNode;
          return this;
        } else {
          currNode = currNode.left; 
        }
      } else if (val > currNode.val){
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    function nodeTraverse(currNode, valNode) {
      if (currNode.val > valNode.val) {
        if (currNode.left === null) {
          currNode.left = valNode;
          return currNode;
        } else {
          currNode.left = nodeTraverse(currNode.left, valNode);
          return currNode;
        }
      } else if (currNode.val < valNode.val){
        if (currNode.right === null) {
          currNode.right = valNode;
          return currNode;
        } else {
          currNode.right = nodeTraverse(currNode.right, valNode);
          return currNode;
        }
      }
    }

    this.root = nodeTraverse(this.root, newNode);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while(this){
      if (current === null) return undefined;
      if (current.val === val) return current;
      current = current.val > val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this.root;

    if (current === null) return undefined;

    if (current.val === val) return current;

    if (current.val > val) {
      this.root = current.left;
      return this.findRecursively(val);
    } else if (current.val < val) {
      this.root = current.right;
      return this.findRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let answer = [];
    let current = this.root;

    function dfs(node) {
      answer.push(node.val);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }

    dfs(current);
    return answer;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let answer = [];
    let current = this.root;

    function dfs(node) {
      if (node.left) dfs(node.left);
      answer.push(node.val);
      if (node.right) dfs(node.right);
    }

    dfs(current);
    return answer;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let answer = [];
    let current = this.root;

    function dfs(node) {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
      answer.push(node.val);
    }

    dfs(current);
    return answer;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let current = this.root;
    let queue = []
    let answer = [];
    queue.push(current);

    while (queue.length) {
      current = queue.shift()
      answer.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  
    return answer;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
