import { IconCopy, IconBrandWhatsapp } from '@tabler/icons-react';
import { useMemo } from 'react';

export default function CopyCheck({ name, arrayBestPrice = [] }) {
	const thisDrogueria = useMemo(() => {
		return arrayBestPrice.filter(
			(item) => item.droguerias[0].drogueria === name
		);
	}, [name, arrayBestPrice]);

	const thisDrogueriaWP =
		thisDrogueria[0]?.droguerias[0]?.numero_celular?.replace(
			/(\+|\s)/g,
			''
		);

	const thisDrogueriaProductsQuantities = thisDrogueria.reduce(
		(acc, arr) => acc + arr.cantidad,
		0
	);

	const areActionsAllowed = thisDrogueriaProductsQuantities > 0;

	console.log({
		thisDrogueria,
		thisDrogueriaWP,
		thisDrogueriaProductsQuantities,
	});

	const sendWhatsapp = () => {
		try {
			const text = `Buenos días ${name} quiero realizar el pedido de los siguientes medicamentos: \n${thisDrogueria
				.filter((item) => item.cantidad > 0)
				.map((item) => {
					return `- ${item.nombre} | ${item.cantidad > 1 ? `${item.cantidad} unidades` : '1 unidad'}`;
				})
				.join('\n')}`;
			const link = document.createElement('a');
			link.href = `https://wa.me/+${thisDrogueriaWP}?text=${text}`;
			link.target = '_blanck';
			link.click();
		} catch (error) {
			console.log(error);
		}
	};

	const copyClipboard = async () => {
		try {
			await navigator.clipboard.writeText(
				`Buenos días ${name} quiero realizar el pedido de los siguientes medicamentos: \n${thisDrogueria
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
					onClick={(e) => areActionsAllowed && copyClipboard(e)}
					aria-disabled={!areActionsAllowed}
					className={`
                        rounded-sm p-1 w-full h-8 transition-all 
                        ${areActionsAllowed ? 'cursor-pointer hover:bg-gray-300' : 'cursor-default opacity-50'}
                        `}
					stroke={2}
				/>
				{!thisDrogueriaWP ? null : (
					<IconBrandWhatsapp
						aria-disabled={!areActionsAllowed}
						onClick={(e) => areActionsAllowed && sendWhatsapp(e)}
						className={`
                        rounded-sm p-1 w-full h-8 text-green-500 transition-all
                        ${areActionsAllowed ? 'cursor-pointer hover:bg-green-500 hover:text-white' : 'cursor-default opacity-50'}
                        `}
						stroke={2}
					/>
				)}
			</div>
		</div>
	);
}
