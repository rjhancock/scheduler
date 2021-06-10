import './ActionList.css';

const ActionList = ({ children, collapse }) => {
	const myChildren = [].concat(children);
	return (
		<div className="actions">
			{myChildren?.map((child) => ({
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
