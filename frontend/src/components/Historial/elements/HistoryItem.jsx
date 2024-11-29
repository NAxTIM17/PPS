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
		<div className="w-full h-14 rounded-inner-border p-spacing flex flex-row items-center justify-center gap-16 bg-color-bg-surface">
			<h1 className="text-xl grow">
				{new Date(date).toLocaleDateString('es-ES')}
			</h1>
			<IconExternalLink
				size={20}
				className="cursor-pointer"
				onClick={handledata}
			/>
		</div>
	);
}
