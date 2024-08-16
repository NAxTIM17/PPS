import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
} from 'react-router-dom';
import AuthGuardRoute from '../components/AuthGuardRoute';
import PageContainerLayout from '../components/Layouts/PageContainerLayout';
import MainContentLayout from '../components/Layouts/MainContentLayout';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import RecoverPassword from '../pages/recoverPassword';
import PasswordChange from '../pages/passwordChage';

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
				<Route path="inicio" element={<Home />} />
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
			<Route path="registro" element={<Register />} />

			<Route
				path="recuperar-cuenta"
			>
				<Route index element={<RecoverPassword />} />
				<Route
					path="contraseña"
					element={<PasswordChange />}
				/>
			</Route>

			<Route path="*" element={<div>404 page</div>} />
		</Route>
	)
);

export default BusinessRouter;
