import React, { useEffect, useState } from 'react';
import Level3 from './Level3';

interface Props {
    bg: string,
    setBg: Function
}

export default ({
    bg,
    setBg
}: Props) => {
    const [ newColor, setNewColor ] = useState<string>();

    useEffect(() => {
        setTimeout(() => {
            setNewColor(bg)
        }, 1000)
    }, [bg])
    
    return (
        <div className="ColumnChild">
            <h6>Level 2</h6>
            <p>
                Recebeu BG: { newColor || '--' }
            </p>
            <Level3 bg={ newColor || '--' } setBg={ setBg } />
        </div>
    )
}