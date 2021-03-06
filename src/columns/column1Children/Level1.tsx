import React, { useState, useEffect } from 'react';
import Level2 from './Level2';
import { Color } from '../../App';

interface Props {
    bg: Color,
    setBg: Function
}

export default ({
    bg,
    setBg
}: Props) => {
    const [ newColor, setNewColor ] = useState<Color>(bg);

    useEffect(() => {
        setTimeout(() => {
            setNewColor(bg)
        }, 1000)
    }, [bg])
    
    return (
        <div className="ColumnChild">
            <h6>Level 1</h6>
            <p>
                Recebeu BG: { newColor }
            </p>
            <Level2 bg={ newColor } setBg={ setBg } />
        </div>
    )
}