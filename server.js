import express from 'express';
import connectDB from './config/db.js';
import adminRoutes from './routes/admin_routes.js';
import userRoutes from './routes/user_routes.js';
import registerRoutes from './routes/register_routes.js';


const app = express();
const port = 8080;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', registerRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});