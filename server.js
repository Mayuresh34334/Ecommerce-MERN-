import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';


//configuring env
dotenv.config();

//configuring database
connectDB();

// rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

//setting port
const port = process.env.port || 8080;

//rest api
app.get('/',(req, res) => {
    res.send('<h1>Welcome to Ecommerce app (a MERN stack Project)</h1>');
});

//running listen
app.listen(port, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
});