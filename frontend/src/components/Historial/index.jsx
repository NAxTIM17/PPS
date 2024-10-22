import { DateRangePicker, Pagination, Dropdown, Button } from 'rsuite';
import { IconX, IconSearch, IconListSearch } from '@tabler/icons-react';
import { useState } from 'react';

import HistoryItem from './elements/HistoryItem';

const FILTERS = ['Drogueria', 'Productos', 'Precio', 'Fecha'];

const History = () => {
	const [activePage, setActivePage] = useState(1);
	const [arrayFilter, setArrayFilter] = useState([]);
	const [arrayDates, setArrayDates] = useState([]);

	return (
		<div className="w-full h-full flex flex-col p-spacing gap-spacing justify-between">
			<div className="w-full flex items-center gap-spacing">
				<DateRangePicker
					onChange={(e) =>
						setArrayDates([
							{
								dateFrom: e[0],
								dateTo: e[1],
							},
						])
					}
				/>
				<Dropdown title="Filtrar" className="!rounded-inner-borde">
					{FILTERS.map((item, index) => (
						<Dropdown.Item
							key={index}
							onClick={() => {
								if (
									!arrayFilter.find(
										(filter) => filter.name === item
									)
								) {
									setArrayFilter([
										...arrayFilter,
										{ name: item },
									]);
								}
							}}
						>
							{item}
						</Dropdown.Item>
					))}
				</Dropdown>
				<Button
					appearance="primary"
					className="text-color-text-primary rounded-md w-32"
				>
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
			<div className="w-full flex flex-col max-h-[600px] min-h-[600px] gap-spacing overflow-auto">
				{arrayDates.length > 0 ? (
					<>
						{arrayDates.map((item) => (
							<HistoryItem date={item.dateFrom} drugstore={[]} />
						))}
					</>
				) : (
					<div className="w-full h-full flex justify-center items-center text-color-icons">
						<IconListSearch size={50} />
					</div>
				)}
			</div>
			<div className="w-full h-10 flex justify-center">
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
