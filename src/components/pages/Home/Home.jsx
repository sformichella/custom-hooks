import React from 'react';
import Header from '../../presentation/Header/Header';
import List from '../../presentation/List/List';

export default function Home() {
  return (
    <>
      <Header />
      <List characters={characters}/>
    </>
  );
}
