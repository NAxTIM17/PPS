import { IconExternalLink } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/config';

export default function HistoryItem({ date, drugstore }) {
	const navigate = useNavigate();
	const handledata = () => {
		localStorage.setItem('pharmacyData', JSON.stringify([...drugstore]));
		navigate(ROUTES.AUTHED_ROUTES.NEW_DASHBOARD);
	};

	return (
		<div className="w-full h-14 rounded-inner-border p-spacing flex flex-row items-center justify-center gap-16 bg-color-bg border border-color-bg-surface drop-shadow-sm">
			<h1 className="text-xl grow flex gap-1">
				<p className="font-bold">Fecha: </p>
				{new Date(date).toLocaleDateString('es-ES', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false, // Cambia a true si prefieres el formato de 12 horas
				})}
			</h1>
			<IconExternalLink
				size={20}
				className="cursor-pointer"
				onClick={handledata}
			/>
		</div>
	);
}
