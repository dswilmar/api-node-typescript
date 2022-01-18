import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {
        
        const name = request.body.name;
        const email = request.body.email;
        
        return response.json({
            mensagem: {
                name,
                email
            }
        });
    }
}

export { CreateUserController }