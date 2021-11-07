import React, { Component } from 'react';

class Botao extends Component{
    render(){
        return(
            <div>
                <button type="button" className="btn btn-warning" onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    };
};

export default Botao;
