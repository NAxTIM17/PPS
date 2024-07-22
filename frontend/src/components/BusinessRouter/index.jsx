import { Routes, Route, Navigate } from 'react-router-dom';

import ErrorPage from '../../pages/Error';
const BusinessRouter = () => {
    return (
        <Routes>
            <Route path='dashboard' element={<div>where to upload or visualize dashboards</div>}>
                <Route path=':dashboardId' element={<div>each dashboard should appear</div>}/>
                <Route path='carga' element={<div>where u upload data to fill dashboards</div>}/>
            </Route>

            <Route path='cuenta'>
                <Route path='login' element={<div>log in page</div>}/>
                <Route path='recuperar' element={<div>recover password page</div>}/>
            </Route>
            <Route path='/' element={<Navigate to='dashboard'/>}/>
            <Route path='*' element={<div>404 page</div>}/>
        </Routes>
    )
}
export default BusinessRouter;