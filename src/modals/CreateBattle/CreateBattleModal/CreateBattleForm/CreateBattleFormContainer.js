import CreateBattleFormComponent from './CreateBattleFormComponent';
import { reduxForm } from 'redux-form';

export default reduxForm({
    form: 'createBattle' // a unique name for this form
})(CreateBattleFormComponent);