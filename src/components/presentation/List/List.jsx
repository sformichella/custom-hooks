import React from 'react';
import PropTypes from 'prop-types';
import CharPreview from '../CharPreview/CharPreview';

export default function List({ characters }) {
  return (
    characters.map(char => {
      return <CharPreview 
        key={char.id}
        {...char}
      />;
    })
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }))
};
