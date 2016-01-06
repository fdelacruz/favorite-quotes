import React from 'react';
import TesUtils from 'react-addons-test-utils';
import expect from 'expect';
import Icon from './Icon';

describe('Icon', () => {
  
  it('should render the icon', () => {
    const renderer = TesUtils.createRenderer();
    renderer.render(<Icon name='facebook' />);
    const actual = renderer.getRenderOutput().props.className.includes('facebook');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
