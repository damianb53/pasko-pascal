import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import App from './App';

test.skip('renders without error', () => {
    const App = require('./App');
    const component = renderer.create(<App></App>);
    // expect(component);
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
