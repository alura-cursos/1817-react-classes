import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>
              
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
