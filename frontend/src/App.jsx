import { RouterProvider } from 'react-router-dom';

import BusinessRouter from './routers/Business';

function App() {
	return <RouterProvider router={BusinessRouter} />;
}

export default App;
