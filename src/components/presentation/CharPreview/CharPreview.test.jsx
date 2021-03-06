import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharPreview from './CharPreview';

describe('CharPreview component', () => {
  afterEach(() => cleanup());
  it('renders CharPreview', () => {
    const { asFragment } = render(<CharPreview
      id={1}
      name="Rick Sanchez"
      image="rick-sanchez.com"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
