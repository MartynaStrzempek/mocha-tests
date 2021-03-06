const { unique } = require('../src/utils')
const assert = require('assert')


describe('Unique operator', () => {
    it('should return the collection if there are no repetitions', () => {
        // no arrange
        // act
        const result = unique([1, 2, 3]);
        // assert
        assert.deepStrictEqual(result, [1, 2, 3]);
    });

    it('should remove repetitions', () => {
        assert.deepStrictEqual(unique([1, 2, 3, 3]), [1, 2, 3]);
    });

    it('should return empty collection for empty input', () => {
        assert.deepStrictEqual(unique([]), []);
    });

    it('should remove repetition by attribute', () => {
        const input = [{
            name: "Janek",
            nationality: "PL"
        }, {
            name: "Hans",
            nationality: "DE"
        }, {
            name: "Krysia",
            nationality: "PL"
        }]

        const result = [{
            name: "Janek",
            nationality: "PL"
        }, {
            name: "Hans",
            nationality: "DE"
        }]

        assert.deepStrictEqual(unique(input, 'nationality'), result);
    });
});