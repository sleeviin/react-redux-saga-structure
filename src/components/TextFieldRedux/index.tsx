import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { setValue } from '../../store/actions/test';
import ApplicationState from '../../store/types';

const TextFieldRedux: React.FC<any> = ({ name, test, setValue }) => {
	console.log('render', name, test[name], !!test[name]);

	const handleChange = (event) => {
		const { value } = event.target;
		setValue(value);
	};
	return (
		<Grid item xs={6}>
			<TextField variant='outlined' fullWidth size='small' name={name} onChange={handleChange} />
		</Grid>
	);
};

const mapStateToProps = ({ test }: ApplicationState) => ({
	test,
});

const mapDispatchToProps = { setValue };
export default connect(mapStateToProps, mapDispatchToProps)(TextFieldRedux);
