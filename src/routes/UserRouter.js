import express from 'express';
import UserController from '../controllers/UserController.js';
const router = express.Router();

router.post('/sign-up', UserController.CreateUser);
router.post('/sign-in', UserController.LoginUser);
router.put('/update-user/:id', UserController.UpdateUser);

export default router;
