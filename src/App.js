import React, { Component } from 'react';
import './App.css';
import TextoInfo from "./TextoInfo";
import TextoHeader from './TextoHeader';
import CalculoIMC from './CalculoIMC';
import CalculoSalario from './CalculoSalario';
import Contato from './Contato';
import { ContatosService } from './ContatosService';
import ContatoAdicionar from './ContatoAdicionar';

class App extends Component {

  constructor(props){
      super(props)

      this.state = {
        contatos: []
      }

      this.remover = this.remover.bind(this);
      this.adicionar = this.adicionar.bind(this);
  }

  async componentDidMount(){
    const contatos = await ContatosService.listar()
    this.setState({
      contatos
    })
  }

  remover(contatoId){
      const {contatos} = this.state,
            index = contatos.findIndex(contato => contato.id == contatoId)

      contatos.splice(index, 1);

      ContatosService.remover(contatoId);

      this.setState({
          contatos
      });
  }

  adicionar(contato){
      const {contatos} = this.state

      contatos.push(contato)

      ContatosService.adicionar(contato);

      this.setState({
        contatos
      })

  }

  render() {
    const {state} = this
    return (
      // React.createElement('div', { class: 'borda' }, React.createElement('h1', { class: 'centraliza' }, 'Introdução ao React JS'))
      // <div>
      //     <TextoHeader conteudo="conteudo do componente via classe"/>
      //    <TextoInfo conteudo = "conteudo via props"/>
      // </div>
      // <div>
      //     <CalculoIMC limite="80"/>
      //     <CalculoIMC />
      // </div>
      // <CalculoSalario/>
      // <Contato/>
      <div>
          <ContatoAdicionar onAdicionar={this.adicionar}/>
          <div className='borda'>
          <ul>
            <li>{this.state.contatos.map(contato => 
            <Contato
                  key={contato.id}
                  contato={contato}
                  onRemover={this.remover}
                  // imagem={contato.imagem}
                  // nome={contato.nome}
                  // telefone={contato.telefone}
              />)}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
