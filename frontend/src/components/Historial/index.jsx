import { DateRangePicker, Pagination, Dropdown, Button } from 'rsuite';
import { IconX, IconSearch, IconListSearch } from '@tabler/icons-react';
import { useState } from 'react';

import HistoryItem from './elements/HistoryItem';

const FILTERS = ['Drogueria', 'Productos', 'Precio', 'Fecha'];

const History = ({ arrayDates }) => {
	const [activePage, setActivePage] = useState(1);
	const [arrayFilter, setArrayFilter] = useState([]);
	// const [arrayDates, setArrayDates] = useState([{}, {}]);

	// for (let i = 0; i < arrayDates.length; i++) {
	// 	console.log(arrayDates[i]?.history[0]?.drogueria)
	// }

	return (
		<div className="w-full h-full flex flex-col p-spacing overflow-auto overflow-x-hidden">
			<div className="w-full flex">
				{arrayDates.length > 0 ? (
					<div className="overflow-auto flex flex-col gap-spacing w-full">
						{arrayDates.map((item, index) => {
							const { history } = item;
							return (
								<HistoryItem
									key={index}
									date={item.dateFrom}
									drugstore={history}
								/>
							);
						})}
					</div>
				) : (
					<div className="w-full h-full flex justify-center items-center text-color-icons">
						<IconListSearch size={50} />
					</div>
				)}
			</div>
		</div>
	);
};
export default History;
