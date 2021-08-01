import './App.css';
import '@fontsource/roboto';
import { Container , Typography} from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';


function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" aling="center" component="h1">Formulario de Cadastro</Typography>
      <FormularioCadastro />
    </Container>

  );
}

export default App;
