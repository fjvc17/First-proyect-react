import React, {Fragment, useState} from 'react'; // (usestate) hace mas rapido las applicaciones que trabajan con react
import { calculateTotal } from '../Helpers';


const Formulario = (props) => {

    const {quantity, saveQuantity, term, saveTerm, saveTotal, saveLoading} = props;

    // definir state
    const [error, saveError] = useState(false)

    //cuando el usiario hace submit
    const calculateLoan = (e) => {
        e.preventDefault();

        // validar
        if( quantity === 0 || term === '') {
            saveError(true);
            return;
        }

        //eliminar error previo
        saveError(false); 
        
        // habilitar spinner
        saveLoading(true);

        setTimeout(() => {
            // relizar la cotizacion
            const total = calculateTotal(quantity, term);

            // ya calculado se pasa el total
            saveTotal(total);   
            
            // deshabilitar spinner
            saveLoading(false);
        }, 3000);

    }

    
    return ( 
        <Fragment>
            <form onSubmit={calculateLoan}>
                <div className="row">
                        <div>
                            <label>Cantidad Prestamo</label>
                            <input 
                                className="u-full-width" 
                                type="number" 
                                placeholder="Ejemplo: 3000" 
                                onChange={ e => saveQuantity( parseInt(e.target.value) ) }  // (onChange) es un evento que se va a ejecutar cada vez que el usuario interactue con la app
                            />
                        </div>
                        <div>
                            <label>Plazo para Pagar</label>
                            <select 
                                className="u-full-width"
                                onChange={ e => saveTerm( parseInt(e.target.value) ) }
                            >
                                <option value="">Seleccionar</option>
                                <option value="3">3 meses</option>
                                <option value="6">6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Calcular" 
                                className="button-primary u-full-width" 
                            />
                        </div>
                </div>
            </form>

            { (error) ? <p className="error">All fields are Required</p> : null }
            

        </Fragment>
     );
}
 


export default Formulario;