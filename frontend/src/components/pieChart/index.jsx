import { useEffect, useState } from 'react';

import generateColors from '../../utils/colorGenerator';

export default function PieChart({ data }) {
	const [arrayPercent, setArrayPercent] = useState([]);
	const [total, setTotal] = useState();
	
	const COLORS = generateColors(data.length);

	const getPercent = (data) => {
		let total = data.reduce((acc, el) => acc + el.amount, 0);
		setTotal(total);
		let arrayPercent = [];
		for (let i = 0; i < data.length; i++) {
			arrayPercent = [...arrayPercent, (data[i].amount / total) * 100];
		}
		setArrayPercent(arrayPercent);
		return arrayPercent;
	};
	const getCoordinatesForPercent = (percent) => {
		const x = Math.cos(2 * Math.PI * percent);
		const y = Math.sin(2 * Math.PI * percent);
		return [x, y];
	};
	let cumulativePercent = 0;
    const innerRadius = 0.7;

	useEffect(() => {
		getPercent(data);
	}, []);
    console.log(data)

	return (
		<div className="flex flex-col w-full h-full gap-5 items-center p-3">
			<div className="flex flex-col items-center relative">
				<svg
					viewBox="-1 -1 2 2"
					style={{
						transform: 'rotate(-0.25turn)',
						width: '210px',
						height: '210px',
					}}
				>
					{arrayPercent.map((value, index) => {
						const [startX, startY] =
							getCoordinatesForPercent(cumulativePercent);
						cumulativePercent += value / 100;
						const [endX, endY] =
							getCoordinatesForPercent(cumulativePercent);

						const largeArcFlag = value > 50 ? 1 : 0;

						// Arco exterior
						const outerArc = [
							`M ${startX} ${startY}`, // Moverse al punto inicial del arco exterior
							`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Dibujar el arco exterior
						].join(' ');

						// Arco interior (el agujero)
						const [innerEndX, innerEndY] = getCoordinatesForPercent(
							cumulativePercent,
							innerRadius
						);
						const [innerStartX, innerStartY] =
							getCoordinatesForPercent(
								cumulativePercent - value / 100,
								innerRadius
							);
						const innerArc = [
							`L ${innerEndX * innerRadius} ${innerEndY * innerRadius}`, // Conectar al arco interno
							`A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX * innerRadius} ${innerStartY * innerRadius}`, // Dibujar el arco interior
							`Z`, // Cerrar el camino
						].join(' ');

						const pathData = outerArc + innerArc;

						return (
							<path
								key={index}
								d={pathData}
								fill={COLORS[index]} // Colores personalizados
							/>
						);
					})}
				</svg>
				<div className="flex items-center gap-2 absolute top-0 bottom-0">
					<h1 className="text-3xl bold">${total}</h1>
				</div>
			</div>
			<div className="h-full w-full flex items-center overflow-hidden">
				<ul className='flex flex-col h-full w-full overflow-x-hidden'>
					{data.map((item, index) => (
						<div key={index} className="flex gap-2 h-10 items-center">
							<div
								style={{
									backgroundColor: COLORS[index],
								}}
								className="rounded-md min-w-12 p-1 flex justify-center"
							><p className="text-white">%{arrayPercent[index]?.toFixed(2)}</p></div>
							<li className="text-xl bold">{item.title}</li>
							<div className='h-2 rounded-md w-full bg-gray-200'>
                                <div style={{
                                    width : `${arrayPercent[index]?.toFixed(2)}%`,
                                    backgroundColor: COLORS[index],
                                }} className='h-full rounded-md'>

                                </div>
                            </div>
                            <h1>${data[index].amount}</h1>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}
