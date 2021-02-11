import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <a href="/">Home</a>
    </div>
  );

}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
