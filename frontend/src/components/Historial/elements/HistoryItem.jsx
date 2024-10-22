import { IconExternalLink } from '@tabler/icons-react';

export default function HistoryItem({ date, drugstore, totalPrice }) {
	return (
		<div className="w-full h-14 rounded-inner-border p-spacing flex flex-row items-center justify-center gap-16 bg-color-bg-surface">
			<h1 className="text-2xl font-bold">{date}</h1>
			<div className="flex gap-spacing ">
				{drugstore.map((item) => (
					<div className="w-20 h-7 bg-color-fill-primary rounded-brand text-color-text-primary flex justify-center items-center">
						{item.name}
					</div>
				))}
			</div>
			<h1 className="text-2xl font-bold ">
				{new Intl.NumberFormat({
					style: 'currency',
					currency: 'USD',
				}).format(totalPrice)}
			</h1>
			<IconExternalLink />
		</div>
	);
}
