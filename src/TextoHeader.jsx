import React, {Component} from "react";
import './App.css'

class TextoHeader extends Component{
    render(){
        return(
            <div className="borda">
                <h1 className="centraliza">
                    {this.props.conteudo}
                </h1>
            </div>
        );
    }
}

export default TextoHeader;