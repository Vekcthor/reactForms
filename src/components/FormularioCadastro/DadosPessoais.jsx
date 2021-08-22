import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promo, setPromo] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => { event.preventDefault(); if(possoEnviar()){aoEnviar({ nome, sobrenome, cpf, promo, novidades }); }}} >
            <TextField 
                value={nome} 
                onChange={(event) => { setNome(event.target.value); }} 
                onBlur={validarCampos}
                id="nome" 
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                name="nome"
                required 
                label="Nome" 
                margin="normal" 
                variant="outlined" 
                fullWidth 
            />

            <TextField value={sobrenome} onChange={(event) => { setSobrenome(event.target.value); }} id="sobrenome" required label="Sobrenome" margin="normal" variant="outlined" fullWidth />

            <TextField
                value={cpf}
                onChange={(event) => { setCpf(event.target.value); }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}
                name="cpf"
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
                        onChange={(event) => { setPromo(event.target.checked); }}
                    />}
                label="Promoções" />

            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        color="primary"
                        name="checked"
                        inputProps={{ 'aria-label': 'Novidades' }}
                        onChange={(event) => { setNovidades(event.target.checked); }}
                    />
                }
                label="Novidades" />

            <Button variant="contained" color="primary" type="submit" >Próximo</Button>
        </form>)
}

export default DadosPessoais;