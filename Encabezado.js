import React ,{Component}from 'react';

class Encabezado extends Component {
    render(){

        return(
            <>
                {this.mostrarTitulo('Buenos Dias Soy Ivan')}
            </>
        );

    }//Fin render
    mostrarTitulo(tit){
         return(<h1>{tit}</h1>);//h1 con lo que se ponga en tit
    }
}//Fin clase
export default Encabezado;