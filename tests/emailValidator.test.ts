import { isValidEmail } from '../src/emailValidator';

describe('isValidEmail', () => {
    test('Success for a valid email', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('Fail if theres is no @', () => {
        expect(isValidEmail('testexample.com')).toBe(false);
    });

    test('Fail if there is no point in the domain', () => {
        expect(isValidEmail('test@example')).toBe(false);
    });

    test('Fail if the point is the last character in the domain', () => {
        expect(isValidEmail('test@example.')).toBe(false);
    });

    test('Fail if there is a space', () => {
        expect(isValidEmail('test @example.com')).toBe(false);
    });

    test('Fail if there is no text before @', () => {
        expect(isValidEmail('@example.com')).toBe(false);
    });

    test('Fail is there is no text after @', () => {
        expect(isValidEmail('test@')).toBe(false);
    });

    test('Success for sub-domain', () => {
        expect('cindy.tran@student.vinci.be');
    });
});