import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import TextFieldRedux from '../../components/TextFieldRedux';

export interface WithReduxProps {}

const WithRedux: React.FC<WithReduxProps> = () => {
	return (
		<Container maxWidth='sm'>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography>User List</Typography>
				</Grid>
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>
						<Grid container spacing={2}>
							<TextFieldRedux name='first' />
							<TextFieldRedux name='first2' />
							<TextFieldRedux name='first3' />
							<TextFieldRedux name='first4' />
							<TextFieldRedux name='first5' />
							<TextFieldRedux name='first6' />
							<TextFieldRedux name='first7' />
							<TextFieldRedux name='first8' />
							<TextFieldRedux name='first9' />
							<TextFieldRedux name='first10' />
							<TextFieldRedux name='second' />
							<TextFieldRedux name='second2' />
							<TextFieldRedux name='second3' />
							<TextFieldRedux name='second4' />
							<TextFieldRedux name='second5' />
							<TextFieldRedux name='second6' />
							<TextFieldRedux name='second7' />
							<TextFieldRedux name='second8' />
							<TextFieldRedux name='second9' />
							<TextFieldRedux name='second10' />
							<TextFieldRedux name='third' />
							<TextFieldRedux name='third2' />
							<TextFieldRedux name='third3' />
							<TextFieldRedux name='third4' />
							<TextFieldRedux name='third5' />
							<TextFieldRedux name='third6' />
							<TextFieldRedux name='third7' />
							<TextFieldRedux name='third8' />
							<TextFieldRedux name='third9' />
							<TextFieldRedux name='third10' />
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default WithRedux;
