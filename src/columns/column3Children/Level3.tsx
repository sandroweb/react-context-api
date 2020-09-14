import React, { useContext } from 'react';
import { Coluna3Context } from '../Column3';

export default () => {
    const colors = [
        'lightyellow',
        'purple',
        'red',
        'green',
        'cyan',
    ];
    const { bg, setBg } = useContext(Coluna3Context);
    
    return (
        <div className="ColumnChild">
            <h6>Level 3</h6>
            <p>
                Recebeu BG: { bg || '--' }
            </p>
            {
                colors.map((color: string, key: number) => {
                    return (
                        <button onClick={ () => setBg(color) } style={{ backgroundColor: color }}>
                            { color === (bg || '--') ? '✓' : '' }{ color }
                        </button>
                    )
                })
            }
        </div>
    )
}