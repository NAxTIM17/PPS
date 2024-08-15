/*
 * 'page container layout' => elemento que engloba todo
 * 'main container layout' => elemento que engloba al bentogrid
 */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
} from 'react-router-dom';
import Inicio from '../pages/inicio';
import Login from '../pages/login';
import AuthGuardRoute from '../components/AuthGuardRoute';
import PageContainerLayout from '../components/Layouts/PageContainerLayout';
import MainContentLayout from '../components/Layouts/MainContentLayout';
import Registro from '../pages/registro';

const BusinessRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<PageContainerLayout>
					<Outlet />
				</PageContainerLayout>
			}
		>
			<Route
				element={
					<AuthGuardRoute>
						<MainContentLayout>
							<Outlet />
						</MainContentLayout>
					</AuthGuardRoute>
				}
			>
				<Route index element={<Navigate to="/inicio" />} />
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
			</Route>

			<Route path="login" element={<Login />} />
			<Route path="registro" element={<Registro />} />

			<Route
				path="recuperar-cuenta"
				element={<div>recover password page</div>}
			>
				<Route index element={<div>recover password page</div>} />
				<Route
					path=":token"
					element={<div>change password process</div>}
				/>
			</Route>

			<Route path="*" element={<div>404 page</div>} />
		</Route>
	)
);

export default BusinessRouter;
