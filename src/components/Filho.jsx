import React from 'react'

export default props => 
    <div>
        <button onClick = {() => props.notificarSaida('Rua')}>
            Vou sair!
        </button>
    </div>