import React from 'react';
import renderer from 'react-test-renderer';
import { AppBar } from './AppBar';

test('snapshot test', () => {
    const component = renderer.create(<AppBar title="App"></AppBar>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
