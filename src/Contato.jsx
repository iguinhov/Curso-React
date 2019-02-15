import React,{ Component } from "react";

class Contato extends Component{

    static defaultProps = {
        contato:{},
        onRemover: () => {}
    }

    constructor(props){
        super(props)

        this.remover = this.remover.bind(this);
    }

    remover(){
        this.props.onRemover(this.props.contato.id);
    }

    render(){
        const {props} = this,
              {contato} = props;

        return(
            <div className="linha bordaSalario">
                <div>
                    <button type='button' className='botao' onClick={this.remover}>X</button>
                </div>
                <div className="centraliza">
                    <img src={contato.imagem} width="100"/>
                </div>
                <div>
                    <span><strong>Nome: </strong> {contato.nome} </span>
                    <br/>
                    <span><strong>Telefone: </strong>{contato.telefone} </span>
                </div>
            </div>
        );
    }

}

export default Contato;