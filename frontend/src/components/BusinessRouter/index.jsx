import { Route, Navigate, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';

const BusinessRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<div><Outlet/></div>}>
                <Route path='inicio' element={<div>where to upload or visualize dashboards</div>}/>
                <Route path='carga' element={<div>where u upload data to fill dashboards</div>}/>
                <Route path='historial/:dashboardId' element={<div>each dashboard should appear</div>}/>
                <Route path='cuenta' element={<div>where there is account info</div>}>
                    <Route path='cambiar-contraseña' element={<div>where you change your password</div>}/>
                </Route>
                <Route path='login' element={<div>log in page</div>}/>
                <Route path='recuperar-contraseña' element={<div>recover password page</div>}>
                    <Route path=':token' element={<div>recover password page</div>}/>
                </Route>
                <Route path='/' element={<Navigate to='inicio'/>}/>
            </Route>
            <Route path='*' element={<div>error 404 page</div>}/>
        </>
    )
)

export default BusinessRouter;