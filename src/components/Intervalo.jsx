import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card title="Intervalode Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input 
                        type="number" 
                        value={1} 
                    />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input 
                        type="number" 
                        value={10} 
                    />
                </span>
            </div>

        </Card>
    )
}