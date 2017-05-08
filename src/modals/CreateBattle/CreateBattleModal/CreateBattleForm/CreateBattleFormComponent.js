import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import { Field } from 'redux-form';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<Input 
		placeholder={label}
		error={touched && error}
		size='large'
		fluid
		{...input}
		{...custom}
	/>
);

const renderUsersDropdown = ({ input, label, meta: { touched, error }, children, ...custom }) => (
	<Dropdown 
		placeholder={label}
		fluid 
		multiple 
		search 
		selection
		onChange={(event, data) => input.onChange(data)}
		{...custom}
	/>
);

const CreateBattleFormComponent = ({ handleSubmit, isLoading, onSearchChange, results, onSelect}) => (
	<form onSubmit={handleSubmit}>
		<Field name='battle_name' component={renderTextField} label='Battle Name' />
		<Field 
			name='opponents' 
			loading={isLoading}
			component={renderUsersDropdown} 
			onChange={onSelect}
			onSearchChange={onSearchChange}
			label='Search for opponents (email)'
			options={results}
		/>
		<Button type='submit'>Create</Button>
	</form>
);

export default CreateBattleFormComponent;