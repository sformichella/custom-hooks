import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../state/themeContext';

export default function Header({ title }) {

  const { toggleTheme } = useTheme();

  return (
    <div>
      <h1>{title}</h1>
      <a href="/">Home</a>
      <label htmlFor="theme-checkbox">Light/Dark Theme: </label>
      <input id="theme-checkbox" type="checkbox" onChange={toggleTheme} />
    </div>
  );

}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
