const remake1 = require('../../../bloco7/7_3/exercicio1')
const remake2 = require('../../../bloco7/7_3/exercicio2')
const remake3 = require('../../../bloco7/7_3/exercicio3')
const remake4 = require('../../../bloco7/7_3/exercicio4')
const remake5 = require('../../../bloco7/7_3/exercicio5')
const remake6 = require('../../../bloco7/7_3/exercicio6')
const remake7 = require('../../../bloco7/7_3/exercicio7')
const remake8 = require('../../../bloco7/7_3/exercicio8')

describe('Exercises 1 of block 7_3', () => {
    test('Sum of parameters', () => {
        expect(remake1(1, 2)).toBe(3);
        expect(remake1(3, 2)).toBe(5);
        expect(remake1(10, 4)).toBe(14);
    });
});

describe('Exercises 2 of block 7_3', () => {
    test('which position of index', () => {
        expect(remake2([1, 2, 3, 4], 3)).toBe(2);
    });
});

describe('Exercises 3 of block 7_3', () => {
    test('Sum of all array indexes', () => {
        expect(remake3([1, 2, 3, 4])).toBe(10);
        expect(remake3([1, -2, -3, -4])).toBe(-8);
    });
});

describe('Exercises 4 of block 7_3', () => {
    test('Remove number from array', () => {
        expect(remake4([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
        expect(remake4([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Exercises 5 of block 7_3', () => {
    test('Remove number from array', () => {
        expect(remake5([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
        expect(remake5([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Exercises 6 of block 7_3', () => {
    test('Remove number from array', () => {
        expect(remake6(15)).toEqual("fizzbuzz");
        expect(remake6(9)).toEqual('fizz');
        expect(remake6(50)).toEqual('buzz');
        expect(remake6(7)).toEqual(7);
        expect(remake6('olá')).toEqual(false);
    });
});
