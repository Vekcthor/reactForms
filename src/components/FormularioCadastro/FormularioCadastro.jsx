import React from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" margin="normal" variant="outlined" fullWidth/>
            
            <TextField id="sobrenome" label="Sobrenome" margin="normal" variant="outlined" fullWidth />

            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
            <FormControlLabel
        control={
            <Switch
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'Promocoes' }}
        defaultChecked
      /> }
      label="Promoções"/>
<FormControlLabel
        control={
<Switch
        color="primary"
        name="checked"
        inputProps={{ 'aria-label': 'Noviidades' }}
        defaultChecked
      />
        }
        label="Noviidades"/>

            <Button variant="contained" color="primary" type="submit" >Cadastrar</Button>
        </form>)
}

export default FormularioCadastro;