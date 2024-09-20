import ReactECharts from 'echarts-for-react';

import handleColors from '../../utils/hadleColors';

export default function PieChart({data}){
    const total = data.reduce((acc, el) => el.value + acc, 0);
    const pieOption = {
		tooltip: {
		  trigger: 'item'
		},
		legend: {
		  top: '2%',
		  left: 'center'
		},
        title : {
            text : `$${total}`,
            right : 'center',
            top: 'center',
            textStyle:{
                fontSize: '45px'
            }
        },
		series: [
		  {
			name: 'Drogueria',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			itemStyle: {
			  borderRadius: 10,
			  borderColor: '#fff',
			  borderWidth: 2
			},
			data: handleColors(data)
		  }
		]
	}
    return(
            <ReactECharts className='w-full !h-[450px] relative' option={pieOption} />
    )
}