const generateColors = (n) => {
    const colores = [];

    function parseRgb(rgbString) {
        // Regular expression to match the RGB values
        const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
        const match = rgbString.match(regex);
    
        // Check if the match is successful
        if (match) {
            // Extract r, g, b values from the matched array
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
    
            return { r, g, b };
        } else {
            throw new Error('Invalid RGB string');
        }
    }

    function rgbToHsl(rgb) {
        // Normalize RGB values to the range [0, 1]
        let {r, b, g} = parseRgb(rgb);

        r /= 255;
        g /= 255;
        b /= 255;
    
        // Find the maximum and minimum values among r, g, b
        const cMax = Math.max(r, g, b);
        const cMin = Math.min(r, g, b);
        const delta = cMax - cMin;
    
        // Calculate lightness
        let l = (cMax + cMin) / 2;
        let h = 0;
        let s = 0;
    
        if (delta !== 0) {
            // Calculate saturation
            s = (l < 0.5) ? (delta / (cMax + cMin)) : (delta / (2 - cMax - cMin));
    
            // Calculate hue
            switch (cMax) {
                case r:
                    h = ((g - b) / delta + (g < b ? 6 : 0)) % 6;
                    break;
                case g:
                    h = ((b - r) / delta + 2) % 6;
                    break;
                case b:
                    h = ((r - g) / delta + 4) % 6;
                    break;
            }
            h *= 60;
        }
    
        // Convert hue, saturation, and lightness to percentage
        h = Math.round(h);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
    
        return {h, s, l};
    }

    const getCssVariable = (name) => {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }


    let primary = getCssVariable('--rs-primary-500')
    let {h, l, s} = rgbToHsl(primary);
    l = l / n;

    for (let i = 0; i < n; i++) {
        const lightness = 25 + i * l; // Ajusta la luminosidad
        colores.push(`hsl(${h}, ${s}%, ${lightness}%)`);
    }
    return colores;
};

export default generateColors