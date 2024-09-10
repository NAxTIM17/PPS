import { useNavigate } from 'react-router-dom';
import { useSession } from '../../providers/Session';

import Bentogrid from '../../components/Bentogrid';
import History from '../../components/Historial'
import CardBento from '../../components/CardBento';
import ReactECharts from 'echarts-for-react';
import generateColors from '../../utils/colorGenerator';
import { ROUTES } from '../../router/config';


const Home = () => {
	const session = useSession();
	const navigate = useNavigate();
	const handleColors = (data) => {
		let newArray = [];
		let COLORS = generateColors(data.length)
		COLORS.map((item, index) => (
			newArray = [...newArray, {
				name : data[index]?.name,
				value : data[index].value ? data[index].value : data[index],
				itemStyle : {
					color: item
				}
			}]
		))
		return newArray
	}
	const pieOption = {
		tooltip: {
		  trigger: 'item'
		},
		legend: {
		  top: '2%',
		  left: 'center'
		},
		series: [
		  {
			name: 'Drogueria',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			itemStyle: {
			  borderRadius: 10,
			  borderColor: '#fff',
			  borderWidth: 2
			},
			data: handleColors([
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
			])
		  }
		]
	}
	const barOption = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		  },
		  yAxis: {
			type: 'value'
		  },
		  series: [
			{
			  data: handleColors([120, 200, 150, 80, 70, 110, 130]),
			  type: 'bar'
			}
		  ]
	}
	return (
		<>
			<Bentogrid className={'grid-cols-2 grid-rows-8'}>
				<CardBento
					title={'NUEVO'}
					onClikc={() => navigate(ROUTES.AUTHED_ROUTES.ACCOUNT)}
					className={
						'col-span-1 row-span-1 text-white bg-[#5F9F66] hover:bg-[#528a59] cursor-pointer transition-all'
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
					<ReactECharts className='w-full !h-[450px]' option={pieOption}/>
					<h1 className='absolute font-bold text-4xl top-10 bottom-0 flex items-center'>$30.000</h1>
				</CardBento>
				<CardBento
					className={
						'col-span-1 row-span-3 bg-white'
					}
					title={"Productos por drogueria"}
				>
					<ReactECharts className='w-full h-full'  option={barOption}/>
				</CardBento>
			</Bentogrid>
		</>
	);
};

export default Home;
