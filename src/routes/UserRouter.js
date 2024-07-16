import express from 'express';
import UserController from '../controllers/UserController.js';
const router = express.Router();

router.post('/', UserController.CreateUser);

export default router;
