# Client Management API

A simple CRUD API built with **Node.js**, **Express**, and **PostgreSQL**.  
This project allows you to manage client data with endpoints for creating, reading, updating, deleting and searching clients.

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (https://node-postgres.com/) (node-postgres)
- dotenv
- CORS

---

## Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/leoangr/node-express-postgres-crud-api.git
cd node-express-postgres-crud-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create an .env file based on .env.example:

### 4. Setup PostgreSQL Table
```bash
CREATE TABLE clients_tb (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	job VARCHAR(50),
	rate NUMERIC(10, 2) DEFAULT 100.00,
	isActive BOOLEAN DEFAULT TRUE
);
```
### 5. Run the Development Server
```bash
npm run dev
```
Server will run at: http://localhost:3000

---

## API Endpoints

#### Get all clients

```bash
GET  /api/clients
```
#### Add new clients
```bash
POST  /api/clients/
```
Request Body:
```bash
{
    "name": "Sally",
    "email": "sally@gmail.com",
    "job": "Web Developer",
    "rate": 80,
    "isactive": "true"
}
```
#### Update client by ID

```bash
PUT /api/clients/:id
```
#### Delete client by ID
```bash
DELETE /api/clients/:id
```
#### Search client by Name, Email Or Job
```bash
GET /api/clients/search?q=keyword
```

---

## Author

Created by [leoanggoro.my.id](https://leoanggoro.my.id/)
