import React from 'react';
import Header from '../../presentation/Header/Header';
import List from '../../presentation/List/List';
import { useCharacters } from '../../../hooks/characters';

export default function Home() {

  const { characters, loading } = useCharacters();

  return (
    <>
      <Header title="Home"/>
      {
        loading ? <p>Loading!</p>
          : <List characters={characters}/>
      }
    </>
  );
}
