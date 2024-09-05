import Bentogrid from '../../components/Bentogrid';
import Historial from '../../components/Historial';
import NewDashboardButton from '../../components/NewDashboardButton';
import Stats1 from '../../components/Stats1';
import Stats2 from '../../components/Stats2';
import UserBadge from '../../components/UserBadge';
import MainContentLayout from '../../layouts/MainContent';
import CardBento from '../../components/CardBento';
import PieChart from '../../components/pieChart';

const Home = () => {
	return (
		<>
			<MainContentLayout.Header>
				<h1 className="h-max text-grey-900 font-bold text-4xl tracking-tight">
					Inicio
				</h1>
				<UserBadge />
			</MainContentLayout.Header>

			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento title={'NUEVO'} className={'col-span-1 row-span-1 bg-green-300'}>
				</CardBento>
				<CardBento className={'col-span-1 row-span-7 bg-blue-300'}>
					HISTORIAL
				</CardBento>
				<CardBento title={'Gasto por drogueria'} className={'col-span-1 row-span-4 bg-violet-300'}>
				<PieChart data={[
				{
					title : 'Margarita',
					amount : 300
				},
				{
					title : 'Garnica',
					amount : 100
				},
				{
					title : 'Savencia',
					amount : 400
				}
			]}/>
				</CardBento>
				<CardBento className={'col-span-1 row-span-4 bg-pink-300'}>
					STATS02
				</CardBento>
			</Bentogrid>
		</>
	);
};

export default Home;
