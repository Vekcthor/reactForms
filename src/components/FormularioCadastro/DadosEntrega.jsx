import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
    return (
        <form>
            <TextField id="cep" label="CEP" type="number" margin="normal" variant="outlined" required />
            <TextField id="endereco" label="endereço" type="text" margin="normal" variant="outlined" fullWidth required />
            <TextField id="numero" label="Numero" type="number" margin="normal" variant="outlined" required />
            <TextField id="estado" label="Estado" type="text" margin="normal" variant="outlined" fullWidth required />
            <TextField id="cidade" label="Cidade" type="text" margin="normal" variant="outlined" fullWidth required />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega;