import createConnection from '../database';
import { CreateUserController } from './CreateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { getConnection } from 'typeorm';

describe('CreateUserController', () => {

    const createUserController = new CreateUserController();
    const response = makeMockResponse();

    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async() => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    it('Deve retornar status 201 quando o usuário for criado', async () => {
        
        const request = {
            body: {
                name: 'Algum Usuário',
                email: 'email@email.com'
            }            
        } as Request;
        
        await createUserController.handle(request, response);
        expect(response.state.status).toBe(201);        
    });

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const request = {
            body: {
                name: '',
                email: 'email@email.com'
            }            
        } as Request;

        await createUserController.handle(request, response);
        expect(response.state.status).toBe(400);
    });
});