import express from 'express';
import { loginForm, registerForm } from '../Controllers/userController.js';

const router = express.Router();

//Routing, Express supports the HTTP Methods: GET, POST, PATCH, DELETE
router.get('/login', loginForm);
router.get('/register', registerForm );


export default router;