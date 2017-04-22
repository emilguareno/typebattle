import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

function renderTextField({ input, label, meta: { touched, error }, ...custom }){
	return (
		<Input 
			placeholder={label}
			error={touched && error}
			size='large'
			fluid
			{...input}
			{...custom}
		/>
	)
}

function renderUsersDropdown({ input, label, meta: { touched, error }, children, ...custom }){
	return (
		<Dropdown 
			placeholder={label}
			fluid 
			multiple 
			search 
			selection
			onChange={(event, data) => input.onChange(data)}
			{...custom}
		/>
	)
}

function CreateBattleForm({ handleSubmit, isLoading, onSearchChange, results, onSelect}){
	return (
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
}


export default reduxForm({
    form: 'createBattle' // a unique name for this form
})(CreateBattleForm);;