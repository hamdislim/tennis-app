import { isNumber } from '../../src/helpers';

describe('test isNumber function', () => {
    it('should return true for isNumber(10)', () => {
        expect(isNumber(10)).toBe(true);
    });
    it('should return false for isNumber(a)', () => {
        expect(isNumber('a')).toBe(false);
    });
});
