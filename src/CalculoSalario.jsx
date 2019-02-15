import React, { Component } from "react";
import './App.css'
import { stat } from "fs";

class CalculoSalario extends Component{

    constructor(props){
        super(props)

        this.state = {
            valorSalarioBruto: '',
            valorImposto : '',
            valorSalarioLiquido: ''
        }

        this.changeSalarioBruto = this.changeSalarioBruto.bind(this);
        this.calcularImposto = this.calcularImposto.bind(this);
    }

    changeSalarioBruto(event){
        const {target} = event
        this.setState({
            valorSalarioBruto: target.value,
            valorImposto: '',
            valorSalarioLiquido: ''
        })
    }

    calcularImposto(){
        const valores = this.state
        let salarioBruto = valores.valorSalarioBruto

        if(salarioBruto == ''){
            salarioBruto = 1000
        }

        let imposto = 0
        let salarioLiquido = salarioBruto

        if(salarioBruto > 1000){
            imposto = parseInt(salarioBruto) * 0.15
            salarioLiquido = parseInt(salarioBruto) - imposto
        }

        this.setState({
            valorSalarioBruto: salarioBruto,
            valorImposto: imposto,
            valorSalarioLiquido: salarioLiquido
        })

    }

    render(){
        const {state, props} = this
        return(
            <div className="bordaSalario largura">
                <h2>Calculo Salario</h2>
                <div>
                    <input type="text" onChange={this.changeSalarioBruto} placeholder="salario"/>
                    <br/>
                    <button type="button" onClick={this.calcularImposto} >Calcular</button>
                    <br/>
                    <br/>
                    <div>
                        <strong>Salário Bruto: {state.valorSalarioBruto} </strong>
                        <br/>
                        <strong>Imposto: {state.valorImposto} </strong>
                        <br/>
                        <strong>Salário Liquido: {state.valorSalarioLiquido} </strong>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculoSalario;
