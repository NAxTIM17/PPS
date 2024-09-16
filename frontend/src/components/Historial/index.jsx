import { DateRangePicker, Pagination, Dropdown, Button } from 'rsuite';
import {
	IconX,
	IconExternalLink,
	IconSearch,
	IconListDetails,
} from '@tabler/icons-react';
import { useState } from 'react';
import { FAKE_DATA } from '../../utils/FAKE_DATA';

const FILTERS = ['Drogueria', 'Productos', 'Precio', 'Fecha'];

const History = () => {
	const [activePage, setActivePage] = useState(1);
	const [arrayFilter, setArrayFilter] = useState([]);
	const [arrayDates, setArrayDates] = useState({});

	console.log(arrayDates);

	return (
		<div className="w-full h-full flex flex-col gap-2">
			<div className="w-full h-10 flex items-center gap-3 p-3">
				<DateRangePicker
					onChange={(e) =>
						setArrayDates({
							dateFrom: e[0],
							dateTo: e[1],
						})
					}
					className="w-full"
				/>
				<Dropdown title="Filtrar" className="w-32">
					{FILTERS.map((item, index) => (
						<Dropdown.Item
							key={index}
							onClick={() =>
								setArrayFilter([...arrayFilter, { name: item }])
							}
						>
							{item}
						</Dropdown.Item>
					))}
				</Dropdown>
				<Button className="w-[20%] text-color-text-primary bg-color-brand-primary">
					<IconSearch />
				</Button>
			</div>
			<div className="w-full h-10 flex items-center pl-3 pr-3 gap-3">
				{arrayFilter.map((item, index) => (
					<div
						key={index}
						className="min-w-20 h-7 bg-color-brand-primary rounded-brand-2 text-color-text-primary flex justify-center items-center p-2 gap-1 "
					>
						{item.name}
						<IconX
							size={15}
							className="hover:text-red-400 cursor-pointer transition-all"
							onClick={() =>
								setArrayFilter(
									arrayFilter.filter((a) => a != item)
								)
							}
						/>
					</div>
				))}
			</div>
			<div className="w-full flex flex-col grow gap-3 overflow-x-hidden p-3">
				<div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between text-color-text-secondary">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="flex gap-2 ">
						<div className="w-20 h-10 bg-color-brand-primary rounded-brand text-color-text-primary flex justify-center items-center">
							DelSOl
						</div>
						<div className="w-20 h-10 bg-color-brand-secondary rounded-brand flex justify-center items-center text-color-brand-primary">DelSol</div>
					</div>
					<h1 className="text-2xl font-bold ">$12,300</h1>
					<IconExternalLink />
				</div>
			</div>
			<div className="w-full h-14 flex justify-center">
				<Pagination
					activePage={activePage}
					onChangePage={setActivePage}
					prev
					next
					total={10}
					limit={1}
					size="md"
				/>
			</div>
		</div>
	);
};
export default History;
