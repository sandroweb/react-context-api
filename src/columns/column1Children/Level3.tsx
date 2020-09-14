import React, { useEffect, useState } from 'react';

interface Props {
    bg: string,
    setBg: Function
}

export default ({
    bg,
    setBg
}: Props) => {
    const colors = [
        'lightyellow',
        'purple',
        'red',
        'green',
        'cyan',
    ];
    const [ newColor, setNewColor ] = useState<string>();

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
                colors.map((color: string, key: number) => {
                    return (
                        <button onClick={ () => setBg(color) } style={{ backgroundColor: color }}>
                            { color === (newColor || '--') ? '✓' : '' }{ color }
                        </button>
                    )
                })
            }
        </div>
    )
}