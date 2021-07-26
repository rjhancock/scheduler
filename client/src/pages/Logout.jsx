import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../context/Context';
import { Logout as ActionLogout } from '../context/Actions';

const Logout = () => {
	const { _, dispatch } = useContext(Context);

	dispatch(ActionLogout());

	return <Redirect to="/login" />;
};

export default Logout;
