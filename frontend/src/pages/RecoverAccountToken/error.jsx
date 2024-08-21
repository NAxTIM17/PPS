import AuthForm from '../../components/Forms/Auth';
import { ROUTES } from '../../router/config';

const RecoverAccountTokenError = () => {
	return (
		<AuthForm
			title="Sesión Expirada"
			buttonText=""
			description="Este link de recuperación de cuenta ya expiró. Solicite uno nuevo si aún necesita recuperar su cuenta."
			links={[
				{
					to: '/login',
					text: 'Ingresar',
				},
				{
					to: '/registro',
					text: 'Registrarse',
				},
				{
					to: '/recuperar-cuenta',
					text: 'Recuperar cuenta',
				},
			]}
			onSubmit={(event) => {
				event.preventDefault();

				navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
			}}
		/>
	);
};

export default RecoverAccountTokenError;
