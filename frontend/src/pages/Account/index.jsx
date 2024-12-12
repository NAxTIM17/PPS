import UserIcon from '../../components/Icons/User';
import InfoIcon from '../../components/Icons/Info';
import StatsIcon from '../../components/Icons/Stats';
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
const Account = () => {
	const [infoOpen, setInfoOpen] = useState(false);
	const [statsOpen, setStatsOpen] = useState(false);

	const session = useSession();
	const navigate = useNavigate();
	const handleLogOut = () => {
		session.end();
		navigate(ROUTES.UNAUTHED_ROUTES.LOGIN);
	};
	const [stats, setStats] = useState();
	const getStats = async () => {
		try {
			const { data } = await axiosInstance.get('/history/get');
			setStats(data);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(stats);
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
								{session.user.name}
							</span>
							<span className="text-md">
								{session.user.email}
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
		</div>
	);
};

export default Account;
