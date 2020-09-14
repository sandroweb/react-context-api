import React from 'react';
import { Coluna2Context } from '../Column2';
import { Color } from '../../App';

export default () => {
    const colors = [
        Color.LightYellow,
        Color.Purple,
        Color.Red,
        Color.Green,
        Color.Cyan,
    ];
    
    return (
        <Coluna2Context.Consumer>
            {
                ({ bg, setBg }) => (
                    <div className="ColumnChild">
                        <h6>Level 3</h6>
                        <p>
                            Recebeu BG: { bg || '--' }
                        </p>
                        {
                            colors.map((color: Color, key: number) => {
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
        </Coluna2Context.Consumer>
    )
}