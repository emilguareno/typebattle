import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BattleList extends Component {
  render() {
    return (
      <div>
        <h1>Your Battles</h1>
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

export default BattleList;