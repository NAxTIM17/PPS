import { useSession } from '../../providers/Session';
import ChevronUp from '../Icons/ChevronUp';
const AccountInfo = ({ onClick }) => {
	const session = useSession();
	const date = new Date(session.user.createdAt);
	return (
		<div
			className="min-h-40 p-4 flex border rounded-brand bg-white gap-4 hover:bg-lime-200 items-center justify-between"
			onClick={onClick}
		>
			<div className="flex gap-brand-8 items-center m-4">
				<div className="flex flex-col">
					<span className="text-lg font-semibold">Nombre</span>
					<span className="font-thin">
						{session.user.name ? session.user.name : 'Usuario'}
					</span>
				</div>
				<div className="flex flex-col">
					<span className="text-lg font-semibold">
						Correo Electronico
					</span>
					<span className="font-thin">{session.user.email}</span>
				</div>
				<div className="flex flex-col">
					<span className="text-lg font-semibold">Cuenta desde</span>
					<span className="font-thin">
						{date.toLocaleString('en-US', { timeZone: 'UTC' })}
					</span>
				</div>
				<a href="">Modificar</a>
			</div>
			<div className="w-8 text-gray-500 m-4">
				<ChevronUp />
			</div>
		</div>
	);
};
export default AccountInfo;
