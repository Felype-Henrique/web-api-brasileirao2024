# Tabela Brasileirão Série A 2024

Este projeto é uma Web API desenvolvida em Node.js e Express para gerenciar a tabela de times da Série A do Campeonato Brasileiro de 2024. A API permite realizar operações CRUD (Create, Read, Update, Delete) sobre os dados dos times.

## Funcionalidades

- **Listar todos os times:** Retorna uma lista de todos os times presentes na tabela.
- **Consultar time por sigla:** Permite buscar informações de um time específico usando sua sigla.
- **Adicionar novo time:** Permite adicionar um novo time à tabela.
- **Atualizar informações de um time:** Permite atualizar os dados de um time existente.
- **Remover um time:** Permite remover um time da tabela.

## Endpoints

- `GET /` - Retorna a tabela completa dos times.
- `GET /:sigla` - Retorna as informações de um time específico pela sigla.
- `POST /` - Adiciona um novo time à tabela.
- `PUT /:sigla` - Atualiza as informações de um time existente pela sigla.
- `DELETE /:sigla` - Remove um time da tabela pela sigla.

## Validação

As validações de dados são realizadas utilizando os modelos `modeloTime` e `modeloAtualizacaoTime`, definidos no arquivo `validacao.js`.

```javascript
import Joi from "joi";

export const modeloTime = Joi.object(
    {
        nome: Joi.string().min(4).required(),
        sigla: Joi.string().length(3).required(),
        pontos: Joi.number().default(0),
        vitorias: Joi.number().default(0),
        empates: Joi.number().default(0),
        derrotas: Joi.number().default(0),
        golsMarcados: Joi.number().default(0),
        golsSofridos: Joi.number().default(0),
        saldoGols: Joi.number().default(0)
    }
);

export const modeloAtualizacaoTime = Joi.object(
    {
        nome: Joi.string().min(4),
        sigla: Joi.string().length(3),
        pontos: Joi.number(),
        vitorias: Joi.number(),
        empates: Joi.number(),
        derrotas: Joi.number(),
        golsMarcados: Joi.number(),
        golsSofridos: Joi.number(),
        saldoGols: Joi.number(),
    }
).min(1);

#Tecnologias utilizadas

-Express
-Joi

#Como executar

```bash

#1. Clonar repositório:
$ git clone https://github.com/seu-usuario/seu-repositorio.git

#2. Instale as dependências:
$ npm install

#3. Execute a aplicação:
$ node app.js

#4. Acesse a aplicação em http://localhost:300