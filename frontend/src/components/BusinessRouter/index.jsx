import { Routes, Route, Navigate } from 'react-router-dom';

import ErrorPage from '../../pages/Error';
const BusinessRouter = () => {
    return (
        <Routes>
            <Route path='dashboard' element={<div>where I should look to upload or visualize dashboards</div>}>
                <Route path=':dashboardId' element={<div>where one dashboard should appear</div>}/>
                <Route path='carga' element={<div>where I should upload data to fill dashboards</div>}/>
            </Route>

            <Route path='cuenta'>
                <Route path='login' element={<div>log in</div>}/>
                <Route path='recuperar' element={<div>recover password</div>}/>
            </Route>
            <Route path='/' element={<Navigate to='dashboard'/>}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    )
}
export default BusinessRouter;