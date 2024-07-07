import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


import ProvidersWrapper from './providers/ProvidersWrapper/index.jsx';

import 'rsuite/dist/rsuite.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProvidersWrapper>
            <App />
        </ProvidersWrapper>
    </React.StrictMode>
);
