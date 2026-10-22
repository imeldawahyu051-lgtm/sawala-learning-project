// Data sementara (Simulasi Database)
let articles = [
  { id: 1, title: 'Belajar ExpressJS Dasar' },
  { id: 2, title: 'Membuat REST API Simpel' }
];

// READ: Ambil semua artikel
const getAllArticles = (req, res) => {
  res.status(200).json({ success: true, data: articles });
};

// CREATE: Tambah artikel baru
const createArticle = (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title
  };
  articles.push(newArticle);
  res.status(201).json({ success: true, message: 'Artikel berhasil dibuat', data: newArticle });
};

// DELETE: Hapus artikel berdasarkan ID
const deleteArticle = (req, res) => {
  const { id } = req.params;
  articles = articles.filter(item => item.id !== parseInt(id));
  res.status(200).json({ success: true, message: `Artikel ID ${id} berhasil dihapus` });
};

module.exports = {
  getAllArticles,
  createArticle,
  deleteArticle
};