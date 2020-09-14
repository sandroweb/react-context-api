import React, { useContext } from 'react';
import { Coluna3Context } from '../Column3';
import { Color, getColorByBgColor } from '../../App';

export default () => {
    const colors = [
        Color.LightYellow,
        Color.Purple,
        Color.Red,
        Color.Green,
        Color.Cyan,
    ];
    const { bg, setBg } = useContext(Coluna3Context);
    
    return (
        <div className="ColumnChild">
            <h6>Level 3</h6>
            <p>
                Recebeu BG: { bg || '--' }
            </p>
            {
                colors.map((color: Color, key: number) => {
                    return (
                        <button onClick={ () => setBg(color) } style={{ backgroundColor: color, color: getColorByBgColor(color) }}>
                            { color === (bg || '--') ? '✓' : '' }{ color }
                        </button>
                    )
                })
            }
        </div>
    )
}