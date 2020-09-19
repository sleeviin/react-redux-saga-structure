import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export interface TextFieldReduxProps {}

const TextFieldRedux: React.SFC<TextFieldReduxProps> = ({ onChange, name, value }) => {
	console.log('render', name);
	return (
		<Grid item xs={6}>
			<TextField variant='outlined' fullWidth size='small' name={name} onChange={onChange} value={value || ''} />
		</Grid>
	);
};

export default TextFieldRedux;
