import React from 'react';
import { shallow } from 'enzyme';
import ProductsOverview from './../components/product/ProductsOverview';
import { cleanup } from '@testing-library/react';
import axios from 'axios';

afterEach(cleanup)
jest.mock('axios');


describe('Product Overview', () => {
	it('should render correctly in "debug" mode', () => {
		const component = shallow(<ProductsOverview debug />);

		expect(component).toMatchSnapshot();
	});
});
