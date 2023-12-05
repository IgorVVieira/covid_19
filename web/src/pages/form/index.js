import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  let [gender, setGender] = useState('');
  let [health_condition, setHealth_condition] = useState('');
  let [region_id, setRegion] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const { data } = await api.get(`/patient/${id}`);

        setName(data.name);
        setAge(data.age);
        setCpf(data.cpf);
        setGender(data.gender);
        setHealth_condition(data.health_condition);
        setRegion(data.region_id);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    fetchData();
  }, []);

  async function handleSubmit(e) {
    if (id) {
      handleUpdate(e);
      return;
    }
    handleRegister(e);
  }

  async function handleRegister(e) {
    e.preventDefault();

    const userData = {
      name, age, cpf, gender, health_condition, region_id,
    };

    if (age < 0 || age > 101) {
      alert('Idade inválida');
    }
    else {
      try {
        const { data } = await api.post('/patients', userData);
        alert(`Usuário de cpf: ${data.cpf} cadastrado`);
      } catch (error) {
        alert('Erro ao cadastrar, tente novamente!');
      }
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const userData = {
      name, age, cpf, gender, health_condition, region_id,
    };

    if (age < 0 || age > 101) {
      alert('Idade inválida');
    }
    else {
      try {
        const { data } = await api.put(`/patient/${id}`, userData);
        alert(`Usuário de cpf: ${data.cpf} cadastrado`);
      } catch (error) {
        alert('Erro ao cadastrar, tente novamente!');
      }
    }
  }

  return (
    <div className="form-user">
      <Link to={'/'}>Voltar</Link>
      <h1>{id ? 'Editar' : 'Cadastrar'} paciente</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" required value={name}
          onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="Idade" required value={age}
          onChange={e => setAge(e.target.value)} />
        <input type="text" placeholder="CPF" required value={cpf}
          onChange={e => setCpf(e.target.value)} />

        <label for="gender">Sexo:</label>
        <select name="gender" value={gender} required onChange={e => setGender(e.target.value)}>
          <option value="MASCULINO">MASCULINO</option>
          <option value="FEMININO">FEMININO</option>
        </select>
        <br />

        <label for="health_condition">Estado de saúde:</label>
        <select name="health_condition" value={health_condition} required onChange={e => setHealth_condition(e.target.value)}>
          <option value="EM TRATAMENTO">EM TRATAMENTO</option>
          <option value="CURADO">CURADO</option>
          <option value="ÓBITO">ÓBITO</option>
        </select>
        <br />

        <label for="region_id">Região do paciente:</label>
        <select name="region_id" value={region_id} required onChange={e => setRegion(e.target.value)}>
          <option value="1">NORTE</option>
          <option value="2">CENTRO-OESTE</option>
          <option value="3">NORDESTE</option>
          <option value="4">SUDESTE</option>
          <option value="5">SUL</option>
        </select>
        <br />

        <button type="submit">{id ? 'Editar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
}

export default Form;