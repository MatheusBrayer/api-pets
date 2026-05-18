import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());    


const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});


