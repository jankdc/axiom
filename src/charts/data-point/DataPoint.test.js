import React from 'react';
import renderer from 'react-test-renderer';
import DataPoint from './DataPoint';
import productColors from '../../materials/colors/productColors';

const getComponent = (props = {}) =>
  renderer.create(
    <DataPoint color="tiny-clanger" { ...props } />
  );

describe('DataPoint', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with radius', () => {
    const component = getComponent({ r: 10 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    productColors.forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
