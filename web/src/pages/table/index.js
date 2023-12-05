import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Table extends Component {
  state = {
    patients: [],
  }

  async componentDidMount() {
    const response = await api.get('/patients');

    this.setState({
      patients: response.data,
    });
  }

  render() {
    const { patients } = this.state;

    return (
      <div className="table">
        <Link className="voltar" to={'/'}>Voltar</Link>
        {patients.map(patient => (
          <article key={patient.id}>
            <strong>Nome: {patient.name}</strong>
            <p>Idade: {patient.age}</p>
            <p>CPF: {patient.cpf}</p>
            <p>Sexo: {patient.gender}</p>
            <p>Condição de Saúde: {patient.health_condition}</p>
            <p>Região: {patient.region.name}</p>
            <Link to={`patients/${patient.id}`}>Editar</Link>
          </article>
        ))};
      </div>
    );
  }
}

export default Table;