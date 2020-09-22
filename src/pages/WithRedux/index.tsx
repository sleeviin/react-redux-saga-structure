import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import TextFieldWrap from '../../components/TextFieldWrap';

export interface WithReduxProps {}

const WithRedux: React.FC<WithReduxProps> = () => {
	const [items, setItems] = useState<any>({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setItems((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<Container maxWidth='sm'>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography>With Redux Fix</Typography>
				</Grid>
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>
						<Grid container spacing={2}>
							<TextFieldWrap name='first' value={items.first} onChange={handleChange} />
							<TextFieldWrap name='first2' value={items.first2} onChange={handleChange} />
							<TextFieldWrap name='first3' value={items.first3} onChange={handleChange} />
							<TextFieldWrap name='first4' value={items.first4} onChange={handleChange} />
							<TextFieldWrap name='first5' value={items.first5} onChange={handleChange} />
							<TextFieldWrap name='first6' value={items.first6} onChange={handleChange} />
							<TextFieldWrap name='first7' value={items.first7} onChange={handleChange} />
							<TextFieldWrap name='first8' value={items.first8} onChange={handleChange} />
							<TextFieldWrap name='first9' value={items.first9} onChange={handleChange} />
							<TextFieldWrap name='first10' value={items.first10} onChange={handleChange} />
							<TextFieldWrap name='second' value={items.second} onChange={handleChange} />
							<TextFieldWrap name='second2' value={items.second2} onChange={handleChange} />
							<TextFieldWrap name='second3' value={items.second3} onChange={handleChange} />
							<TextFieldWrap name='second4' value={items.second4} onChange={handleChange} />
							<TextFieldWrap name='second5' value={items.second5} onChange={handleChange} />
							<TextFieldWrap name='second6' value={items.second6} onChange={handleChange} />
							<TextFieldWrap name='second7' value={items.second7} onChange={handleChange} />
							<TextFieldWrap name='second8' value={items.second8} onChange={handleChange} />
							<TextFieldWrap name='second9' value={items.second9} onChange={handleChange} />
							<TextFieldWrap name='second10' value={items.second10} onChange={handleChange} />
							<TextFieldWrap name='third' value={items.third} onChange={handleChange} />
							<TextFieldWrap name='third2' value={items.third2} onChange={handleChange} />
							<TextFieldWrap name='third3' value={items.third3} onChange={handleChange} />
							<TextFieldWrap name='third4' value={items.third4} onChange={handleChange} />
							<TextFieldWrap name='third5' value={items.third5} onChange={handleChange} />
							<TextFieldWrap name='third6' value={items.third6} onChange={handleChange} />
							<TextFieldWrap name='third7' value={items.third7} onChange={handleChange} />
							<TextFieldWrap name='third8' value={items.third8} onChange={handleChange} />
							<TextFieldWrap name='third9' value={items.third9} onChange={handleChange} />
							<TextFieldWrap name='third10' value={items.third10} onChange={handleChange} />
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default WithRedux;
