import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import { toArray } from 'lodash';
import { connect } from 'react-redux';
import BattleListComponent from './BattleListComponent';

const firebaseWrapper = firebaseConnect()(BattleListComponent);

export default connect(({ firebase }) => {
    return {
        battles: toArray(pathToJS(firebase, 'profile/battles'))
    }
})(firebaseWrapper)
