import { useState, useEffect } from 'react';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {

  });

  return { characters, loading };
};

const useCharacter = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {

  });

  return { character, loading };
};
