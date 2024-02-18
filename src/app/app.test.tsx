import {describe, expect, test} from '@jest/globals';
import { checkIfNumberValid } from './utils';

describe('checkIfNumberValid', () => {
    test('returns true for valid numbers', () => {
        expect(checkIfNumberValid('1010', 2)).toBe(true);
        expect(checkIfNumberValid('123', 10)).toBe(true);
        expect(checkIfNumberValid('abc', 16)).toBe(true);
    });

    test('returns false for invalid numbers', () => {
        expect(checkIfNumberValid('102', 2)).toBe(false);
        expect(checkIfNumberValid('123', 2)).toBe(false);
        expect(checkIfNumberValid('g', 16)).toBe(false);
    });
});