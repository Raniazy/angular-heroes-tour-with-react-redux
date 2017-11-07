import React from 'react';
import Proptypes from 'prop-types';

import Hero from '../Hero/Hero';
import BestHeroesClass from './BestHeroes.css';

function displayHero(hero) {
  return <Hero hero={hero} />;
}

function BestHeroes({ heroes }) {
  const bestHeroes = [];
  bestHeroes.push(heroes[0]);
  bestHeroes.push(heroes[1]);
  bestHeroes.push(heroes[2]);
  return (
    <div>
      <h3 className={BestHeroesClass.h3}>Best Of Heroes</h3>
      <div className={BestHeroesClass.container}>
        {bestHeroes.map(displayHero)}
      </div>
    </div>
  );
}

export default BestHeroes;

BestHeroes.propTypes = {
  heroes: Proptypes.arrayOf().isRequired,
};

