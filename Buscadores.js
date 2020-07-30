import React,{Component} from 'react';

class Buscadores extends Component{
render(){//Siempre debe de estar render
    const arreglo=[
        'http://www.facebook.com',
        'http://www.google.com',
        'http://www.amazon.com',
        'http://www.facebook.com'

    ];//variable, con un arreglo
    const Nombres=[
        'Facebook',
        'Google',
        'Amazon',
        'Facebook'

    ];//Arreglo, asignando
    return(
        <div>
            <h1>Arreglo de Mis sitios siendo las {new Date().toLocaleDateString()}</h1>
            <ul>
                <li><a href={arreglo[0]}>{Nombres[0]}</a></li>
                <li><a href={arreglo[1]}>{Nombres[1]}</a></li>
                <li><a href={arreglo[2]}>{Nombres[2]}</a></li>
                <li><a href={arreglo[3]}>{Nombres[3]}</a></li>
            </ul>
        </div>
    );//Se llama el arreglo en esa posición, arriba en el div
}//Fin render
}//Fin clase

export default Buscadores;