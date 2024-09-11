import { RouterProvider } from 'react-router-dom';
import BusinessRouter from './router';

import { CustomProvider } from 'rsuite';
import SessionContextProvider from './providers/Session';

function App() {
	return (
		<CustomProvider>
			<SessionContextProvider>
					<RouterProvider router={BusinessRouter} />
			</SessionContextProvider>
		</CustomProvider>
	);
}

export default App;
