import { Todo } from "../models/todoModel.js";
import mongoose from "mongoose";

const todoControllers = {}

todoControllers.getAllTodos = async (req, res) => {
  try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            count : todos.length,
            data : todos
        });
  } catch (error) {
    res.status(500).json({ message: "There is a server side error fetching todos" }); 
  }
}

todoControllers.createTodo = async (req, res) => {
    try {
        const { title, description, isCompleted } = req.body;
        const newTodo = new Todo({ title, description, isCompleted });
        const savedTodo = await newTodo.save();
        res.status(201).json({
            success: true,
            message : "Task created successfully",
            data : {
                id : savedTodo._id,
                title : savedTodo.title,
                description : savedTodo.description,
                isCompleted : savedTodo.isCompleted,
                createdAt : savedTodo.createdAt
            }
        });
        
    } catch (error) {
        res.status(500).json({ message: "There is a server side error while creating todo" });    
    }
}

todoControllers.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false,
            message: "Task not found" 
        });
    }
    
    const todo = await Todo.findById(id);
    
    if (!todo) {
        return res.status(404).json({ 
            success: false,
            message: "Task not found" 
        });
    }

    res.status(200).json({
        success: true,
        data : {
            id : todo._id,
            title : todo.title,
            description : todo.description,
            isCompleted : todo.isCompleted,
        }
    });


  } catch (error) {
     res.status(500).json({ message: "There is a server side error while fetching todo by ID" });   
  }
}

todoControllers.updateTodo = async (req, res) => {
  try {
      const { id } = req.params;     
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ 
              success: false,
              message: "Task not found" 
          });
      }

      const { title, description, isCompleted } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
          id,
          { title, description, isCompleted },
          { new: true }
      );

      if (!updatedTodo) {
          return res.status(404).json({ 
              success: false,
              message: "Task not found" 
          });
      }

      res.status(200).json({
          success: true,
          message : "Task updated successfully",
          data : {
              id : updatedTodo._id,
              title : updatedTodo.title,
              description : updatedTodo.description,
              isCompleted : updatedTodo.isCompleted
          }
      });
    
  } catch (error) {
      res.status(500).json({ message: "There is a server side error while updating todo" });    
  }
}

todoControllers.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false,
            message: "Task not found" 
        });
    }

    const deletedTodo = Todo.findByIdAndDelete(id);
    if(!deletedTodo){
      return res.status(404).json({ 
            success: false,
            message: "Task not found" 
        });
    }

    res.status(200).json(
      {
        success: true,
        message: "Task deleted successfully"
      }
    )
  } catch (error) {
    res.status(500).json({ message: "There is a server side error while deleting todo" });
  }
}



export { todoControllers }