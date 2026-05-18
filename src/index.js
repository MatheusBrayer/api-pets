import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import {pets} from './pets.js';
import {randomUUID} from 'crypto';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());    


const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});


// Listar Pets  
//GET /pets
app.get('/pets', (req, res) => {
    try {
        res.status(200).send({
            ok: true,
            mensagem: 'Pets listados com sucesso',
            dados: pets
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
});   

// Cadastrar novo pet
//POST /pets
app.post('/pets', (req, res) => {
    try {
        //Entrada de dados do corpo da requisição
        const {nome, raca, idade, nomeTutor} = req.body;

        //Processamento dos dados
        const novoPet = {
            id: crypto.randomUUID(),
            nome,
            raca,
            idade,
            nomeTutor
        };

        pets.push(novoPet);

        //Resposta
        res.status(201).send({
            ok: true,
            mensagem: 'Pet cadastrado com sucesso',
            dados: pets
        });


    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
});

