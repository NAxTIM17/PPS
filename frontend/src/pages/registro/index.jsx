import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Forms/Auth';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput';
import { useAuth } from '../../providers/Auth';
import { AuthService } from '../../services/Auth';
import { findUXErrorFromCatchError } from '../../services/utils';

const Registro = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	return (
		<AuthForm
			title="Registro"
			buttonText="Registrarse"
			links={[
				{
					to: '/login',
					text: 'Ingresar',
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

				AuthService.register(payload)
					.then(() => {
						auth?.action?.initSessionWithoutUser();
						setTimeout(() => {
							navigate('/login');
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

export default Registro;
