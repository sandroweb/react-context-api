import React, { useEffect, useState } from 'react';
import { Color, getColorByBgColor } from '../../App';

interface Props {
    bg: Color,
    setBg: Function
}

export default ({
    bg,
    setBg
}: Props) => {
    const colors = [
        Color.LightYellow,
        Color.Purple,
        Color.Red,
        Color.Green,
        Color.Cyan,
    ];
    const [ newColor, setNewColor ] = useState<Color>(bg);

    useEffect(() => {
        setTimeout(() => {
            setNewColor(bg)
        }, 1000)
    }, [bg])
    
    return (
        <div className="ColumnChild">
            <h6>Level 3</h6>
            <p>
                Recebeu BG: { newColor || '--' }
            </p>
            {
                colors.map((color: Color, key: number) => {
                    return (
                        <button onClick={ () => setBg(color) } style={{ backgroundColor: color, color: getColorByBgColor(color) }}>
                            { color === (newColor || '--') ? '✓' : '' }{ color }
                        </button>
                    )
                })
            }
        </div>
    )
}