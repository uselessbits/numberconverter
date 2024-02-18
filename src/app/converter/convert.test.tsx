import { render, fireEvent } from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
import Converter from './page';

describe('Converter', () => {
    test('converts numbers correctly', () => {
        const { getByTestId } = render(<Converter />);
        
        // Test conversion from binary to decimal
        fireEvent.change(getByTestId('number-input'), { target: { value: '1010' } });
        fireEvent.change(getByTestId('source-base-input'), { target: { value: '2' } });
        fireEvent.change(getByTestId('destination-base-input'), { target: { value: '10' } });
        fireEvent.click(getByTestId('submit-button'));
        expect(getByTestId('result')).toEqual('10');

        // Test conversion from decimal to hexadecimal
        fireEvent.change(getByTestId('number-input'), { target: { value: '255' } });
        fireEvent.change(getByTestId('source-base-input'), { target: { value: '10' } });
        fireEvent.change(getByTestId('target-base-input'), { target: { value: '16' } });
        fireEvent.click(getByTestId('submit-button'));
        expect(getByTestId('result')).toEqual('ff');

       
    });
});