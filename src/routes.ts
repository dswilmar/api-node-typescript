import { Router, Request, Response, response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({
        mensagem: 'DIO API'
    });
});

router.post('/usuarios', createUserController.handle);

export default router;