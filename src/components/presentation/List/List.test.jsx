import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const characters = [{ 
      id: 1,
      name: 'Rick Sanchez',
      image: 'rick-sanchez.com',
      status: 'Alive'
    }];

    const { asFragment } = render(<List characters={characters}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
