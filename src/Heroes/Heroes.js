import React from 'react';
import Proptypes from 'prop-types';

import HeroDetails from '../HeroDetails/HeroDetails';
import HeroesClass from './Heroes.css';

function displayHero(hero) {
  return <HeroDetails hero={hero} />;
}

export default function Heroes({ heroes }) {
  return (
    <div className={HeroesClass.container}>
      {heroes.map(displayHero)}
    </div>
  );
}

HeroDetails.propTypes = {
  heroes: Proptypes.arrayOf().isRequired,
};
