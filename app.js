import tabela2024 from './tabela.js';
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(tabela2024);
});

app.listen(300, () => {
    console.log("Servidor rodando com sucesso")
});
