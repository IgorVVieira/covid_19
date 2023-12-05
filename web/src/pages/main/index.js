import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Main extends Component {

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

    const patientNorte = patients.filter((patient) => {
      return patient.region.name === 'NORTE';
    });

    const patientCentro = patients.filter((patient) => {
      return patient.region.name === 'CENTRO-OESTE';
    });

    const patientNordeste = patients.filter((patient) => {
      return patient.region.name === 'NORDESTE';
    });

    const patientSudeste = patients.filter((patient) => {
      return patient.region.name === 'SUDESTE';
    });

    const patientSul = patients.filter((patient) => {
      return patient.region.name === 'SUL';
    });

    const patientObito = patients.filter((patient) => {
      return patient.health_condition === 'ÓBITO';
    });

    const patientRecuperado = patients.filter((patient) => {
      return patient.health_condition === 'CURADO';
    });

    const patientTratamento = patients.filter((patient) => {
      return patient.health_condition === 'EM TRATAMENTO';
    });

    const patientHomem = patients.filter((patient) => {
      return patient.gender === 'MASCULINO';
    });

    const patientMulher = patients.filter((patient) => {
      return patient.gender === 'FEMININO';
    });

    const criancas = patients.filter((patient) => {
      return patient.age < 18;
    });

    const adultos = patients.filter((patient => {
      return patient.age >= 18;
    }));

    const idosos = patients.filter((patient => {
      return patient.age >= 65;
    }));

    return (
      <main>
        <div className="casos">
          <h2>Número geral de casos no Brasil: <strong>{patients.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos de óbito: <strong>{patientObito.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos Recuperados: <strong>{patientRecuperado.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em tratamento: <strong>{patientTratamento.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em Homens: <strong>{patientHomem.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em Mulheres: <strong>{patientMulher.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em crianças: <strong>{criancas.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em Adultos: <strong>{adultos.length} Casos.</strong></h2>
          <br />
          <br />

          <h2>Casos em idosos: <strong>{idosos.length} Casos.</strong></h2>
          <br />
          <br />
          <Link className="new-patient" to={`/patients`}>Cadastrar novo Paciente</Link>
        </div>

        <div className="casos">
          <h2>Casos da Região Norte: <strong>{patientNorte.length}</strong></h2>
          <br />

          <br />
          <h2>Casos da Região Centro-Oeste: <strong>{patientCentro.length}</strong></h2>
          <br />

          <br />
          <h2>Casos da Região Nordeste: <strong>{patientNordeste.length}</strong></h2>
          <br />

          <br />
          <h2>Casos da Região Sudeste: <strong>{patientSudeste.length}</strong></h2>
          <br />

          <br />
          <h2>Casos da Região Sul: <strong>{patientSul.length}</strong></h2>
          <br />
          <Link className="new-patient" to={`/allPatients`}>Ver lista geral</Link>
        </div>

      </main>
    );
  }
}

export default Main;

