import React from 'react';

// class Buscador {
//     render(props) {
//         return (
            // <form>
            //     <div>
            //         <input type="text" placeholder="Buscar imagen" />
            //     </div>
            // </form>
//         );
//     }
// }

function Calculadora() {
    return (
        <React.Fragment>
           <div className="flex flex-col bg-gray-700">
                <label className="w-60 mx-auto text-center mt-4" >Primer numero</label>
                <input className="border-4 w-60 mx-auto" type="number" placeholder="Ingresa un número"></input>
                <label className="w-60 mx-auto text-center mt-4" >Segundo numero</label>
                <input className="border-4 w-60 mx-auto" type="number" placeholder="Ingresa un número"></input>
                <button className="mx-auto my-4 border-2 w-24 justify-center bg-blue-600 rounded-xl">Calcular</button>
                <hr/>
           </div>
        </React.Fragment>
    );
}

export { Calculadora };