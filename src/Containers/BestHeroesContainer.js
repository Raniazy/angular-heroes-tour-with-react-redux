import { connect } from 'react-redux';
import BestHeroes from '../BestHeroes/BestHeroes';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}
export default connect(mapStateToProps)(BestHeroes);
