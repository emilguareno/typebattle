import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateBattle from 'modals/CreateBattle/CreateBattle';

class BattleList extends Component {
  render() {
    return (
      <div>
        <h1>Your Battles</h1>
        <CreateBattle />
        <ul className="battle-list">
          {this.props.battles.map((battle) => {
            return <li key={battle.id}>
              <Link to={`/battles/${battle.id}`}>{battle.name}</Link></li>
          })}
        </ul>
      </div>
    );
  }
}

BattleList.propTypes = {
    battles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        name: PropTypes.string
    })).isRequired
}

export default BattleList;