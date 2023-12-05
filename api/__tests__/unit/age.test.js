const PatientMiddleware = require('../../src/middlewares/PatientMiddleware');

describe('Verify age', () => {
    it('should verify age of patient is valid, return false', () => {
        const result = PatientMiddleware.verifyAge(-10);

        expect(result).toBe(false);
    });
    it('should return false to age > 100', () => {
        const result = PatientMiddleware.verifyAge(110);

        expect(result).toBe(false);
    });
    it('should return true to age valid', () => {
        const result = PatientMiddleware.verifyAge(20);

        expect(result).toBe(true);
    });
});