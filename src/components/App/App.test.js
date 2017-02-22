import React from 'react';
import { shallow, render } from 'enzyme';
import h from 'react-hyperscript';
import App from './App';

describe('App Component', () => {
    it('should download cakes data correctly', () => {
        const wrapper = render(
            h(App, { cakesDataURL: 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json' })
        );
        expect(
	        wrapper.find('CakeList')
        ).toBeTruthy()
    });
});
