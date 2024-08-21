import { AuthRequest } from '../controllers/types';

function getTokenFromHeaders(request: AuthRequest): string | null {
	if (
		!request.headers.authorization ||
		(request.headers.authorization &&
			request.headers.authorization.split(' ')?.[0] !== 'Bearer' &&
			request.headers.authorization.split(' ')?.[0] !== 'Token')
	) {
		return null;
	}

	const token = request.headers.authorization.split(' ')?.[1];

	return token;
}

export { getTokenFromHeaders };
