import React from 'react';
import Proptypes from 'prop-types';
import HeroClass from './HeroDetails.css';

function HeroDetails({ hero }) {
  return (
    <div className={HeroClass.heroesli}>
      <span className={HeroClass.badge}>{hero.id}</span>
      <span>{hero.name}</span>
    </div>
  );
}

export default HeroDetails;

HeroDetails.propTypes = {
  hero: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
  }).isRequired,
};
