import { useEffect, useState } from "react";

export default function PieChart({data}){
    const [arrayPercent, setArrayPercent] = useState([])
    const generateColors = (n) => {
        const hue = 146; // Verde en el círculo de color HSL
        const saturation = 25; // Saturación fija
        const lightnessStep = 31 / n; // Variar la luminosidad

        const colores = [];
        for (let i = 0; i < n; i++) {
            const lightness = 25 + i * lightnessStep; // Ajusta la luminosidad
            colores.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
        }
        return colores;
    }
    const COLORS = generateColors(data.length);

    const getPercent  = (data) => {
        let total = data.reduce((acc, el) => acc + el.amount, 0);
        let arrayPercent = [];
        for (let i = 0; i < data.length; i++) {
            arrayPercent = [...arrayPercent, ((data[i].amount / total) * 100)]
        }
        setArrayPercent(arrayPercent)
        return arrayPercent
    }
    const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
      };
      let cumulativePercent = 0;

      useEffect(()=>{
        getPercent(data);
      },[])

    return(
        <div className="w-60 h-60 bg-brand-300 p-2 flex flex-col">
            <svg viewBox="-1 -1 2 2" style={{ transform: "rotate(-0.25turn)" }}>
                    {arrayPercent.map((value, index) => {
                        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
                        cumulativePercent += value / 100;
                        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
                        
                        const largeArcFlag = value > 50 ? 1 : 0;
                        
                        const pathData = [
                            `M ${startX} ${startY}`, // Move
                            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
                            `L 0 0`, // Line
                            ].join(" ");
                            
                            return <path key={index} d={pathData} fill={COLORS[index]} />;
                    })}
            </svg>
            <div className="h-full min-w-32">
                    <ul>
                        {
                            data.map((item, index) => (
                                <div className="flex gap-2">
                                    <div style={{
                                        backgroundColor : COLORS[index]
                                    }} className="w-5 h-5 rounded-md"></div>
                                    <li>{item.title}</li>
                                    <p>%{arrayPercent[index]}</p>
                                </div>
                            ))
                        }
                    </ul>
            </div>
    </div>
    )
}