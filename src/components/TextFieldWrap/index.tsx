import { Grid, TextField } from '@material-ui/core';
import * as React from 'react';

export interface TextFieldWrapProps {}

const TextFieldWrap: React.SFC<TextFieldWrapProps> = ({ onChange, name, value }) => {
	console.log('render', name);
	return (
		<Grid item xs={6}>
			<TextField variant='outlined' fullWidth size='small' name={name} onChange={onChange} value={value || ''} />
		</Grid>
	);
};

export default TextFieldWrap;
