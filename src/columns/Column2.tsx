import React, { createContext, useState } from 'react';
import './Column.css';
import Level1 from './column2Children/Level1';
import { Color, getColorByBgColor } from '../App';

export const Coluna2Context = createContext({
    bg: '',
    setBg: (bg: Color) => {}
})

export default () => {
    const [ bg, setBg ] = useState<Color>(Color.LightYellow);
    
    return (
        <div className="Column" style={{ backgroundColor: bg, color: getColorByBgColor(bg) }}>
            <h1>Coluna 2</h1>
            <h4>Exemplo de Contexto (Tag de contexto)</h4>
            <Coluna2Context.Provider value={{ bg: bg, setBg: (bg: Color) => setBg(bg) }}>
                <Level1 />
            </Coluna2Context.Provider>
        </div>
    )
}