import { Router } from "express";
import { MysqlRepository } from "../repository/mysql.repository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controllers/user.controller";
import validateCreateUser from "../validators/user.validator";

const router = Router()

// Initialize Repositories
const mysqlRepository = new MysqlRepository();
const userUseCase = new UserUseCase(mysqlRepository);
const userController = new UserController(userUseCase);

// routes
router.post('/register', validateCreateUser, userController.registerUser)
router.post('/login', userController.loginUser)

router.get('/', userController.listUsers)
router.get('/:id', userController.getUser)
router.delete('/:id', userController.deleteUser)
router.patch('/:id', userController.updateUser)

export default router