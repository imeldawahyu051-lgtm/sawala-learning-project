// Middleware buat nyatet setiap ada yang akses server
const loggerMiddleware = (req, res, next) => {
  console.log(`[LOG] Ada request masuk: ${req.method} ke ${req.url}`);
  next(); // Lanjut ke proses berikutnya
};

module.exports = loggerMiddleware;