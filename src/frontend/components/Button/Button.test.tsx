import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders default button component', () => {
	render(<Button label="Test Button" />);
	expect(screen.getByText(/Test Button/i)).toBeInTheDocument();
});
