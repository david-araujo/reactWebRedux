import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <p>Atribuindo uma propriedade do elemento PAI aos elementos Filhos de forma direta.</p>
        <Membro nome = 'David' sobrenome = {props.sobrenome} />
        <Membro nome = 'Ruby' sobrenome = 'Sousa' />
    </div>