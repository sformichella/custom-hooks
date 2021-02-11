import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from './Details';

describe('Details component', () => {
  afterEach(() => cleanup());
  it('renders Details', () => {
    const { asFragment } = render(<Details
      name="Rick Sanchez"
      image="rick-sanchez.com"
      status="alive"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
