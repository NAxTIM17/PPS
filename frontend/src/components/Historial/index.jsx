import { DatePicker, Pagination, Dropdown, DateRangePicker } from 'rsuite';
import { IconX, IconExternalLink } from '@tabler/icons-react';
import { useState } from 'react';

const History = () => {
	const [activePage, setActivePage] = useState(5);

	return (
		<div className="w-full h-full flex flex-col gap-2">
			<div className="w-full h-10 flex items-center gap-2 p-2">
				<DateRangePicker />
				<Dropdown title="Filtros">
					<Dropdown.Item>New File</Dropdown.Item>
					<Dropdown.Item>New File with Current Profile</Dropdown.Item>
					<Dropdown.Item>Download As...</Dropdown.Item>
					<Dropdown.Item>Export PDF</Dropdown.Item>
					<Dropdown.Item>Export HTML</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>About</Dropdown.Item>
				</Dropdown>
			</div>
			<div className="w-full h-10 flex gap-2 p-1">
				<div className="w-20 bg-green-900 rounded-brand text-white flex justify-center items-center gap-1">
					filter
					<IconX size={15} className='hover:text-red-500 cursor-pointer' />
				</div>
			</div>
			<div className="w-full flex flex-col grow gap-2 overflow-x-hidden p-2">
				<div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-md p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-md p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-md p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-md p-2 flex flex-row items-center justify-between">
					<h1 className="text-2xl font-bold">05/09/2024</h1>
					<div className="w-20 h-10 bg-green-900 rounded-brand text-white flex justify-center items-center">
						DelSOl
					</div>
					<h1 className="text-2xl font-bold">$12,300</h1>
					<IconExternalLink />
				</div>
                <div className="w-full h-20 drop-shadow-md bg-zinc-50 rounded-md p-2 flex flex-row items-center justify-between">
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
