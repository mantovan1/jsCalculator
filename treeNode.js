class TreeNode {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    addLeft(TreeNode) {
        this.left = TreeNode;
    }

    addRight(TreeNode) {
        this.right = TreeNode;
    }
}

module.exports = TreeNode;