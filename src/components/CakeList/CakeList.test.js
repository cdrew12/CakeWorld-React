import React from 'react';
import { shallow, render } from 'enzyme';
import h from 'react-hyperscript';
import CakeList from './CakeList';

const mockCakes = [
    {
        title: 'Test Cake 1',
        image: 'url/to/cake',
        visible: true,
        id: 0
    },
    {
	    title: 'Test Cake 2',
		image: 'url/to/cake2',
        visible: false,
        id: 1
    },
	{
		title: 'Test Cake 2',
		image: 'url/to/cake',
		visible: true,
		id: 2
	},
	{
		title: 'Test Cake 3',
		image: 'url/to/cake',
		visible: true,
		id: 3
	}
];

describe('CakeList Component', () => {
    it('should render correct number of Cake components', () => {
        const wrapper = render(
            h(CakeList, { cakes: mockCakes })
        );

        expect(
	        wrapper.find('.cake').length
        ).toEqual(4)
    });

    it('should have add cake modal open at sstartup', () => {
	    const wrapper = render(
		    h(CakeList, { cakes: mockCakes, isModalOpen: true})
	    );
        expect(
            wrapper.find('.cake-form-edit')
        ).not.toBeFalsy
    });
});
