import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Home />, div);
});

it('renders welcome message', () => {
	const { getByText } = render(<Home />);
	expect(getByText('Welcome to Save The Bzz!')).toBeInTheDocument();
});
