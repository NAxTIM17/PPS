import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import AuthForm from '../../components/Forms/Auth';
import PasswordInput from '../../components/PasswordInput';
import { AuthService } from '../../services/Auth';
import { findUXErrorFromCatchError } from '../../services/utils';
import { ROUTES } from '../../router/config';

const RecoverAccountToken = () => {
	const { token } = useLoaderData();

	const navigate = useNavigate();
	const [isSent, setIsSent] = useState(false);

	return (
		<AuthForm
			title={
				isSent ? 'Su contraseña ha sido cambiada' : 'Cambiar Contraseña'
			}
			buttonText={isSent ? 'Iniciar sesion' : 'Confirmar'}
			onSubmit={(event, endSubmitting) => {
				event.preventDefault();

				if (isSent) {
					navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
					return;
				}

				const payload = {
					newPassword: event.target.newPassword.value,
					confirmPassword: event.target.confirmPassword.value,
				};

				AuthService.newPassword(payload, token)
					.then(() => {
						setTimeout(() => {
							endSubmitting('');
							setIsSent(true);
						}, 1000);
					})
					.catch((error) => {
						const message = findUXErrorFromCatchError(error);
						endSubmitting(message, 'error');
					});
			}}
		>
			{!isSent && (
				<>
					<PasswordInput
						name="newPassword"
						label="Nueva contraseña"
						required
					/>
					<PasswordInput
						name="confirmPassword"
						label="Confirmar contraseña"
						required
					/>
				</>
			)}
		</AuthForm>
	);
};

export default RecoverAccountToken;
