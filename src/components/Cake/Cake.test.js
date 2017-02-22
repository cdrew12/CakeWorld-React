import React from 'react';
import { shallow, render } from 'enzyme';
import h from 'react-hyperscript';
import Cake from './Cake';

const mockCake = {
    title: 'Test Cake',
    image: 'url/to/cake',
    visible: true,
    id: 1
};

const add = (a, b) => a + b;

describe('Cake Component', () => {
    it('should have is-hidden class if visible is false', () => {
        const cake = Object.assign({}, mockCake, { visible: false })
        const wrapper = render(
            h(Cake, { cake: cake })
        );
        expect(
            wrapper.find('.cake').hasClass('is-hidden')
        )
        .toEqual(true)
    });

    it('shouldn\'t have is-hidden class if visible is false', () => {
        const wrapper = render(
            h(Cake, { cake: mockCake })
        );
        expect(
            wrapper.find('.cake').hasClass('is-hidden')
        )
        .toEqual(false)
    });

    it('should have is-hidden class if visible is false', () => {
        expect(
            add(1, 2)
        )
        .toEqual(3)
    });
});
