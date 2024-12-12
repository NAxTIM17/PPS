import {
	IconCopy,
	IconCopyCheck,
	IconBrandWhatsapp,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CopyCheck({ name, arrayBestPrice }) {
	const [copyIcon, setCopyIcon] = useState(<IconCopy size={15} />);
	const [link, setLink] = useState();
	const navigate = useNavigate();

	const changeIcon = () => {
		setCopyIcon(<IconCopyCheck size={15} />);
		setTimeout(() => {
			setCopyIcon(<IconCopy size={15} />);
		}, 1000);
	};

	const sendWhatsapp = () => {
		try {
			const array = arrayBestPrice.filter(
				(item) => item.droguerias[0] === name
			);
			const text = `Buenos días ${name} quiero realizar el pedido de los siguientes medicamentos: \n${array
				.filter((item) => item.cantidad > 0)
				.map((item) => {
					return `- ${item.nombre} | ${item.cantidad > 1 ? `${item.cantidad} unidades` : '1 unidad'}`;
				})
				.join('\n')}`;
			const link = document.createElement('a');
			link.href = `https://wa.me/+5493816118543?text=${text}`;
			link.target = '_blanck';
			link.click();
		} catch (error) {
			console.log(error);
		}
	};

	const copyClipboard = async () => {
		try {
			const array = arrayBestPrice.filter(
				(item) => item.droguerias[0] === name
			);
			await navigator.clipboard.writeText(
				`Buenos días ${name} quiero realizar el pedido de los siguientes medicamentos: \n${array
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
		<div className="bg-white rounded-md border-2 p-spacing">
			<p className="text-sm font-semibold text-center">{name}</p>
			<div className="flex justify-center gap-2 w-full">
				<IconCopy
					onClick={(e) => copyClipboard(e)}
					className="rounded-sm p-1 w-full h-8 cursor-pointer transition-all hover:bg-gray-300"
					stroke={2}
				/>
				<IconBrandWhatsapp
					href={link}
					onClick={(e) => sendWhatsapp(e)}
					className="rounded-sm p-1 w-full h-8 text-green-500 cursor-pointer transition-all hover:bg-green-500 hover:text-white"
					stroke={2}
				/>
			</div>
		</div>
	);
}
