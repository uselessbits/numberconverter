import { render, fireEvent} from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
import Calculator from './page';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {



test('performs addition correctly', () => {
    const { getByTestId } = render(<Calculator />);
    fireEvent.change(getByTestId('first-input'), { target: { value: '1010' } });
    fireEvent.change(getByTestId('second-input'), { target: { value: '1010' } });
    fireEvent.change(getByTestId('base-input'), { target: { value: '2' } });
    fireEvent.click(getByTestId('add-button'));
    expect(getByTestId('result')).toEqual('10100');
});

  test('performs subtraction correctly', () => {
    const { getByTestId } = render(<Calculator />);
    fireEvent.change(getByTestId('first-input'), { target: { value: '1010' } });
    fireEvent.change(getByTestId('second-input'), { target: { value: '101' } });
    fireEvent.change(getByTestId('base-input'), { target: { value: '2' } });
    fireEvent.click(getByTestId('sub-button'));
    expect(getByTestId('result')).toEqual('101');
  });

  test('performs multiplication correctly', () => {
    const { getByTestId } = render(<Calculator />);
    fireEvent.change(getByTestId('first-input'), { target: { value: '1010' } });
    fireEvent.change(getByTestId('second-input'), { target: { value: '1' } });
    fireEvent.change(getByTestId('base-input'), { target: { value: '2' } });
    fireEvent.click(getByTestId('mul-button'));
    expect(getByTestId('result')).toEqual('1010');
  });

  test('performs division correctly', () => {
    const { getByTestId } = render(<Calculator />);
    fireEvent.change(getByTestId('first-input'), { target: { value: 'ab' } });
    fireEvent.change(getByTestId('second-input'), { target: { value: '3' } });
    fireEvent.change(getByTestId('base-input'), { target: { value: '16' } });
    fireEvent.click(getByTestId('div-button'));
    expect(getByTestId('result')).toEqual('39');
  });

  
});