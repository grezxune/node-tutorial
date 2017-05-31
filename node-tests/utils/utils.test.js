const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var val1 = 33;
            var val2 = 12;
            var expected = val1 + val2;
            var result = utils.add(val1, val2);

            expect(result)
            .toBe(expected,`Expected ${expected}, but got ${result}`)
            .toBeA('number', `${result} should be a number`);
        });
    });

    it('should square the number', () => {
        var val1 = 33;
        var expected = val1 * val1;
        var result = utils.square(val1);

        expect(result)
        .toBe(expected,`Expected ${expected}, but got ${result}`)
        .toBeA('number', `${result} should be a number`);
    });

    it('should be (objects)', () => {
        var obj = {name: 'Tommy'};
        expect(obj).toBe(obj);
    });

    it('should be equal (objects)', () => {
        expect({name: 'Tommy'}).toEqual({name: 'Tommy'});
    });

    it('should include', () => {
        expect([2, 3, 4]).toInclude(3);
    });

    it('should include property', () => {
        expect({
            name: 'Tommy',
            age: 25
        }).toInclude({
            age: 25
        });
    });

    it('should verify first and last names are set', () => {
        var user = {
            age: 25,
            location: 'Marshfield, WI'
        };
        utils.setName(user, 'Tommy Treb');

        expect(user).toBeA('object').toInclude({
            firstName: 'Tommy',
            lastName: 'Treb'
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(5, 7, (sum) => {
            expect(sum).toBe(12).toBeA('number');
            done();
        });
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (square) => {
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });
});
