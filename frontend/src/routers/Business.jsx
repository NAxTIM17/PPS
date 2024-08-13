/*
 * 'page container layout' => elemento que engloba todo
 * 'main container layout' => elemento que engloba al bentogrid
 */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	Navigate,
} from 'react-router-dom';
import Inicio from '../pages/inicio';
import AuthGuardRoute from '../components/AuthGuardRoute';

const BusinessRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<div role="page container layout">
					<div role="main container layout">
						<AuthGuardRoute>
							<Outlet />
						</AuthGuardRoute>
					</div>
				</div>
			}
		>
			<Route index element={<Navigate to="inicio" />} />
			<Route path="inicio" element={<Inicio />} />
			<Route
				path="carga"
				element={<div>where u upload data to fill dashboards</div>}
			/>
			<Route
				path="historial/:dashboardId"
				element={<div>each dashboard should appear</div>}
			/>
			<Route
				path="cuenta"
				element={<div>where there is account info</div>}
			>
				<Route
					path="cambiar-contraseña"
					element={<div>where you change your password</div>}
				/>
			</Route>
			<Route path="*" element={<div>404 page</div>} />
		</Route>
	)
);

export default BusinessRouter;
