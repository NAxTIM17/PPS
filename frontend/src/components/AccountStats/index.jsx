import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axios';
import { Loader } from 'rsuite';
import ChevronUp from '../Icons/ChevronUp';

const AccountStats = ({ onClick }) => {
	const [stats, setStats] = useState();
	useEffect(() => {
		getStats();
	}, []);
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
		<div
			className="min-h-40 p-4 flex border rounded-brand bg-white gap-4 hover:bg-lime-200 items-center justify-between"
			onClick={onClick}
		>
			{!stats ? (
				<Loader className="m-auto" size="lg" speed="fast" />
			) : stats.length == 0 ? (
				<div>No existen registros</div>
			) : (
				<div className="flex gap-brand-8 items-center m-4">
					<div className="flex flex-col">
						<span className="text-lg font-semibold">
							Cantidad total de tokens usados
						</span>
						<span className="font-thin">
							{stats.reduce(
								(sum, item) => sum + item.tokens_used,
								0
							)}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-lg font-semibold">
							Cantidad de tokens promedio por uso
						</span>
						<span className="font-thin">
							{stats.reduce(
								(sum, item) => sum + item.tokens_used,
								0
							) / stats.length}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-lg font-semibold">
							Veces usado
						</span>
						<span className="font-thin">{stats.length}</span>
					</div>
				</div>
			)}
			<div className="w-8 text-gray-500 m-4">
				<ChevronUp />
			</div>
		</div>
	);
};
export default AccountStats;
