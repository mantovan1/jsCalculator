const TreeNode = require('./treeNode.js');
const evaluate = require('./evaluate.js');

function resolve(tokens) {
    while(tokens.indexOf('(') != -1) {
        let index = tokens.indexOf("(");
        for(let i = index+1; i < tokens.length; i++) {
            if(tokens[i] == '(') {
                index = i;
            }
            if(tokens[i] == ')') {
                const expr = tokens.slice(index+1, i);
                const sol = resolveOperations(expr);
                tokens[index] = sol;
                tokens.splice(index+1, i-index);
                break;
            }
        }
    }

    return resolveOperations(tokens);
} 

function resolveOperations(tokens) {
    while(tokens.indexOf('*') != -1) {
        let index = tokens.indexOf('*');
        let left = new TreeNode(parseInt(tokens[index -1]));
        let right = new TreeNode(parseInt(tokens[index +1]));
        let node = new TreeNode('*', left, right);
        tokens[index-1] = evaluate(node);
        tokens.splice(index, 2);
    }
    
    while(tokens.indexOf('/') != -1) {
        let index = tokens.indexOf('/');
        let left = new TreeNode(parseInt(tokens[index -1]));
        let right = new TreeNode(parseInt(tokens[index +1]));
        let node = new TreeNode('/', left, right);
        tokens[index-1] = evaluate(node);
        tokens.splice(index, 2);
    }

    while(tokens.indexOf('+') != -1) {
        let index = tokens.indexOf('+');
        let left = new TreeNode(parseInt(tokens[index -1]));
        let right = new TreeNode(parseInt(tokens[index +1]));
        let node = new TreeNode('+', left, right);
        tokens[index-1] = evaluate(node);
        tokens.splice(index, 2);
    }
    
    while(tokens.indexOf('-') != -1) {
        let index = tokens.indexOf('-');
        let left = new TreeNode(parseInt(tokens[index -1]));
        let right = new TreeNode(parseInt(tokens[index +1]));
        let node = new TreeNode('-', left, right);
        tokens[index-1] = evaluate(node);
        tokens.splice(index, 2);
    }

    return tokens[0];
}

module.exports = {resolve}