import React from 'react';
import Header from '../../presentation/Header/Header';
import List from '../../presentation/List/List';
import { useCharacters } from '../../../state/characters';
import { useTheme } from '../../../state/themeContext';
import styles from '../../../styles/global.css';

export default function Home() {

  const { characters, loading } = useCharacters();
  const { theme } = useTheme();

  return (
    <div className={`${styles[theme]}`}>
      <Header title="Home"/>
      {
        loading ? <p>Loading!</p>
          : <List characters={characters}/>
      }
    </div>
  );
}
