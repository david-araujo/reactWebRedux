import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponent from './components/PrimeiroComponent'
import { CompA, CompB as B } from './components/MultiComponents'
import {Mult1, Mult2, Mult3} from './components/MultiElementos'
import FamiliaAraujo from './components/FamiliaAraujo'
import Membro from './components/Membro'
import Familia from './components/Familia'
import ComponentFunction from './components/ComponentFunction'
import Pai from './components/Pai'

import ComponentClasse from './components/ComponentClasse'
import Contador from "./components/Contador";

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Entendendo React!</h1>
        <h2>Exibindo os preimeiros componentes.</h2>
            <PrimeiroComponent valor = 'Bom dia!!!'></PrimeiroComponent>
            <CompA valor = 'Oi, Sou A!' />
            <B valor = 'B na area!'></B>
            <Mult1></Mult1>
            <Mult2></Mult2>
            <Mult3></Mult3>
        <hr />
        <h2>Relação entre componentes</h2> 
            <p>No exemplo abaixo existe uma relação direta do elemento Pai onde os filhos estão embutidos no mesmo arquivo. Direteamente as props do Elemento pai podem ou não ser atribuidas ao elemento filho.</p>
            <FamiliaAraujo sobrenome = 'Araujo' />

            <Familia sobrenome = 'Araujo Sousa'>
                <Membro nome = 'Astrid' />
                <Membro nome = 'Aaron' />
            </Familia>
        <hr />
        <h2>Função em um componente Funcional.</h2>
            <ComponentFunction></ComponentFunction>
        <hr />
        <h2>Relação indireta entre componentes.</h2>
            <p>O componente Pai irá receber um callback do elemento Filho para uma função passada via props.</p>
            <Pai />
        <hr />
        <h2>Componentes de Classe.</h2>
            <ComponentClasse valor = 'Valor vindo da props!' />
            <Contador numero = {0} />
            <p>Contatdor alterando valores utilizando "State".</p>
    </div> 
    
    ,elemento
)