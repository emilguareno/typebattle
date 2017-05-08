import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from 'components/shared/Loader';

const BattleListComponent = (props) => (
    props.battles ? 
    <ul className="battle-list">
        {props.battles.map((battle) => {
          return <li key={battle.id}>
            <Link to={`/battles/${battle.id}`}>{battle.name}</Link></li>
        })}
    </ul>
    : 
    <Loader />
)

BattleListComponent.propTypes = {
    battles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        name: PropTypes.string
    })).isRequired
}

export default BattleListComponent;