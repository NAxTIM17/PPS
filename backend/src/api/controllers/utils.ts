import jwt from 'jsonwebtoken';
import { timeToSeconds } from '../../utils';

type TokenPayload = { user: { id: string } };

async function signJwt(
	payload: TokenPayload,
	secret: string,
	expiresIn?: number
): Promise<string> {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			secret,
			{ expiresIn: expiresIn ?? timeToSeconds({ days: 3 }) },
			(err, token) => {
				if (err) {
					reject(err);
				} else {
					resolve(token as string);
				}
			}
		);
	});
}

export { signJwt };
