import React from 'react';
import PropTypes from 'prop-types';

export default function CharPreview({ name, image }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={image}/>
    </>
  );
}

CharPreview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
