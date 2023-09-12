const { resolve } = require('./build');
const parser = require('./parser.js');

test('soma básica', () => {
    const expression = '2+2';

    const tokenized = parser(expression);
    const result = resolve(tokenized);
    console.log(result)
    expect(result).toBe(4);
});

test('4 operações juntas', () => {
    const expression = '2+2*3-6/3';

    const tokenized = parser(expression);
    const result = resolve(tokenized);
    expect(result).toBe(6);
});

test('expressão com parênteses', () => {
    const expression = '(4-2)*5';

    const tokenized = parser(expression);
    const result = resolve(tokenized);
    expect(result).toBe(10);
});

test('expressão com 2 parênteses', () => {
    const expression = '(4-2)*(3-5)';

    const tokenized = parser(expression);
    const result = resolve(tokenized);
    expect(result).toBe(-4);
});

test('expressão com parênteses sobrepostos', () => {
    const expression = '(4-(2*(3-5)))*5';

    const tokenized = parser(expression);
    const result = resolve(tokenized);
    expect(result).toBe(40);
});