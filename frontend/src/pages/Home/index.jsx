import Bentogrid from '../../components/Bentogrid';
import Historial from '../../components/Historial';
import NewDashboardButton from '../../components/NewDashboardButton';
import Stats1 from '../../components/Stats1';
import Stats2 from '../../components/Stats2';
import UserBadge from '../../components/UserBadge';
import MainContentLayout from '../../layouts/MainContent';

import PieChart from '../../components/pieChart';

const Home = () => {
	return (
		<>
			<MainContentLayout.Header>
				<h1 className="h-max text-grey-900 font-bold text-4xl tracking-tight">
					Inicio
				</h1>
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
				<UserBadge />
			</MainContentLayout.Header>
			<Bentogrid rows='8' cols='2'>
				<NewDashboardButton className="col-span-1 row-span-1" />
				<Stats1 classname="col-span-1 row-span-4" />
				<Historial classname="col-span-1 row-span-7" />
				<Stats2 classname="col-span-1 row-span-4" />
			</Bentogrid>
		</>
	);
};

export default Home;
