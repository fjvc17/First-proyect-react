import React from 'react';

const Resultado = ({total, term, quantity}) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {quantity}</p>
        <p>A pagar en: {term} Meses</p>
        <p>Pago mensual es de: $ { (total / term).toFixed(2) }</p>
        <p>Total a pagar: $ {(total).toFixed(2)}</p>



    </div>
);
 
export default Resultado;