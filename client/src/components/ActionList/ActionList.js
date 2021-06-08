import './ActionList.css';

const ActionList = ({ children, collapse }) => {
	return (
		<div className="actions">
			{children?.map((child) => ({
				...child,
				props: {
					...child.props,
					className: `${child.props.className} action-item`,
				},
			}))}
		</div>
	);
};

export default ActionList;
