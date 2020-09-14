import React, { createContext, useState } from 'react';
import './Column.css';
import Level1 from './column2Children/Level1';

export const Coluna2Context = createContext({
    bg: '',
    setBg: (bg: string) => {}
})

export default () => {
    const [ bg, setBg ] = useState<string>('lightyellow');
    
    return (
        <div className="Column" style={{ backgroundColor: bg }}>
            <h1>Coluna 2</h1>
            <h4>Exemplo de Contexto (Tag de contexto)</h4>
            <Coluna2Context.Provider value={{ bg: bg, setBg: (bg: string) => setBg(bg) }}>
                <Level1 />
            </Coluna2Context.Provider>
        </div>
    )
}