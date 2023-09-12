function evaluate(root) {
    if(!root) {
        return 0
    }

    if(!root.left && !root.right)
        return parseFloat(root.value)

    l_val = evaluate(root.left);
    r_val = evaluate(root.right);

    if(root.value == '+') {
        return l_val + r_val;
    }

    if(root.value == '-') {
        return l_val - r_val;
    }

    if(root.value == '*') {
        return l_val * r_val;
    }

    if(root.value == '/') {
        return l_val / r_val;
    }
}

module.exports = evaluate;