import React from 'react'

function Mult1 (props) {
    return <div>
        <p>Utilizando uma DIV (Pode ser qualquer tag de agrupamento: Sections etc...)</p>
        <h3>Elemento 1</h3>
        <h3>Elemento 2</h3>
    </div>
} 

function Mult2 (props) {
    return <React.Fragment>
        <p>Utilizando React.Fragment os elementos não serão envolvidos por uma tag de agrupamento.</p>
        <h3>Elemento 1</h3>
        <h3>Elemento 2</h3>
    </React.Fragment>        
}  

function Mult3 (props) {
    return [
        <p>Utilizando notação de Array [] = React.Fragment os elementos não serão envolvidos por uma tag de agrupamento.</p>,
        <h3>Elemento 1</h3>,
        <h3>Elemento 2</h3>
    ]       
}  

export {Mult1, Mult2, Mult3}