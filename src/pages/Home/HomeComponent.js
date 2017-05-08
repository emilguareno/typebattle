import React from 'react';
import BattleList from 'components/BattleList';
import CreateBattle from 'modals/CreateBattle/CreateBattle';

const HomeComponent = (props) => (
	<div>
		<h1>Your Battles</h1>
		<CreateBattle />
		<BattleList />
	</div>
);

export default HomeComponent;