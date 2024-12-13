import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/Auth';
import { findUXErrorFromCatchError } from '../../services/utils';
import { Input, InputGroup } from 'rsuite';
import { IconMail, IconLock } from '@tabler/icons-react';
import toast, { Toaster } from 'react-hot-toast';

import AuthForm from '../../components/Forms/Auth';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput';

import { ROUTES } from '../../router/config';

const Login = () => {
	const navigate = useNavigate();

	return (
		<AuthForm
			title="Iniciar Sesión"
			buttonText="Entrar"
			links={[
				{
					to: '/registro',
					text: 'Registrarse',
				},
				{
					to: '/recuperar-cuenta',
					text: 'Recuperar cuenta',
				},
			]}
			onSubmit={(event, endSubmitting) => {
				event.preventDefault();

				const payload = {
					email: event.target.email.value,
					password: event.target.password.value,
				};

				AuthService.login(payload)
					.then(() => {
						setTimeout(() => {
							navigate(ROUTES.AUTHED_ROUTES.ROOT);
						}, 1000);
						toast.success('Sesión inicada con éxito');
					})

					.catch((error) => {
						const message = findUXErrorFromCatchError(error);
						endSubmitting(message, 'error');
						toast.error('Verifique sus datos');
					});
			}}
		>
			<InputGroup className="w-full">
				<InputGroup.Addon>
					<IconMail />
				</InputGroup.Addon>
				<Input type="email" placeholder="Gmail" name="email" required />
			</InputGroup>

			<InputGroup className="w-full">
				<InputGroup.Addon>
					<IconLock />
				</InputGroup.Addon>
				<Input
					type="password"
					placeholder="Contraseña"
					name="password"
					required
				/>
			</InputGroup>
			<Toaster />
		</AuthForm>
	);
};

export default Login;
