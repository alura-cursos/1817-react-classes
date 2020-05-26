import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.quantidadeDeNotas = [1, 2, 32, 4, 5];
  }
  render() {
    return (
      <ul>
        {this.quantidadeDeNotas.map((numero) => {
          return (
            <li>
              <div>{numero}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
