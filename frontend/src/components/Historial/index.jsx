import { DateRangePicker, Pagination, Dropdown, Button } from 'rsuite';
import { IconX, IconExternalLink, IconSearch, IconListDetails } from '@tabler/icons-react';
import { useState } from 'react';

const FILTERS = ['Drogueria', 'Productos', 'Precio', 'Fecha']

const History = () => {
	const [activePage, setActivePage] = useState(5);
	const [arrayFilter, setArrayFilter] = useState([]);

	return (
		<div className="w-full h-full flex flex-col gap-2">
			<div className="w-full h-10 flex items-center gap-3 p-3">
				<DateRangePicker className='w-full'/>
				<Dropdown title="Filtrar" className='w-32'>
					{
						FILTERS.map((item, index) => (
							<Dropdown.Item key={index} onClick={() => setArrayFilter([...arrayFilter, {name : item}])} >{item}</Dropdown.Item>
						))
					}
				</Dropdown>
				<Button appearance='primary' className='w-[20%]'><IconSearch /></Button>
			</div>
			<div className="w-full h-10 flex items-center pl-3 pr-3 gap-3">
				{
					arrayFilter.map((item, index) => (
						<div key={index} className="min-w-20 h-7 bg-green-900 rounded-brand-2 text-white flex justify-center items-center p-2 gap-1 ">
							{item.name}
							<IconX size={15} className='hover:text-red-400 cursor-pointer transition-all' onClick={() => setArrayFilter(arrayFilter.filter(a => a != item))} />
						</div>
					))
				}
			</div>
			<div className="w-full flex flex-col grow gap-3 overflow-x-hidden p-3">
				<div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className='flex gap-2'>
						<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
							DelSOl
						</div>
						<div className="w-20 h-10 bg-green-600 rounded-brand text-white flex justify-center items-center">
							
						</div>
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-brand-2 p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
			</div>
			<div className="w-full h-14 flex justify-center">
				<Pagination
					activePage={activePage}
					onChangePage={setActivePage}
					prev
					last
					next
					first
					total={50}
					limit={5}
                    size='md'
				/>
			</div>
		</div>
	);
};
export default History;
