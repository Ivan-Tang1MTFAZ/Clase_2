import React,{Component} from 'react';

class Calculadora extends Component{
    constructor(props){
        super(props);
    }
    //Fin del cosntructor
    render(){
        return(
            <div>
                <form>
                    <p>Ingrese un número
                        <input type="number" name="valor1"/>
                    </p>
                    <p>Ingrese un número
                        <input type="number" name="valor2"/>
                    </p>
                    <p><button type="submit">Suma</button></p>
                </form>
            </div>
        );

    }

}//Fin clase
export default Calculadora;