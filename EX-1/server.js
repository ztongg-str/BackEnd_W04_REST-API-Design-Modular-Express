import express from 'express';
import logger from './middleware/logger.js';
import router from './routes/userRoutes.js';
const app = express();
app.use(express.json());


// Logger middleware
app.use(logger)

//router
app.use('/', router)

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
