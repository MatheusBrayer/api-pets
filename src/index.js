import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import {pets} from './pets.js';
import {randomUUID} from 'crypto';
import { validacaoPet } from './middlewares.js';

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


// Listar Pet por ID
//GET /pets/:id
app.get('/pets/:id', (req, res) => {
      try {
        const {id} = req.params;

        const pet = pets.find(item => item.id === id);
        if (!pet) {
            return res.status(404).send({
                ok: false,
                mensagem: 'Pet não encontrado'
            });
        }

        res.status(200).send({
            ok: true,
            mensagem: 'Pet encontrado com sucesso',
            dados: pet
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
app.post('/pets',[validacaoPet], (req, res) => {
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


// Atualizar pet por ID
//PUT /pets/:id
app.put("/pets/:id",[validacaoPet], (req, res) => {
    try {
        const {id} = req. params;
        const {nome, raca, idade, nomeTutor} = req.body;

        const pet = pets.find(item => item.id === id);
        if (!pet) {
            return res.status(404).send({
                ok: false,
                mensagem: 'Pet não encontrado'
            });
        }

        pet.nome = nome;
        pet.raca = raca;
        pet.idade = idade;
        pet.nomeTutor = nomeTutor;

        res.status(200).send({
            ok: true,
            mensagem: 'Pet atualizado com sucesso',
            dados: pets
        });

    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
})


// Deletar pet por ID
//DELETE /pets/:id
app.delete("/pets/:id", (req, res) => {
    try {
        //Entrada
        const {id} = req.params;

        const petIndex = pets.findIndex(item => item.id === id);

        //Processamento
        if (petIndex < 0) {
            return res.status(404).send({
                ok: false,
                mensagem: 'Pet não encontrado'
            });
        }

        pets.splice(petIndex, 1);

        //Resposta
        res.status(200).send({
            ok: true,
            mensagem: 'Pet deletado com sucesso',
            dados: pets
        });
        
    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
})