import { connect } from 'react-redux';
import Heroes from '../Heroes/Heroes';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}
export default connect(mapStateToProps)(Heroes);
