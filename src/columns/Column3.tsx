import React, { createContext, useState } from 'react';
import './Column.css';
import Level1 from './column3Children/Level1';
import { Color, getColorByBgColor } from '../App';

export const Coluna3Context = createContext({
    bg: '',
    setBg: (bg: Color) => {}
})

export default () => {
    const [ bg, setBg ] = useState<Color>(Color.LightYellow);
    
    return (
        <div className="Column" style={{ backgroundColor: bg, color: getColorByBgColor(bg) }}>
            <h1>Coluna 3</h1>
            <h4>Exemplo de Contexto (useContext();)</h4>
            <Coluna3Context.Provider value={{ bg: bg, setBg: (bg: Color) => setBg(bg) }}>
                <Level1 />
            </Coluna3Context.Provider>
        </div>
    )
}