let Calculator = require('../src/Calculator')

test('test method add', () => {
    let a = 1;
    let b = 2;
    let expected = 3;

    let cal = new Calculator()
    expect(cal.add(a, b)).toBe(expected)
})
