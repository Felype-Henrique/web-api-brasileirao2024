import { Console } from 'console';
import tabela2024 from './tabela.js';
import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(tabela2024);
});

app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toLocaleUpperCase();
    const time = tabela2024.find(infoTime => infoTime.sigla === siglaInformada);
    if (!time) { // undefined -> se comporta como false todo vez que exigimos 
        //o comportamento de boolean. -> se a variavel de time for 'undefined' ela vai se
        // comportar como false -> Consequentemente !time vai se comportar como verdadeir0.
        res.status(404).send('Não existe na série A do Brasileirão um time com essa sigla informada');
        return;
    }
    res.status(200).send(time);
});

app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toLocaleUpperCase();
    const timeSelecionado = tabela2024.find(t => t.sigla === siglaInformada);

    const campos = Object.keys(req.body);
    for (let campo of campos) {
        timeSelecionado[campo] = req.body[campo];
    }

    res.status(200).send(timeSelecionado);
})

app.post('/', (req, res) => {
    const novoTime = Object.keys(req.body);
    tabela2024.push(novoTime);
    res.status(200).send(novoTime);
});

app.listen(300, () => {
    console.log("Servidor rodando com sucesso")
});
