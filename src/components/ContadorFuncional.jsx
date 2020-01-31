import React, { useState } from "react";

export default props => {

    const [contador, setContador] = useState(100)

    return (
        <div>
            <p>A partir do React 16.8 foi adicionado um complemento chamado <a href="https://pt-br.reactjs.org/docs/hooks-intro.html">React Hooks</a> que permite manipulação de estados e outras funcionalidades em componentes funcionais.</p>

            <h2>Número: {contador}</h2>
            <button onClick = {() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}