# Inscrição de Eventos

Aplicação para inscrição em eventos, com frontend em React (Vite + Tailwind) e backend em Node.js (Express + SQLite).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 22.5 ou superior (o backend usa o módulo nativo `node:sqlite`)
- npm

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/WilliamKunzler/inscricao_eventos.git
cd inscricao_eventos
```

### 2. Backend

```bash
cd backend
npm install
npm start
```

O servidor ficará disponível em `http://localhost:3000`. O banco SQLite e a tabela são criados automaticamente na primeira execução.


### 3. Frontend

Em outro terminal, a partir da raiz do projeto:

```bash
cd frontend
npm install
npm run dev
```

O frontend ficará disponível em `http://localhost:5173`.

> **Sobre o arquivo `.env`:** os arquivos `.env` foram removidos do `.gitignore` e estão no repositório de propósito, para que o projeto rode sem nenhuma configuração extra. Eles contêm apenas valores não sensíveis (como a porta e o caminho do banco). **Na prática, a boa prática é não subir arquivos `.env` para o repositório**, pois eles costumam guardar segredos (senhas, chaves de API, tokens). O correto seria mantê-los no `.gitignore` e fornecer apenas um `.env.example` como modelo.


## Endpoints da API

| Método | Rota              | Descrição                  |
| ------ | ----------------- | -------------------------- |
| GET    | `/inscricoes`     | Lista os inscritos         |
| POST   | `/inscricoes`     | Cria uma nova inscrição    |
| DELETE | `/inscricoes/:id` | Remove uma inscrição       |
