import { useState } from 'react';
import AuthForm from '../../components/Forms/Auth';
import TextInput from '../../components/TextInput';
import { AuthService } from '../../services/Auth';
import { findUXErrorFromCatchError } from '../../services/utils';

const RecoverAccount = () => {
	const [isSent, setIsSent] = useState(false);

	return (
		<AuthForm
			title={isSent ? 'Email enviado' : 'Recuperar Cuenta'}
			buttonText={isSent ? '' : 'Recuperar'}
			description={
				isSent
					? 'Te hemos enviado un email de recuperación a tu cuenta. Revisa tu bandeja de entrada y no olvides verificar la carpeta de spam.'
					: ''
			}
			links={[
				{
					to: '/login',
					text: 'Ingresar',
				},
				{
					to: '/registro',
					text: 'Registrarse',
				},
			]}
			onSubmit={(event, endSubmitting) => {
				event.preventDefault();

				const payload = {
					email: event.target.email.value,
				};

				AuthService.recoverAccount(payload)
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
				<TextInput
					type="email"
					name="email"
					label="Email"
					placeholder="Ingrese su email"
					required
				/>
			)}
		</AuthForm>
	);
};

export default RecoverAccount;
