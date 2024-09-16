import Bentogrid from '../../components/Bentogrid';
import History from '../../components/Historial'
import CardBento from '../../components/CardBento';
import ReactECharts from 'echarts-for-react';
import New from '../../components/New';
import PieChart from '../../components/pieChart';
import BarChart from '../../components/barChart';


const Home = () => {
	

	return (
		<>
			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento
					className={
						'col-span-1 row-span-1 '
					}
				>
				<New />
				</CardBento>
				<CardBento
					title={"Historial"}
					className={
						'col-span-1 row-span-7 bg-color-bg'
					}
				>
					<History />
				</CardBento> 
				<CardBento
					title={'Gasto por drogueria'}
					className={
						'col-span-1 row-span-5 bg-color-bg'
					}
				>
					<PieChart data={[
						{
							name: 'Margarita',
							value: 300,
						},
						{
							name: 'Garnica',
							value: 100,
						},
						{
							name: 'Savencia',
							value: 400,
						},
						{
							name: 'Soledad',
							value: 500,
						},
						{
							name: 'Monte',
							value: 200,
						},
					]}/>
				</CardBento>
				<CardBento
					className={
						'col-span-1 row-span-3 bg-color-bg'
					}
					title={"Productos por drogueria"}
				>
					<BarChart yAxisData={[100, 20, 300, 500, 100, 600, 100]} xAxisData={["mon", "tus", "wed", "tur", "fri", "sat", "sun"]}/>
				</CardBento>
			</Bentogrid>
		</>
	);
};

export default Home;
