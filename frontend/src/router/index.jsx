import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
} from 'react-router-dom';

import { ROUTES } from './config';
import {
	authCheck,
	pipeLoaders,
	recoverAccountTokenValidityCheck,
} from './utils';
import AttachSession from './AttachSession';

import MainContentLayout from '../layouts/MainContent';

import HomePage from '../pages/Home';
import NewDashboardPage from '../pages/NewDashboard';
import DashboardPage from '../pages/Dashboard';
import AccountPage from '../pages/Account';
import ChangePasswordPage from '../pages/ChangePassword';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import RecoverAccountPage from '../pages/RecoverAccount';
import RecoverAccountTokenPage from '../pages/RecoverAccountToken';
import NotFoundPage from '../pages/NotFound';

const BusinessRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path={ROUTES.AUTHED_ROUTES.ROOT}
				loader={authCheck}
				element={
					<AttachSession>
						<MainContentLayout>
							<Outlet />
						</MainContentLayout>
					</AttachSession>
				}
				errorElement={<Navigate to={ROUTES.UNAUTHED_ROUTES.LOGIN} />}
			>
				<Route
					index
					element={<Navigate to={ROUTES.AUTHED_ROUTES.HOME} />}
				/>
				<Route
					path={ROUTES.AUTHED_ROUTES.HOME}
					element={<HomePage />}
				/>
				<Route
					path={ROUTES.AUTHED_ROUTES.NEW_DASHBOARD}
					element={<NewDashboardPage />}
				/>
				<Route
					path={ROUTES.AUTHED_ROUTES.DASHBOARD}
					element={<DashboardPage />}
				/>
				<Route
					path={ROUTES.AUTHED_ROUTES.ACCOUNT}
					element={<AccountPage />}
				>
					<Route
						path={ROUTES.AUTHED_ROUTES.CHANGE_PASSWORD}
						element={<ChangePasswordPage />}
					/>
				</Route>
			</Route>
			<Route
				path={ROUTES.UNAUTHED_ROUTES.LOGIN}
				loader={authCheck}
				element={<Navigate to={ROUTES.AUTHED_ROUTES.HOME} />}
				errorElement={<LoginPage />}
			/>
			<Route
				path={ROUTES.UNAUTHED_ROUTES.REGISTER}
				loader={authCheck}
				element={<Navigate to={ROUTES.AUTHED_ROUTES.HOME} />}
				errorElement={<RegisterPage />}
			/>
			<Route
				path={ROUTES.UNAUTHED_ROUTES.RECOVER_ACCOUNT}
				loader={authCheck}
				element={<Navigate to={ROUTES.AUTHED_ROUTES.HOME} />}
				errorElement={<RecoverAccountPage />}
			/>
			<Route
				path={ROUTES.UNAUTHED_ROUTES.RECOVER_ACCOUNT_TOKEN}
				loader={({ request, params }) =>
					pipeLoaders([authCheck, recoverAccountTokenValidityCheck], {
						request,
						params,
					})
				}
				element={<Navigate to={ROUTES.AUTHED_ROUTES.HOME} />}
				errorElement={<RecoverAccountTokenPage />}
			/>
			<Route
				path={ROUTES.UNAUTHED_ROUTES.NOT_FOUND}
				element={<NotFoundPage />}
			/>
		</>
	)
);

export default BusinessRouter;
