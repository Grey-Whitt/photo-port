import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact />);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('test for Contact me in h1 tag and submit buttun', () => {
    it('inserts emoji into the h2', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
    })
})