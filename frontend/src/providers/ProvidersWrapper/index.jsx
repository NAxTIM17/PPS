import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';

const ProvidersWrapper = ({ children }) => {
	return (
		<CustomProvider>
			<BrowserRouter>{children}</BrowserRouter>
		</CustomProvider>
	);
};

export default ProvidersWrapper;
