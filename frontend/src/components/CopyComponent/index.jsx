import { IconCopy, IconCopyCheck } from '@tabler/icons-react';
import { useState } from 'react';

export default function CopyCheck({ name, arrayBestPrice }) {
	const [copyIcon, setCopyIcon] = useState(<IconCopy size={15} />);

	const changeIcon = () => {
		setCopyIcon(<IconCopyCheck size={15} />);
		setTimeout(() => {
			setCopyIcon(<IconCopy size={15} />);
		}, 1000);
	};

	const copyClipboard = async (event) => {
		try {
			const array = arrayBestPrice.filter(
				(item) => item.droguerias[0] === event.target.textContent
			);
			await navigator.clipboard.writeText(
				`Buenos días ${event.target.textContent} quiero realizar el pedido de los siguientes medicamentos: \n${array
					.filter((item) => item.cantidad > 0)
					.map((item) => {
						return `- ${item.nombre} | ${item.cantidad > 1 ? `${item.cantidad} unidades` : '1 unidad'}`;
					})
					.join('\n')}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			onClick={(event) => {
				changeIcon(event);
				copyClipboard(event);
			}}
			className="bg-color-bg-surface p-spacing rounded-inner-border w-full text-center flex justify-between gap-spacing items-center hover:bg-color-icons cursor-pointer transition-all"
		>
			{name}
			<div className="w-32">{copyIcon}</div>
		</div>
	);
}
