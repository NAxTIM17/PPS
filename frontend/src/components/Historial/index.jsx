import { DateRangePicker, Pagination, Dropdown, Button } from 'rsuite';
import {
	IconX,
	IconExternalLink,
	IconSearch,
} from '@tabler/icons-react';
import { useState } from 'react';

const FILTERS = ['Drogueria', 'Productos', 'Precio', 'Fecha'];

const History = () => {
	const [activePage, setActivePage] = useState(1);
	const [arrayFilter, setArrayFilter] = useState([]);
	const [arrayDates, setArrayDates] = useState({});

	return (
		<div className="w-full h-full flex flex-col p-spacing gap-spacing">
			<div className="w-full flex items-center gap-spacing">
				<DateRangePicker
					onChange={(e) =>
						setArrayDates({
							dateFrom: e[0],
							dateTo: e[1],
						})
					}
					className="w-full"
				/>
				<Dropdown title="Filtrar" className='!rounded-inner-borde'>
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
				<Button appearance='primary' className="text-color-text-primary rounded-inner-border w-32">
					<IconSearch />
				</Button>
			</div>
			<div className="w-full flex items-center gap-spacing">
				{arrayFilter.map((item, index) => (
					<div
						key={index}
						className="min-w-32 h-8 bg-color-fill-primary rounded-inner-border text-color-text-primary flex justify-center items-center gap-spacing"
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
			<div className="w-full flex flex-col grow gap-spacing overflow-hidden">
				<div className="w-full h-14 rounded-inner-border p-spacing flex flex-row items-center justify-center gap-16 bg-color-bg-surface">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="flex gap-spacing ">
						<div className="w-20 h-7 bg-color-fill-primary rounded-brand text-color-text-primary flex justify-center items-center">
							DelSOl
						</div>
						<div className="w-20 h-7 bg-color-fill-secondary rounded-brand flex justify-center items-center text-color-text-secondary">DelSol</div>
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
