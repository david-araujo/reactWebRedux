import React from 'react'
import cloneParentProps from '../utils/utils'

export default props =>
    <div>
        <p>Os Elementos filhos contidos no elemento PAI são clonados e renderizados com as propriedades do PAI.</p>
        
        {cloneParentProps(props)}

        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {props.children} */}
    </div>
    