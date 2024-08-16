import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { AuthService } from '../../services/Auth';
import { findUXErrorFromCatchError } from '../../services/utils';
import AuthForm from '../../components/Forms/Auth';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput';

const Login = () => {
	const auth = useAuth();
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
						auth?.action?.initSessionWithoutUser();
						setTimeout(() => {
							navigate('/inicio');
						}, 1000);
					})
					.catch((error) => {
						const message = findUXErrorFromCatchError(error);
						endSubmitting(message, 'error');
					});
			}}
		>
			<TextInput
				type="email"
				name="email"
				label="Email"
				placeholder="Ingrese su email"
				required
			/>
			<PasswordInput
				name="password"
				label="Contraseña"
				placeholder="Ingrese su contraseña"
				required
			/>
		</AuthForm>
	);
};

export default Login;
