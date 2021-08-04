import './App.css';
import '@fontsource/roboto';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" aling="center" component="h1">Formulario de Cadastro</Typography>
        <FormularioCadastro onSubmit={submitForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function submitForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
