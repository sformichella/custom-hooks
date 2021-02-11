import React from 'react';
import PropTypes from 'prop-types';

export default function CharPreview({ id, name, image }) {
  return (
    <>
      <a href={`/${id}`}>{name}</a>
      <img src={image}/>
    </>
  );
}

CharPreview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
