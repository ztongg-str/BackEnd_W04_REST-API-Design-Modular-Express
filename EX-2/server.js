import express from 'express';
import { articles } from './models/data.js';
import router from './routes/userRoutes.js';
import { logger } from './middleware/logger.js';
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 3000;

app.use(express.json())
app.use(logger)
app.use(router)

app.get('/', (req, res) => {
  res.send('News API is running');  
});


// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});