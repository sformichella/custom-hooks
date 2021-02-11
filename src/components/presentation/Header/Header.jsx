import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../state/themeContext';

export default function Header({ title }) {

  const { toggleTheme } = useTheme();

  return (
    <div>
      <h1>{title}</h1>
      <a href="/">Home</a>
      <input type="checkbox" onChange={toggleTheme} />
    </div>
  );

}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
