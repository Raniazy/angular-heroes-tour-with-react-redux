import React from 'react';
import { connect } from 'react-redux';

import InputClass from './Input.css';
import { addHero } from '../Action/Heroes';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.actionToTaKe = this.actionToTaKe.bind(this);
  }

  actionToTaKe(event) {
    if (event.key === 'Enter') {
      this.props.dispatch(addHero({ name: event.target.value }, this.props.heroes));
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className={InputClass.container} style={{ marginRight: `${3}em` }}> Hero name
        <input className={InputClass.input} type="text" onKeyPress={this.actionToTaKe} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Input);

