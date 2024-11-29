import { IconListSearch } from '@tabler/icons-react';

import HistoryItem from './elements/HistoryItem';

const History = ({ arrayDates }) => {
	return (
		<div className="w-full h-full flex flex-col p-spacing overflow-auto overflow-x-hidden">
			<div className="w-full flex">
				{arrayDates?.length > 0 ? (
					<div className="overflow-auto flex flex-col gap-spacing w-full">
						{arrayDates.map((item, index) => (
							<HistoryItem
								key={index}
								date={item.createdAt}
								drugstore={item.history}
							/>
						))}
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
