import React, { Component } from 'react'

export default class Contador extends Component {
    // ### Resolvendo problemas com o this ###
    // Solução 01 - Utilizando o contructor e atribuindo o this com o metodo bind.
    // constructor (props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    // Solução 02 - Utilizando Arrow Function no evento
    // <button onClick={ () => this.maisUm() }>Inc</button>

    // Solução 03 - Transformando o método em uma Arrow function
    // maisUm =  () => {}

    state = {
        numero: this.props.numero
    }

    render () {
        return (
            <div>
                <h2>Número: { this.state.numero }</h2>
                <button onClick={ this.maisUm }>Inc</button>
                <button onClick={ this.menosUm }>Dec</button>
                <button onClick={ () => this.alterarNumero(10) }>Inc10</button>
                <button onClick={ () => this.alterarNumero(-10) }>Dec10</button>
            </div>
        )
    }

    maisUm =  () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm =  () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alterarNumero =  diferenca => {
        this.setState({ numero: this.state.numero + diferenca })
    }
}