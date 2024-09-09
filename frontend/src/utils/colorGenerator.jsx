const generateColors = (n) => {
    const hue = 126; // Verde en el círculo de color HSL
    const saturation = 25; // Saturación fija
    const lightnessStep = 31 / n; // Variar la luminosidad
    const colores = [];

    for (let i = 0; i < n; i++) {
        const lightness = 25 + i * lightnessStep; // Ajusta la luminosidad
        colores.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return colores;
};

export default generateColors