import { Link, withRouter } from 'react-router-dom';

const Navigation = () => {
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
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navigation);
