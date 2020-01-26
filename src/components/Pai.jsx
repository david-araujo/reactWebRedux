import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaidaFilho = lugar => alert(`Liberado pra ${lugar}`)

    return (
        <div>
            <Filho notificarSaida = {notificarSaidaFilho} />
        </div>
    )
}