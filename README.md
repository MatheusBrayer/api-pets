# 🐾 API Pets

API REST desenvolvida para gerenciamento de pets, permitindo realizar operações completas de cadastro, consulta, atualização e exclusão de registros.

O projeto foi criado com o objetivo de praticar conceitos de backend utilizando Node.js e Express, simulando uma API real para integração com aplicações web ou mobile.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- Express.js  
- JavaScript  
- Postman  

---

## 📌 Funcionalidades

- ✅ Cadastro de novos pets  
- ✅ Listagem de todos os pets  
- ✅ Busca de pet por ID  
- ✅ Atualização de dados  
- ✅ Exclusão de registros  
- ✅ Validação de dados com middlewares  
- ✅ Tratamento de erros nas rotas  

---

## 🌐 Deploy

A API está disponível em produção:

👉 https://api-pets-b7t4.onrender.com  

---

## 📄 Documentação

A documentação completa da API pode ser acessada via Postman:

👉 https://documenter.getpostman.com/view/46945043/2sBXwjxEqC  

---

## ▶️ Exemplos de uso

### 🔍 Listar todos os pets
```bash
GET https://api-pets-b7t4.onrender.com/pets
```

### 🔍 Buscar pet por ID

```bash
GET https://api-pets-b7t4.onrender.com/pets/:id
```

### ➕ Criar novo pet

```bash
POST https://api-pets-b7t4.onrender.com/pets
```

Exemplo de body:

```json
{
  "name": "Rex",
  "breed": "Labrador",
  "age": 3,
  "tutor": "João"
}
```

***

### ✏️ Atualizar pet

```bash
PUT https://api-pets-b7t4.onrender.com/pets/:id
```

***

### ❌ Deletar pet

```bash
DELETE https://api-pets-b7t4.onrender.com/pets/:id
```

***

## ⚙️ Como rodar o projeto localmente

```bash
# Clonar repositório
git clone https://github.com/MatheusBrayer/api-pets.git

# Entrar na pasta
cd api-pets

# Instalar dependências
npm install

# Rodar servidor
npm run dev
```

***

## 📂 Estrutura do projeto

```
src/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 ├── data/
 └── app.js
```

***

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Arquitetura REST
* Manipulação de requisições HTTP
* Organização de código no backend
* Criação de middlewares
* Validação e tratamento de erros
* Testes de API com Postman

***



