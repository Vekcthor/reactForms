import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({onSubmit,validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promo, setPromo] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form onSubmit={(event) => { event.preventDefault(); onSubmit({nome,sobrenome,cpf,promo,novidades}); }} >
            <TextField value={nome} onChange={(event)=> {setNome(event.target.value); } } id="nome" label="Nome" margin="normal" variant="outlined" fullWidth />

            <TextField value={sobrenome} onChange={(event)=> {setSobrenome(event.target.value); } } id="sobrenome" label="Sobrenome" margin="normal" variant="outlined" fullWidth />

            <TextField 
                value={cpf} 
                onChange={(event)=> {setCpf(event.target.value); } } 
                error = {!erros.cpf.valido}
                helperText = {erros.cpf.texto}
                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf)
                    setErros({cpf:ehValido})}}
                id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth
                type="number" 
            />
            
            <FormControlLabel
                control={
                    <Switch
                        checked={promo}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'Promocoes' }}
                        onChange={(event)=> {setPromo(event.target.checked); } }
                    />}
                label="Promoções" />
            
            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        color="primary"
                        name="checked"
                        inputProps={{ 'aria-label': 'Novidades' }}
                        onChange={(event)=> {setNovidades(event.target.checked); } }
                    />
                }
                label="Novidades" />

            <Button variant="contained" color="primary" type="submit" >Cadastrar</Button>
        </form>)
}

export default FormularioCadastro;