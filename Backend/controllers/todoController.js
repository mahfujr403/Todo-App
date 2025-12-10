const todoControllers = {}

todoControllers.getAllTodos = (req, res) => {
  res.send("Hello from controller")
}

todoControllers.createTodo = (req, res) => {
  res.send("Create Todo")
}

todoControllers.getTodoById = (req, res) => {
  res.send("Get Todo By ID")
}

todoControllers.updateTodo = (req, res) => {
  res.send("Update Todo")
}

todoControllers.deleteTodo = (req, res) => {
  res.send("Delete Todo")
}




export { todoControllers }