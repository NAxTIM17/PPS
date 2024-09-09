

import Bentogrid from '../../components/Bentogrid';
import NewDashboardButton from '../../components/NewDashboardButton';
import Stats1 from '../../components/Stats1';
import Stats2 from '../../components/Stats2';
import History from '../../components/Historial'
import UserBadge from '../../components/UserBadge';
import MainContentLayout from '../../layouts/MainContent';
import CardBento from '../../components/CardBento';
import PieChart from '../../components/pieChart';
import BarChart from '../../components/barChart';

const Home = () => {
	return (
		<>
			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento
					title={'NUEVO'}
					className={
						'col-span-1 row-span-1 text-[#487a4e] bg-[#5F9F66] cursor-pointer transition-all'
					}
				></CardBento>
				<CardBento
					title={"Historial"}
					className={
						'col-span-1 row-span-7 bg-white'
					}
				>
					<History />
				</CardBento>
				<CardBento
					title={'Gasto por drogueria'}
					className={
						'col-span-1 row-span-5 bg-white'
					}
				>
					<PieChart
						data={[
							{
								title: 'Margarita',
								amount: 300,
							},
							{
								title: 'Garnica',
								amount: 100,
							},
							{
								title: 'Savencia',
								amount: 400,
							},
							{
								title: 'Soledad',
								amount: 500,
							},
							{
								title: 'Monte',
								amount: 200,
							},
						]}
					/>
				</CardBento>
				<CardBento
					className={
						'col-span-1 row-span-3 bg-white'
					}
					title={"Productos por drogueria"}
				>
					<BarChart
						data={[
							{ label: 'Enero', value: 40 },
							{ label: 'Febrero', value: 80 },
							{ label: 'Marzo', value: 65 },
							{ label: 'Abril', value: 100 },
							{ label: 'Mayo', value: 10 },
							
						]}
					/>
				</CardBento>
			</Bentogrid>
		</>
	);
};

export default Home;
