import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
