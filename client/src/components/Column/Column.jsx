import { useState, useContext } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { Context } from '../../context/Context';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Ticket from '../ticket/Ticket';
import ActionList from '../actionList/ActionList';

import './Column.css';

const Column = ({ column, index, draggable, deleteColumn, renameColumn }) => {
	const [renaming, setRenaming] = useState(false);
	const [name, setName] = useState(column.title);

	return (
		<Draggable
			draggableId={column.id}
			index={index}
			// Only allow dragging if the user is a creator
			isDragDisabled={!draggable}
		>
			{(provided) => (
				<div
					className="col"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<h3
						{...provided.dragHandleProps}
						onDoubleClick={() => setRenaming(true)}
					>
						{renaming ? (
							<input
								type="text"
								autoFocus
								onFocus={(e) => e.target.select()}
								onChange={(e) => setName(e.target.value)}
								onBlur={() => {
									setRenaming(false);
									if (name) renameColumn(column.id, name);
								}}
								defaultValue={column.title}
							/>
						) : (
							column.title
						)}
					</h3>
					<ActionList>
						<IconButton
							color="inherit"
							aria-label="delete"
							onClick={() => deleteColumn(column.id)}
						>
							<DeleteIcon />
						</IconButton>
					</ActionList>
					<Droppable droppableId={column.id} type="ticket">
						{(provided, snapshot) => (
							<div
								className={`ticket-list${
									snapshot.draggingOverWith ? ' drop' : ''
								}`}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{column.tickets.map((ticket, index) => {
									return (
										<Ticket
											key={ticket.id}
											ticket={ticket}
											index={index}
											draggable={draggable}
										/>
									);
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
};

export default Column;
