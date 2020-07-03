import React from 'react';
import { shallow } from 'enzyme';
import AddProduct from './../components/product/AddProduct';
import {cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('Add product page', () => {
	const container = shallow(<AddProduct />);

	it('should render correctly in "debug" mode', () => {
		expect(container).toMatchSnapshot();
	});

	it('should match the snapshot', () => {
		expect(container.html()).toMatchSnapshot();
	});

	it('should have a name field', () => {
		expect(container.find('input[name="name"]').length).toEqual(1);
	});

	it('should have a description field', () => {
		expect(container.find('textarea[name="description"]').length).toEqual(1);
	});

	it('should have a price field', () => {
		expect(container.find('input[name="price"]').length).toEqual(1);
	});

	it('should have a submit button', () => {
		expect(container.find('button[type="submit"]').length).toEqual(1);
	});
});