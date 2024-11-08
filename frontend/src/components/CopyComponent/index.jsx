import { IconCopy, IconCopyCheck } from '@tabler/icons-react';
import { useState } from 'react';

export default function CopyCheck({ name, arrayBestPrice }) {
	const [copyIcon, setCopyIcon] = useState(<IconCopy size={15} />);
	const [productoCopy, setProductCopy] = useState([]);

	const changeIcon = (event) => {
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
				`Buenos días ${event.target.textContent} quiero realizar el pedido de los siguientes medicamentos: ${array.map(
					(item) => {
						return `*${item.nombre}\n`;
					}
				)}`
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
			{copyIcon}
		</div>
	);
}
