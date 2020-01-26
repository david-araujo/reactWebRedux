import React from 'react'

export default props => {

    const aprovados = ['David', 'Ruby', 'Astrid', 'Aaron']

    const  gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>        
    )
}