import React, {Fragment} from 'react';


function Header({title}) {   // las {} hace que aplique destructuring eso creara la variable de title y extrae su valor

    
    // ({}) dentro de las llaves el codigo se representa como Js
    return(
        <Fragment>
            <h1>{ title }</h1>   
        </Fragment>
    )
}

// const Header = ({title}) => (   // una forma mas implicita y facilita hacer un codigo, pero si vas a crear mas codigo en la variable ahi usamos las {} y el return
//     <h1>{ title }</h1>
// )
 


export default Header;

