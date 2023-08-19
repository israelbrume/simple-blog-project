# Express Sequelize JWT API with Swagger Documentation
This project is a sample Node.js Express API application that demonstrates how to set up a user authentication system using JWT (JSON Web Tokens) and integrate Swagger for API documentation. It provides endpoints for user registration, login, and managing posts.

# Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)
- [License](#license)

# Prerequisites
- Node Version (>= 18)
- MySQL server (or equivalent, e.g., MariaDB)

# Getting Started
Clone this repository:

```bash
git clone https://github.com/israelbrume/simple-blog-project.git
cd simple-blog-project 
```
Install the required dependencies:

``` bash
npm install
```
# Project Structure
The project structure is organized as follows:
```
simple-blog-project/
    ├── controllers/
    ├── db/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── swagger/
    ├── .env.example
    ├── index.js
    └── package.json
```
    

controllers/: Contains route handler functions for handling API requests.
db/: Database configuration and connection setup.
middleware/: Middleware functions, e.g., authentication middleware.
models/: Sequelize model definitions for database tables.
routes/: API route definitions.
services/: Business logic services for handling data and operations.
swagger/: Swagger configuration files for API documentation.
.env.example: Example environment variables file.
index.js: Application entry point.
package.json: Project metadata and dependencies.

# Installation
Create a .env file based on the .env.example template and configure your environment variables.

Set up your MySQL database and update the database configuration in the .env file.

Run the database migration to create the required tables:

``` bash
npm run migrate
```

# Environment Variables
Update the .env file with the following variables:

```dotenv
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
JWT_SECRET=your_jwt_secret
```
# Running the Application
Start the application using the following command:

``` bash
npm run dev
```
The API will be accessible at http://localhost:3000.

# API Endpoints
 - User Registration: POST /api/users/register
 - User Login: POST /api/users/login
 - Create Post: POST /api/posts/create
 - Get All Posts: GET /api/posts
 - Get Posts by User ID: GET /api/posts/user/:userId
 - Update Post: PUT /api/posts/:postId
 - Delete Post: DELETE /api/posts/:postId

# Swagger Documentation
Access the Swagger API documentation at http://localhost:3000/api-docs.

# Authentication
The API uses JWT (JSON Web Tokens) for authentication. After successful login, the server generates a JWT token that should be included in the Authorization header for protected routes.

# Error Handling
The API handles errors with appropriate status codes and error messages. Validation errors are provided in detailed response messages.

# Dependencies
This project relies on the following main dependencies:

 - Express: Web application framework
 - Sequelize: ORM for database interactions
 - JWT: JSON Web Token for user authentication
 - Bcrypt: Hashing library for password encryption
 - Joi: Schema validation library
 - Swagger-jsdoc: Generates Swagger documentation from JSDoc comments

# License
This project is licensed under the MIT License