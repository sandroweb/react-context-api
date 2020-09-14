import React, { useState } from 'react';
import './Column.css';
import Level1 from './column1Children/Level1';
import { getColorByBgColor, Color } from '../App';

export default () => {
    const [ bg, setBg ] = useState<Color>(Color.LightYellow);
    
    return (
        <div className="Column" style={{ backgroundColor: bg, color: getColorByBgColor(bg) }}>
            <h1>Coluna 1</h1>
            <h4>Sem usar Context, enviando as props de filho pra filho</h4>
            <Level1 bg={ bg } setBg={ setBg } />
        </div>
    )
}