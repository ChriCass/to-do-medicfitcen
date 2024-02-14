const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'to-do'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database...');
});

// Socket.IO
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  socket.on('update-tasks', () => {
    io.emit('tasks-updated');
  });
});

// CRUD Operations
app.get('/tasks', (req, res) => {
  const sql = 'SELECT * FROM tasks';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/tasks', (req, res) => {
  const task = { title: req.body.title, completed: req.body.completed };
  const sql = 'INSERT INTO tasks SET ?';
  db.query(sql, task, (err, result) => {
    if (err) throw err;
    io.emit('tasks-updated'); // Notifica a todos los clientes
    res.json({ message: 'Task added', id: result.insertId });
  });
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    io.emit('tasks-updated'); // Notifica a todos los clientes
    res.json({ message: 'Task deleted', id });
  });
});

// Ruta para actualizar el estado de una tarea
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const sql = 'UPDATE tasks SET completed = ? WHERE id = ?';
  db.query(sql, [completed, id], (err, result) => {
    if (err) throw err;
    io.emit('tasks-updated'); // Notifica a todos los clientes
    res.json({ message: 'Task updated', id, completed });
  });
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});
