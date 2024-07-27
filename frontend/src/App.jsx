import { RouterProvider } from 'react-router-dom';
import BusinessRouter from './components/BusinessRouter';

function App() {
    return (
        <div className='min-h-screen grid place-items-center'>
            <RouterProvider router={BusinessRouter}/>
        </div>
    );
}

export default App;
