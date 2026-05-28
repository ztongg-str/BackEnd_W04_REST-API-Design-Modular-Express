import { Router } from "express";
import * as userController from "../controllers/userController.js";

const router = Router()

// GET /users - List all users
router.get('/' , userController.getAllUsers)

// GET /users/:id - Get one user
router.get('/:id', userController.getUserByID)

// POST /users - Create new user
router.post('/' , userController.createUser)

// PUT /users/:id - Update user
router.put('/:id', userController.updateUser)

// DELETE /users/:id - Delete user
router.delete('/:id', userController.deleteUserbyID)

export default router;