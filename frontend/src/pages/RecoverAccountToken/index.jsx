import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../../components/Forms/Auth';
import PasswordInput from '../../components/PasswordInput';

const RecoverAccountToken = () => {
	const [password, setPassword] = useState({
		newPassword: undefined,
		confirmPassword: undefined,
	});
	const [isSend, setIsSend] = useState(false);
	const handlePassword = (event) => {
		setPassword({
			...password,
			[event.target.name]: event.target.value,
		});
	};
	const navigate = useNavigate();
	return (
		<AuthForm
			title={
				isSend ? 'Su contraseña ha sido cambiada' : 'Cambiar Contraseña'
			}
			buttonText={isSend ? 'Iniciar sesion' : 'Confirmar'}
			onSubmit={(event, endSubmitting) => {
				event.preventDefault();
				if (password.newPassword === password.confirmPassword) {
					setTimeout(() => {
						setIsSend(true);
						setTimeout(() => {
							navigate('/login');
						}, 2000);
					}, 3000);
				} else {
					//endSumbmiting but need the error.
				}
			}}
			onChange={(event) => handlePassword(event)}
		>
			{isSend ? (
				''
			) : (
				<>
					<PasswordInput
						name="newPassword"
						label="Nueva contraseña"
					/>
					<PasswordInput
						name="confirmPassword"
						label="Confirmar contraseña"
					/>
				</>
			)}
		</AuthForm>
	);
};

export default RecoverAccountToken;
