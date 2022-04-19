import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/numeros'

function Intervalo(props) {
    const {min, max} = props
    props.alterarMinimo(1000)
    return (
        <Card title="Intervalode Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input 
                        type="number" 
                        value={min} 
                        readOnly
                    />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input 
                        type="number" 
                        value={max} 
                        readOnly
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionCreatorsToProps(dispatch){
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, 
    mapActionCreatorsToProps
)(Intervalo)