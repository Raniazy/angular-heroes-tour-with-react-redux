import React from 'react';
import Proptypes from 'prop-types';
import HeroClass from './Hero.css';

function Hero({ hero }) {
  return (
    <h4 className={HeroClass.module} style={{ marginRight: `${1}em` }}>{hero.name}</h4>
  );
}

export default Hero;

Hero.propTypes = {
  hero: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
  }).isRequired,
};
