import { useState, useEffect } from 'react';
import { getCharacters, getCharacter } from '../services/rickAndMorty';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters().then(chars => {
      setCharacters(chars);
      setLoading(false);
    });
  }, []);

  return { characters, loading };
};

const useCharacter = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {

  });

  return { character, loading };
};
