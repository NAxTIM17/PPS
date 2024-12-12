import ReactECharts from 'echarts-for-react';

import handleColors from '../../utils/hadleColors';

export default function BarChart({ xAxisData, yAxisData }) {
	const barOption = {
		xAxis: {
			type: 'category',
			data: xAxisData,
		},
		yAxis: {
			type: 'value',
			name: 'tokens',
			nameTextStyle: {
				fontSize: 16,
				align: 'right',
			},
		},
		series: [
			{
				data: handleColors(yAxisData),
				type: 'bar',
			},
		],
	};

	return <ReactECharts className="w-full h-full" option={barOption} />;
}
