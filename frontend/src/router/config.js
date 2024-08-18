const UNAUTHED_ROUTES = {
	LOGIN: '/login',
	REGISTER: '/registro',
	RECOVER_ACCOUNT: '/recuperar-cuenta',
	RECOVER_ACCOUNT_TOKEN: '/recuperar-cuenta/:token',
	NOT_FOUND: '*',
};

const AUTHED_ROUTES = {
	ROOT: '/',
	HOME: '/inicio',
	NEW_DASHBOARD: '/carga',
	DASHBOARD: '/historial/:dashboardId',
	ACCOUNT: '/cuenta',
	CHANGE_PASSWORD: '/cuenta/cambiar-contraseña',
};

const ROUTES = {
	UNAUTHED_ROUTES,
	AUTHED_ROUTES,
};

export { ROUTES };
