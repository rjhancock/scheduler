import { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navigation = () => {
	const { user } = useContext(Context);
	return (
		<nav>
			<Link to="/">React Multi-Page Website</Link>

			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cypuss">Cypuss</Link>
					</li>
					{!user ? (
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					) : (
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navigation);
