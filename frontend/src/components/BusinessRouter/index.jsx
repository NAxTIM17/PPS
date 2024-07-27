import {
	Route,
	Navigate,
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
} from 'react-router-dom';
import Error from '../../pages/error/index.jsx';
import Login from '../../pages/login/index.jsx';

const BusinessRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				element={
					<div>
						<Outlet />
					</div>
				}
			>
				<Route
					path="inicio"
					element={<div>where to upload or visualize dashboards</div>}
				/>
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
				<Route path="login" element={<Login />} />
				<Route
					path="recuperar-contraseña"
					element={<div>recover password page</div>}
				>
					<Route
						path=":token"
						element={<div>recover password page</div>}
					/>
				</Route>
				<Route path="/" element={<Navigate to="inicio" />} />
			</Route>
			<Route path="*" element={<Error />} />
		</>
	)
);

export default BusinessRouter;
