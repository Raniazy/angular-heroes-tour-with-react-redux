import React from 'react';
import Proptypes from 'prop-types';

import HeroDetails from '../HeroDetails/HeroDetails';
import HeroesClass from './Heroes.css';

function displayHero(hero) {
  return <HeroDetails hero={hero} />;
}

function Heroes({ heroes }) {
  return (
    <div className={HeroesClass.container}>
      {heroes.map(displayHero)}
    </div>
  );
}

export default Heroes;

HeroDetails.propTypes = {
  heroes: Proptypes.arrayOf().isRequired,
};
