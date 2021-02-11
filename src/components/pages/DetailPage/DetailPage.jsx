import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentation/Header/Header';
import Details from '../../presentation/Details/Details';
import { useCharacter } from '../../../hooks/characters';

export default function DetailPage({ match }) {

  const { id } = match.params;
  const { character, loading } = useCharacter(id);

  return (
    <>
      <Header title="Details"/>
      {
        loading ? <p>Loading!</p>
          : <Details {...character}/>
      }
    </>
  );
}

DetailPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }))
  }))
};
