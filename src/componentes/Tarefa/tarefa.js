import React from 'react';
import './tarefa.css';

class Tarefa extends React.Component {
    render() {
        return (
            <div className = "tarefa">
                <span>{this.props.tituloTarefa}</span>
                
                <span onClick = {this.props.aoClicar} className = {this.props.classeStatus}>
                  {this.props.tituloStatus}
                </span>

            </div>
        );
    }

}

export default Tarefa;