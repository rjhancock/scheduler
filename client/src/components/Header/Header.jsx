import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_COLUMN } from '../../../features/columns/columnsSlice';
import { RENAME } from '../../../features/title/titleSlice';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ClearIcon from '@material-ui/icons/Clear';

import TextField from '@material-ui/core/TextField';

import ActionList from '../ActionList';

const Header = () => {
	const title = useSelector((state) => state.title);
	const dispatch = useDispatch();

	const [state, setState] = useState({
		renaming: false,
		localTitle: title,
	});

	const rename = (newTitle) =>
		setState({
			...state,
			localTitle: newTitle,
		});

	if (state.renaming) {
		return (
			<>
				<TextField
					variant="outlined"
					label="Board Name"
					defaultValue={title}
					onChange={(e) => rename(e.target.value)}
				/>
				<ActionList>
					<IconButton
						aria-label="save"
						onClick={() => {
							dispatch(RENAME(state.localTitle));
							setState({
								...state,
								renaming: false,
							});
						}}
					>
						<SaveAltIcon />
					</IconButton>
					<IconButton
						aria-label="cancel"
						onClick={() =>
							setState({
								localTitle: title,
								renaming: false,
							})
						}
					>
						<ClearIcon />
					</IconButton>
				</ActionList>
			</>
		);
	}
	return (
		<>
			<h2>{title}</h2>
			<ActionList>
				<IconButton
					aria-label="edit"
					onClick={() =>
						setState({
							...state,
							renaming: true,
						})
					}
				>
					<EditIcon />
				</IconButton>
				<IconButton aria-label="add" onClick={() => dispatch(ADD_COLUMN())}>
					<AddIcon />
				</IconButton>
			</ActionList>
		</>
	);
};

export default Header;
