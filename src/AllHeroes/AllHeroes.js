import React from 'react';
import { connect } from 'react-redux';
import HeroesContainer from '../Containers/HeroesContainer';
import Input from '../Input/Input';

function AllHeroes() {
  return (
    <div>
      <Input />
      <HeroesContainer />
    </div>
  );
}

export default connect()(AllHeroes);
