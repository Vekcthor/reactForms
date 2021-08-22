import './App.css';
import '@fontsource/roboto';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import React, { Component } from 'react';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" aling="center" component="h1">Formulario de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
          <FormularioCadastro aoEnviar={submitForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function submitForm(dados) {
  console.log(dados);
}

export default App;
