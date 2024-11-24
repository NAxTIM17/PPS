import generateColors from "./colorGenerator";

const handleColors = (data) => {
    let newArray = [];
    let COLORS = generateColors(data.length)
    COLORS.map((item, index) => (
        newArray = [...newArray, {
            name : data[index]?.name,
            value : data[index].value ? data[index].value : data[index],
            itemStyle : {
                color: item
            }
        }]
    ))
    return newArray
}

export default handleColors