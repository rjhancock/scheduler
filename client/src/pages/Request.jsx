import TextField from '@material-ui/core/TextField';

const Request = () => {
	const today = new Date().toISOString().slice(0, 10);

	return (
		<form>
			<TextField label="Title" />
			<TextField label="Description" multiline="true" rows={5} />
			<TextField type="date" defaultValue={today} />
		</form>
	);
};

export default Request;
