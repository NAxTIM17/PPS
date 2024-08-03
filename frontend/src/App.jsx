import { RouterProvider } from 'react-router-dom';
import BusinessRouter from './components/BusinessRouter';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<RouterProvider router={BusinessRouter} />
		</div>
	);
}

export default App;
