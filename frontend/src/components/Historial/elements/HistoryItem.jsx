import { IconExternalLink } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/config';

export default function HistoryItem({ date, drugstore, totalPrice }) {
	const navigate = useNavigate();
	console.log(drugstore[0]?.oferta_valida?.inicio);

	const handledata = () => {
		const json = drugstore[0];
		const data = [json];
		localStorage.setItem('pharmacyData', JSON.stringify(data));
		navigate(ROUTES.AUTHED_ROUTES.NEW_DASHBOARD);
	};

	return (
		<div className="w-full h-14 rounded-inner-border p-spacing flex flex-row items-center justify-center gap-16 bg-color-bg-surface">
			<h1 className="text-2xl font-bold grow">
				{drugstore[0]?.drogueria}
			</h1>
			<div className="flex gap-spacing "></div>
			{/* <h1 className="text-2xl font-bold ">
				{new Intl.NumberFormat({
					style: 'currency',
					currency: 'USD',
				}).format(totalPrice)}
			</h1> */}
			<div className="flex font-semibold">
				<h1>{drugstore[0]?.oferta_valida?.inicio}-</h1>
				<h1>{drugstore[0]?.oferta_valida?.fin}</h1>
			</div>
			<IconExternalLink
				size={20}
				className="cursor-pointer"
				onClick={handledata}
			/>
		</div>
	);
}
