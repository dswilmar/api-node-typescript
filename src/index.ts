import express from 'express';
import router  from './routes';
import 'reflect-metadata';
import createConnection from './database';

createConnection();

const server = express();
server.use(express.json());
server.use(router);

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 http://localhost:3000');
});