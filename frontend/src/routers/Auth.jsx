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

import Login from '../pages/login';
import AuthGuardRoute from '../components/AuthGuardRoute';

const AuthRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<div role="page container layout">
					<AuthGuardRoute>
						<Outlet />
					</AuthGuardRoute>
				</div>
			}
		>
			<Route index element={<Navigate to="/login" />} />
			<Route path="login" element={<Login />} />
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

export default AuthRouter;
