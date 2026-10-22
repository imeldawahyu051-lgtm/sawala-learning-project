require('dotenv').config(); // Panggil file .env
const express = require('express');
const loggerMiddleware = require('./middlewares/logger.middleware');
const articlesRouter = require('./routes/articles.route');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware bawaan buat baca data JSON
app.use(express.json());

// 2. Middleware buatan kita (Logger)
app.use(loggerMiddleware);

// 3. Pasang Route utama
app.use('/api/articles', articlesRouter);

// 4. Jalankan Server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});