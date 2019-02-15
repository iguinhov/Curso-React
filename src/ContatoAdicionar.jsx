import React, { Component } from "react";
import { ContatosService } from './ContatosService';

class ContatoAdicionar extends Component{

    static defaultProps = {
        onAdicionar: () => {}
    }

    constructor(props){
        super(props)

        this.state = {
            contato: {}
        }

        this.adicionar = this.adicionar.bind(this);
        this.changeData = this.changeData.bind(this);
    }


    changeData(event){
        const {target} = event;
        const {name, value} = target;
        const {contato} = this.state

        // let teste = contato
        // teste.name = value;
        var teste = contato

        // teste = {
        //     [name]: value
        // }

        teste[name] = value

        this.setState({
            contato:teste
        })
    }


    adicionar(){
        const {contato} = this.state

        this.props.onAdicionar(this.state.contato);
    }

    render(){
        const {props, state} = this,
              {contato} = state

        return(
            <div className="linha bordaSalario">
                <div>
                    <h2>Cadastro</h2>
                </div>
                <div>
                    <span><strong>Imagem: </strong> </span>
                        <input type="text" 
                        name="imagem"
                        value={contato.imagem}
                        onChange={this.changeData}
                        />
                    <br/>
                    <span><strong>Nome: </strong> </span>
                        <input type="text" 
                         name="nome"
                         value={contato.nome}
                         onChange={this.changeData}
                        />
                    <br/>
                    <span><strong>Telefone: </strong> </span>
                        <input type="text" 
                         name="telefone"
                         value={contato.telefone}
                         onChange={this.changeData}
                        />
                </div>
                <div className="centraliza">
                    <button type="button" onClick={this.adicionar} >Novo</button>
                </div>
            </div>
        )
    }
}

export default ContatoAdicionar;