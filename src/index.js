import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponent from './components/PrimeiroComponent'
import { CompA, CompB as B } from './components/MultiComponents'
import {Mult1, Mult2, Mult3} from './components/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponent valor = 'Bom dia!!!'></PrimeiroComponent>
        <CompA valor = 'Oi, Sou A!' />
        <B valor = 'B na area!'></B>
        <Mult1></Mult1>
        <Mult2></Mult2>
        <Mult3></Mult3>
    </div> 
    
    ,elemento
)