import React, { Component } from "react"

export default class ComponentClass extends Component {
    render () {
        return (
            <div>
                <h3>Primeiro Componente Baseado em Classe!</h3>
                <p>Utilizando o "this" conseguimos coletar os valores das propriedades dos componentes.</p>
                <p>this.props.valor = <strong>{this.props.valor}</strong></p>
                <p>{JSON.stringify(this.props)}</p>
            </div>
        )
    }
}
