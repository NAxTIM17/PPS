import { Modal, Button, Loader } from 'rsuite';
import {
	IconUserCircle,
	IconAlignBoxBottomCenter,
	IconInfoCircle,
} from '@tabler/icons-react';
import AccountItem from '../../components/AccountItem';
import { useState } from 'react';
import AccountInfo from '../../components/AccountInfo';
import { useSession } from '../../providers/Session';
import AccountStats from '../../components/AccountStats';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import { UsersService } from '../../services/Users';

const Account = () => {
	const [infoOpen, setInfoOpen] = useState(false);
	const [statsOpen, setStatsOpen] = useState(false);
	const session = useSession();
	const navigate = useNavigate();
	const handleLogOut = () => {
		session.end();
		navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
	};
	const defaultUser = {
		email: session?.user?.email ?? '',
		name: session?.user?.name ?? '',
		password: '',
	};
	const [open, setOpen] = useState();
	const [newUser, setNewUser] = useState(defaultUser);
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleClose = () => {
		setErrorMessage('');
		setOpen(false);
	};
	const handleOnChange = (value, field) => {
		setNewUser((prev) => ({ ...prev, [field]: value }));
	};
	const handleConfirm = () => {
		if (newPassword == confirmNewPassword) {
			setIsSubmitting(true);
			UsersService.updateUser({
				name: newUser.name === '' ? undefined : newUser.name,
				email: newUser.email === '' ? undefined : newUser.email,
				password:
					newUser.password === '' ? undefined : newUser.password,
			})
				.then((res) => {
					session.init(res);
					handleClose();
				})
				.catch((error) => {
					setErrorMessage(findUXErrorFromCatchError(error));
				})
				.finally(() => setIsSubmitting(false));
		} else {
			setErrorMessage('Las contraseñas no coinciden...');
		}
	};

	return (
		<div className="flex flex-col p-brand-2 gap-4">
			<h1 className="text-4xl font-extrabold">Cuenta</h1>
			<div className="flex flex-col p-brand-2 gap-brand-2">
				<div className="p-4 flex border rounded-brand bg-white gap-4 items-center justify-between">
					<div className="flex gap-4">
						<span className="text-gray-500">
							<IconUserCircle size="125" stroke="1.5" />
						</span>
						<div className="flex flex-col justify-center">
							<span className="font-semibold text-2xl capitalize">
								{session?.user?.name
									? session.user.name
									: 'Usuario'}
							</span>
							<span className="text-md">
								{session?.user?.email
									? session.user.email
									: 'Email'}
							</span>
						</div>
					</div>
					<div className="m-4">
						<a className="cursor-pointer" onClick={handleLogOut}>
							Cerrar Sesión
						</a>
					</div>
				</div>

				<hr />

				{!infoOpen ? (
					<AccountItem
						onClick={() => {
							setInfoOpen(true);
						}}
						icon={<IconInfoCircle size="50" />}
						title="Información personal"
						subtitle="Informacion del usuario de la cuenta"
					/>
				) : (
					<AccountInfo
						onClick={() => {
							setInfoOpen(false);
						}}
						setOpen={setOpen}
					/>
				)}
				{!statsOpen ? (
					<AccountItem
						onClick={() => {
							setStatsOpen(true);
						}}
						icon={<IconAlignBoxBottomCenter size="50" />}
						title="Estadísticas del usuario"
						subtitle="Informacion del uso de los datos"
					/>
				) : (
					<AccountStats
						onClick={() => {
							setStatsOpen(false);
						}}
					/>
				)}
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				backdrop={isSubmitting ? 'static' : true}
			>
				<Modal.Header>
					<Modal.Title className="text-2xl">
						Cambiar datos personales
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="flex flex-col gap-brand">
					<TextInput
						label="Nombre"
						autoComplete={'off'}
						value={newUser.name}
						onChange={(event) =>
							handleOnChange(event.target.value, 'name')
						}
						disabled={isSubmitting}
					/>
					<TextInput
						label="Correo Electrónico"
						autoComplete={'off'}
						value={newUser.email}
						onChange={(event) =>
							handleOnChange(event.target.value, 'email')
						}
						disabled={isSubmitting}
					/>
					<PasswordInput
						label="Contraseña"
						autoComplete={'new-password'}
						onChange={(event) => {
							setNewPassword(event.target.value);
							handleOnChange(event.target.value, 'password');
						}}
						disabled={isSubmitting}
					/>
					<PasswordInput
						label="Confirmar contraseña"
						autoComplete={'off'}
						onChange={(event) =>
							setConfirmNewPassword(event.target.value)
						}
						disabled={isSubmitting}
					/>
					<span className="text-red-500 w-full text-center">
						{errorMessage}
					</span>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={() => {
							setNewUser(defaultUser);
							handleClose();
						}}
						appearance="subtle"
						disabled={isSubmitting}
					>
						Cancel
					</Button>
					<Button
						onClick={handleConfirm}
						appearance="primary"
						disabled={isSubmitting}
					>
						{isSubmitting ? <Loader /> : 'Ok'}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Account;
