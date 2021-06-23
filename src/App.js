import React, {Fragment, useState} from 'react';     // (frangment) es como un div pero no se muestra en lo que viene siendo el front end
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Mensaje from './Componentes/Mensaje';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';

function App() {

  // definir el state
  const [quantity, saveQuantity] = useState(0);  
  const [term, saveTerm] = useState('');  
  const [total, saveTotal] = useState(0);  
  const [loading, saveLoading] = useState(false);  

  let component;
  if( loading ) {
    component = <Spinner />
  } else if (total === 0) {
    component = <Mensaje />
  } else {
    component = <Resultado 
                  total={total}
                  term={term}
                  quantity={quantity}
                />
  }

  return (
    <Fragment>
        <Header 
          title="Prestamos"
        />
        
        <div className="container">
            <Formulario 
              quantity={quantity}
              saveQuantity={saveQuantity}
              term={term}
              saveTerm={saveTerm}
              saveTotal={saveTotal}
              saveLoading={saveLoading}
            />

            <div className="mensajes">
              {component}  
            </div>  
            
        </div>
    </Fragment>
  );
}

export default App;
