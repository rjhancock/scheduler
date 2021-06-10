import Navigation from '../Navigation/Navigation';

const NavigationPage = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
};

export default NavigationPage;
