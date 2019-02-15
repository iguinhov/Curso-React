import React, { Component } from "react";
import './App.css';
import { stat } from "fs";

class CalculoIMC extends Component {

    static defaultProps = {
        limite: 100
    }

    constructor(props){
        super(props);

        this.state = {
            valorImc: '',
            valorPeso: '',
            valorAltura: ''
        }

        //é necessário vincular o this no construtor que se refere ao componente 
        //a função usada como evento
        //isso porque no interior da função o this se refere a window 
        //e não ao componente propriamente dito
        this.changeAltura = this.changeAltura.bind(this); 
        this.changePeso = this.changePeso.bind(this);
        this.changeData = this.changeData.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    changePeso(event){
        const elemento = event.target //o próprio elemento
        this.setState({
            valorPeso: elemento.value
        });
    }

    changeAltura(event){
        const elemento = event.target
        this.setState({ //QUANDO SETSTATE É CHAMADO ELE FAZ A ATUALIZAÇÃO DO COMPONENTE, só usar em evento
            valorAltura: elemento.value
        })
    }

    changeData(event){
        //const elemento = event.target
        const {target} = event;
        const {name, value} = target;

        this.setState({
            [name]: value
        })
    }

    calcular(){
        const dados = this.state;
        let peso = dados.valorPeso;
        let altura = dados.valorAltura;
        
        let imc = peso / Math.pow(altura, 2);

        //valor máximo para o imc
        if(imc > this.props.limite){
            imc = this.props.limite
        }

        this.setState({
            valorImc: imc
        })
    }

    render() {
        const {state, props} = this //ES6
        return (
            <div className="borda largura">
                <h2>
                    Calculo do IMC
                </h2>
                <div>
                    <input type='text' 
                        name="valorAltura"
                        value={state.valorAltura}
                        onChange={this.changeData} placeholder='altura'/>
                    <br/>
                    <input type='text'
                        name="valorPeso"
                        value={state.valorPeso}
                        onChange={this.changePeso} placeholder='peso'/>
                    <br/>
                    <button type='button' onClick={this.calcular}>Calcular</button>
                    <br/>
                    <div>
                        <strong>Seu IMC: {state.valorImc} </strong>
                    </div>
                    <div>
                        limite: {props.limite}
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculoIMC;