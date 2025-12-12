# To-Do App

A full-stack To-Do application with a Node.js/Express backend and frontend interface. This application allows users to create, read, update, and delete tasks with a clean and intuitive interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Database Schema](#database-schema)
- [Development](#development)
- [Author](#author)

## ✨ Features

- ✅ **Create Tasks** - Add new to-do items with title and description
- ✅ **View Tasks** - Get all tasks or fetch a specific task by ID
- ✅ **Update Tasks** - Modify task details and completion status
- ✅ **Delete Tasks** - Remove tasks from the database
- ✅ **Input Validation** - Comprehensive client-side and server-side validation
- ✅ **Error Handling** - Centralized error handling middleware
- ✅ **RESTful API** - Clean and intuitive API design

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB
- **ODM**: Mongoose (v9.0.1)
- **Middleware**:
  - CORS (Cross-Origin Resource Sharing)
  - dotenv (Environment variables)
  - nodemon (Development hot reload)

### Frontend
- Not implemented yet

## 📁 Project Structure

```
To-Do-App/
├── Backend/
│   ├── controllers/
│   │   └── todoController.js      # Request handlers for CRUD operations
│   ├── middlewares/
│   │   └── errorHandler.js        # Centralized error handling
│   ├── models/
│   │   └── todoModel.js           # MongoDB schema definition
│   ├── routes/
│   │   └── todoRoutes.js          # API route definitions
│   ├── .env                       # Environment configuration
│   ├── package.json               # Dependencies and scripts
│   └── server.js                  # Application entry point
└── Frontend/
    └── (Frontend files to be added)
```

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahfujr403/Todo-App.git
   cd To-Do-App
   ```

2. **Install dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create or update .env file
   PORT=5000
   
   ```
### Development Mode (with hot reload)
```bash
cd Backend
npm run dev
```

### Production Mode
```bash
cd Backend
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT)

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api/todo
```

### Endpoints

#### 1. Get All Todos
- **Method**: `GET`
- **URL**: `/api/todo`
- **Response**:
  ```json
  {
    "success": true,
    "count": 5,
    "data": [
      {
        "_id": "...",
        "title": "Task 1",
        "description": "Description here",
        "isCompleted": false,
        "createdAt": "2024-12-13T...",
        "updatedAt": "2024-12-13T..."
      }
    ]
  }
  ```

#### 2. Get Todo by ID
- **Method**: `GET`
- **URL**: `/api/todo/:id`
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "_id": "...",
      "title": "Task 1",
      "description": "Description here",
      "isCompleted": false
    }
  }
  ```

#### 3. Create Todo
- **Method**: `POST`
- **URL**: `/api/todo`
- **Body**:
  ```json
  {
    "title": "New Task",
    "description": "Task description (minimum 5 characters)",
    "isCompleted": false
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Task created successfully",
    "data": {
      "id": "...",
      "title": "New Task",
      "description": "Task description",
      "isCompleted": false,
      "createdAt": "2024-12-13T..."
    }
  }
  ```

#### 4. Update Todo
- **Method**: `PUT`
- **URL**: `/api/todo/:id`
- **Body**:
  ```json
  {
    "title": "Updated Task",
    "description": "Updated description",
    "isCompleted": true
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task updated successfully",
    "data": {
      "id": "...",
      "title": "Updated Task",
      "description": "Updated description",
      "isCompleted": true
    }
  }
  ```

#### 5. Delete Todo
- **Method**: `DELETE`
- **URL**: `/api/todo/:id`
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task deleted successfully",
    "data": {
      "id": "..."
    }
  }
  ```

## ⚠️ Error Handling

The application implements centralized error handling with consistent error responses:

### Error Response Format
```json
{
  "success": false,
  "message": "Error description"
}
```

### Common Errors

| Status Code | Error | Message |
|-------------|-------|---------|
| 400 | Validation Error | Title must be at least 3 characters |
| 400 | Validation Error | Description must be at least 5 characters |
| 400 | Validation Error | isCompleted must be a boolean |
| 404 | Not Found | Route not found |
| 404 | Not Found | Task not found |
| 500 | Server Error | Internal Server Error |

### Input Validation Rules

**For Creating/Updating a Todo:**
- **Title**: Required, must be a string with at least 3 characters
- **Description**: Required, must be a string with at least 5 characters
- **isCompleted**: Required, must be a boolean (true/false)

## 📊 Database Schema

### Todo Model

```javascript
{
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 👨‍💻 Development

### Project Scripts

```bash
# Start development server with hot reload
npm run dev

# Start production server
npm start

# Run tests (not yet configured)
npm test
```

### File Descriptions

- **server.js** - Express application setup, MongoDB connection, middleware configuration
- **todoController.js** - Business logic for all CRUD operations with input validation
- **todoModel.js** - MongoDB schema definition for Todo items
- **todoRoutes.js** - Route definitions for all API endpoints
- **errorHandler.js** - Centralized error handling middleware

## 🔗 Git Information

- **Repository**: Todo-App
- **Owner**: mahfujr403
- **Current Branch**: dev
- **Main Branch**: main

## 📝 Author

**Md. Mahfujur Rahman**

## 📄 License

ISC

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

## 📧 Support

For support, please open an issue on the GitHub repository.

---

**Last Updated**: December 12, 2025
