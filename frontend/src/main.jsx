import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'rsuite/dist/rsuite.min.css';
import './index.css';
import AuthContextProvider from './providers/Auth/index.jsx';
import { CustomProvider } from 'rsuite';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CustomProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</CustomProvider>
	</React.StrictMode>
);
