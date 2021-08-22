import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{if(etapaAtual === formularios.length-1) aoEnviar(dadosColetados);})

    const formularios = [
        <DadosUsuario aoEnviar={colertarDados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={colertarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={colertarDados} validacoes={validacoes} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    function colertarDados(dados){
        setDados({...dadosColetados, ...dados}); 
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }
   
    return <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Endereço</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
    </>;
}

export default FormularioCadastro;