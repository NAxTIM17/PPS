import { RouterProvider } from 'react-router-dom';
import PageContainerLayout from './layouts/PageContainer';
import BusinessRouter from './router';

import { CustomProvider } from 'rsuite';
import SessionContextProvider from './providers/Session';

function App() {
	return (
		<CustomProvider>
			<SessionContextProvider>
				<PageContainerLayout>
					<RouterProvider router={BusinessRouter} />
				</PageContainerLayout>
			</SessionContextProvider>
		</CustomProvider>
	);
}

export default App;
