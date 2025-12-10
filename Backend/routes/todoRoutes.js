import { Router } from "express";
const todoRouter = Router();

todoRouter.get('/', getAllTodos)
todoRouter.get('/:id', getTodoById);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

export {todoRouter};

