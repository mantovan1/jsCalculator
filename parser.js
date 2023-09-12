function parser(expr) {
    const tokens = [];
    const currentNum = [];
    for (const char of expr) {
        if (!isNaN(parseInt(char))) {
          currentNum.push(char);
        } else {
          if (currentNum.length > 0) {
            tokens.push(currentNum.join(''));
            currentNum.length = 0; // Limpa o array
          }
          tokens.push(char);
        }
    }
    
    if (currentNum.length > 0) {
        tokens.push(currentNum.join(''));
    }
    
    return tokens;
}

module.exports = parser;