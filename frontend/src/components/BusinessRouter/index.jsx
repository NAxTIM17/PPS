import { Routes, Route, Navigate } from 'react-router-dom';

const BusinessRouter = () => {
    return (
        <Routes>
            <Route path='dashboard' element={<div>where I should look to upload or visualize dashboards</div>}>
                <Route path=':dashboardId' element={<div>where one dashboard should appear</div>}/>
                <Route path='carga' element={<div>where I should upload data to fill dashboards</div>}/>
            </Route>

            <Route path='cuenta'>
                <Route path='login' element={<div>log in page</div>}/>
                <Route path='recuperar' element={<div>recover password page</div>}/>
            </Route>
            <Route path='/' element={<Navigate to='dashboard'/>}/>
            <Route path='*' element={<div>error 404 page</div>}/>
        </Routes>
    )
}
export default BusinessRouter;