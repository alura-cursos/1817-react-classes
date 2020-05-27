import React, { Component } from "react";
import "./estilo.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escreva sua nota</p>
      </section>
    );
  }
}

export default CardNota;
