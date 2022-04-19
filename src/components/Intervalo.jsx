import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    const { max, min} = props
    return (
        <Card title="Intervalode Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input 
                        type="number" 
                        value={min} 
                        onChange={e => props.onMinChanged(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input 
                        type="number" 
                        value={max} 
                        onChange={e => props.onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>

        </Card>
    )
}