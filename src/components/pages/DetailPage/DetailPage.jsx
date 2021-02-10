import React from 'react';
import Header from '../../presentation/Header/Header';
import Details from '../../presentation/Details/Details';

export default function DetailPage() {
  return (
    <>
      <Header />
      <Details {...character}/>
    </>
  );
}
