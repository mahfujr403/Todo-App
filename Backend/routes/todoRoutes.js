import { Router } from "express";
import {todoControllers} from "../controllers/todoController.js";

const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = todoControllers;

const todoRouter = Router();

todoRouter.get('/', getAllTodos)
todoRouter.get('/:id', getTodoById);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

export {todoRouter};

