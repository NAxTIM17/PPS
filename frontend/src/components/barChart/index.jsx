import generateColors from '../../utils/colorGenerator';

export default function BarChart({ data }) {
	const width = 500;
	const height = 200;
	const barWidth = 70;
	const barGap = 20;
	const maxValue = Math.max(...data.map((d) => d.value));
    const borderRadius = 5; // Radio del borde redondeado
	const COLORS = generateColors(data.length);

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<svg
				width={width}
				height={height}
				className='flex justify-center items-center'
			>
				{data.map((d, index) => {
					const barHeight = (d.value / maxValue) * (height - 20); // Altura proporcional
					return (
						<g
							key={index}
							transform={`translate(${index * (barWidth + barGap)}, 0)`}
						>
							<rect
								x={barGap}
								y={height - barHeight}
								width={barWidth}
								height={barHeight}
								fill={COLORS[index]}
                                rx={borderRadius}
							/>
							<text
								x={barGap + barWidth / 2}
								y={height - barHeight - 5}
								textAnchor="middle"
								fill="black"
							>
								{d.value}
							</text>
							<text
								x={barGap + barWidth / 2}
								y={height - 5}
								textAnchor="middle"
								fill="white"
							>
								{d.label}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
}
