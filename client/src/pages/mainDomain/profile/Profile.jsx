import { useParams } from 'react-router';

const Profile = () => {
	const { username } = useParams();

	return <div>{`Welcome to ${username}'s profile`}</div>;
};

export default Profile;
