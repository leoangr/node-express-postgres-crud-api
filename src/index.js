import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes)

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});